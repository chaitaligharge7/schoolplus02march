import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { StudentDetailSliderComponent } from '../student-detail-slider/student-detail-slider.component';
import { SearchSelectComponent, SearchSelectOption } from '../../../shared/components/search-select/search-select.component';
import { StudentService } from '../../../shared/services/student.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, StudentDetailSliderComponent, SearchSelectComponent],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  loading = false;
  selectedRowId?: number;
  sliderStudent: any = null;
  sliderVisible = false;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'admission_number', 
      label: 'Admission No.', 
      sortable: true,
      width: '120px'
    },
    { 
      key: 'roll_number', 
      label: 'Roll No.', 
      sortable: true,
      width: '100px',
      format: (value: any) => value || '-'
    },
    { 
      key: 'full_name', 
      label: 'Name', 
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<strong>${value || ''}</strong>`;
        if (row && row.email) {
          html += `<br><small style="color: var(--text-secondary);">${row.email}</small>`;
        }
        return html;
      }
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true 
    },
    { 
      key: 'section_name', 
      label: 'Section', 
      sortable: true 
    },
    { 
      key: 'mobile', 
      label: 'Mobile', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'student_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'Active' ? 'badge-success' : 
                          value === 'Inactive' ? 'badge-warning' : 
                          value === 'Transferred' ? 'badge-info' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'admission_number';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  classId?: number;
  sectionId?: number;
  status = 'all';
  showFilters = false;

  classes: any[] = [];
  sections: any[] = [];

  get classOptions(): SearchSelectOption[] {
    const all: SearchSelectOption[] = [{ value: undefined, label: 'All Classes' }];
    return all.concat(this.classes.map((c) => ({ value: c.class_id, label: c.class_name })));
  }

  get sectionOptions(): SearchSelectOption[] {
    const all: SearchSelectOption[] = [{ value: undefined, label: 'All Sections' }];
    return all.concat(this.sections.map((s) => ({ value: s.section_id, label: s.section_name })));
  }

  get statusOptions(): SearchSelectOption[] {
    return [
      { value: 'all', label: 'All' },
      { value: 'Active', label: 'Active' },
      { value: 'Inactive', label: 'Inactive' },
      { value: 'Transferred', label: 'Transferred' },
      { value: 'Graduated', label: 'Graduated' }
    ];
  }

  constructor(
    private studentService: StudentService,
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
      const sectionId = params['section_id'];
      if (classId != null && classId !== '') this.classId = Number(classId);
      if (sectionId != null && sectionId !== '') this.sectionId = Number(sectionId);
      if (classId != null || sectionId != null) this.pagination.page = 1;
      this.loadStudents();
    });
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      },
      error: (error) => {
        console.error('Error loading classes:', error);
      }
    });
  }

  loadStudents(): void {
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
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.sectionId) {
      params.section_id = this.sectionId;
    }
    if (this.status && this.status !== 'all') {
      params.status = this.status;
    }

    this.studentService.getStudents(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error loading students:', error);
        this.toastService.show('Error loading students', 'error');
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadStudents();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadStudents();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadStudents();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadStudents();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadStudents();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.student_id;
    this.sliderStudent = row;
    this.sliderVisible = true;
  }

  onRefresh(): void {
    this.loadStudents();
  }

  onAdd(): void {
    // Navigation handled by routerLink in template
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/students/edit', row.student_id]);
  }

  onView(row: any): void {
    this.sliderStudent = row;
    this.sliderVisible = true;
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Deactivate Student',
      message: `Are you sure you want to deactivate "${row.full_name}"?`,
      confirmText: 'Deactivate',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.studentService.deleteStudent(row.student_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Student deactivated successfully', 'success');
              this.loadStudents();
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
    const exportData = this.students.map(student => ({
      'Admission No.': student.admission_number,
      'Roll No.': student.roll_number || '-',
      'Name': student.full_name,
      'Class': student.class_name,
      'Section': student.section_name,
      'Mobile': student.mobile || '-',
      'Email': student.email || '-',
      'Status': student.student_status
    }));

    const headers = this.columns.filter(col => col.key !== 'actions').map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `students-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `students-${Date.now()}.pdf`, headers);
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
    this.sectionId = undefined;
    this.sections = [];
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.sections = response.data.sections || [];
          }
        },
        error: (error) => {
          console.error('Error loading sections:', error);
        }
      });
    }
    this.pagination.page = 1;
    this.loadStudents();
  }

  onSectionChange(sectionId: number | null | undefined): void {
    this.sectionId = sectionId || undefined;
    this.pagination.page = 1;
    this.loadStudents();
  }

  onStatusChange(status: string): void {
    this.status = status;
    this.pagination.page = 1;
    this.loadStudents();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
