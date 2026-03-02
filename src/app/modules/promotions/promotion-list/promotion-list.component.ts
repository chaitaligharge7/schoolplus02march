import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { PromotionService } from '../../../shared/services/promotion.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-promotion-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  promotions: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
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
      key: 'student_name', 
      label: 'Student', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || '-'}<br><small>${row?.admission_number || '-'}</small>`;
      }
    },
    { 
      key: 'from_class_name', 
      label: 'From Class', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'to_class_name', 
      label: 'To Class', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'academic_year_name', 
      label: 'Academic Year', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'promotion_date', 
      label: 'Promotion Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-success">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'promotion_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;

  constructor(
    private promotionService: PromotionService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadPromotions();
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

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  loadPromotions(): void {
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
    if (this.academicYearId) {
      params.academic_year_id = this.academicYearId;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }

    this.promotionService.getPromotions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.promotions = response.data.promotions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading promotions', 'error');
        console.error('Error loading promotions:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadPromotions();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadPromotions();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadPromotions();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadPromotions();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadPromotions();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.promotion_id;
  }

  onRefresh(): void {
    this.loadPromotions();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.promotions.map(promotion => ({
      'Student': promotion.student_name || '-',
      'Admission No.': promotion.admission_number || '-',
      'From Class': promotion.from_class_name || '-',
      'To Class': promotion.to_class_name || '-',
      'Academic Year': promotion.academic_year_name || '-',
      'Promotion Date': this.formatDate(promotion.promotion_date),
      'Status': promotion.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `promotions-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `promotions-${Date.now()}.pdf`, headers);
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
    this.loadPromotions();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadPromotions();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
