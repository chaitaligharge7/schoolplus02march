import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamTypeService } from '../../../shared/services/exam-type.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-exam-type-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exam-type-create.component.html',
  styleUrls: ['./exam-type-create.component.scss']
})
export class ExamTypeCreateComponent implements OnInit {
  examTypeForm: FormGroup;
  isEditMode = false;
  examTypeId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private examTypeService: ExamTypeService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.examTypeForm = this.fb.group({
      exam_type_name: ['', Validators.required],
      exam_type_code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.examTypeId = parseInt(params['id']);
        this.loadExamType();
      }
    });
  }

  loadExamType(): void {
    if (!this.examTypeId) return;
    
    this.examTypeService.getExamType(this.examTypeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const examType = response.data.exam_type;
          this.examTypeForm.patchValue({
            exam_type_name: examType.exam_type_name,
            exam_type_code: examType.exam_type_code
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.examTypeForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.examTypeForm.value;

    if (this.isEditMode && this.examTypeId) {
      this.examTypeService.updateExamType(this.examTypeId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Exam type updated successfully', 'success');
            this.router.navigate(['/app/exam-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating exam type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating exam type', 'error');
        }
      });
    } else {
      this.examTypeService.createExamType(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Exam type created successfully', 'success');
            this.router.navigate(['/app/exam-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating exam type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating exam type', 'error');
        }
      });
    }
  }
}

