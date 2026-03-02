import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimetableService } from '../../../shared/services/timetable.service';
import { ClassService } from '../../../shared/services/class.service';
import { StaffAllotmentService } from '../../../shared/services/staff-allotment.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

export interface GeneratorSubjectRow {
  subject_id: number;
  subject_name: string;
  teacher_id: number;
  teacher_name: string;
  weekly_count: number;
  is_lab: boolean;
}

export interface GeneratedSlot {
  day_of_week: string;
  period_id: number;
  subject_id: number;
  teacher_id: number;
  subject_name: string;
  teacher_name: string;
}

@Component({
  selector: 'app-timetable-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, SearchSelectComponent],
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.scss']
})
export class TimetableListComponent implements OnInit {
  timetables: any[] = [];
  classes: any[] = [];
  sections: any[] = [];
  periods: any[] = [];
  isLoading = false;
  filterForm: FormGroup;
  selectedClass: any = null;
  selectedSection: any = null;
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Auto-generator state
  showGenerator = false;
  generatorForm: FormGroup;
  generatorSubjectRows: GeneratorSubjectRow[] = [];
  generatorAllotmentsLoading = false;
  generatedSlots: GeneratedSlot[] = [];
  generatorError: string | null = null;
  isGenerating = false;
  isSavingGenerated = false;
  generatorSaved = false;

