import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PeriodService } from '../../../shared/services/period.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-period-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './period-create.component.html',
  styleUrls: ['./period-create.component.scss']
})
export class PeriodCreateComponent implements OnInit {
  periodForm: FormGroup;
  isEditMode = false;
  periodId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private periodService: PeriodService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.periodForm = this.fb.group({
      period_name: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      period_order: [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.periodId = parseInt(params['id']);
        this.loadPeriod();
      }
    });
  }

  loadPeriod(): void {
    if (!this.periodId) return;
    
    this.periodService.getPeriod(this.periodId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const period = response.data.period;
          this.periodForm.patchValue({
            period_name: period.period_name,
            start_time: period.start_time,
            end_time: period.end_time,
            period_order: period.period_order
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.periodForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.periodForm.value;

    if (this.isEditMode && this.periodId) {
      this.periodService.updatePeriod(this.periodId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Period updated successfully', 'success');
            this.router.navigate(['/app/periods']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating period', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating period', 'error');
        }
      });
    } else {
      this.periodService.createPeriod(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Period created successfully', 'success');
            this.router.navigate(['/app/periods']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating period', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating period', 'error');
        }
      });
    }
  }
}

