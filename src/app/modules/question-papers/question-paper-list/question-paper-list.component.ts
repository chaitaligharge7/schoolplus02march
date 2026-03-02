import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { QuestionPaperService } from '../../../shared/services/question-paper.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-question-paper-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './question-paper-list.component.html',
  styleUrls: ['./question-paper-list.component.scss']
})
export class QuestionPaperListComponent implements OnInit {
  papers: any[] = [];
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
      key: 'paper_title', 
      label: 'Paper Title', 
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
      key: 'exam_type_name', 
      label: 'Exam Type', 
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
      // key: 'upload_date', 
      key: 'created_at', 
      label: 'Upload Date', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'upload_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;
  examTypeId?: number;

  constructor(
    private questionPaperService: QuestionPaperService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadPapers();
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

  loadPapers(): void {
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
    if (this.examTypeId) {
      params.exam_type_id = this.examTypeId;
    }

    this.questionPaperService.getQuestionPapers(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.papers = response.data.papers || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading question papers', 'error');
        console.error('Error loading question papers:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadPapers();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadPapers();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.paper_id;
  }

  onRefresh(): void {
    this.loadPapers();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
onEdit(row: any): void {
  this.router.navigate(['/app/question-papers/edit', row.paper_id]);
  }

  // onView(row: any): void {
  //   if (row.paper_file) {
  //     window.open(row.paper_file, '_blank');
  //   }
  // }

  onView(row: any): void {
    if (row.paper_file) {
      // Use environment.apiUrl and replace /php_includes with relative file path
      const baseUrl = environment.apiUrl.replace('/php_includes', ''); 
      const fileUrl = `${baseUrl}/${row.paper_file}`;
      window.open(fileUrl, '_blank');
    }
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Question Paper',
      message: `Are you sure you want to delete "${row.paper_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.questionPaperService.deleteQuestionPaper(row.paper_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.success('Question paper deleted successfully');
              this.loadPapers();
            } else {
              this.toastService.error(response.message || 'Failed to delete question paper');
            }
          },
          error: (err) => {
            console.error('Error deleting paper:', err);
            this.toastService.error('Error deleting question paper');
          }
        });
      } else {
        console.log('User canceled deletion'); 
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.papers.map(paper => ({
      'Paper Title': paper.paper_title || '-',
      'Class': paper.class_name || '-',
      'Subject': paper.subject_name || '-',
      'Exam Type': paper.exam_type_name || '-',
      'Academic Year': paper.academic_year_name || '-',
      'Upload Date': this.formatDate(paper.upload_date)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `question-papers-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `question-papers-${Date.now()}.pdf`, headers);
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
    this.loadPapers();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onExamTypeChange(examTypeId: number | null | undefined): void {
    this.examTypeId = examTypeId || undefined;
    this.pagination.page = 1;
    this.loadPapers();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
