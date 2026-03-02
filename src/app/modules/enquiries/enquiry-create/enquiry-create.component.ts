import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from '../../../shared/services/enquiry.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-enquiry-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-create.component.html',
  styleUrls: ['./enquiry-create.component.scss']
})
export class EnquiryCreateComponent implements OnInit {
  enquiryForm: FormGroup;
  isEditMode = false;
  enquiryId: number | null = null;
  isLoading = false;
  isSaving = false;
  classes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private enquiryService: EnquiryService,
    private classService: ClassService,
    private toastService: ToastService
  ) {
    this.enquiryForm = this.fb.group({
      student_name: ['', Validators.required],
      parent_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', Validators.email],
      address: [''],
      interested_class_id: [null],
      enquiry_source: ['walk-in', Validators.required],
      enquiry_date: [new Date().toISOString().split('T')[0], Validators.required],
      follow_up_date: [''],
      follow_up_notes: [''],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.enquiryId = +params['id'];
        this.loadEnquiry();
      }
    });

    this.route.queryParams.subscribe(params => {
      if (params['enquiry_id']) {
        // Pre-fill from enquiry if converting to admission
        this.loadEnquiry(+params['enquiry_id']);
      }
    });
    
    this.loadClasses();
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

  loadEnquiry(id?: number): void {
    const enquiryId = id || this.enquiryId;
    if (!enquiryId) return;
    
    this.isLoading = true;
    this.enquiryService.getEnquiry(enquiryId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          const enquiry = response.data.enquiry;
          this.enquiryForm.patchValue({
            student_name: enquiry.student_name,
            parent_name: enquiry.parent_name,
            mobile: enquiry.mobile,
            email: enquiry.email,
            address: enquiry.address,
            interested_class_id: enquiry.interested_class_id,
            enquiry_source: enquiry.enquiry_source,
            enquiry_date: enquiry.enquiry_date,
            follow_up_date: enquiry.follow_up_date,
            follow_up_notes: enquiry.follow_up_notes,
            remarks: enquiry.remarks
          });
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading enquiry', 'error');
      }
    });
  }

  onSubmit(): void {
    if (this.enquiryForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formData = this.enquiryForm.value;

    if (this.isEditMode && this.enquiryId) {
      this.enquiryService.updateEnquiry(this.enquiryId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Enquiry updated successfully', 'success');
            this.router.navigate(['/app/enquiries']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error updating enquiry', 'error');
        }
      });
    } else {
      this.enquiryService.createEnquiry(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Enquiry created successfully', 'success');
            this.router.navigate(['/app/enquiries']);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show('Error creating enquiry', 'error');
        }
      });
    }
  }
}

