import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-academic-year-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './academic-year-create.component.html',
  styleUrls: ['./academic-year-create.component.scss']
})
export class AcademicYearCreateComponent implements OnInit {
  academicYearForm: FormGroup;
  isEditMode = false;
  academicYearId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private academicYearService: AcademicYearService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.academicYearForm = this.fb.group({
      academic_year_name: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      is_current: [0]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.academicYearId = parseInt(params['id']);
        this.loadAcademicYear();
      }
    });
  }

  loadAcademicYear(): void {
    if (!this.academicYearId) return;
    
    this.academicYearService.getAcademicYear(this.academicYearId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const year = response.data.academic_year;
          this.academicYearForm.patchValue({
            academic_year_name: year.academic_year_name,
            start_date: year.start_date,
            end_date: year.end_date,
            is_current: year.is_current
          });
        }
      }
    });
  }

  onCurrentYearChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.academicYearForm.patchValue({ is_current: target?.checked ? 1 : 0 });
  }

  onSubmit(): void {

    // ===== DATE VALIDATION ADDED =====
    const startDate = this.academicYearForm.get('start_date')?.value;
    const endDate = this.academicYearForm.get('end_date')?.value;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      this.toastService.show('Start date cannot be greater than End date', 'error');
      return;
    }
    // ===== END DATE VALIDATION =====

    if (this.academicYearForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.academicYearForm.value;

    if (this.isEditMode && this.academicYearId) {
      this.academicYearService.updateAcademicYear(this.academicYearId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Academic year updated successfully', 'success');
            this.router.navigate(['/app/academic-years']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating academic year', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating academic year', 'error');
        }
      });
    } else {
      this.academicYearService.createAcademicYear(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Academic year created successfully', 'success');
            this.router.navigate(['/app/academic-years']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating academic year', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating academic year', 'error');
        }
      });
    }
  }
}