import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ClassDetailSliderComponent } from '../class-detail-slider/class-detail-slider.component';
import { ClassService } from '../../../shared/services/class.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, ClassDetailSliderComponent],
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classes: any[] = [];
  academicYears: any[] = [];
  loading = false;
  selectedRowId?: number;
  sliderClass: any = null;
  sliderVisible = false;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'class_name', 
      label: 'Class Name', 
      sortable: true 
    },
    { 
      key: 'class_code', 
      label: 'Class Code', 
      sortable: true 
    },
    { 
      key: 'class_level', 
      label: 'Level', 
      sortable: true,
      type: 'number'
    },
    { 
      key: 'total_sections', 
      label: 'Sections', 
      sortable: true,
      type: 'number',
      link: { route: '/app/sections', queryKey: 'class_id', rowKey: 'class_id' }
    },
    { 
      key: 'total_students', 
      label: 'Students', 
      sortable: true,
      type: 'number',
      link: { route: '/app/students', queryKey: 'class_id', rowKey: 'class_id' }
    }
  ];

  searchTerm = '';
  sortColumn = 'class_level';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  subjectId?: number;
  showFilters = false;

  get academicYearOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Academic Years' }];
    const years = (this.academicYears || []).map(y => ({ value: y.academic_year_id, label: y.academic_year_name || '' }));
    return [...all, ...years];
  }

  constructor(
    private classService: ClassService,
    private academicYearService: AcademicYearService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.route.queryParams.subscribe((params) => {
      const academicYearId = params['academic_year_id'];
      const subjectId = params['subject_id'];
      if (academicYearId != null && academicYearId !== '') {
        this.academicYearId = Number(academicYearId);
        this.pagination.page = 1;
      }
      if (subjectId != null && subjectId !== '') {
        this.subjectId = Number(subjectId);
        this.pagination.page = 1;
      }
      this.loadClasses();
    });
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
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }

    this.classService.getClasses(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading classes', 'error');
        console.error('Error loading classes:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadClasses();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadClasses();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadClasses();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadClasses();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadClasses();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.class_id;
    this.sliderClass = row;
    this.sliderVisible = true;
  }

  onView(row: any): void {
    this.sliderClass = row;
    this.sliderVisible = true;
  }

  onRefresh(): void {
    this.loadClasses();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/classes/edit', row.class_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Class',
      message: `Are you sure you want to delete "${row.class_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.classService.deleteClass(row.class_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Class deleted successfully', 'success');
              this.loadClasses();
            }
          },
          error: () => {
            this.toastService.show('Error deleting class', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.classes.map(cls => ({
      'Class Name': cls.class_name,
      'Class Code': cls.class_code,
      'Level': cls.class_level,
      'Sections': cls.total_sections,
      'Students': cls.total_students
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `classes-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `classes-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onAcademicYearChange(yearId: number | null | undefined): void {
    this.academicYearId = yearId || undefined;
    this.pagination.page = 1;
    this.loadClasses();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
