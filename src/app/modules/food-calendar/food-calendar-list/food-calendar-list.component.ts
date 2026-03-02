import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { FoodCalendarService } from '../../../shared/services/food-calendar.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-food-calendar-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './food-calendar-list.component.html',
  styleUrls: ['./food-calendar-list.component.scss']
})
export class FoodCalendarListComponent implements OnInit {
  calendar: any[] = [];
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
      key: 'meal_date', 
      label: 'Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'meal_type', 
      label: 'Meal Type', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'menu_item', 
      label: 'Menu Item', 
      sortable: false,
      format: (value: any) => value || '-'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'all' ? 'badge-success' : 'badge-secondary';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'meal_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  mealType?: string;

  constructor(
    private foodCalendarService: FoodCalendarService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCalendar();
  }

   loadCalendar(): void {
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
  if (this.mealType) params.meal_type = this.mealType;

  this.foodCalendarService.getFoodCalendar(params).subscribe({
    next: (response) => {
      this.loading = false;
      if (response.status === 'success' && response.data?.foods?.length > 0) {
      
        this.calendar = response.data.foods.map((item: any) => ({
          ...item,
        menu_item: item.meal_description || '-', 
        status: item.status || '-'            
        }));
        this.pagination.total = this.calendar.length;
      } else {
        this.calendar = [];
        this.pagination.total = 0;
      }
    },
    error: (error) => {
      this.loading = false;
      this.toastService.show('Error loading food calendar', 'error');
    }
  });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCalendar();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCalendar();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCalendar();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCalendar();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCalendar();
  }
  onRowSelect(row: any): void {
  this.selectedRowId = row.food_id;
}

  onRefresh(): void {
    this.loadCalendar();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/food-calendar/edit', row.food_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Food Calendar',
      message: `Are you sure you want to delete this food calendar entry?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'warning'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.foodCalendarService.deleteFoodCalendar(row.food_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Food calendar deleted successfully', 'success');
              this.loadCalendar();
            }
          },
          error: () => {
            this.toastService.show('Error deleting food calendar', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.calendar.map(entry => ({
      'Date': this.formatDate(entry.meal_date),
      'Meal Type': entry.meal_type || '-',
      'Menu Items': entry.menu_items || '-',
      'Status': entry.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `food-calendar-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `food-calendar-${Date.now()}.pdf`, headers);
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

  onMealTypeChange(type: string | null | undefined): void {
    this.mealType = type || undefined;
    this.pagination.page = 1;
    this.loadCalendar();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
