import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { PeriodService } from '../../../shared/services/period.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-period-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss']
})
export class PeriodListComponent implements OnInit {
  periods: any[] = [];
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
      key: 'period_name', 
      label: 'Period Name', 
      sortable: true 
    },
    { 
      key: 'start_time', 
      label: 'Start Time', 
      sortable: true 
    },
    { 
      key: 'end_time', 
      label: 'End Time', 
      sortable: true 
    },
    { 
      key: 'start_time', 
      label: 'Duration', 
      sortable: false,
      format: (value: any, row?: any) => {
        if (!row?.start_time || !row?.end_time) return '-';
        return this.calculateDuration(row.start_time, row.end_time);
      }
    },
    { 
      key: 'period_order', 
      label: 'Order', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '-'
    }
  ];

  searchTerm = '';
  sortColumn = 'period_order';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;

  constructor(
    private periodService: PeriodService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPeriods();
  }

  loadPeriods(): void {
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

    this.periodService.getPeriods(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.periods = response.data.periods || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading periods', 'error');
        console.error('Error loading periods:', error);
      }
    });
  }

  calculateDuration(startTime: string, endTime: string): string {
    if (!startTime || !endTime) return '-';
    try {
      const start = new Date(`2000-01-01 ${startTime}`);
      const end = new Date(`2000-01-01 ${endTime}`);
      const diff = end.getTime() - start.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    } catch {
      return '-';
    }
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadPeriods();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadPeriods();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadPeriods();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadPeriods();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadPeriods();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.period_id;
  }

  onRefresh(): void {
    this.loadPeriods();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/periods/edit', row.period_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Period',
      message: `Are you sure you want to delete period "${row.period_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.periodService.deletePeriod(row.period_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Period deleted successfully', 'success');
              this.loadPeriods();
            }
          },
          error: () => {
            this.toastService.show('Error deleting period', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.periods.map(period => ({
      'Period Name': period.period_name,
      'Start Time': period.start_time,
      'End Time': period.end_time,
      'Duration': this.calculateDuration(period.start_time, period.end_time),
      'Order': period.period_order || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `periods-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `periods-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
