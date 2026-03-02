import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { RemedialService } from '../../../shared/services/remedial.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-remedial-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SliderComponent],
  templateUrl: './remedial-list.component.html',
  styleUrls: ['./remedial-list.component.scss']
})
export class RemedialListComponent implements OnInit {
  batches: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  expandedBatchId: number | null = null;
  batchStudents: { [key: number]: any[] } = {};
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'batch_name', 
      label: 'Batch Name', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || '-'} - ${row?.subject_name || '-'}`;
      }
    },
    { 
      key: 'student_count', 
      label: 'Students', 
      sortable: true,
      type: 'number',
      
      format: (value: any) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      }
    },
    { 
      key: 'schedule_time', 
      label: 'Schedule', 
      sortable: false,
      format: (value: any, row?: any) => {
        return `${value || '-'}${row?.schedule_days ? ' | ' + row.schedule_days : ''}`;
      }
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
  sortColumn = 'batch_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;
  // sliderVisible = false;

  constructor(
    private remedialService: RemedialService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService,
    private exportService: ExportService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadBatches();
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

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadBatches(): void {
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
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }

    this.remedialService.getBatches(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.batches = response.data.batches || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading remedial batches', 'error');
        console.error('Error loading remedial batches:', error);
      }
    });
  }

  toggleStudents(batchId: number): void {
    if (this.expandedBatchId === batchId) {
      this.expandedBatchId = null;
    } else {
      this.expandedBatchId = batchId;
      if (!this.batchStudents[batchId]) {
        this.loadBatchStudents(batchId);
      }
    }
  }

  loadBatchStudents(batchId: number): void {
    this.remedialService.getBatchStudents(batchId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          console.log('Batch students:', response.data.students);

          this.batchStudents[batchId] = response.data.students || [];
        }
      },
      error: () => {
        this.toastService.show('Error loading batch students', 'error');
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadBatches();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBatches();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadBatches();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadBatches();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadBatches();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.batch_id;
    this.toggleStudents(row.batch_id); 
  }

  onRefresh(): void {
    this.loadBatches();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/remedial/edit', row.batch_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Remedial Batch',
      message: `Are you sure you want to delete this batch (ID: ${row.batch_id})?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.remedialService.deleteBatch(row.batch_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Batch deleted successfully', 'success');
              this.loadBatches();
            } else {
              this.toastService.show(response.message || 'Delete failed', 'error');
            }
          },
          error: () => {
            this.toastService.show('Error deleting batch', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.batches.map(batch => ({
      'Batch Name': batch.batch_name || '-',
      'Class': batch.class_name || '-',
      'Subject': batch.subject_name || '-',
      'Students': batch.student_count || 0,
      'Schedule Time': batch.schedule_time || '-',
      'Schedule Days': batch.schedule_days || '-',
      'Status': batch.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `remedial-batches-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `remedial-batches-${Date.now()}.pdf`, headers);
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
    this.loadBatches();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadBatches();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadBatches();
  }

  // Function to open slider
  onAddStudent() {
    this.sliderVisible = true; 
  }
  private _sliderVisible = false;

  get sliderVisible(): boolean {
    return this._sliderVisible;
  }

  set sliderVisible(value: boolean) {
    this._sliderVisible = value;
    // When slider closes, refresh the table automatically
    if (!value) {
      this.loadBatches();
    }
  }
  
  onDeleteStudent(remedialStudentId: number) {
    this.dialogService.confirm({
      title: 'Remove Student',
      message: 'Are you sure you want to remove this student from the batch?',
      confirmText: 'Remove',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.remedialService.removeStudent(remedialStudentId).subscribe({
          next: (res) => {
            if (res.status === 'success') {
              this.toastService.show('Student removed successfully', 'success');

              if (this.expandedBatchId) {
                this.loadBatchStudents(this.expandedBatchId);
              }

              this.loadBatches();

            } else {
              this.toastService.show(res.message || 'Failed to remove student', 'error');
            }
          },
          error: () => {
            this.toastService.show('Error removing student', 'error');
          }
        });
      }
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
