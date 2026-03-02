import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../../../shared/services/complaint.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  isEditMode = false;
  isSaving = false;
  isLoading = false;
  categoryId!: number;

  constructor(
    private complaintService: ComplaintService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.categoryId = +id;
      this.loadCategory(this.categoryId);
    }
  }

  private initForm(): void {
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category_status: new FormControl('1', Validators.required)
    });
  }

  private loadCategory(id: number): void {
    this.isLoading = true;

    this.complaintService.getCategoryById(id).subscribe({
      next: (res: any) => {
        const category = res.data.category; // adjust if API structure differs

        this.categoryForm.patchValue({
          category_name: category.category_name,
          description: category.description,
          category_status: category.category_status
        });

        this.isLoading = false;
      },
      error: () => {
        alert('Failed to load category');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const payload = {
      category_name: this.categoryForm.value.category_name,
      description: this.categoryForm.value.description,
      category_status: this.categoryForm.value.category_status
    };

    if (this.isEditMode) {
      this.updateCategory(payload);
    } else {
      this.createCategory(payload);
    }
  }

  private updateCategory(payload: any): void {
    this.complaintService.updateComplaintCategory(this.categoryId, payload).subscribe({
      next: () => {
        alert('Category updated successfully');
        this.isSaving = false;
        this.router.navigate(['/app/complaints/categorylist']);
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to update category');
        this.isSaving = false;
      }
    });
  }

  private createCategory(payload: any): void {
    this.complaintService.createCategories(payload).subscribe({
      next: () => {
        alert('Category added successfully');
        this.isSaving = false;
        this.router.navigate(['/app/complaints/categorylist']);
      },
      error: (err) => {
        alert(err?.error?.message || 'Failed to add category');
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/complaints/categorylist']);
  }
}
