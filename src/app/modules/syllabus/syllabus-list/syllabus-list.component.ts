import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SyllabusService } from '../../../shared/services/syllabus.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-syllabus-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './syllabus-list.component.html',
  styleUrls: ['./syllabus-list.component.scss']
})
export class SyllabusListComponent implements OnInit {
  syllabus: any[] = [];
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
      key: 'syllabus_title', 
      label: 'Syllabus Name', 
      sortable: true 
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true 
    },
    { 
      key: 'subject_name', 
      label: 'Subject', 
      sortable: true 
    },
    { 
      key: 'academic_year_name', 
      label: 'Academic Year', 
      sortable: true 
    },
    // { 
    //   key: 'total_chapters', 
    //   label: 'Chapters', 
    //   sortable: true,
    //   type: 'number',
    //   format: (value: any, row?: any) => {
    //     if (!value && value !== 0) return '0';
    //     const completed = row?.completed_chapters || 0;
    //     return `${completed}/${value}`;
    //   }
    // },
    { 
      key: 'total_chapters', 
      label: 'Chapters', 
      sortable: true,
      type: 'number',
      format: (value: any, row?: any) => {
        if (!value) return '0%'; 
        const completed = row?.completed_chapters || 0;
        const percentage = Math.round((completed / value) * 100); 
        return `${percentage}%`; 
      }
    },
    { 
      key: 'created_at', 
      label: 'Created Date', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'created_at';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;

  constructor(
    private syllabusService: SyllabusService,
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
    this.loadSyllabus();
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

  loadSyllabus(): void {
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

    this.syllabusService.getSyllabus(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.syllabus = response.data.syllabus || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading syllabus', 'error');
        console.error('Error loading syllabus:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadSyllabus();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSyllabus();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSyllabus();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSyllabus();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSyllabus();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.syllabus_id;
  }

  onRefresh(): void {
    this.loadSyllabus();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/syllabus/edit', row.syllabus_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Syllabus',
      message: `Are you sure you want to delete syllabus for ${row.class_name} - ${row.subject_name}?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.syllabusService.deleteSyllabus(row.syllabus_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Syllabus deleted successfully', 'success');
              this.loadSyllabus();
            }
          },
          error: () => {
            this.toastService.show('Error deleting syllabus', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.syllabus.map(syl => ({
      'Syllabus Name': syl.syllabus_name,
      'Class': syl.class_name,
      'Subject': syl.subject_name,
      'Academic Year': syl.academic_year_name,
      'Chapters': `${syl.completed_chapters || 0}/${syl.total_chapters || 0}`,
      'Created Date': this.formatDate(syl.created_at)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `syllabus-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `syllabus-${Date.now()}.pdf`, headers);
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
    this.loadSyllabus();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.subjectId = undefined; // Reset subject when class changes
    this.subjects = [];
    if (classId) {
      this.loadSubjects(classId);
    }
    this.pagination.page = 1;
    this.loadSyllabus();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadSyllabus();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
