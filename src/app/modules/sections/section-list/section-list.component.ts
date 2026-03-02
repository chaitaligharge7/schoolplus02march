import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SectionService } from '../../../shared/services/section.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-section-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  sections: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'section_name', 
      label: 'Section Name', 
      sortable: true 
    },
    { 
      key: 'section_code', 
      label: 'Section Code', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true 
    },
    { 
      key: 'total_students', 
      label: 'Students', 
      sortable: true,
      type: 'number',
      link: { route: '/app/students', queryKey: 'section_id', rowKey: 'section_id' }
    }
  ];

  searchTerm = '';
  sortColumn = 'section_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  classId?: number;
  showFilters = false;

  get classOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Classes' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  constructor(
    private sectionService: SectionService,
    private classService: ClassService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.route.queryParams.subscribe((params) => {
      const classId = params['class_id'];
      if (classId != null && classId !== '') {
        this.classId = Number(classId);
        this.pagination.page = 1;
      }
      this.loadSections();
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

  loadSections(): void {
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

    this.sectionService.getSections(this.classId, params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.sections = response.data.sections || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading sections', 'error');
        console.error('Error loading sections:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadSections();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSections();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSections();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSections();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSections();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.section_id;
  }

  onRefresh(): void {
    this.loadSections();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/sections/edit', row.section_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Section',
      message: `Are you sure you want to delete "${row.section_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.sectionService.deleteSection(row.section_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Section deleted successfully', 'success');
              this.loadSections();
            }
          },
          error: () => {
            this.toastService.show('Error deleting section', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.sections.map(section => ({
      'Section Name': section.section_name,
      'Section Code': section.section_code || '-',
      'Class': section.class_name,
      'Students': section.total_students
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `sections-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `sections-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadSections();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
