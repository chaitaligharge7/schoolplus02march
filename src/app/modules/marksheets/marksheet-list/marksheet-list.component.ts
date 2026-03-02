import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { MarksheetService } from '../../../shared/services/marksheet.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-marksheet-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './marksheet-list.component.html',
  styleUrls: ['./marksheet-list.component.scss']
})
export class MarksheetListComponent implements OnInit {
  marksheets: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  selectedMarksheets: number[] = [];
  showFilters = false;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'student_name', 
      label: 'Student Name', 
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
      key: 'examination_name', 
      label: 'Examination', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || ''} ${row?.section_name || ''}`.trim() || '-';
      }
    },
    { 
      key: 'total_marks', 
      label: 'Total Marks', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '0'
    },
    { 
      key: 'obtained_marks', 
      label: 'Obtained', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '0'
    },
    { 
      key: 'percentage', 
      label: 'Percentage', 
      sortable: true,
      format: (value: any) => value ? `${value}%` : '-'
    },
    { 
      key: 'grade', 
      label: 'Grade', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'sent' ? 'badge-success' : 
                          value === 'published' ? 'badge-warning' : 'badge-secondary';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'marksheet_id';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  examinationId?: number;
  status?: string;

  get academicYearOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Academic Years' }];
    const years = (this.academicYears || []).map(y => ({ value: y.academic_year_id, label: y.academic_year_name || '' }));
    return [...all, ...years];
  }

  get classOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Classes' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  marksheetStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
    { value: 'sent', label: 'Sent' }
  ];

  constructor(
    private marksheetService: MarksheetService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadMarksheets();
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

  loadMarksheets(): void {
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
    if (this.examinationId) {
      params.examination_id = this.examinationId;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.marksheetService.getMarksheets(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.marksheets = response.data.marksheets || [];
          this.pagination = response.data.pagination || this.pagination;
          // Clear selections when data changes
          this.selectedMarksheets = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading marksheets', 'error');
        console.error('Error loading marksheets:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadMarksheets();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadMarksheets();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.marksheet_id;
  }

  onRefresh(): void {
    this.loadMarksheets();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onView(row: any): void {
    this.router.navigate(['/app/marksheets/view', row.marksheet_id]);
  }

  onPrintMarksheet(row: any): void {
    const id = row?.marksheet_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(['/app/marksheets/view', id])) + '#print';
      window.open(url, '_blank', 'noopener');
    }
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/marksheets/edit', row.marksheet_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Marksheet',
      message: `Are you sure you want to delete marksheet for ${row.first_name} ${row.last_name}?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'warning'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.marksheetService.deleteMarksheet(row.marksheet_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Marksheet deleted successfully', 'success');
              this.loadMarksheets();
            }
          },
          error: () => {
            this.toastService.show('Error deleting marksheet', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.marksheets.map(marksheet => ({
      'Student Name': `${marksheet.first_name || ''} ${marksheet.last_name || ''}`.trim(),
      'Admission No.': marksheet.admission_number || '-',
      'Examination': marksheet.examination_name || '-',
      'Class': `${marksheet.class_name || ''} ${marksheet.section_name || ''}`.trim(),
      'Total Marks': marksheet.total_marks || '0',
      'Obtained Marks': marksheet.obtained_marks || '0',
      'Percentage': marksheet.percentage ? `${marksheet.percentage}%` : '-',
      'Grade': marksheet.grade || '-',
      'Status': marksheet.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `marksheets-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `marksheets-${Date.now()}.pdf`, headers);
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
    this.loadMarksheets();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  onExaminationChange(examId: number | null | undefined): void {
    this.examinationId = examId || undefined;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadMarksheets();
  }

  toggleSelection(marksheetId: number): void {
    const index = this.selectedMarksheets.indexOf(marksheetId);
    if (index > -1) {
      this.selectedMarksheets.splice(index, 1);
    } else {
      this.selectedMarksheets.push(marksheetId);
    }
  }

  toggleSelectAll(): void {
    if (this.selectedMarksheets.length === this.marksheets.length && this.marksheets.length > 0) {
      this.selectedMarksheets = [];
    } else {
      this.selectedMarksheets = this.marksheets.map(m => m.marksheet_id);
    }
  }

  isSelected(marksheetId: number): boolean {
    return this.selectedMarksheets.includes(marksheetId);
  }

  sendWhatsApp(): void {
    if (this.selectedMarksheets.length === 0) {
      this.toastService.show('Please select at least one marksheet', 'warning');
      return;
    }

    this.dialogService.confirm({
      title: 'Send via WhatsApp',
      message: `Send ${this.selectedMarksheets.length} marksheet(s) to parents via WhatsApp?`,
      confirmText: 'Send',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.marksheetService.sendWhatsApp(this.selectedMarksheets).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show(`Sent ${response.data?.sent || 0} marksheet(s) successfully`, 'success');
              this.selectedMarksheets = [];
              this.loadMarksheets();
            }
          },
          error: () => {
            this.toastService.show('Error sending marksheets', 'error');
          }
        });
      }
    });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
