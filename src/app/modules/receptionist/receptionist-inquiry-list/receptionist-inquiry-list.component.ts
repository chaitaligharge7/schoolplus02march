import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ReceptionistService } from '../../../shared/services/receptionist.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-receptionist-inquiry-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './receptionist-inquiry-list.component.html',
  styleUrls: ['./receptionist-inquiry-list.component.scss']
})
export class ReceptionistInquiryListComponent implements OnInit {
  inquiries: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'visitor_name', label: 'Visitor', sortable: true },
    { key: 'visitor_phone', label: 'Phone', sortable: false },
    { key: 'purpose', label: 'Purpose', sortable: false, format: (v: any) => (v && v.length > 40) ? v.substring(0, 40) + '...' : (v || '-') },
    { key: 'person_to_meet', label: 'Person to Meet', sortable: true },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'resolved' ? 'badge-success' : v === 'forwarded' ? 'badge-info' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'forwarded'}</span>`;
    }}
  ];
  searchTerm = '';
  status: string | undefined;
  rowIdKey = 'inquiry_id';

  constructor(
    private receptionist: ReceptionistService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(q => {
      if (q['status']) this.status = q['status'];
      this.load();
    });
  }

  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.receptionist.getInquiries(params).subscribe({
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
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
  onEdit(row: any): void {
    if (row?.inquiry_id) this.router.navigate(['/app/receptionist/inquiries/edit', row.inquiry_id]);
  }
  onView(row: any): void {
    if (row?.inquiry_id) this.router.navigate(['/app/receptionist/inquiries/edit', row.inquiry_id]);
  }
}
