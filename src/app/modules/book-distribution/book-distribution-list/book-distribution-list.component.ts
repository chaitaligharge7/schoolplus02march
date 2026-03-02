import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { BookDistributionService } from '../../../shared/services/book-distribution.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-book-distribution-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './book-distribution-list.component.html',
  styleUrls: ['./book-distribution-list.component.scss']
})
export class BookDistributionListComponent implements OnInit {
  distributions: any[] = [];
  academicYears: any[] = [];
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
      key: 'book_title', 
      label: 'Book Title', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    {
         key: 'book_code', 
        label: 'ISBN', 
        sortable: true, 
        format: (v) => v || '-' 
    },
    { 
      key: 'distribution_date', 
      label: 'Distribution Date', 
      sortable: true,
      type: 'date'
    },
    {
      key: 'return_date',
      label: 'Return Date',
      sortable: true,
      type: 'date',
      format: (value: any, row: any) => {
      if (row?.return_status === 'returned' && value) {
      return this.formatDate(value);
    }
      return row?.return_date
      ? this.formatDate(row.return_date)
      : '-';
  }
},

    { 
      key: 'return_status', 
      label: 'return_Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'returned' ? 'badge-success' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'distribution_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  returnStatus?: string;

  constructor(
    private bookService: BookDistributionService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadDistributions();
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

  loadDistributions(): void {
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
    if (this.returnStatus) {
      params.return_status = this.returnStatus;
    }

    this.bookService.getDistributions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.distributions = response.data.distributions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading book distributions', 'error');
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadDistributions();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDistributions();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDistributions();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDistributions();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDistributions();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.distribution_id;
  }

  onRefresh(): void {
    this.loadDistributions();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.distributions.map(dist => ({
      'Student Name': `${dist.first_name || ''} ${dist.last_name || ''}`.trim(),
      'Admission Number': dist.admission_number || '-',
      'Book Title': dist.book_title || '-',
      'ISBN': dist.book_isbn || '-',
      'Distribution Date': this.formatDate(dist.distribution_date),
      'Return Date': dist.return_date ? this.formatDate(dist.return_date) : '-',
      'Return Status': dist.return_status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `book-distributions-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `book-distributions-${Date.now()}.pdf`, headers);
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
    this.loadDistributions();
  }

  onReturnStatusChange(status: string | null | undefined): void {
  if (status === 'pending') this.returnStatus = 'not_returned';
  else if (status === 'returned') this.returnStatus = 'returned';
  else this.returnStatus = undefined;

  this.pagination.page = 1;
  this.loadDistributions();
  }
  onEdit(row: any): void {
  this.router.navigate(['/app/book-distribution/edit', row.distribution_id]);
}

onView(row: any): void {
  this.router.navigate(['/app/book-distribution/view', row.distribution_id]);
}

 onDelete(row: any): void {
  this.dialogService.confirm({
    title: 'Delete Book Distribution',
    message: 'Are you sure you want to delete this record?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'danger'
  }).subscribe(confirmed => {
    if (!confirmed) return;

    this.bookService.deleteDistribution(row.distribution_id).subscribe({
      next: () => {
        this.toastService.show('Record deleted successfully', 'success');
        this.distributions = this.distributions.filter(
          d => d.distribution_id !== row.distribution_id
        );

        if (this.selectedRowId === row.distribution_id) {
          this.selectedRowId = undefined;
        }

        if (this.distributions.length === 0 && this.pagination.page > 1) {
          this.pagination.page--;
          this.loadDistributions();
        }
      },
      error: (err) => {
        this.toastService.show('Error deleting record', 'error');
      }
    });
  });
}


returnBook(distributionId: number): void {

  const dist = this.distributions.find(
    d => d.distribution_id === distributionId
  );

  if (!dist || dist.return_status === 'returned') return;

  this.dialogService.confirm({
    title: 'Return Book',
    message: 'Mark this book as returned?',
    confirmText: 'Return',
    cancelText: 'Cancel',
    type: 'info'
  }).subscribe(confirmed => {

    if (!confirmed) return;

    this.bookService.returnBook({ distribution_id: distributionId }).subscribe({
      next: (res) => {

        if (res.status === 'success') {

          this.toastService.show('Book returned successfully', 'success');
          dist.return_status = 'returned';
          dist.return_date = new Date().toISOString();
          this.distributions = [...this.distributions];
        }
      },
      error: (err) => {
        this.toastService.show('Error returning book', 'error');
      }
    });

  });
}

  getSelectedDistribution(): any {
    return this.distributions.find(d => d.distribution_id === this.selectedRowId);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
