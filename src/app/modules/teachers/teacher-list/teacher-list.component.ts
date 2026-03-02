import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { TeacherDetailSliderComponent } from '../teacher-detail-slider/teacher-detail-slider.component';
import { TeacherService } from '../../../shared/services/teacher.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { DesignationService } from '../../../shared/services/designation.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, TeacherDetailSliderComponent, SearchSelectComponent],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teachers: any[] = [];
  loading = false;
  selectedRowId?: number;
  sliderTeacher: any = null;
  sliderVisible = false;
  showFilters = false;
  departments: any[] = [];
  designations: any[] = [];

  statusOptions: { value: string; label: string }[] = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
    { value: 'Resigned', label: 'Resigned' },
    { value: 'Retired', label: 'Retired' }
  ];

  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'employee_id', 
      label: 'Employee ID', 
      sortable: true,
      width: '120px'
    },
    { 
      key: 'full_name', 
      label: 'Name', 
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<strong>${value || ''}</strong>`;
        if (row && row.qualification) {
          html += `<br><small style="color: var(--text-secondary);">${row.qualification}</small>`;
        }
        return html;
      }
    },
    { 
      key: 'designation_id', 
      label: 'Designation', 
      sortable: true,
      format: (value: any) =>{
        const dept = this.designations.find(d => d.designation_id === value);
        return dept ? dept.designation_name : '-';
      }
    },
    {
      key: 'department_id', 
      label: 'Department', 
      sortable: true,
      format: (value: any) => {
        const dept = this.departments.find(d => d.department_id === value);
        return dept ? dept.department_name : '-';
      }
    },
    { 
      key: 'mobile', 
      label: 'Mobile', 
      sortable: true,
      format: (value: any, row?: any) => {
        return value || row?.user_mobile || '-';
      }
    },
    { 
      key: 'email', 
      label: 'Email', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'teacher_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'Active' ? 'badge-success' : 
                          value === 'Inactive' ? 'badge-warning' : 
                          value === 'Resigned' ? 'badge-info' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'employee_id';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  status = 'Active';
  departmentId?: number;
  designationId?: number;

  constructor(
    private teacherService: TeacherService,
    private dialogService: DialogService,
    private departmentService: DepartmentService,
    private designationService: DesignationService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadDesignations();
    this.route.queryParams.subscribe((params) => {
      const departmentId = params['department_id'];
      const designationId = params['designation_id'];
      if (departmentId != null && departmentId !== '') this.departmentId = Number(departmentId);
      if (designationId != null && designationId !== '') this.designationId = Number(designationId);
      if (departmentId != null || designationId != null) this.pagination.page = 1;
      this.loadTeachers();
    });
  }

  loadTeachers(): void {
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
    if (this.status) {
      params.status = this.status;
    }
    if (this.departmentId) {
      params.department_id = this.departmentId;
    }
    if (this.designationId) {
      params.designation_id = this.designationId;
    }

    this.teacherService.getTeachers(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.teachers = response.data.teachers || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error loading teachers:', error);
        this.toastService.show('Error loading teachers', 'error');
      }
    });
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.departments) {
          this.departments = response.data.departments;
        }
      }
    });
  }

  loadDesignations(): void {
    this.designationService.getDesignations().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data?.designations) {
          this.designations = response.data.designations;
        }
      }
    });
  }
  
  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadTeachers();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadTeachers();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadTeachers();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadTeachers();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadTeachers();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.teacher_id;
    this.sliderTeacher = row;
    this.sliderVisible = true;
  }

  onRefresh(): void {
    this.loadTeachers();
  }

  onAdd(): void {
    // Navigation handled by routerLink in template
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/teachers/edit', row.teacher_id]);
  }

  onView(row: any): void {
    this.sliderTeacher = row;
    this.sliderVisible = true;
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Teacher',
      message: `Are you sure you want to delete "${row.full_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.teacherService.deleteTeacher(row.teacher_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Teacher deleted successfully', 'success');
              this.loadTeachers();
            }
          },
          error: () => {
            this.toastService.show('Error deleting teacher', 'error');
          } 
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.teachers.map(teacher => ({
      'Employee ID': teacher.employee_id,
      'Name': teacher.full_name,
      'Designation': this.designations.find(d => d.designation_id === teacher.designation_id)?.designation_name || '-',
      'Department': this.departments.find(d => d.department_id === teacher.department_id)?.department_name || '-',
      'Mobile': teacher.mobile || teacher.user_mobile || '-',
      'Email': teacher.email || '-',
      'Status': teacher.teacher_status
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `teachers-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `teachers-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onStatusChange(status: string): void {
    this.status = status;
    this.pagination.page = 1;
    this.loadTeachers();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
