import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { CounselorService } from '../../../shared/services/counselor.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.scss']
})
export class LeadListComponent implements OnInit {
  leads: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = 'enquiry_id';
  showViewButton = true;
  columns: TableColumn[] = [
    { key: 'student_name', label: 'Student', sortable: true },
    { key: 'parent_name', label: 'Parent', sortable: true },
    { key: 'mobile', label: 'Mobile', sortable: false },
    { key: 'enquiry_date', label: 'Enquiry Date', sortable: true },
    { key: 'lead_status', label: 'Lead Status', sortable: true, format: (v: any) => {
      const s = v || 'new';
      const c = s === 'admitted' ? 'badge-success' : s === 'contacted' ? 'badge-info' : 'badge-warning';
      return `<span class="badge ${c}">${s}</span>`;
    }},
    { key: 'campus_tour_done', label: 'Campus Tour', sortable: false, format: (v: any) => v ? 'Yes' : 'No' },
    { key: 'fee_discussion_done', label: 'Fee Discussion', sortable: false, format: (v: any) => v ? 'Yes' : 'No' }
  ];
  searchTerm = '';
  status: string | undefined;

  constructor(private counselor: CounselorService, private toast: ToastService, private router: Router) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.counselor.getLeads(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.leads = res.data.leads || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading leads', 'error'); }
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
  onView(row: any): void {
    if (row?.enquiry_id) this.router.navigate(['/app/counselor/leads/view', row.enquiry_id]);
  }
  onEdit(row: any): void {
    if (row?.enquiry_id) this.router.navigate(['/app/counselor/leads/edit', row.enquiry_id]);
  }
  onDelete(row: any): void {
    if (!row?.enquiry_id) return;
    if (!confirm('Remove this lead? The enquiry will remain but counselor assignment will be removed.')) return;
    this.counselor.deleteLead(row.enquiry_id, row.lead_id || undefined).subscribe({
      next: (res) => {
        if (res.status === 'success') { this.toast.show('Lead removed', 'success'); this.load(); }
        else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => this.toast.show('Error removing lead', 'error')
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
