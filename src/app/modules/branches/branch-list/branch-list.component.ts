import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { BranchDetailSliderComponent } from '../branch-detail-slider/branch-detail-slider.component';
import { BranchService } from '../../../shared/services/branch.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';


@Component({
  selector: 'app-branch-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, BranchDetailSliderComponent],
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  branches: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  sliderBranch: any = null;
  sliderVisible = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  /** Status filter for soft delete: all, active (default), inactive */
  statusFilter: 'all' | 'active' | 'inactive' = 'active';
  columns: TableColumn[] = [
    { key: 'branch_name', label: 'Branch Name', sortable: true, format: (v: any) => v || '-' },
    { key: 'branch_code', label: 'Code', sortable: true, format: (v: any) => v || '-' },
    { key: 'address', label: 'Address', sortable: false, format: (v: any) => (v && v.length > 35) ? v.substring(0, 35) + '...' : (v || '-') },
    { key: 'city', label: 'City', sortable: true, format: (v: any) => v || '-' },
    { key: 'phone', label: 'Phone', sortable: false, format: (v: any) => v || '-' },
    { key: 'is_active', label: 'Status', sortable: true, format: (v: any) => {
      return `<span class="badge ${v == 1 ? 'badge-success' : 'badge-secondary'}">${v == 1 ? 'Active' : 'Inactive'}</span>`;
    }}
  ];
  searchTerm = '';

  constructor(
    private branchService: BranchService,
     private router: Router,  // ✅ Add this
    private toastService: ToastService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit, status: this.statusFilter };
    if (this.searchTerm) params.search = this.searchTerm;
    this.branchService.getBranches(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.branches = res.data.branches || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show('Error loading branches', 'error');
      }
    });
  }

  onPageChange(page: number): void { this.pagination.page = page; this.loadBranches(); }
  onPageSizeChange(size: number): void { this.pagination.limit = size; this.pagination.page = 1; this.loadBranches(); }
  onSearchChange(s: string): void { this.searchTerm = s; this.pagination.page = 1; this.loadBranches(); }
  onSortChange(_: any): void { this.loadBranches(); }
  onRowSelect(row: any): void {
    this.selectedRowId = row.branch_id;
    this.sliderBranch = row;
    this.sliderVisible = true;
  }

  onView(row: any): void {
    this.sliderBranch = row;
    this.sliderVisible = true;
  }

  onRefresh(): void { this.loadBranches(); }
  onAdd(): void {}
  onEdit(row: any): void {
  console.log('Edit clicked:', row);
  this.router.navigate(['/app/branches/edit', row.branch_id]);
  }
 onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Branch',
      message: `Are you sure you want to delete "${row.branch_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.branchService.deleteBranch(row.branch_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('branch deleted successfully', 'success');
              this.loadBranches();
            }
          },
          error: () => {
            this.toastService.show('Error deleting branch', 'error');
          }
        });
      }
    });
  }

  onExportClick(_: any): void {}

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }

  onStatusFilterChange(): void {
    this.pagination.page = 1;
    this.loadBranches();
  }
}
