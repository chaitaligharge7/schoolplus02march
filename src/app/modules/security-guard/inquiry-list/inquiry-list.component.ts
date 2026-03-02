import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-inquiry-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.scss']
})
export class InquiryListComponent implements OnInit {
  inquiries: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'enquiry_number', label: 'Enquiry ID', sortable: true, format: (v: any, row: any) => v || (row?.inquiry_id ? 'INQ-' + new Date().getFullYear() + '-' + String(row.inquiry_id).padStart(4, '0') : '-') },
    { key: 'visitor_name', label: 'Visitor', sortable: true },
    { key: 'visitor_phone', label: 'Phone', sortable: false },
    { key: 'purpose', label: 'Purpose', sortable: false, format: (v: any) => (v && v.length > 40) ? v.substring(0, 40) + '...' : (v || '-') },
    { key: 'person_to_meet', label: 'Person to Meet', sortable: true },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'resolved' || v === 'picked' ? 'badge-success' : v === 'forwarded' ? 'badge-info' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'registered'}</span>`;
    }}
  ];
  alertCount = 0;
  alerts: any[] = [];
  searchTerm = '';
  status: string | undefined;

  rowIdKey = 'inquiry_id';

  constructor(private sg: SecurityGuardService, private toast: ToastService, private router: Router) {}

  ngOnInit(): void {
    this.load();
    this.loadAlerts();
  }
  loadAlerts(): void {
    this.sg.getInquiryAlerts().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.alerts) {
          this.alerts = res.data.alerts;
          this.alertCount = this.alerts.length;
        }
      }
    });
  }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.sg.getInquiries(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.inquiries = res.data.inquiries || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading inquiries', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onExportClick(_: any) {}
  onStatusChange(s: string | undefined) { this.status = s; this.pagination.page = 1; this.load(); }
  onEdit(row: any): void {
    if (row?.inquiry_id) this.router.navigate(['/app/security-guard/inquiry/edit', row.inquiry_id]);
  }
  onView(row: any): void {
    if (row?.inquiry_id) this.router.navigate(['/app/security-guard/inquiry/view', row.inquiry_id]);
  }
  onDelete(row: any): void {
    if (!row?.inquiry_id) return;
    if (!confirm('Delete this inquiry?')) return;
    this.sg.deleteInquiry(row.inquiry_id).subscribe({
      next: (res) => {
        if (res.status === 'success') { this.toast.show('Inquiry deleted', 'success'); this.load(); }
        else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => this.toast.show('Error deleting inquiry', 'error')
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
