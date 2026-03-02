import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { DoubtHandlingService } from '../../../shared/services/doubt-handling.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-doubt-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './doubt-list.component.html',
  styleUrls: ['./doubt-list.component.scss']
})
export class DoubtListComponent implements OnInit {
  doubts: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'student_name', label: 'Student', sortable: true, format: (v: any) => v || '-' },
    { key: 'class_name', label: 'Class', sortable: true, format: (v: any) => v || '-' },
    { key: 'subject_name', label: 'Subject', sortable: true, format: (v: any) => v || '-' },
    { key: 'doubt_text', label: 'Doubt', sortable: false, format: (v: any) => (v && v.length > 50) ? v.substring(0, 50) + '...' : (v || '-') },
    // { key: 'pripority_level', label: 'Pripority', sortable: false, format: (v: any) => (v && v.length > 50) ? v.substring(0, 50) + '...' : (v || '-') },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'resolved' ? 'badge-success' : v === 'closed' ? 'badge-secondary' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'pending'}</span>`;
    }}
  ];
  searchTerm = '';
  status: string | undefined;

  constructor(
    private doubtService: DoubtHandlingService,
    private toast: ToastService,
    // private exportService: ExportService,
    private dialogService: DialogService,
    private router: Router
  ) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.doubtService.getDoubts(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.doubts = res.data.doubts || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading doubts', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onEdit(row: any): void {
    this.router.navigate(
      ['/app/doubt-handling/respond', row.doubt_id]
    );
  }


   onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Plan',
      message: `Are you sure you want to delete "${row.doubt_id}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.doubtService.deleteDoubt(row.doubt_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toast.show('plan deleted successfully', 'success');
              this.load();
            }
          },
          error: () => {
            this.toast.show('Error deleting plan', 'error');
          }
        });
      }
    });
  }
  onExportClick(_: any) {}
  onStatusChange(s: string | undefined) { this.status = s; this.pagination.page = 1; this.load(); }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
