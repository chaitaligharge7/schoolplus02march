import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LabService } from '../../../shared/services/lab.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-lab-item-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lab-item-create.component.html',
  styleUrls: ['./lab-item-create.component.scss']
})
export class LabItemCreateComponent implements OnInit {
  itemForm: FormGroup;
  isEditMode = false;
  itemId: number | null = null;
  isLoading = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private labService: LabService,
    private toastService: ToastService
  ) {
    this.itemForm = this.fb.group({
      item_name: ['', Validators.required],
      category: ['equipment', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      location: [''],
      status: ['available', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.itemId = +params['id'];
        this.loadItem();
      }
    });
  }

  loadItem(): void {
    if (!this.itemId) return;

    this.isLoading = true;

    this.labService.getLabItems({ item_id: this.itemId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.items?.length > 0) {
          const item = response.data.items[0];

          this.itemForm.patchValue({
            item_name: item.item_name,
            category: item.category,
            quantity: item.quantity,
            location: item.location,
            status: item.status,
            description: item.description
          });
        }

        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load lab item details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const formData = this.itemForm.value;

    if (this.isEditMode && this.itemId) {
      formData.item_id = this.itemId;   // ✅ IMPORTANT
    }

    // ✅ FIXED LOGIC
    const request$ = this.isEditMode
      ? this.labService.updateLabItem(formData)   // ✅ UPDATE API
      : this.labService.createLabItem(formData);  // ✅ CREATE API

    request$.subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(
            `Lab item ${this.isEditMode ? 'updated' : 'created'} successfully`
          );
          this.router.navigate(['/app/lab']);
        } else {
          this.toastService.error(
            response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} item`
          );
        }

        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(
          `Failed to ${this.isEditMode ? 'update' : 'create'} item`
        );

        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/lab']);
  }
}