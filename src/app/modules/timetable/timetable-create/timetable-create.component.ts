import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimetableService } from '../../../shared/services/timetable.service';
import { ClassService } from '../../../shared/services/class.service';
import { TeacherService } from '../../../shared/services/teacher.service';

@Component({
  selector: 'app-timetable-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './timetable-create.component.html',
  styleUrls: ['./timetable-create.component.scss']
})
export class TimetableCreateComponent implements OnInit {
  timetableForm: FormGroup;
  isSaving = false;
  periods: any[] = [];
  classes: any[] = [];
  sections: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(
    private fb: FormBuilder,
    private timetableService: TimetableService,
    private classService: ClassService,
    private teacherService: TeacherService,
    public router: Router
  ) {
    this.timetableForm = this.fb.group({
      class_id: [null, Validators.required],
      section_id: [null],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      period_id: [null, Validators.required],
      day_of_week: ['Monday', Validators.required],
      room_number: ['']
    });
  }

  ngOnInit(): void {
    this.loadPeriods();
    this.loadClasses();
    this.loadTeachers();

    this.timetableForm.get('class_id')?.valueChanges.subscribe(classId => {
      if (classId) {
        this.loadSections(classId);
        this.loadSubjects(classId);
      } else {
        this.sections = [];
        this.subjects = [];
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
        }
      }
    });
  }

  loadSubjects(classId: number): void {
    this.classService.getClassSubjects(classId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({ limit: 1000 }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  onSubmit(): void {
    if (this.timetableForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.timetableForm.value;

    this.timetableService.createTimetable(formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.router.navigate(['/app/timetable']);
        }
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
}

