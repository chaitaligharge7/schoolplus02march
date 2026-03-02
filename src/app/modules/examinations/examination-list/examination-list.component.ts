import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { ExaminationService } from '../../../shared/services/examination.service';
import { ExamTypeService } from '../../../shared/services/exam-type.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-examination-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.scss']
})
export class ExaminationListComponent implements OnInit {
  examinations: any[] = [];
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
      key: 'examination_name', 
      label: 'Examination Name', 
      sortable: true 
    },
    { 
      key: 'examination_code', 
      label: 'Code', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'exam_type_name', 
      label: 'Exam Type', 
      sortable: true 
    },
    { 
      key: 'start_date', 
      label: 'Start Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'end_date', 
      label: 'End Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'examination_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'Active' ? 'badge-success' : 
                          value === 'Completed' ? 'badge-info' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'start_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  examTypeId?: number;
  status?: string;

  get examTypeOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Types' }];
    const list = (this.examTypes || []).map((t) => ({ value: t.exam_type_id, label: t.exam_type_name || '' }));
    return [...all, ...list];
  }

  examinationStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'Scheduled', label: 'Scheduled' },
    { value: 'Ongoing', label: 'Ongoing' },
    { value: 'Completed', label: 'Completed' },
  ];

  constructor(
    private examinationService: ExaminationService,
    private examTypeService: ExamTypeService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadExamTypes();
    this.route.queryParams.subscribe((params) => {
      const examTypeId = params['exam_type_id'];
      if (examTypeId != null && examTypeId !== '') {
        this.examTypeId = Number(examTypeId);
        this.pagination.page = 1;
      }
      this.loadExaminations();
    });
  }

  loadExamTypes(): void {
    this.examTypeService.getExamTypes().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.examTypes = response.data.exam_types || [];
        }
      }
    });
  }

  loadExaminations(): void {
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
    if (this.examTypeId) {
      params.exam_type_id = this.examTypeId;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.examinationService.getExaminations(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.examinations = response.data.examinations || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading examinations', 'error');
        console.error('Error loading examinations:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadExaminations();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadExaminations();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadExaminations();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadExaminations();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadExaminations();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.examination_id;
  }

  onRefresh(): void {
    this.loadExaminations();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/examinations/edit', row.examination_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Examination',
      message: `Are you sure you want to delete "${row.examination_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.examinationService.deleteExamination(row.examination_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Examination deleted successfully', 'success');
              this.loadExaminations();
            }
          },
          error: () => {
            this.toastService.show('Error deleting examination', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.examinations.map(exam => ({
      'Examination Name': exam.examination_name,
      'Code': exam.examination_code || '-',
      'Exam Type': exam.exam_type_name,
      'Start Date': this.formatDate(exam.start_date),
      'End Date': this.formatDate(exam.end_date),
      'Status': exam.examination_status
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `examinations-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `examinations-${Date.now()}.pdf`, headers);
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

  onExamTypeChange(examTypeId: number | null | undefined): void {
    this.examTypeId = examTypeId || undefined;
    this.pagination.page = 1;
    this.loadExaminations();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadExaminations();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
