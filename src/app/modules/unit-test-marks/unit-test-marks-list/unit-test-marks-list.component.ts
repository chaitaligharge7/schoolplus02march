import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { UnitTestMarksService } from '../../../shared/services/unit-test-marks.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-unit-test-marks-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './unit-test-marks-list.component.html',
  styleUrls: ['./unit-test-marks-list.component.scss']
})
export class UnitTestMarksListComponent implements OnInit {
  marks: any[] = [];
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
      key: 'unit_number', 
      label: 'Unit', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '-'
    },
    { 
      key: 'marks_obtained', 
      label: 'Marks Obtained', 
      sortable: true,
      type: 'number',
      format: (value: any, row?: any) => {
        return `${value || 0} / ${row?.total_marks || 0}`;
      }
    },
    { 
      key: 'percentage', 
      label: 'Percentage', 
      sortable: true,
      type: 'number',
      format: (value: any) => {
        return value ? `${value}%` : '0%';
      }
    },
    { 
      key: 'test_date', 
      label: 'Test Date', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'test_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;
  unitNumber?: number;

  constructor(
    private unitTestMarksService: UnitTestMarksService,
    private academicYearService: AcademicYearService,
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
    this.loadMarks();
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

  loadMarks(): void {
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
    if (this.unitNumber) {
      params.unit_number = this.unitNumber;
    }

    this.unitTestMarksService.getUnitTestMarks(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.marks = response.data.marks || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading unit test marks', 'error');
        console.error('Error loading unit test marks:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadMarks();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadMarks();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadMarks();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadMarks();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadMarks();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.test_id;
  }

  onRefresh(): void {
    this.loadMarks();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/unit-test-marks/edit', row.test_id]);
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.marks.map(mark => ({
      'Student Name': `${mark.first_name || ''} ${mark.last_name || ''}`.trim(),
      'Admission Number': mark.admission_number || '-',
      'Class': mark.class_name || '-',
      'Subject': mark.subject_name || '-',
      'Unit': mark.unit_number || '-',
      'Marks Obtained': `${mark.marks_obtained || 0} / ${mark.total_marks || 0}`,
      'Percentage': mark.percentage ? `${mark.percentage}%` : '0%',
      'Test Date': this.formatDate(mark.test_date)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `unit-test-marks-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `unit-test-marks-${Date.now()}.pdf`, headers);
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
    this.loadMarks();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadMarks();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadMarks();
  }

  onUnitNumberChange(unitNumber: number | null | undefined): void {
    this.unitNumber = unitNumber || undefined;
    this.pagination.page = 1;
    this.loadMarks();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
