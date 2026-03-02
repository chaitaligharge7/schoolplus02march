import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../../../shared/services/complaint.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-complaint-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './complaint-create.component.html',
  styleUrls: ['./complaint-create.component.scss']
})
export class ComplaintCreateComponent implements OnInit {
  complaintForm: FormGroup;
  isEditMode = false;
  complaintId: number | null = null;
  isLoading = false;
  isSaving = false;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private complaintService: ComplaintService,
    private toastService: ToastService
  ) {
    this.complaintForm = this.fb.group({
      complaint_title: ['', Validators.required],
      complaint_category: ['', Validators.required],
      complaint_description: ['', Validators.required],
      complainant_name: ['', Validators.required],
      complainant_type: ['student', Validators.required],
      complainant_id: [null],
      priority: ['medium', Validators.required],
      status: ['open', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.complaintId = +params['id'];
        this.loadComplaint();
      }
    });
    
    this.loadCategories();
  }

  loadCategories(): void {
    this.complaintService.getComplaintCategories().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.categories = response.data.categories || [];
        }
      }
    });
  }

  loadComplaint(): void {
    if (!this.complaintId) return;
    
    this.isLoading = true;
    this.complaintService.getComplaints({ complaint_id: this.complaintId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.complaints?.length > 0) {
          const complaint = response.data.complaints[0];
          this.complaintForm.patchValue({
            complaint_title: complaint.complaint_title,
            complaint_category: complaint.complaint_category,
            complaint_description: complaint.complaint_description,
            complainant_name: complaint.complainant_name,
            complainant_type: complaint.complainant_type,
            complainant_id: complaint.complainant_id,
            priority: complaint.priority,
            status: complaint.status,
            remarks: complaint.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load complaint details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.complaintForm.invalid) {
      this.complaintForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.complaintForm.value;

    if (this.isEditMode && this.complaintId) {
      formData.complaint_id = this.complaintId;
    }

    this.complaintService.createComplaint(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Complaint ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/complaints']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} complaint`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} complaint`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/complaints']);
  }
}

