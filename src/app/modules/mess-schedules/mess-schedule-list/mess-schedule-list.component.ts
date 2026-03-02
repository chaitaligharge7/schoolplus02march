import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { MessScheduleService } from '../../../shared/services/mess-schedule.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';


@Component({
  selector: 'app-mess-schedule-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, DateFormatPipe],
  templateUrl: './mess-schedule-list.component.html',
  styleUrls: ['./mess-schedule-list.component.scss']
})
export class MessScheduleListComponent implements OnInit {
  schedules: any[] = [];
  academicYears: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  expandedScheduleId: number | null = null;
  scheduleMeals: { [key: number]: any[] } = {};
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'schedule_type', 
      label: 'Schedule Type', 
      sortable: true,
      format: (value: any) => {
        return value ? value.charAt(0).toUpperCase() + value.slice(1) : '-';
      }
    },
    { 
      key: 'week_start_date', 
      label: 'Week Start', 
      sortable: true,
      type: 'date',
      format: (value: any, row?: any) => {
        return `${value || '-'} - ${row?.week_end_date || '-'}`;
      }
    },
    { 
      key: 'meal_count', 
      label: 'Meals', 
      sortable: true,
      type: 'number',
      format: (value: any) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      }
    },
    { 
      key: 'academic_year_name', 
      label: 'Academic Year', 
      sortable: true,
      format: (value: any) => value || '-'
    }
  ];

  searchTerm = '';
  sortColumn = 'week_start_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  scheduleType?: string;

  constructor(
    private messScheduleService: MessScheduleService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadSchedules();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
  }
loadSchedules(): void {
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
  if (this.academicYearId) params.academic_year_id = this.academicYearId;
  if (this.scheduleType) params.schedule_type = this.scheduleType;

  this.messScheduleService.getSchedules(params).subscribe({
    next: (response) => {
      this.loading = false;

      if (response.status === 'success' && response.data?.schedules) {

        this.schedules = response.data.schedules.map((s: any) => {
          return {
            ...s,
            schedule_id: s.schedule_id || s.id,              
            week_start_date: s.week_start_date || '-',      
            week_end_date: s.week_end_date || '-',          
            academic_year_name: s.academic_year_name || '-',
            meal_count: s.meals?.length ?? s.meal_count ?? 0 
          };
        });

        this.pagination = response.data.pagination || this.pagination;

      } else {
        this.schedules = [];
        this.toastService.show(
          response.message || 'Failed to load mess schedules',
          'error'
        );
      }
    },

    error: (error) => {
      this.loading = false;
      this.schedules = [];
      this.toastService.show('Error loading mess schedules', 'error');
      console.error('Error loading mess schedules:', error);
    }
  });
  }

  toggleMeals(scheduleId: number): void {
    if (this.expandedScheduleId === scheduleId) {
      this.expandedScheduleId = null;
    } else {
      this.expandedScheduleId = scheduleId;
      if (!this.scheduleMeals[scheduleId]) {
        this.loadMeals(scheduleId);
      }
    }
  }

  loadMeals(scheduleId: number): void {
    this.messScheduleService.getMeals(scheduleId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.scheduleMeals[scheduleId] = response.data.meals || [];
        }
      },
      error: () => {
        this.toastService.show('Error loading schedule meals', 'error');
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadSchedules();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSchedules();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.schedule_id;
  }

  onRefresh(): void {
    this.loadSchedules();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEdit(schedule: any): void {
  if (!schedule?.schedule_id) {
    this.toastService.show('Invalid schedule selected', 'error');
    return;
  }
  this.router.navigate(['/app/mess-schedules/edit', schedule.schedule_id]);
 }

  onDelete(schedule: any): void {
  const scheduleId = schedule?.schedule_id;

  if (!scheduleId) {
    this.toastService.show('Invalid schedule selected', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Delete Mess Schedule',
    message: 'Are you sure you want to delete this schedule?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed: boolean) => {
    if (confirmed) {
      this.messScheduleService.deleteSchedule(scheduleId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.show('Schedule deleted successfully', 'success');
            this.loadSchedules();
          } else {
            this.toastService.show(response.message || 'Failed to delete schedule', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error deleting schedule', 'error');
        }
      });
    }
  });
}


  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.schedules.map(schedule => ({
      'Schedule Type': schedule.schedule_type ? schedule.schedule_type.charAt(0).toUpperCase() + schedule.schedule_type.slice(1) : '-',
      'Week Start': this.formatDate(schedule.week_start_date),
      'Week End': this.formatDate(schedule.week_end_date),
      'Meals': schedule.meal_count || 0,
      'Academic Year': schedule.academic_year_name || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `mess-schedules-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `mess-schedules-${Date.now()}.pdf`, headers);
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

  onAcademicYearChange(yearId: number | null | undefined): void {
    this.academicYearId = yearId || undefined;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onScheduleTypeChange(type: string | null | undefined): void {
    this.scheduleType = type || undefined;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
