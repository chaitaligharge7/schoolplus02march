import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SecurityGuardService } from '../../../shared/services/security-guard.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-gate-pass-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './gate-pass-list.component.html',
  styleUrls: ['./gate-pass-list.component.scss']
})
export class GatePassListComponent implements OnInit {
  gatePasses: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = 'gate_pass_id';
  columns: TableColumn[] = [
    { key: 'visitor_name', label: 'Visitor', sortable: true },
    { key: 'purpose', label: 'Purpose', sortable: false },
    { key: 'valid_from', label: 'Valid From', sortable: false },
    { key: 'valid_until', label: 'Valid Until', sortable: false },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'active' ? 'badge-success' : v === 'used' ? 'badge-secondary' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'active'}</span>`;
    }}
  ];
  status: string | undefined;

  constructor(private sg: SecurityGuardService, private toast: ToastService, private router: Router) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.status) params.status = this.status;
    this.sg.getGatePasses(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.gatePasses = res.data.gate_passes || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading gate passes', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(_: string) { this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onExportClick(_: any) {}
  onStatusChange(s: string | undefined) { this.status = s; this.pagination.page = 1; this.load(); }
  onEdit(row: any): void {
    if (row?.gate_pass_id) this.router.navigate(['/app/security-guard/gate-pass/edit', row.gate_pass_id]);
  }
  onDelete(row: any): void {
    if (!row?.gate_pass_id) return;
    if (!confirm('Delete this gate pass?')) return;
    this.sg.deleteGatePass(row.gate_pass_id).subscribe({
      next: (res) => {
        if (res.status === 'success') { this.toast.show('Gate pass deleted', 'success'); this.load(); }
        else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => this.toast.show('Error deleting gate pass', 'error')
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
