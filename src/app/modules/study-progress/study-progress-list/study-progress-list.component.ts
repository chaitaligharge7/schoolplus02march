import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { StudyProgressService } from '../../../shared/services/study-progress.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-study-progress-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './study-progress-list.component.html',
  styleUrls: ['./study-progress-list.component.scss']
})
export class StudyProgressListComponent implements OnInit {
  progressList: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
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
        return `${row?.first_name || ''} ${row?.last_name || ''}`.trim() || '-';
      }
    },
    { 
      key: 'admission_number', 
      label: 'Admission No.', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'subject_name', 
      label: 'Subject', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'completion_percentage', 
      label: 'Progress %', 
      sortable: true,
      type: 'number',
      format: (value: any) => {
        return value ? `${value}%` : '0%';
      }
    },
    { 
      key: 'updated_at', 
      label: 'Last Updated', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'last_updated';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;

  constructor(
    private studyProgressService: StudyProgressService,
    private academicYearService: AcademicYearService,
    private dialogService: DialogService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadProgress();
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

  loadProgress(): void {
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

    this.studyProgressService.getStudyProgress(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.progressList = response.data.progress || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading study progress', 'error');
        console.error('Error loading study progress:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadProgress();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadProgress();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadProgress();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadProgress();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadProgress();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.progress_id;
  }

  onRefresh(): void {
    this.loadProgress();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEdit(row: any): void {
    this.router.navigate(['/app/study-progress/edit', row.id]);
  } 

  onDelete(row: any): void {
    const studentName = `${row.first_name || ''} ${row.last_name || ''}`.trim() || '-';

    this.dialogService.confirm({
      title: 'Deactivate Student',
      message: `Are you sure you want to deactivate "${studentName}"?`,
      confirmText: 'Deactivate',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.studyProgressService.deleteStudyProgress({ id: row.id }).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Student deactivated successfully', 'success');
              this.loadProgress();
            }
          },
          error: () => {
            this.toastService.show('Error deactivating student', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.progressList.map(progress => ({
      'Student Name': `${progress.first_name || ''} ${progress.last_name || ''}`.trim(),
      'Admission Number': progress.admission_number || '-',
      'Class': progress.class_name || '-',
      'Subject': progress.subject_name || '-',
      'Progress %': progress.completion_percentage ? `${progress.completion_percentage}%` : '0%',
      'Last Updated': this.formatDate(progress.last_updated)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `study-progress-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `study-progress-${Date.now()}.pdf`, headers);
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
    this.loadProgress();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadProgress();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadProgress();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
