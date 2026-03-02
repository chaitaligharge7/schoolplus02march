import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../shared/services/department.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-department-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss']
})
export class DepartmentCreateComponent implements OnInit {
  departmentForm: FormGroup;
  isEditMode = false;
  departmentId: number | null = null;
  isSaving = false;
  teachers: any[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private teacherService: TeacherService,
    public router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.departmentForm = this.fb.group({
      department_name: ['', Validators.required],
      department_code: [''],
      department_description: [''],
      department_head_id: [null]
    });
  }

  ngOnInit(): void {
    this.loadTeachers();
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.departmentId = parseInt(params['id']);
        this.loadDepartment();
      }
    });
  }

  loadTeachers(): void {
    this.teacherService.getTeachers({ limit: 1000 }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }

  loadDepartment(): void {
    if (!this.departmentId) return;
    
    this.departmentService.getDepartment(this.departmentId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const dept = response.data.department;
          this.departmentForm.patchValue({
            department_name: dept.department_name,
            department_code: dept.department_code || '',
            department_description: dept.department_description || '',
            department_head_id: dept.department_head_id
          });
        }
      }
    });
  }

  onSubmit(): void {
    if (this.departmentForm.invalid) {
      return;
    }

    this.isSaving = true;
    const formData = this.departmentForm.value;

    if (this.isEditMode && this.departmentId) {
      this.departmentService.updateDepartment(this.departmentId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Department updated successfully', 'success');
            this.router.navigate(['/app/departments']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error updating department', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error updating department', 'error');
        }
      });
    } else {
      this.departmentService.createDepartment(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === 'success') {
            this.toastService.show('Department created successfully', 'success');
            this.router.navigate(['/app/departments']);
          } else if (response.status === 'error') {
            this.toastService.show(response.message || 'Error creating department', 'error');
          }
        },
        error: (err) => {
          this.isSaving = false;
          this.toastService.show(err?.error?.message || err?.message || 'Error creating department', 'error');
        }
      });
    }
  }
}

