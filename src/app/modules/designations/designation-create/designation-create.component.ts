import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignationService } from '../../../shared/services/designation.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-designation-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './designation-create.component.html',
  styleUrls: ['./designation-create.component.scss']
})
export class DesignationCreateComponent implements OnInit {
  designationForm: FormGroup;
  isEditMode = false;
  designationId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private designationService: DesignationService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.designationForm = this.fb.group({
      designation_name: ['', Validators.required],
      designation_code: [''],
      designation_description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.designationId = parseInt(params['id']);
        this.loadDesignation();
      }
    });
  }

  loadDesignation(): void {
    if (!this.designationId) return;
    
    this.designationService.getDesignation(this.designationId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const designation = response.data.designation;
          this.designationForm.patchValue({
            designation_name: designation.designation_name,
            designation_code: designation.designation_code || '',
            designation_description: designation.designation_description || ''
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.designationForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.designationForm.value;

    if (this.isEditMode && this.designationId) {
      this.designationService.updateDesignation(this.designationId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Designation updated successfully', 'success');
            this.router.navigate(['/app/designations']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating designation', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating designation', 'error');
        }
      });
    } else {
      this.designationService.createDesignation(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Designation created successfully', 'success');
            this.router.navigate(['/app/designations']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating designation', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating designation', 'error');
        }
      });
    }
  }
}