  get classOptions(): { value: number | null; label: string }[] {
    const select: { value: number | null; label: string }[] = [{ value: null, label: 'Select Class' }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || '' }));
    return [...select, ...list];
  }

  get sectionOptions(): { value: number | null; label: string }[] {
    const all: { value: number | null; label: string }[] = [{ value: null, label: 'All Sections' }];
    const list = (this.sections || []).map((s) => ({ value: s.section_id, label: s.section_name || '' }));
    return [...all, ...list];
  }

  constructor(
    private fb: FormBuilder,
    private timetableService: TimetableService,
    private classService: ClassService,
    private staffAllotmentService: StaffAllotmentService,
    private academicYearService: AcademicYearService
  ) {
    this.filterForm = this.fb.group({
      class_id: [null],
      section_id: [null]
    });
    this.generatorForm = this.fb.group({
      class_id: [null],
      section_id: [null],
      use_allotments: [true],
      max_per_day: [6, []],
      max_per_week: [36, []]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
    this.loadPeriods();
    
    this.filterForm.get('class_id')?.valueChanges.subscribe(classId => {
      this.filterForm.patchValue({ section_id: null }, { emitEvent: false });
      this.sections = [];
      if (classId) {
        this.loadSections(classId);
        this.loadTimetable(classId);
      } else {
        this.timetables = [];
      }
    });

    this.filterForm.get('section_id')?.valueChanges.subscribe(sectionId => {
      const classId = this.filterForm.get('class_id')?.value;
      if (classId) {
        this.loadTimetable(classId, sectionId || undefined);
      }
    });

    this.generatorForm.get('class_id')?.valueChanges.subscribe(() => {
      this.generatorForm.patchValue({ section_id: null }, { emitEvent: false });
      this.generatorSubjectRows = [];
      this.generatedSlots = [];
      this.generatorError = null;
      if (this.generatorForm.get('use_allotments')?.value) {
        this.loadGeneratorAllotments();
      }
    });
    this.generatorForm.get('section_id')?.valueChanges.subscribe(() => {
      this.generatedSlots = [];
      this.generatorError = null;
      if (this.generatorForm.get('use_allotments')?.value) {
        this.loadGeneratorAllotments();
      }
    });
    this.generatorForm.get('use_allotments')?.valueChanges.subscribe((use) => {
      if (use) {
        this.loadGeneratorAllotments();
      } else {
        this.generatorSubjectRows = [];
      }
      this.generatedSlots = [];
      this.generatorError = null;
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  loadSections(classId: number): void {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.sections = response.data.sections || [];
        } else {
          this.sections = [];
        }
      },
      error: () => {
        this.sections = [];
      }
    });
  }

  loadPeriods(): void {
    this.timetableService.getPeriods().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.periods = response.data.periods || [];
        }
      }
    });
  }

  loadTimetable(classId: number, sectionId?: number): void {
    this.isLoading = true;
    const params: any = { class_id: classId };
    if (sectionId) {
      params.section_id = sectionId;
    }

    this.timetableService.getTimetable(params).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.timetables = response.data.timetable || [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading timetable:', error);
        this.isLoading = false;
      }
    });
  }

  getSubjectForPeriod(periodId: number, day: string): any {
    const tt = this.timetables.find(t =>
      t.period_id === periodId && t.day_of_week === day
    );
    if (tt && (tt.teacher_first_name != null || tt.teacher_last_name != null)) {
      return { ...tt, teacher_name: [tt.teacher_first_name, tt.teacher_last_name].filter(Boolean).join(' ') };
    }
    return tt;
  }

  toggleGenerator(): void {
    this.showGenerator = !this.showGenerator;
    if (this.showGenerator) {
      this.generatedSlots = [];
      this.generatorError = null;
      this.generatorSaved = false;
    }
  }

  loadGeneratorAllotments(): void {
    const classId = this.generatorForm.get('class_id')?.value;
    if (!classId) {
      this.generatorSubjectRows = [];
      return;
    }
    this.generatorAllotmentsLoading = true;
    const params: any = { class_id: classId };
    const sectionId = this.generatorForm.get('section_id')?.value;
    if (sectionId) {
      params.section_id = sectionId;
    }
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (academicYearId) => {
        if (academicYearId != null) {
          params.academic_year_id = academicYearId;
        }
        this.staffAllotmentService.getStaffAllotments(params).subscribe({
          next: (res) => {
            this.generatorAllotmentsLoading = false;
            let allotments = (res?.data?.allotments ?? res?.allotments ?? []) as any[];
            if (sectionId != null) {
              allotments = allotments.filter((a: any) => a.section_id == null || a.section_id === sectionId);
            }
            this.generatorSubjectRows = allotments.map((a: any) => ({
              subject_id: a.subject_id,
              subject_name: a.subject_name || '',
              teacher_id: a.teacher_id,
              teacher_name: a.staff_name || '',
              weekly_count: a.periods_per_week ? +a.periods_per_week : 5,
              is_lab: false
            }));
          },
          error: () => {
            this.generatorAllotmentsLoading = false;
            this.generatorSubjectRows = [];
          }
        });
      },
      error: () => {
        this.generatorAllotmentsLoading = false;
        this.generatorSubjectRows = [];
      }
    });
  }

  runGenerator(): void {
    const classId = this.generatorForm.get('class_id')?.value;
    const maxPerDay = Math.max(1, +(this.generatorForm.get('max_per_day')?.value) || 6);
    const maxPerWeek = Math.max(1, +(this.generatorForm.get('max_per_week')?.value) || 36);
    this.generatorError = null;
    this.generatedSlots = [];

    if (!classId) {
      this.generatorError = 'Please select a class.';
      return;
    }
    if (this.periods.length === 0) {
      this.generatorError = 'No periods defined. Please add periods first.';
      return;
    }
    if (this.generatorSubjectRows.length === 0) {
      this.generatorError = 'No subjects/teachers loaded. Use staff allotments for this class (and section) or add rows.';
      return;
    }

    const days = this.daysOfWeek;
    const periodsSorted = [...this.periods].sort((a, b) => (a.period_order ?? 0) - (b.period_order ?? 0));
    const slotGrid: Record<string, GeneratedSlot> = {};
    const teacherDaily: Record<number, Record<string, number>> = {};
    const teacherWeekly: Record<number, number> = {};

    const subjectAssignments = this.generatorSubjectRows
      .filter(r => r.weekly_count > 0)
      .map(r => ({ ...r }))
      .sort((a, b) => b.weekly_count - a.weekly_count);

    for (const sa of subjectAssignments) {
      let placed = 0;
      for (let i = 0; i < sa.weekly_count; i++) {
        let placedThis = false;
        for (const day of days) {
          if ((teacherWeekly[sa.teacher_id] ?? 0) >= maxPerWeek) break;
          if ((teacherDaily[sa.teacher_id]?.[day] ?? 0) >= maxPerDay) continue;
          for (const period of periodsSorted) {
            const key = `${day}_${period.period_id}`;
            if (slotGrid[key]) continue;
            slotGrid[key] = {
              day_of_week: day,
              period_id: period.period_id,
              subject_id: sa.subject_id,
              teacher_id: sa.teacher_id,
              subject_name: sa.subject_name,
              teacher_name: sa.teacher_name
            };
            if (!teacherDaily[sa.teacher_id]) teacherDaily[sa.teacher_id] = {};
            teacherDaily[sa.teacher_id][day] = (teacherDaily[sa.teacher_id][day] ?? 0) + 1;
            teacherWeekly[sa.teacher_id] = (teacherWeekly[sa.teacher_id] ?? 0) + 1;
            placedThis = true;
            placed++;
            break;
          }
          if (placedThis) break;
        }
        if (!placedThis) {
          this.generatorError = `Could not place all periods. Stuck at subject "${sa.subject_name}" (need ${sa.weekly_count} per week). Try increasing max periods per day/week or reduce weekly counts.`;
          this.generatedSlots = Object.values(slotGrid);
          return;
        }
      }
    }

    this.generatedSlots = Object.values(slotGrid);
  }

  getGeneratedSlot(periodId: number, day: string): GeneratedSlot | undefined {
    return this.generatedSlots.find(s => s.period_id === periodId && s.day_of_week === day);
  }

  saveGenerated(): void {
    const classId = this.generatorForm.get('class_id')?.value;
    const sectionId = this.generatorForm.get('section_id')?.value;
    if (!classId || this.generatedSlots.length === 0) return;

    this.isSavingGenerated = true;
    this.generatorSaved = false;
    const payload = {
      class_id: classId,
      section_id: sectionId || null,
      entries: this.generatedSlots.map(s => ({
        subject_id: s.subject_id,
        teacher_id: s.teacher_id,
        period_id: s.period_id,
        day_of_week: s.day_of_week,
        room_number: ''
      }))
    };

    this.timetableService.bulkCreateTimetable(payload).subscribe({
      next: (response) => {
        this.isSavingGenerated = false;
        if (response.status === 'success') {
          this.generatorSaved = true;
          this.generatedSlots = [];
          const classIdFilter = this.filterForm.get('class_id')?.value;
          if (classIdFilter === classId) {
            this.loadTimetable(classId, sectionId || undefined);
          }
        } else {
          this.generatorError = response.message || 'Failed to save timetable.';
        }
      },
      error: (err) => {
        this.isSavingGenerated = false;
        this.generatorError = err?.error?.message || 'Failed to save timetable.';
      }
    });
  }

  updateGeneratorWeeklyCount(row: GeneratorSubjectRow, value: number): void {
    row.weekly_count = Math.max(0, Math.min(12, value));
  }
}

