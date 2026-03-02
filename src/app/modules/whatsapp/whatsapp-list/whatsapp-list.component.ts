import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { WhatsAppService } from '../../../shared/services/whatsapp.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-whatsapp-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './whatsapp-list.component.html',
  styleUrls: ['./whatsapp-list.component.scss']
})
export class WhatsAppListComponent implements OnInit {
  whatsappList: any[] = [];
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
      key: 'sent_date', 
      label: 'Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'recipient_name', 
      label: 'Recipient', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || '-'}<br><small>${row?.recipient_mobile || '-'}</small>`;
      }
    },
    { 
      key: 'message', 
      label: 'Message', 
      sortable: true,
      format: (value: any) => {
        if (!value) return '-';
        return value.length > 100 ? value.substring(0, 100) + '...' : value;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'sent' ? 'badge-success' : 
                          value === 'pending' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    },
    { 
      key: 'message_type', 
      label: 'Type', 
      sortable: true,
      format: (value: any) => value || '-'
    }
  ];

  searchTerm = '';
  sortColumn = 'sent_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  status?: string;

  whatsappStatusOptions: { value: string | null; label: string }[] = [
    { value: null, label: 'All Status' },
    { value: 'sent', label: 'Sent' },
    { value: 'pending', label: 'Pending' },
    { value: 'failed', label: 'Failed' },
  ];

  constructor(
    private whatsappService: WhatsAppService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWhatsAppList();
  }

  loadWhatsAppList(): void {
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
    if (this.status) {
      params.status = this.status;
    }

    this.whatsappService.getWhatsAppList(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.whatsappList = response.data.whatsapp_list || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading WhatsApp list', 'error');
        console.error('Error loading WhatsApp list:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadWhatsAppList();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadWhatsAppList();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadWhatsAppList();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadWhatsAppList();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadWhatsAppList();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.whatsapp_id || row.id;
  }

  onRefresh(): void {
    this.loadWhatsAppList();
  }

  onAdd(): void {
    this.router.navigate(['/app/whatsapp/send']);
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.whatsappList.map(msg => ({
      'Date': this.formatDate(msg.sent_date),
      'Recipient': msg.recipient_name || '-',
      'Mobile': msg.recipient_mobile || '-',
      'Message': msg.message || '-',
      'Status': msg.status || '-',
      'Type': msg.message_type || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `whatsapp-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `whatsapp-${Date.now()}.pdf`, headers);
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

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadWhatsAppList();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
