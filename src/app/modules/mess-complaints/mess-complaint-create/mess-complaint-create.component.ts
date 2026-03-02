import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessComplaintService } from '../../../shared/services/mess-complaint.service';
import { StudentService } from '../../../shared/services/student.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-mess-complaint-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './mess-complaint-create.component.html',
  styleUrls: ['./mess-complaint-create.component.scss']
})
export class MessComplaintCreateComponent implements OnInit {
  complaintForm: FormGroup;
  isEditMode = false;
  complaintId: number | null = null;
  isLoading = false;
  isSaving = false;
  students: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private messComplaintService: MessComplaintService,
    private studentService: StudentService,
    private toastService: ToastService
  ) {
    this.complaintForm = this.fb.group({
      student_id: [null, Validators.required],
      complaint_date: [new Date().toISOString().split('T')[0], Validators.required],
      complaint_type: ['food_quality', Validators.required],
      subject: ['', Validators.required],
      complaint_description: ['', Validators.required],
      status: ['pending', Validators.required],
      resolution_notes: [''],
      resolved_at: ['']
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
    
    this.loadStudents();
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

  loadComplaint(): void {
    if (!this.complaintId) return;
    
    this.isLoading = true;
    this.messComplaintService.getMessComplaints({ complaint_id: this.complaintId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.complaints?.length > 0) {
          const complaint = response.data.complaints[0];
          this.complaintForm.patchValue({
            student_id: complaint.student_id,
            complaint_date: complaint.complaint_date,
            complaint_type: complaint.complaint_type,
            subject: complaint.subject,
            complaint_description: complaint.complaint_description,
            status: complaint.status,
            resolution_notes: complaint.resolution_notes || '',
            resolved_at: complaint.resolved_at ? complaint.resolved_at.split(' ')[0] : ''
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
  const formData = { ...this.complaintForm.value };

    if (formData.resolved_at) {
    formData.resolved_at = formData.resolved_at + ' 00:00:00';
  }

  if (this.isEditMode && this.complaintId) {
    this.messComplaintService.updateMessComplaint(this.complaintId, formData).subscribe({
      next: (response) => {
        this.toastService.success('Mess complaint updated successfully');
        this.router.navigate(['/app/mess-complaints']);
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to update complaint');
        this.isSaving = false;
      }
    });
  } else {

    this.messComplaintService.createMessComplaint(formData).subscribe({
      next: (response) => {
        this.toastService.success('Mess complaint created successfully');
        this.router.navigate(['/app/mess-complaints']);
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error('Failed to create complaint');
        this.isSaving = false;
      }
    });
  }
}
  cancel(): void {
    this.router.navigate(['/app/mess-complaints']);
  }
}

