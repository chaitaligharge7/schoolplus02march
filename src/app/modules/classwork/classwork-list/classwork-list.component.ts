import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ClassworkService } from '../../../shared/services/classwork.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-classwork-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './classwork-list.component.html',
  styleUrls: ['./classwork-list.component.scss']
})
export class ClassworkListComponent implements OnInit {
  classwork: any[] = [];
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
      key: 'classwork_title', 
      label: 'Title', 
      sortable: true 
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true 
    },
    { 
      key: 'section_name', 
      label: 'Section', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'subject_name', 
      label: 'Subject', 
      sortable: true 
    },
    { 
      key: 'assigned_date', 
      label: 'Assigned Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'due_date', 
      label: 'Due Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'total_submissions', 
      label: 'Submissions', 
      sortable: true,
      type: 'number',
      format: (value: any, row?: any) => {
        if (!value && value !== 0) return '0';
        const totalStudents = row?.total_students || 0;
        const completed = row?.completed_submissions || 0;
        return `${completed}/${totalStudents}`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'assigned_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;

  constructor(
    private classworkService: ClassworkService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadClasswork();
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

  loadSubjects(classId?: number): void {
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.subjects = [];
    }
  }

  loadClasswork(): void {
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

    this.classworkService.getClasswork(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.classwork = response.data.classwork || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading classwork', 'error');
        console.error('Error loading classwork:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadClasswork();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadClasswork();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadClasswork();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadClasswork();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadClasswork();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.classwork_id;
  }

  onRefresh(): void {
    this.loadClasswork();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/classwork/edit', row.classwork_id]);
  }

  onView(row: any): void {
    this.router.navigate(['/app/classwork/view', row.classwork_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Classwork',
      message: `Are you sure you want to delete "${row.classwork_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {

        this.classworkService
          .deleteClasswork({ classwork_id: row.classwork_id })
          .subscribe({
            next: (response) => {
              if (response.status === 'success') {
                this.toastService.show('Classwork deleted successfully', 'success');
          
                this.loadClasswork(); 
                
              } else {
                this.toastService.show(response.message || 'Failed to delete classwork', 'error');
              }
            },
            error: () => {
              this.toastService.show('Error deleting classwork', 'error');
            }
          });

      }
    });
  } 

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.classwork.map(cw => ({
      'Title': cw.classwork_title,
      'Class': cw.class_name,
      'Section': cw.section_name || '-',
      'Subject': cw.subject_name,
      'Assigned Date': this.formatDate(cw.assigned_date),
      'Due Date': this.formatDate(cw.due_date),
      'Submissions': `${cw.completed_submissions || 0}/${cw.total_submissions || 0}`
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `classwork-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `classwork-${Date.now()}.pdf`, headers);
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
    this.loadClasswork();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.subjectId = undefined; 
    this.subjects = [];
    if (classId) {
      this.loadSubjects(classId);
    }
    this.pagination.page = 1;
    this.loadClasswork();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadClasswork();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
