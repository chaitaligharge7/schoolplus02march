import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FeeGroupService } from '../../../shared/services/fee-group.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-fee-group-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fee-group-create.component.html',
  styleUrls: ['./fee-group-create.component.scss']
})
export class FeeGroupCreateComponent implements OnInit {
  feeGroupForm: FormGroup;
  isEditMode = false;
  feeGroupId: number | null = null;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private feeGroupService: FeeGroupService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.feeGroupForm = this.fb.group({
      fee_group_name: ['', Validators.required],
      fee_group_code: [''],
      fee_group_description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.feeGroupId = parseInt(params['id']);
        this.loadFeeGroup();
      }
    });
  }

  loadFeeGroup(): void {
    if (!this.feeGroupId) return;
    
    this.feeGroupService.getFeeGroup(this.feeGroupId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const group = response.data.fee_group;
          this.feeGroupForm.patchValue({
            fee_group_name: group.fee_group_name,
            fee_group_code: group.fee_group_code || '',
            fee_group_description: group.fee_group_description || ''
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.feeGroupForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.feeGroupForm.value;

    if (this.isEditMode && this.feeGroupId) {
      this.feeGroupService.updateFeeGroup(this.feeGroupId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Fee group updated successfully', 'success');
            this.router.navigate(['/app/fee-groups']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating fee group', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating fee group', 'error');
        }
      });
    } else {
      this.feeGroupService.createFeeGroup(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Fee group created successfully', 'success');
            this.router.navigate(['/app/fee-groups']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating fee group', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating fee group', 'error');
        }
      });
    }
  }
}

