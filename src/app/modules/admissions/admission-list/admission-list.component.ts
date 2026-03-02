import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { AdmissionService } from '../../../shared/services/admission.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-admission-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss']
})
export class AdmissionListComponent implements OnInit {
  admissions: any[] = [];
  academicYears: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  
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
      sortable: true 
    },
    { 
      key: 'student_name', 
      label: 'Student Name', 
      sortable: true 
    },
    { 
      key: 'parent_name', 
      label: 'Parent Name', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'parent_mobile', 
      label: 'Mobile', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'applied_class_name', 
      label: 'Applied Class', 
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
      key: 'approval_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'approved' ? 'badge-success' : 
                          value === 'pending' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'admission_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  appliedClassId?: number;
  approvalStatus?: string;
  /** Record status filter for soft delete: all, active (default), inactive */
  statusFilter: 'all' | 'active' | 'inactive' = 'active';
  showFilters = false;

  get academicYearOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Academic Years' }];
    const years = (this.academicYears || []).map(y => ({ value: y.academic_year_id, label: y.academic_year_name || '' }));
    return [...all, ...years];
  }

  get appliedClassOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Classes' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  approvalStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' }
  ];

  constructor(
    private admissionService: AdmissionService,
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
    this.loadAdmissions();
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

  loadAdmissions(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
      status: this.statusFilter
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
    if (this.appliedClassId) {
      params.applied_class_id = this.appliedClassId;
    }
    if (this.approvalStatus) {
      params.approval_status = this.approvalStatus;
    }

    this.admissionService.getAdmissions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.admissions = response.data.admissions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading admissions', 'error');
        console.error('Error loading admissions:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadAdmissions();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAdmissions();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.admission_id;
  }

  onRefresh(): void {
    this.loadAdmissions();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

   onEdit(admission: any): void {
    this.router.navigate(['/app/admissions/edit', admission.admission_id]);
  }

  onView(row: any): void {
    this.router.navigate(['/app/admissions/view', row.admission_id]);
  }

  onPrintAdmission(row: any): void {
    const id = row?.admission_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(['/app/admissions/view', id])) + '#print';
      window.open(url, '_blank', 'noopener');
    }
  }

  onDelete(admission: any): void {
  this.dialogService.confirm({
    title: 'Delete Admission',
    message: 'Are you sure you want to delete this admission?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'danger'
  }).subscribe(confirmed => {
    if (!confirmed) return;

    this.admissionService.deleteAdmission(admission.admission_id).subscribe({
      next: () => {
        this.toastService.show('Admission deleted successfully', 'success');
        this.admissions = this.admissions.filter(a => a.admission_id !== admission.admission_id);

       
        if (this.selectedRowId === admission.admission_id) {
          this.selectedRowId = undefined;
        }

        if (this.admissions.length === 0 && this.pagination.page > 1) {
          this.pagination.page--;
          this.loadAdmissions(); 
        }
      },
      error: (err) => {
        this.toastService.show('Error deleting admission', 'error');
      }
    });
  });
}

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.admissions.map(admission => ({
      'Admission No.': admission.admission_number || '-',
      'Student Name': admission.student_name || '-',
      'Parent Name': admission.parent_name || '-',
      'Mobile': admission.parent_mobile || '-',
      'Applied Class': admission.applied_class_name || '-',
      'Academic Year': admission.academic_year_name || '-',
      'Status': admission.approval_status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `admissions-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `admissions-${Date.now()}.pdf`, headers);
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
    this.loadAdmissions();
  }

  onAppliedClassChange(classId: number | null | undefined): void {
    this.appliedClassId = classId || undefined;
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  onApprovalStatusChange(status: string | null | undefined): void {
    this.approvalStatus = status || undefined;
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  onStatusFilterChange(): void {
    this.pagination.page = 1;
    this.loadAdmissions();
  }

  approveAdmission(admission: any, action: 'approve' | 'reject'): void {
    const actionText = action === 'approve' ? 'approve' : 'reject';
    this.dialogService.confirm({
      title: `${actionText.charAt(0).toUpperCase() + actionText.slice(1)} Admission`,
      message: `Are you sure you want to ${actionText} admission for ${admission.student_name}?`,
      confirmText: actionText.charAt(0).toUpperCase() + actionText.slice(1),
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.admissionService.approveAdmission(admission.admission_id, action).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show(`Admission ${actionText}d successfully`, 'success');
              this.loadAdmissions();
            }
          },
          error: () => {
            this.toastService.show(`Error ${actionText}ing admission`, 'error');
          }
        });
      }
    });
  }

  getSelectedAdmission(): any {
    return this.admissions.find(a => a.admission_id === this.selectedRowId);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
