import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-daily-report-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './daily-report-list.component.html',
  styleUrls: ['./daily-report-list.component.scss']
})
export class DailyReportListComponent implements OnInit {
  reports: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = 'report_id';
  columns: TableColumn[] = [
    { key: 'report_date', label: 'Date', sortable: true },
    { key: 'shift', label: 'Shift', sortable: true },
    { key: 'summary', label: 'Summary', sortable: false, format: (v: any) => (v && v.length > 50) ? v.substring(0, 50) + '...' : (v || '-') },
    { key: 'reported_by_name', label: 'Reported By', sortable: false }
  ];
  reportDate = '';

  constructor(private sg: SecurityGuardService, private toast: ToastService, private router: Router) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.reportDate) params.report_date = this.reportDate;
    this.sg.getDailyReports(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.reports = res.data.reports || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading reports', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(_: string) { this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onExportClick(_: any) {}
  onDateChange() { this.pagination.page = 1; this.load(); }
  onEdit(row: any): void {
    if (row?.report_id) this.router.navigate(['/app/security-guard/daily-report/edit', row.report_id]);
  }
  onDelete(row: any): void {
    if (!row?.report_id) return;
    if (!confirm('Delete this report?')) return;
    this.sg.deleteDailyReport(row.report_id).subscribe({
      next: (res) => {
        if (res.status === 'success') { this.toast.show('Report deleted', 'success'); this.load(); }
        else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => this.toast.show('Error deleting report', 'error')
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
