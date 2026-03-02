import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ExamTypeService } from '../../../shared/services/exam-type.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-exam-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './exam-type-list.component.html',
  styleUrls: ['./exam-type-list.component.scss']
})
export class ExamTypeListComponent implements OnInit {
  examTypes: any[] = [];
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
      key: 'exam_type_name', 
      label: 'Exam Type Name', 
      sortable: true 
    },
    { 
      key: 'exam_type_code', 
      label: 'Exam Type Code', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'total_examinations', 
      label: 'Examinations', 
      sortable: true,
      type: 'number',
      link: { route: '/app/examinations', queryKey: 'exam_type_id', rowKey: 'exam_type_id' }
    }
  ];

  searchTerm = '';
  sortColumn = 'exam_type_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;

  constructor(
    private examTypeService: ExamTypeService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadExamTypes();
  }

  loadExamTypes(): void {
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

    this.examTypeService.getExamTypes(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.examTypes = response.data.exam_types || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading exam types', 'error');
        console.error('Error loading exam types:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadExamTypes();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadExamTypes();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadExamTypes();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadExamTypes();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadExamTypes();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.exam_type_id;
  }

  onRefresh(): void {
    this.loadExamTypes();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/exam-types/edit', row.exam_type_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Exam Type',
      message: `Are you sure you want to delete "${row.exam_type_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.examTypeService.deleteExamType(row.exam_type_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Exam type deleted successfully', 'success');
              this.loadExamTypes();
            }
          },
          error: () => {
            this.toastService.show('Error deleting exam type', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.examTypes.map(et => ({
      'Exam Type Name': et.exam_type_name,
      'Exam Type Code': et.exam_type_code || '-',
      'Examinations': et.total_examinations
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `exam-types-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `exam-types-${Date.now()}.pdf`, headers);
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
