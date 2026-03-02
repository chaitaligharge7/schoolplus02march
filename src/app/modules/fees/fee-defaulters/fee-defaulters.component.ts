import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { FeeService } from '../../../shared/services/fee.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-fee-defaulters',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './fee-defaulters.component.html',
  styleUrls: ['./fee-defaulters.component.scss']
})
export class FeeDefaultersComponent implements OnInit {
  defaulters: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  totalPendingAmount = 0;
  classes: any[] = [];
  classId?: number;
  get classOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Classes' }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }
  searchTerm = '';
  columns: TableColumn[] = [
    { key: 'admission_number', label: 'Admission No.', sortable: true, format: (v: any) => v || '-' },
    { key: 'full_name', label: 'Student Name', sortable: true, format: (v: any) => v || '-' },
    { key: 'class_name', label: 'Class', sortable: true, format: (v: any) => v || '-' },
    { key: 'fee_type_name', label: 'Fee Type', sortable: true, format: (v: any) => v || '-' },
    { key: 'pending_amount', label: 'Pending', sortable: true, type: 'number', format: (v: any) => v != null ? `₹${Number(v).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` : '-' },
    { key: 'due_date', label: 'Due Date', sortable: true, type: 'date', format: (v: any) => v || '-' },
    { key: 'payment_status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'Paid' ? 'badge-success' : v === 'Partial' ? 'badge-warning' : 'badge-danger';
      return `<span class="badge ${c}">${v || 'Pending'}</span>`;
    }}
  ];

  constructor(
    private feeService: FeeService,
    private classService: ClassService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadDefaulters();
    this.classService.getClasses({ limit: 200 }).subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.classes) this.classes = res.data.classes;
      }
    });
  }

  loadDefaulters(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.classId) params.class_id = this.classId;
    this.feeService.getDefaulters(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.defaulters = res.data.defaulters || [];
          this.pagination = res.data.pagination || this.pagination;
          this.totalPendingAmount = res.data.summary?.total_pending_amount ?? 0;
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show('Error loading defaulters', 'error');
      }
    });
  }

  onPageChange(page: number): void { this.pagination.page = page; this.loadDefaulters(); }
  onPageSizeChange(size: number): void { this.pagination.limit = size; this.pagination.page = 1; this.loadDefaulters(); }
  onSearchChange(s: string): void { this.searchTerm = s; this.pagination.page = 1; this.loadDefaulters(); }
  onSortChange(_: any): void { this.loadDefaulters(); }
  onRowSelect(_: any): void {}
  onRefresh(): void { this.loadDefaulters(); }

  onExportClick(_: any): void {}
  onClassChange(id: number | undefined): void { this.classId = id; this.pagination.page = 1; this.loadDefaulters(); }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
