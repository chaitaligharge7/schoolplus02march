import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { BusDocumentService } from '../../../shared/services/bus-document.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-bus-document-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './bus-document-list.component.html',
  styleUrls: ['./bus-document-list.component.scss']
})
export class BusDocumentListComponent implements OnInit {
  documents: any[] = [];
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
      key: 'bus_number', 
      label: 'Bus', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || '-'}<br><small>${row?.route_name || '-'}</small>`;
      }
    },
    { 
      key: 'document_type', 
      label: 'Document Type', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'document_number', 
      label: 'Document Number', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'issue_date', 
      label: 'Issue Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'expiry_date', 
      label: 'Expiry Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'valid' ? 'badge-success' : 
                          value === 'expired' ? 'badge-danger' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'expiry_date';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  documentType?: string;
  busId?: string;

  constructor(
    private busDocumentService: BusDocumentService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
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
    if (this.documentType) {
      params.document_type = this.documentType;
    }
    if (this.busId) {
      params.bus_id = this.busId;
    }

    this.busDocumentService.getBusDocuments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.documents = response.data.documents || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading bus documents', 'error');
        console.error('Error loading bus documents:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadDocuments();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDocuments();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.document_id;
  }

  onRefresh(): void {
    this.loadDocuments();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.documents.map(doc => ({
      'Bus Number': doc.bus_number || '-',
      'Route': doc.route_name || '-',
      'Document Type': doc.document_type || '-',
      'Document Number': doc.document_number || '-',
      'Issue Date': this.formatDate(doc.issue_date),
      'Expiry Date': this.formatDate(doc.expiry_date),
      'Status': doc.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `bus-documents-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `bus-documents-${Date.now()}.pdf`, headers);
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

  onDocumentTypeChange(type: string | null | undefined): void {
    this.documentType = type || undefined;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onBusIdChange(busId: string | null | undefined): void {
    this.busId = busId || undefined;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  isExpiringSoon(expiryDate: string): boolean {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  }

  getSelectedDocument(): any {
    return this.documents.find(d => d.document_id === this.selectedRowId);
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
