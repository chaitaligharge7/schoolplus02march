import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { VisitorService } from '../../../shared/services/visitor.service';

@Component({
  selector: 'app-visitor-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements OnInit {
  visitors: any[] = [];
  categories: any[] = [];
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
      key: 'visitor_name', 
      label: 'Visitor Name', 
      sortable: true 
    },
    { 
      key: 'visitor_phone', 
      label: 'Phone', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'visitor_category', 
      label: 'Category', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'purpose_of_visit', 
      label: 'Purpose', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'visit_date', 
      label: 'Visit Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'check_in_time', 
      label: 'Check In', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'check_out_time', 
      label: 'Check Out', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'checked_out' ? 'badge-success' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'visit_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  visitorCategory?: string;
  status?: string;

  get visitorCategoryOptions(): { value: string | undefined; label: string }[] {
    const all: { value: string | undefined; label: string }[] = [{ value: undefined, label: 'All Categories' }];
    const list = (this.categories || []).map((c) => ({ value: c.category_name, label: c.category_name || '' }));
    return [...all, ...list];
  }

  visitorStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'checked_in', label: 'Checked In' },
    { value: 'checked_out', label: 'Checked Out' },
  ];

  constructor(
    private visitorService: VisitorService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadVisitors();
  }

  loadCategories(): void {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.categories = response.data?.categories || [];
        }
      }
    });
  }

  loadVisitors(): void {
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
    if (this.visitorCategory) {
      params.visitor_category = this.visitorCategory;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.visitorService.getVisitors(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.visitors = response.data.visitors || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading visitors', 'error');
        console.error('Error loading visitors:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadVisitors();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadVisitors();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadVisitors();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadVisitors();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadVisitors();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.visitor_id;
  }

  onRefresh(): void {
    this.loadVisitors();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.visitors.map(visitor => ({
      'Visitor Name': visitor.visitor_name || '-',
      'Phone': visitor.visitor_phone || '-',
      'Category': visitor.visitor_category || '-',
      'Purpose': visitor.purpose_of_visit || '-',
      'Visit Date': this.formatDate(visitor.visit_date),
      'Check In': visitor.check_in_time || '-',
      'Check Out': visitor.check_out_time || '-',
      'Status': visitor.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `visitors-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `visitors-${Date.now()}.pdf`, headers);
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

  onVisitorCategoryChange(category: string | null | undefined): void {
    this.visitorCategory = category || undefined;
    this.pagination.page = 1;
    this.loadVisitors();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
