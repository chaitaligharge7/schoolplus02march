import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { LeaveManagementService } from '../../../shared/services/leave-management.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-leave-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent implements OnInit {
  leaves: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'staff_name', label: 'Staff', sortable: true, format: (v: any) => v || '-' },
    { key: 'leave_type', label: 'Type', sortable: true, format: (v: any) => v || '-' },
    { key: 'start_date', label: 'Start', sortable: true, format: (v: any) => v || '-' },
    { key: 'end_date', label: 'End', sortable: true, format: (v: any) => v || '-' },
    { key: 'days_count', label: 'Days', sortable: true, type: 'number', format: (v: any) => v ?? '-' },
    { key: 'reason', label: 'Reason', sortable: false, format: (v: any) => (v && v.length > 40) ? v.substring(0, 40) + '...' : (v || '-') },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'approved' ? 'badge-success' : v === 'rejected' ? 'badge-danger' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'pending'}</span>`;
    }}
  ];
  searchTerm = '';
  status?: string;

  constructor(
    private leaveService: LeaveManagementService,
    private toastService: ToastService,
    private dialogService: DialogService,
     private router: Router  // ✅ Add this
  ) {}

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.leaveService.getLeaves(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.leaves = res.data.leaves || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show('Error loading leave requests', 'error');
      }
    });
  }

  onPageChange(page: number): void { this.pagination.page = page; this.loadLeaves(); }
  onPageSizeChange(size: number): void { this.pagination.limit = size; this.pagination.page = 1; this.loadLeaves(); }
  onSearchChange(s: string): void { this.searchTerm = s; this.pagination.page = 1; this.loadLeaves(); }
  onSortChange(_: any): void { this.loadLeaves(); }
  onRowSelect(_: any): void {}
  onRefresh(): void { this.loadLeaves(); }
  onAdd(): void {}
  onEdit(row: any): void {
  console.log('Edit clicked for:', row);
  this.router.navigate(['/app/leave-management/edit', row.leave_id]);
  }
  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Branch',
      message: `Are you sure you want to delete "${row.leave_type}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.leaveService.deleteLeave(row.leave_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('leave deleted successfully', 'success');
              this.loadLeaves();
            }
          },
          error: () => {
            this.toastService.show('Error deleting leave', 'error');
          }
        });
      }
    });
  }

  onExportClick(_: any): void {}
  onStatusChange(s: string | undefined): void { this.status = s; this.pagination.page = 1; this.loadLeaves(); }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
