import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WaterTdsService } from '../../../shared/services/water-tds.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-water-tds-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './water-tds-create.component.html',
  styleUrls: ['./water-tds-create.component.scss']
})
export class WaterTdsCreateComponent implements OnInit {
  readingForm: FormGroup;
  isEditMode = false;
  readingId: number | null = null;
  isLoading = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private waterTdsService: WaterTdsService,
    private toastService: ToastService
  ) {
    this.readingForm = this.fb.group({
      student_id: [null, Validators.required], // NEW
      measurement_date: [new Date().toISOString().split('T')[0], Validators.required], // renamed
      location: ['', Validators.required],
      tds_value: [null, [Validators.required, Validators.min(0)]],
      reading_date: [new Date().toISOString().split('T')[0], Validators.required],
      status: ['normal', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.readingId = +params['id'];
        this.loadReading();
      }
    });
  }

  loadReading(): void {
    if (!this.readingId) return;
    
    this.isLoading = true;
    this.waterTdsService.getWaterTdsReadings({ reading_id: this.readingId }).subscribe({
      next: (response) => {
      if (response.status === 'success' && response.data?.tds?.length > 0) {
  const reading = response.data.tds[0]; 

          this.readingForm.patchValue({
            student_id: reading.student_id ?? null, 
            location: reading.location,
            tds_value: reading.tds_value,
            reading_date: reading.measurement_date,
            status: reading.status || 'normal',
            remarks: reading.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load reading details');
        this.isLoading = false;
      }
    });
  }

 
onSubmit(): void {
  if (this.readingForm.invalid) {
    this.readingForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData = this.readingForm.value;
  const tdsValue = formData.tds_value;
  if (!formData.status || formData.status === 'normal') {
    if (tdsValue <= 500) {
      formData.status = 'normal';
    } else if (tdsValue <= 1000) {
      formData.status = 'high';
    } else {
      formData.status = 'critical';
    }
  }

  if (this.isEditMode && this.readingId) {
    this.waterTdsService.updateWaterTdsReading(this.readingId, formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Water TDS reading updated successfully');
          this.router.navigate(['/app/water-tds']);
        } else {
          this.toastService.error(response.message || 'Failed to update reading');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to update reading');
        this.isSaving = false;
      }
    });
  } 

  else {
    this.waterTdsService.createWaterTdsReading(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Water TDS reading created successfully');
          this.router.navigate(['/app/water-tds']);
        } else {
          this.toastService.error(response.message || 'Failed to create reading');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create reading');
        this.isSaving = false;
      }
    });
  }
}

  cancel(): void {
    this.router.navigate(['/app/water-tds']);
  }
}

