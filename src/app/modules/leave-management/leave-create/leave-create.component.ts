import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { LeaveManagementService } from '../../../shared/services/leave-management.service';
import { TeacherService } from '../../../shared/services/teacher.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-leave-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './leave-create.component.html',
  styleUrls: ['./leave-create.component.scss']
})
export class LeaveCreateComponent implements OnInit {
  model: any = { leave_type: 'Casual', start_date: '', end_date: '', reason: '', teacher_id: null };
  teachers: any[] = [];
  loading = false;
  editId: number | null = null;

  constructor(
    private leaveService: LeaveManagementService,
    private teacherService: TeacherService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.editId = +idParam;
      this.leaveService.getLeave(this.editId).subscribe({
        next: (res) => {
          if (res.status === 'success' && res.data?.leave) {
            const l = res.data.leave;
            this.model = { leave_type: l.leave_type, start_date: l.start_date, end_date: l.end_date, reason: l.reason, teacher_id: l.teacher_id };
          }
        }
      });
    }
    this.teacherService.getTeachers({ limit: 500 }).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.teachers) this.teachers = res.data.teachers;
      }
    });
  }

  save(): void {
    if (!this.model.start_date) {
      this.toastService.show('Start date is required', 'error');
      return;
    }
    this.loading = true;
    const obs = this.editId
      ? this.leaveService.updateLeave({ ...this.model, leave_id: this.editId })
      : this.leaveService.createLeave(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toastService.show(this.editId ? 'Leave updated' : 'Leave submitted', 'success');
          this.router.navigate(['/app/leave-management/list']);
        } else {
          this.toastService.show(res.message || 'Error', 'error');
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show('Error saving leave', 'error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/app/leave-management/list']);
  }
}
