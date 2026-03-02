import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { WaterTdsService } from '../../../shared/services/water-tds.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-water-tds-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './water-tds-list.component.html',
  styleUrls: ['./water-tds-list.component.scss']
})
export class WaterTdsListComponent implements OnInit {
  readings: any[] = [];
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
      key: 'location', 
      label: 'Location', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'tds_value', 
      label: 'TDS Reading', 
      sortable: true,
      type: 'number',
      format: (value: any, row?: any) => {
        const tdsClass = value <= 500 ? 'tds-good' : value <= 1000 ? 'tds-warning' : 'tds-danger';
        return `<span class="tds-value ${tdsClass}">${value || 0} ppm</span>`;
      }
    },
    
     { 
      key: 'measurement_date', label: 'Measurement Date', sortable: true, type: 'date', format: (value: any) => {
      if (!value) return '-';
      const date = new Date(value);
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
    },
   
     { key: 'status', label: 'Status', sortable: true, format: (value: any, row: any) => {
      const tds = row.tds_value;
      let status = 'normal';
      if (tds > 500 && tds <= 1000) status = 'high';
      if (tds > 1000) status = 'critical';
      const badgeClass = status === 'normal' ? 'badge-success' : status === 'high' ? 'badge-warning' : 'badge-danger';
      return `<span class="badge ${badgeClass}">${status}</span>`;
    }
    },
    { 
      key: 'remarks', 
      label: 'Remarks', 
      sortable: false,
      format: (value: any) => value || '-'
    }
   ];

     searchTerm = '';
     sortColumn = 'reading_date';
     sortDirection: 'asc' | 'desc' = 'desc';
     startDate?: string;
     endDate?: string;
     location?: string;
  
  constructor(
    private waterTdsService: WaterTdsService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadReadings();
  }

  loadReadings(): void {
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
    if (this.location) {
      params.location = this.location;
    }
  this.waterTdsService.getWaterTdsReadings(params).subscribe({
  next: (response) => {
    this.loading = false;
    if (response.status === 'success' && response.data) {
      this.readings = response.data.tds || [];
      this.pagination = response.data.pagination || this.pagination;
    }
  },
  error: (error) => {
    this.loading = false;
    this.toastService.show('Error loading water TDS readings', 'error');
    console.error('Error loading water TDS readings:', error);
  }
});
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadReadings();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadReadings();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadReadings();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadReadings();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadReadings();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.reading_id;
  }

  onRefresh(): void {
    this.loadReadings();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(reading: any): void {
  if (!reading?.tds_id) {
    this.toastService.show('Invalid reading selected', 'error');
    return;
  }
  this.router.navigate(['/app/water-tds/edit', reading.tds_id]);
  }

 onDelete(reading: any): void {
  const tdsId = reading?.tds_id;

  if (!tdsId) {
    this.toastService.show('Invalid reading selected', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Delete TDS Reading',
    message: 'Are you sure you want to delete this TDS reading?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed: boolean) => {
    if (confirmed) {
      this.waterTdsService.deleteWaterTdsReading(tdsId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.show('TDS reading deleted successfully', 'success');
            this.loadReadings(); 
          } else {
            this.toastService.show(response.message || 'Failed to delete reading', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error deleting TDS reading', 'error');
        }
      });
    }
  });
}


  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.readings.map(reading => ({
      'Location': reading.location || '-',
      'TDS Reading': `${reading.tds_value || 0} ppm`,
      'Measurement Date': this.formatDate(reading.measurement_date),
      'Status': reading.status || '-',
      'Remarks': reading.remarks || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `water-tds-readings-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `water-tds-readings-${Date.now()}.pdf`, headers);
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

  onLocationChange(location: string | null | undefined): void {
    this.location = location || undefined;
    this.pagination.page = 1;
    this.loadReadings();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
