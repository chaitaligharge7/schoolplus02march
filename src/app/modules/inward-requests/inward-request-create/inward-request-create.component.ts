import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InwardRequestService } from '../../../shared/services/inward-request.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-inward-request-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inward-request-create.component.html',
  styleUrls: ['./inward-request-create.component.scss']
})
export class InwardRequestCreateComponent implements OnInit {
  requestForm: FormGroup;
  isEditMode = false;
  requestId: number | null = null;
  isLoading = false;
  isSaving = false;
  staffMembers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inwardRequestService: InwardRequestService,
    private teacherService: TeacherService,
    private toastService: ToastService
  ) {
    this.requestForm = this.fb.group({
      request_type: ['maintenance', Validators.required],
      request_title: ['', Validators.required],
      request_description: ['', Validators.required],
      priority: ['medium', Validators.required],
      assigned_to_id: [null],
      status: ['open', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.requestId = +params['id'];
        this.loadRequest();
      }
    });

    this.loadStaffMembers();
  }

  loadStaffMembers(): void {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.staffMembers = response.data.teachers || [];
        }
      }
    });
  }

  loadRequest(): void {
    if (!this.requestId) return;

    this.isLoading = true;
    this.inwardRequestService.getInwardRequest(this.requestId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.request) {
          const request = response.data.request;
          this.requestForm.patchValue({
            request_type: request.request_type,
            request_title: request.request_title,
            request_description: request.request_description,
            priority: request.priority,
            assigned_to_id: request.assigned_to,
            status: request.status
          });
        } else {
          this.toastService.error(response.message || 'Failed to load request details');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load request details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    console.log('Form submitted');

    if (this.requestForm.invalid) {
      console.log('Form is invalid', this.requestForm.value);
      this.requestForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.requestForm.value;

    console.log('Form Data:', formData);
    console.log('Edit Mode:', this.isEditMode);
    console.log('Request ID:', this.requestId);

    if (this.isEditMode && this.requestId) {
      // Edit mode: call update API
      const payload = {
        request_id: this.requestId,
        request_title: formData.request_title,
        request_description: formData.request_description,
        request_type: formData.request_type,
        priority: formData.priority,
        assigned_to: formData.assigned_to_id,
        status: formData.status
      };

      console.log('Update Payload:', payload);

      this.inwardRequestService.updateInwardRequest(payload).subscribe({
        next: (response) => {
          console.log('Update API Response:', response);
          this.isSaving = false;

          if (response.status === 'success') {
            console.log('Update Successful');
            this.toastService.success('Inward request updated successfully');
            this.router.navigate(['/app/inward-requests']);
          } else {
            console.log('Update Failed:', response.message);
            this.toastService.error(response.message || 'Failed to update request');
          }
        },
        error: (error) => {
          console.error('Update API Error:', error);
          this.isSaving = false;
          this.toastService.error('Failed to update request');
        }
      });

    } else {
      // Create mode: call create API
      console.log('Calling Create API with:', formData);

      this.inwardRequestService.createInwardRequest(formData).subscribe({
        next: (response) => {
          console.log('Create API Response:', response);
          this.isSaving = false;

          if (response.status === 'success') {
            console.log('Create Successful');
            this.toastService.success('Inward request created successfully');
            this.router.navigate(['/app/inward-requests']);
          } else {
            console.log('Create Failed:', response.message);
            this.toastService.error(response.message || 'Failed to create request');
          }
        },
        error: (error) => {
          console.error('Create API Error:', error);
          this.isSaving = false;
          this.toastService.error('Failed to create request');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/app/inward-requests']);
  }
}