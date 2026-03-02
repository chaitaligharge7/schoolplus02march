import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudyProgressService } from '../../../shared/services/study-progress.service';
import { StudentService } from '../../../shared/services/student.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { TeacherService } from '../../../shared/services/teacher.service';

@Component({
  selector: 'app-study-progress-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './study-progress-create.component.html',
  styleUrls: ['./study-progress-create.component.scss']
})
export class StudyProgressCreateComponent implements OnInit {
  progressForm: FormGroup;
  isEditMode = false;
  progressId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  students: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  sections: any[] = [];
  teachers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private studyProgressService: StudyProgressService,
    private studentService: StudentService,
    private academicYearService: AcademicYearService,
    private teacherService: TeacherService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService
  ) {
    this.progressForm = this.fb.group({
      student_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      section_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      progress_date: [new Date().toISOString().split('T')[0], Validators.required],
      completion_percentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      chapters_completed: [null],
      chapters_total: [null],
      status: ['in_progress', Validators.required],
      test_scores:[''],
      remarks: ['']
    });
  }

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    if (params['id']) {
      this.isEditMode = true;
      this.progressId = +params['id'];
      this.loadProgress();
    }
  });

  this.loadStudents();
  this.loadAcademicYears();
  this.loadClasses();
  this.loadSubjects();
  this.loadTeachers();
  // Add this block to watch class selection
  this.progressForm.get('class_id')?.valueChanges.subscribe(classId => {
    if (classId) {
      this.loadSections(classId);
    } else {
      this.sections = [];
      this.progressForm.get('section_id')?.setValue(null);
    }
  });
}

  loadTeachers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
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
  loadStudents(): void {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.progressForm.patchValue({ academic_year_id: id });
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

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadProgress(): void {
    if (!this.progressId) return;

    this.isLoading = true;
    this.studyProgressService.getStudyProgress({ progress_id: this.progressId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.progress?.length > 0) {
          const progress = response.data.progress.find((p: any) => p.id === this.progressId);
          if (progress) {
            this.progressForm.patchValue({
              student_id: progress.student_id,
              academic_year_id: progress.academic_year_id,
              class_id: progress.class_id,
              section_id: progress.section_id,
              teacher_id: progress.teacher_id,
              subject_id: progress.subject_id,
              progress_date: progress.progress_date,
              completion_percentage: progress.completion_percentage,
              chapters_completed: progress.chapters_completed,
              chapters_total: progress.chapters_total,
              status: progress.status || 'in_progress',
              test_scores:progress.test_scores,
              remarks: progress.remarks
            });

            if (progress.class_id) {
              this.loadSections(progress.class_id);
            }
          } else {
            this.toastService.error('Progress record not found');
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load study progress details');
        this.isLoading = false;
      }
    });
  }

  calculateProgress(): void {
    const completed = this.progressForm.get('chapters_completed')?.value;
    const total = this.progressForm.get('chapters_total')?.value;
    if (completed && total && total > 0) {
      const percentage = Math.round((completed / total) * 100);
      this.progressForm.patchValue({ completion_percentage: percentage });
    }
  }

  onSubmit(): void {
    if (this.progressForm.invalid) {
      this.progressForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const formData = { ...this.progressForm.value };

    if (this.isEditMode && this.progressId) {
      // Add progress_id for backend
      formData.progress_id = this.progressId;

    this.studyProgressService.updateStudyProgress(this.progressId, this.progressForm.value).subscribe({      next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.success('Study progress updated successfully');
            this.router.navigate(['/app/study-progress']);
          } else {
            this.toastService.error(response.message || 'Failed to update progress');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error('Failed to update progress');
        }
      });
    } else {
      // Create new record
      this.studyProgressService.createStudyProgress(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.success('Study progress created successfully');
            this.router.navigate(['/app/study-progress']);
          } else {
            this.toastService.error(response.message || 'Failed to create progress');
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error('Failed to create progress');
        }
      });
    }
  }

private handleResponse(response: any) {
  this.isSaving = false;
  if (response.status === 'success') {
    this.toastService.success(`Study progress ${this.isEditMode ? 'updated' : 'created'} successfully`);
    this.router.navigate(['/app/study-progress']);
  } else {
    this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} progress`);
  }
}

private handleError() {
  this.isSaving = false;
  this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} progress`);
}

  cancel(): void {
    this.router.navigate(['/app/study-progress']);
  }
}

