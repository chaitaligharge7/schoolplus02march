import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../../shared/services/attendance.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-attendance-type-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './attendance-type-create.component.html',
  styleUrls: ['./attendance-type-create.component.scss']
})
export class AttendanceTypeCreateComponent implements OnInit {
  attendanceTypeForm: FormGroup;
  isEditMode = false;
  attendanceTypeId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendanceService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.attendanceTypeForm = this.fb.group({
      attendance_type_name: ['', Validators.required],
      attendance_type_code: [''],
      is_present: [0]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.attendanceTypeId = parseInt(params['id']);
        this.loadAttendanceType();
      }
    });
  }

  loadAttendanceType(): void {
    if (!this.attendanceTypeId) return;
    
    this.attendanceService.getAttendanceType(this.attendanceTypeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const type = response.data.attendance_type;
          this.attendanceTypeForm.patchValue({
            attendance_type_name: type.attendance_type_name,
            attendance_type_code: type.attendance_type_code || '',
            is_present: type.is_present
          });
        }
      }
    });
  }

  onPresentChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.attendanceTypeForm.patchValue({ is_present: target?.checked ? 1 : 0 });
  }

  onSubmit(): void {
    if (this.attendanceTypeForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.attendanceTypeForm.value;

    if (this.isEditMode && this.attendanceTypeId) {
      this.attendanceService.updateAttendanceType(this.attendanceTypeId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Attendance type updated successfully', 'success');
            this.router.navigate(['/app/attendance-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating attendance type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating attendance type', 'error');
        }
      });
    } else {
      this.attendanceService.createAttendanceType(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Attendance type created successfully', 'success');
            this.router.navigate(['/app/attendance-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating attendance type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating attendance type', 'error');
        }
      });
    }
  }
}

