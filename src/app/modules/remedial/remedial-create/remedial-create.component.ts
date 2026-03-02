import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RemedialService } from '../../../shared/services/remedial.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { TeacherService } from '../../../shared/services/teacher.service';

@Component({
  selector: 'app-remedial-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './remedial-create.component.html',
  styleUrls: ['./remedial-create.component.scss']
})
export class RemedialCreateComponent implements OnInit {
  batchForm: FormGroup;
  isEditMode = false;
  batchId: number | null = null;
  isLoading = false;
  isSaving = false;
  
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private remedialService: RemedialService,
    private academicYearService: AcademicYearService,
    private teacherService: TeacherService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService
  ) {
    this.batchForm = this.fb.group({
      batch_name: ['', Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      schedule_time: ['', Validators.required],
      schedule_days: [''],
      teacher_id: [null],
      max_students: [null],
      start_date: [new Date().toISOString().split('T')[0], Validators.required],
      end_date: [''],
      status: ['active', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.batchId = +params['id'];
        this.loadBatch();
      }
    });
      this.teacherService.getTeachers(200).subscribe(r => {
    if (r.status === 'success' && r.data?.teachers) {
      this.teachers = r.data.teachers;
    }
  });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }

  loadAcademicYears(): void {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.batchForm.patchValue({ academic_year_id: id });
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

  loadBatch(): void {
    if (!this.batchId) return;
    
    this.isLoading = true;
    this.remedialService.getBatches({ batch_id: this.batchId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.batches?.length > 0) {
          // const batch = response.data.batches[0];
          const batch = response.data.batches.find((b: any) => b.batch_id === this.batchId);
            if (!batch) {
              console.warn('Batch with ID', this.batchId, 'not found in response');
              this.isLoading = false;
              return;
            }
          this.batchForm.patchValue({
            batch_name: batch.batch_name,
            academic_year_id: batch.academic_year_id,
            class_id: batch.class_id,
            subject_id: batch.subject_id,
            schedule_time: batch.schedule_time,
            schedule_days: batch.schedule_days,
            teacher_id: batch.teacher_id,
            max_students: batch.max_students,
            start_date: batch.start_date,
            end_date: batch.end_date,
            status: batch.status,
            description: batch.description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load batch details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.batchForm.invalid) {
      this.batchForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.batchForm.value;

    if (this.isEditMode && this.batchId) {
      this.remedialService.updateBatch({
        ...formData,
        batch_id: this.batchId
      }).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.success('Remedial batch updated successfully');
            this.router.navigate(['/app/remedial']);
          } else {
            this.toastService.error(response.message || 'Failed to update batch');
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error('Failed to update batch');
          this.isSaving = false;
        }
      });

    } else {
      formData.schedule_days = Array.isArray(formData.schedule_days) ? formData.schedule_days : [formData.schedule_days]; // ← fix
      this.remedialService.createBatch(formData).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.success('Remedial batch created successfully');
            this.router.navigate(['/app/remedial']);
          } else {
            this.toastService.error(response.message || 'Failed to create batch');
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error('Failed to create batch');
          this.isSaving = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/remedial']);
  }
}

