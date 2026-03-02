import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { CertificateService } from '../../../shared/services/certificate.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent implements OnInit {
  certificates: any[] = [];
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
      key: 'student_name', 
      label: 'Student Name', 
      sortable: true 
    },
    { 
      key: 'certificate_type', 
      label: 'Certificate Type', 
      sortable: true 
    },
    { 
      key: 'issue_date', 
      label: 'Issue Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'certificate_number', 
      label: 'Certificate Number', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'Generated' ? 'badge-success' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value || 'Pending'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'issue_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  certificateType?: string;
  showFilters = false;

  certificateTypeOptions: { value: string | null; label: string }[] = [
    { value: null, label: 'All Types' },
    { value: 'Transfer Certificate', label: 'Transfer Certificate' },
    { value: 'Character Certificate', label: 'Character Certificate' },
    { value: 'Bonafide Certificate', label: 'Bonafide Certificate' },
    { value: 'Migration Certificate', label: 'Migration Certificate' },
    { value: 'Other', label: 'Other' }
  ];

  constructor(
    private certificateService: CertificateService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {
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
    if (this.certificateType) {
      params.certificate_type = this.certificateType;
    }

    this.certificateService.getCertificates(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.certificates = response.data.certificates || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading certificates', 'error');
        console.error('Error loading certificates:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCertificates();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCertificates();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCertificates();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCertificates();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCertificates();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.certificate_id;
  }

  getSelectedCertificate(): any {
    return this.certificates.find(c => c.certificate_id === this.selectedRowId);
  }

  onRefresh(): void {
    this.loadCertificates();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/certificates/edit', row.certificate_id]);
  }

  onView(row: any): void {
    this.router.navigate(['/app/certificates/edit', row.certificate_id]);
  }

  onPrintCertificate(row: any): void {
    const id = row?.certificate_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(['/app/certificates/edit', id])) + '#print';
      window.open(url, '_blank', 'noopener');
    }
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Certificate',
      message: `Are you sure you want to delete certificate for ${row.student_name}?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.certificateService.deleteCertificate(row.certificate_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Certificate deleted successfully', 'success');
              this.loadCertificates();
            }
          },
          error: () => {
            this.toastService.show('Error deleting certificate', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.certificates.map(cert => ({
      'Student Name': cert.student_name,
      'Certificate Type': cert.certificate_type,
      'Issue Date': this.formatDate(cert.issue_date),
      'Certificate Number': cert.certificate_number || '-',
      'Status': cert.status || 'Pending'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `certificates-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `certificates-${Date.now()}.pdf`, headers);
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

  onCertificateTypeChange(type: string | null | undefined): void {
    this.certificateType = type || undefined;
    this.pagination.page = 1;
    this.loadCertificates();
  }

  generateCertificate(certificateId: number): void {
    this.certificateService.generateCertificate(certificateId).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `certificate_${certificateId}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.toastService.show('Certificate generated successfully', 'success');
        this.loadCertificates();
      },
      error: () => {
        this.toastService.show('Error generating certificate', 'error');
      }
    });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
