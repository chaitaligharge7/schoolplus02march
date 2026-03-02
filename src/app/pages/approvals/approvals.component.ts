import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeaveManagementService } from '../../shared/services/leave-management.service';
import { AdmissionService } from '../../shared/services/admission.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent implements OnInit {
  pendingLeaves: any[] = [];
  pendingAdmissions: any[] = [];
  loadingLeaves = false;
  loadingAdmissions = false;

  constructor(
    private leaveService: LeaveManagementService,
    private admissionService: AdmissionService,
    private toast: ToastService
  ) {}
  ngOnInit(): void {
    this.loadPendingLeaves();
    this.loadPendingAdmissions();
  }
  loadPendingLeaves(): void {
    this.loadingLeaves = true;
    this.leaveService.getLeaves({ status: 'pending', limit: 20 }).subscribe({
      next: (res) => {
        this.loadingLeaves = false;
        if (res.status === 'success' && res.data?.leaves) this.pendingLeaves = res.data.leaves;
      },
      error: () => { this.loadingLeaves = false; }
    });
  }
  loadPendingAdmissions(): void {
    this.loadingAdmissions = true;
    this.admissionService.getAdmissions({ approval_status: 'pending', limit: 20 }).subscribe({
      next: (res) => {
        this.loadingAdmissions = false;
        if (res.status === 'success' && res.data?.admissions) this.pendingAdmissions = res.data.admissions || [];
      },
      error: () => { this.loadingAdmissions = false; }
    });
  }
  approveLeave(leaveId: number): void {
    this.leaveService.updateLeave({ leave_id: leaveId, status: 'approved' }).subscribe({
      next: (res) => { if (res.status === 'success') { this.toast.show('Leave approved', 'success'); this.loadPendingLeaves(); } },
      error: () => this.toast.show('Error', 'error')
    });
  }
  rejectLeave(leaveId: number): void {
    this.leaveService.updateLeave({ leave_id: leaveId, status: 'rejected' }).subscribe({
      next: (res) => { if (res.status === 'success') { this.toast.show('Leave rejected', 'success'); this.loadPendingLeaves(); } },
      error: () => this.toast.show('Error', 'error')
    });
  }
}
