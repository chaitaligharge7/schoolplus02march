import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { ConvertEnquiryDialogComponent } from '../../../shared/components/convert-enquiry-dialog/convert-enquiry-dialog.component';
import { QrCodeDialogComponent } from '../../../shared/components/qr-code-dialog/qr-code-dialog.component';
import { EnquiryService } from '../../../shared/services/enquiry.service';
import { ClassService } from '../../../shared/services/class.service';
import { ReceptionistService } from '../../../shared/services/receptionist.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-enquiry-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatDialogModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.scss']
})
export class EnquiryListComponent implements OnInit {
  enquiries: any[] = [];
  classes: any[] = [];
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
      key: 'enquiry_number', 
      label: 'Enquiry No.', 
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
      key: 'mobile', 
      label: 'Mobile', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'interested_class_name', 
      label: 'Interested Class', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'enquiry_source', 
      label: 'Source', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'enquiry_date', 
      label: 'Enquiry Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'conversion_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'converted' ? 'badge-success' : 
                          value === 'pending' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'enquiry_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  conversionStatus?: string;
  enquirySource?: string;

  enquiryConversionStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'converted', label: 'Converted' },
    { value: 'lost', label: 'Lost' },
  ];

  enquirySourceOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Sources' },
    { value: 'online', label: 'Online' },
    { value: 'walk-in', label: 'Walk-in' },
    { value: 'referral', label: 'Referral' },
  ];

  counselors: { user_id: number; full_name: string; stream?: string }[] = [];

  constructor(
    private enquiryService: EnquiryService,
    private classService: ClassService,
    private receptionistService: ReceptionistService,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadEnquiries();
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

  loadEnquiries(): void {
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
    if (this.conversionStatus) {
      params.conversion_status = this.conversionStatus;
    }
    if (this.enquirySource) {
      params.enquiry_source = this.enquirySource;
    }

    this.enquiryService.getEnquiries(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.enquiries = response.data.enquiries || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading enquiries', 'error');
        console.error('Error loading enquiries:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadEnquiries();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadEnquiries();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadEnquiries();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadEnquiries();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadEnquiries();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.enquiry_id;
  }

  onRefresh(): void {
    this.loadEnquiries();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onView(row: any): void {
    this.router.navigate(['/app/enquiries/view', row.enquiry_id]);
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/enquiries/edit', row.enquiry_id]);
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.enquiries.map(enquiry => ({
      'Enquiry No.': enquiry.enquiry_number || '-',
      'Student Name': enquiry.student_name || '-',
      'Parent Name': enquiry.parent_name || '-',
      'Mobile': enquiry.mobile || '-',
      'Interested Class': enquiry.interested_class_name || '-',
      'Source': enquiry.enquiry_source || '-',
      'Enquiry Date': this.formatDate(enquiry.enquiry_date),
      'Status': enquiry.conversion_status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `enquiries-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `enquiries-${Date.now()}.pdf`, headers);
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

  onConversionStatusChange(status: string | null | undefined): void {
    this.conversionStatus = status || undefined;
    this.pagination.page = 1;
    this.loadEnquiries();
  }

  onEnquirySourceChange(source: string | null | undefined): void {
    this.enquirySource = source || undefined;
    this.pagination.page = 1;
    this.loadEnquiries();
  }

  openQrCodeDialog(): void {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/enquiry` : '/enquiry';
    this.dialog.open(QrCodeDialogComponent, {
      width: '400px',
      data: { url, title: 'Visitor Enquiry Form – QR Code' },
      panelClass: 'app-confirm-dialog-overlay'
    });
  }

  convertToAdmission(enquiry: any): void {
    if (enquiry?.conversion_status === 'converted') {
      this.toastService.show('This enquiry is already converted', 'info');
      return;
    }
    const openDialog = () => {
      const ref = this.dialog.open(ConvertEnquiryDialogComponent, {
        width: '480px',
        data: {
          studentName: enquiry?.student_name || 'this student',
          counselors: this.counselors
        },
        disableClose: false,
        panelClass: 'app-confirm-dialog-overlay'
      });
      ref.afterClosed().subscribe((result: 'admission' | { counselor_id: number } | null) => {
        if (result === 'admission') {
          this.router.navigate(['/app/admissions/create'], {
            queryParams: { enquiry_id: enquiry.enquiry_id }
          });
        } else if (result && typeof result === 'object' && result.counselor_id) {
          this.enquiryService.assignCounsellor(enquiry.enquiry_id, result.counselor_id).subscribe({
            next: (res) => {
              if (res?.status === 'success') {
                this.toastService.show('Counsellor allotted and notified', 'success');
                this.loadEnquiries();
              } else {
                this.toastService.show(res?.message || 'Failed to allot counsellor', 'error');
              }
            },
            error: () => this.toastService.show('Error allotting counsellor', 'error')
          });
        }
      });
    };
    if (this.counselors.length) {
      openDialog();
    } else {
      this.receptionistService.getCounselors().subscribe({
        next: (res) => {
          if (res?.status === 'success' && res?.data?.counselors) {
            this.counselors = res.data.counselors;
          }
          openDialog();
        },
        error: () => openDialog()
      });
    }
  }

  getSelectedEnquiry(): any {
    return this.enquiries.find(e => e.enquiry_id === this.selectedRowId);
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
