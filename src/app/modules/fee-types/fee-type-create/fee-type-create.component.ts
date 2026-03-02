import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FeeService } from '../../../shared/services/fee.service';
import { FeeGroupService } from '../../../shared/services/fee-group.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-fee-type-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fee-type-create.component.html',
  styleUrls: ['./fee-type-create.component.scss']
})
export class FeeTypeCreateComponent implements OnInit {
  feeTypeForm: FormGroup;
  isEditMode = false;
  feeTypeId: number | null = null;
  isSaving = false;
  feeGroups: any[] = [];

  constructor(
    private fb: FormBuilder,
    private feeService: FeeService,
    private feeGroupService: FeeGroupService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.feeTypeForm = this.fb.group({
      fee_type_name: ['', Validators.required],
      fee_type_code: [''],
      fee_group_id: [null, Validators.required],
      fee_amount: [0, [Validators.required, Validators.min(0)]],
      fee_frequency: ['Monthly', Validators.required],
      fee_description: ['']
    });
  }

  ngOnInit(): void {
    this.loadFeeGroups();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.feeTypeId = parseInt(params['id']);
        this.loadFeeType();
      }
    });
  }

  loadFeeGroups(): void {
    this.feeGroupService.getFeeGroups().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.feeGroups = response.data.fee_groups || [];
        }
      }
    });
  }

  loadFeeType(): void {
    if (!this.feeTypeId) return;
    
    this.feeService.getFeeType(this.feeTypeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const feeType = response.data.fee_type;
          this.feeTypeForm.patchValue({
            fee_type_name: feeType.fee_type_name,
            fee_type_code: feeType.fee_type_code || '',
            fee_group_id: feeType.fee_group_id,
            fee_amount: feeType.fee_amount,
            fee_frequency: feeType.fee_frequency || 'Monthly',
            fee_description: feeType.fee_description || ''
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.feeTypeForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.feeTypeForm.value;

    if (this.isEditMode && this.feeTypeId) {
      this.feeService.updateFeeType(this.feeTypeId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Fee type updated successfully', 'success');
            this.router.navigate(['/app/fee-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating fee type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating fee type', 'error');
        }
      });
    } else {
      this.feeService.createFeeType(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Fee type created successfully', 'success');
            this.router.navigate(['/app/fee-types']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating fee type', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating fee type', 'error');
        }
      });
    }
  }
}

