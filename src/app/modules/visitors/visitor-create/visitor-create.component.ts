import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from '../../../shared/services/visitor.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-visitor-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './visitor-create.component.html',
  styleUrls: ['./visitor-create.component.scss']
})
export class VisitorCreateComponent implements OnInit {
  visitorForm: FormGroup;
  isEditMode = false;
  visitorId: number | null = null;
  isLoading = false;
  isSaving = false;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private visitorService: VisitorService,
    private toastService: ToastService
  ) {
    this.visitorForm = this.fb.group({
      visitor_name: ['', Validators.required],
      visitor_type: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', Validators.email],
      purpose: ['', Validators.required],
      visit_date: [new Date().toISOString().split('T')[0], Validators.required],
      visit_time: [new Date().toTimeString().slice(0, 5), Validators.required],
      person_to_meet: [''],
      status: ['in', Validators.required],
      remarks: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.visitorId = +params['id'];
        this.loadVisitor();
      }
    });
    
    this.loadCategories();
  }

  loadCategories(): void {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.categories = response.data.categories || [];
        }
      }
    });
  }

  loadVisitor(): void {
    if (!this.visitorId) return;
    
    this.isLoading = true;
    this.visitorService.getVisitors({ visitor_id: this.visitorId }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.visitors?.length > 0) {
          const visitor = response.data.visitors[0];
          this.visitorForm.patchValue({
            visitor_name: visitor.visitor_name,
            visitor_type: visitor.visitor_type,
            mobile: visitor.mobile,
            email: visitor.email,
            purpose: visitor.purpose,
            visit_date: visitor.visit_date,
            visit_time: visitor.visit_time,
            person_to_meet: visitor.person_to_meet,
            status: visitor.status,
            remarks: visitor.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error('Failed to load visitor details');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.visitorForm.invalid) {
      this.visitorForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const formData = this.visitorForm.value;

    if (this.isEditMode && this.visitorId) {
      formData.visitor_id = this.visitorId;
    }

    this.visitorService.createVisitor(formData).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.success(`Visitor record ${this.isEditMode ? 'updated' : 'created'} successfully`);
          this.router.navigate(['/app/visitors']);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} visitor`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} visitor`);
        this.isSaving = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/visitors']);
  }
}

