import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { InwardRequestService } from '../../../shared/services/inward-request.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-inward-request-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './inward-request-list.component.html',
  styleUrls: ['./inward-request-list.component.scss']
})
export class InwardRequestListComponent implements OnInit {
  requests: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;

  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    {
      key: 'request_number',
      label: 'Request Number',
      sortable: true,
      format: (value: any) => `#${value || '-'}`
    },
    {
      key: 'request_type',
      label: 'Request Type',
      sortable: true,
      format: (value: any) => value || '-'
    },
    {
      key: 'request_title',
      label: 'Title',
      sortable: true,
      format: (value: any) => value || '-'
    },
    {
      key: 'requested_by_name',
      label: 'Requested By',
      sortable: true,
      format: (value: any) => value || '-'
    },
    {
      key: 'assigned_to_name',
      label: 'Assigned To',
      sortable: true,
      format: (value: any) => value || '-'
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'resolved' || value === 'closed' ? 'badge-success' :
          value === 'in_progress' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    },
    {
      key: 'created_at',
      label: 'Created Date',
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'created_at';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  requestType?: string;
  status?: string;

  constructor(
    private inwardRequestService: InwardRequestService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
    };

    if (this.searchTerm) {
      params.search = this.searchTerm;
    }
    if (this.startDate) {
      params.start_date = this.startDate;
    }
    if (this.endDate) {
      params.end_date = this.endDate;
    }
    if (this.requestType) {
      params.request_type = this.requestType;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.inwardRequestService.getInwardRequests(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.requests = response.data.requests || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading inward requests', 'error');
        console.error('Error loading inward requests:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadRequests();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadRequests();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadRequests();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadRequests();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadRequests();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.request_id;
  }

  onRefresh(): void {
    this.loadRequests();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onView(row: any): void {
    this.router.navigate(['/app/inward-requests/view', row.request_id]);
  }
  onEdit(request: any) {
    if (!request || !request.request_id) return;

    console.log('Clicked record:', request); // ✅ Debug the clicked record

    // Navigate to the edit page with the request ID
    this.router.navigate(['/app/inward-requests/edit', request.request_id]);
  }


  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.requests.map(request => ({
      'Request Number': `#${request.request_number || '-'}`,
      'Request Type': request.request_type || '-',
      'Title': request.request_title || '-',
      'Requested By': request.requested_by_name || '-',
      'Assigned To': request.assigned_to_name || '-',
      'Status': request.status || '-',
      'Created Date': this.formatDate(request.created_at)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `inward-requests-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `inward-requests-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  onRequestTypeChange(type: string | null | undefined): void {
    this.requestType = type || undefined;
    this.pagination.page = 1;
    this.loadRequests();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadRequests();
  }

  resolveRequest(requestId: number): void {
    this.dialogService.confirm({
      title: 'Resolve Request',
      message: 'Are you sure you want to resolve this inward request?',
      confirmText: 'Resolve',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.inwardRequestService.resolveRequest(requestId, {}).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Request resolved successfully', 'success');
              this.loadRequests();
            }
          },
          error: () => {
            this.toastService.show('Failed to resolve request', 'error');
          }
        });
      }
    });
  }
  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete request',
      message: `Are you sure you want to delete "${row.request_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.inwardRequestService. deleteInwardRequest(row.request_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('request deleted successfully', 'success');
              this.loadRequests();
            }
          },
          error: () => {
            this.toastService.show('Error deleting request', 'error');
          }
        });
      }
    });
  }

  getSelectedRequest(): any {
    return this.requests.find(r => r.request_id === this.selectedRowId);
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
