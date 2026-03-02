import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DocumentService } from '../../../shared/services/document.service';
import { StudentService } from '../../../shared/services/student.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-half-day-permission-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, DateFormatPipe],
  templateUrl: './half-day-permission-list.component.html',
  styleUrls: ['./half-day-permission-list.component.scss']
})
export class HalfDayPermissionListComponent implements OnInit {
  permissions: any[] = [];
  students: any[] = [];
  isLoading = false;
  isSaving = false;
  searchForm: FormGroup;
  permissionForm: FormGroup;
  showPermissionForm = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private documentService: DocumentService,
    private studentService: StudentService,
    private dialogService: DialogService,
    private toastService: ToastService
  ) {
    this.searchForm = this.fb.group({
      student_id: [null],
      approval_status: [null],
      permission_date: [null]
    });

    this.permissionForm = this.fb.group({
      student_id: [null, Validators.required],
      permission_date: [new Date().toISOString().split('T')[0], Validators.required],
      permission_time: [''],
      reason: ['', Validators.required],
      parent_mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this.loadPermissions();
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

  loadPermissions(): void {
    this.isLoading = true;
    const params = this.searchForm.value;

    this.documentService.getHalfDayPermissions(params).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.permissions = response.data.permissions || [];
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading permissions', 'error');
      }
    });
  }

  onSearch(): void {
    this.loadPermissions();
  }

  togglePermissionForm(): void {
    this.showPermissionForm = !this.showPermissionForm;
    if (!this.showPermissionForm) {
      this.permissionForm.reset({
        permission_date: new Date().toISOString().split('T')[0]
      });
    }
  }

  onSubmitPermission(): void {
    if (this.permissionForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    this.documentService.createHalfDayPermission(this.permissionForm.value).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.toastService.show('Half day permission created successfully', 'success');
          this.togglePermissionForm();
          this.loadPermissions();
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error creating permission', 'error');
      }
    });
  }

  approvePermission(permission: any, action: 'approve' | 'reject'): void {
    const actionText = action === 'approve' ? 'approve' : 'reject';
    this.dialogService.confirm(
      `${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Permission`,
      `Are you sure you want to ${actionText} this half day permission?`,
      actionText.charAt(0).toUpperCase() + actionText.slice(1),
      'Cancel'
    ).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.approveHalfDayPermission(permission.permission_id, action).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show(`Permission ${actionText}d successfully`, 'success');
              this.loadPermissions();
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing permission`, 'error');
          }
        });
      }
    });
  }
}

