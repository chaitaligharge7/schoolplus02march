import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { TransportService } from '../../../shared/services/transport.service';

@Component({
  selector: 'app-transport-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss']
})
export class TransportListComponent implements OnInit {
  routes: any[] = [];
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
    key: 'route_name',
    label: 'Route Name',
    sortable: true
  },
  {
    key: 'vehicle_number',
    label: 'Vehicle Number',
    sortable: true,
    format: (value: any) => value || '-'
  },
  {
    key: 'driver_name',
    label: 'Driver Name',
    sortable: true,
    format: (value: any) => value || '-'
  },
  {
    key: 'driver_phone',  // make sure key matches API
    label: 'Driver Mobile',
    sortable: true,
    format: (value: any) => value || '-'
  },
  {
    key: 'route_start_point',
    label: 'Route Details',
    sortable: true,
    format: (value: any, row?: any) => {
      if (!value && !row?.route_end_point) return '-';
      return `${value || ''} → ${row?.route_end_point || ''}`;
    }
  },
  {
    key: 'route_fee',
    label: 'Fare',
    sortable: true,
    type: 'number',
    format: (value: any) =>
      `₹${Number(value || 0).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`
  },
  {
    key: 'route_status',
    label: 'Route Status',
    sortable: true,
    format: (value: any) => {
      const statusText = value === 1 ? 'Active' : value === 0 ? 'Inactive' : '-';
      const badgeClass = statusText === 'Active' ? 'badge-success' : statusText === 'Inactive' ? 'badge-danger' : 'badge-secondary';
      return `<span class="badge ${badgeClass}">${statusText}</span>`;
    }
  },
  {
    key: 'vehicle_status', // use this for vehicle status badge
    label: 'Vehicle Status',
    sortable: true,
    format: (value: any) => {
      let statusText = '-';
      let badgeClass = 'badge-secondary';
      if (value === 'active') { statusText = 'Active'; badgeClass = 'badge-success'; }
      else if (value === 'inactive') { statusText = 'Inactive'; badgeClass = 'badge-danger'; }
      else if (value === 'maintenance') { statusText = 'Maintenance'; badgeClass = 'badge-warning'; }
      return `<span class="badge ${badgeClass}">${statusText}</span>`;
    }
  }
];



  searchTerm = '';
  sortColumn = 'route_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  routeName?: string;

  constructor(
    private transportService: TransportService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRoutes();
  }

loadRoutes(): void {
  this.loading = true;

  const params: any = {
    page: this.pagination.page,
    limit: this.pagination.limit,
    sort_column: this.sortColumn,
    sort_direction: this.sortDirection.toUpperCase()
  };

  if (this.searchTerm) params.search = this.searchTerm;
  if (this.startDate) params.start_date = this.startDate;
  if (this.endDate) params.end_date = this.endDate;
  if (this.routeName) params.route_name = this.routeName;

  console.group('🚀 Loading Routes'); // Group logs for clarity
  console.log('Request Params:', params);

  this.transportService.getRoutes(params).subscribe({
    next: (response) => {
      this.loading = false;
      console.log('Full API Response:', response);

      if (response.status === 'success' && response.data) {
        this.routes = response.data.routes || [];
        this.pagination = response.data.pagination || this.pagination;

        console.log('Parsed Routes:', this.routes);
        console.log('Updated Pagination:', this.pagination);
      } else {
        console.warn('API returned no data or status not success:', response);
      }
      console.groupEnd();
    },
    error: (error) => {
      this.loading = false;
      this.toastService.show('Error loading routes', 'error');
      console.error('Error fetching routes:', error);
      console.groupEnd();
    }
  });
  }


  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadRoutes();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadRoutes();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadRoutes();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadRoutes();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadRoutes();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.route_id;
  }

  onRefresh(): void {
    this.loadRoutes();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/transport/edit', row.route_id]);
  }

  onView(row: any): void {
    this.router.navigate(['/app/transport/view', row.route_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Route',
      message: `Are you sure you want to delete route "${row.route_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.transportService.deleteRoute(row.route_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Route deleted successfully', 'success');
              this.loadRoutes();
            }
          },
          error: () => {
            this.toastService.show('Error deleting route', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.routes.map(route => ({
      'Route Name': route.route_name,
      'Vehicle Number': route.vehicle_number || '-',
      'Driver Name': route.driver_name || '-',
      'Driver Mobile': route.driver_mobile || '-',
      'Route Details': `${route.start_location || ''} → ${route.end_location || ''}`,
      'Fare': `₹${Number(route.fare_amount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      'Status': route.route_status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `transport-routes-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `transport-routes-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onRouteNameChange(routeName: string | null | undefined): void {
    this.routeName = routeName || undefined;
    this.pagination.page = 1;
    this.loadRoutes();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
