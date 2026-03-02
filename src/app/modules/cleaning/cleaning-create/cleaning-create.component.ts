import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CleaningService } from '../../../shared/services/cleaning.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-cleaning-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cleaning-create.component.html',
  styleUrls: ['./cleaning-create.component.scss']
})
export class CleaningCreateComponent implements OnInit {
  scheduleForm: FormGroup;
  isEditMode = false;
  scheduleId: number | null = null;
  isLoading = false;
  isSaving = false;
  staffMembers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private cleaningService: CleaningService,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {
    this.scheduleForm = this.fb.group({
      location: ['', Validators.required],
      schedule_date: [new Date().toISOString().split('T')[0], Validators.required],
      assigned_to: [null],
      cleaning_type:['', Validators.required],
      // location:['', Validators.required],
      created_at:['',Validators.required],

      completion_status: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.scheduleId = +params['id'];
        this.loadSchedule();
      }
    });
    
    this.loadStaffMembers();
  }

  loadStaffMembers(): void {
    // Load staff members who can be assigned cleaning tasks
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.staffMembers = response.data.teachers || [];
        }
      }
    });
  }

  loadSchedule(): void {
    if (!this.scheduleId) return;
    
    this.isLoading = true;
    this.cleaningService.getCleaningSchedules({ schedule_id: this.scheduleId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.schedules?.length > 0) {
          const schedule = response.data.schedules[0];
          this.scheduleForm.patchValue({
            area: schedule.area,
            schedule_date: schedule.schedule_date,
            assigned_to: schedule.assigned_to,
            status: schedule.status,
            notes: schedule.notes
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load cleaning schedule details');
        this.isLoading = false;
      }
    });
  }

  // onSubmit(): void {
  //   if (this.scheduleForm.invalid) {
  //     this.scheduleForm.markAllAsTouched();
  //     return;
  //   }

  //   this.isSaving = true;
  //   const formData = this.scheduleForm.value;

  //   if (this.isEditMode && this.scheduleId) {
  //     formData.schedule_id = this.scheduleId;
  //   }

  //   this.cleaningService.createCleaningSchedule(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success') {
  //         this.toastService.success(`Cleaning schedule ${this.isEditMode ? 'updated' : 'created'} successfully`);
  //         this.router.navigate(['/app/cleaning']);
  //       } else {
  //         this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} schedule`);
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} schedule`);
  //       this.isSaving = false;
  //     }
  //   });
  // }
onSubmit(): void {
  if (this.scheduleForm.invalid) {
    this.scheduleForm.markAllAsTouched();
    return;
  }

  this.isSaving = true;
  const formData = this.scheduleForm.value;

  /* ✅✅✅ CHANGE STARTS HERE */

  if (this.isEditMode && this.scheduleId) {

    formData.schedule_id = this.scheduleId;   // ✅ REQUIRED FOR UPDATE

    this.cleaningService.updateCleaningSchedule(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Cleaning schedule updated successfully');  // ✅ UPDATED TEXT
          this.router.navigate(['/app/cleaning']);
        } else {
          this.toastService.error(response.message || 'Failed to update schedule');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to update schedule');
        this.isSaving = false;
      }
    });

  } else {

    this.cleaningService.createCleaningSchedule(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success('Cleaning schedule created successfully');  // ✅ CLEANER MESSAGE
          this.router.navigate(['/app/cleaning']);
        } else {
          this.toastService.error(response.message || 'Failed to create schedule');
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create schedule');
        this.isSaving = false;
      }
    });

  }

  /* ✅✅✅ CHANGE ENDS HERE */
}
  cancel(): void {
    this.router.navigate(['/app/cleaning']);
  }
}

