import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VisitorService } from '../../../shared/services/visitor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor-category-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './visitor-category-add.component.html',
  styleUrls: ['./visitor-category-add.component.scss']
})
export class VisitorCategoryComponent implements OnInit {
  @Output() formClosed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  categoryForm!: FormGroup;
  isSaving = false;
  isLoading = false;
  isEditMode = false;
  editingCategoryId: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private visitorService: VisitorService
  ) { }

  ngOnInit() {
    // Initialize empty form first
    this.categoryForm = new FormGroup({
      category_name: new FormControl('', Validators.required),
      description: new FormControl(''),
      category_status: new FormControl(1) // default active
    });

    // Detect edit mode from route
    const categoryIdParam = this.route.snapshot.paramMap.get('id');
    if (categoryIdParam) {
      this.isEditMode = true;
      this.editingCategoryId = +categoryIdParam;
      this.loadCategory(this.editingCategoryId);
    }
  }

  // Load category for edit
  loadCategory(categoryId: number) {
    this.isLoading = true;
    this.visitorService.getVisitorCategories().subscribe({
      next: (res) => {
        this.isLoading = false;

        if (res.status === 'success' && res.data?.categories) {
          const category = res.data.categories.find((c: any) => c.category_id === categoryId);

          if (category) {
            this.categoryForm.patchValue({
              category_name: category.category_name,
              description: category.description || '',
              category_status: category.category_status
            });
          } else {
            alert('Category not found');
            this.router.navigate(['/app/visitors/categorylist']);
          }

        } else {
          alert(res.message || 'Failed to fetch categories');
        }
      },
      error: () => {
        this.isLoading = false;
        alert('Error fetching category');
      }
    });
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formValue = this.categoryForm.value;
    const payload: any = {
      category_name: formValue.category_name,
      description: formValue.description || '',
      category_status: formValue.category_status
    };

    if (this.isEditMode && this.editingCategoryId) {
      payload.category_id = this.editingCategoryId;
      this.visitorService.updateCategory(payload).subscribe({
        next: (res) => {
          this.isSaving = false;
          if (res.status === 'success') {
            alert('Category updated successfully');
            this.saved.emit();
            this.closeForm();
            this.router.navigate(['/app/visitors/categorylist']);
          } else {
            alert(res.message || 'Failed to update category');
          }
        },
        error: (err) => {
          this.isSaving = false;
          alert(err?.error?.message || 'Failed to update category');
        }
      });
    } else {
      // Create new category
      this.visitorService.createVisitorCategory(payload).subscribe({
        next: (res) => {
          this.isSaving = false;
          if (res.status === 'success') {
            alert('Category added successfully');
            this.saved.emit();
            this.closeForm();
            this.router.navigate(['/app/visitors/categorylist']);
          } else {
            alert(res.message || 'Failed to add category');
          }
        },
        error: (err) => {
          this.isSaving = false;
          alert(err?.error?.message || 'Failed to add category');
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/app/visitors/categorylist']);
  }

  closeForm() {
    this.formClosed.emit();
  }
}