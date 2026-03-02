import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { FeeService } from '../../../shared/services/fee.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';

@Component({
  selector: 'app-fee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.scss']
})
export class FeeListComponent implements OnInit {
  fees: any[] = [];
  loading = false;
  selectedRowId?: number;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  summary: any = {
    total_amount: 0,
    paid_amount: 0,
    pending_amount: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'admission_number', 
      label: 'Admission No.', 
      sortable: true,
      width: '120px'
    },
    { 
      key: 'full_name', 
      label: 'Student Name', 
      sortable: true 
    },
    { 
      key: 'fee_type_name', 
      label: 'Fee Type', 
      sortable: true 
    },
    { 
      key: 'fee_amount', 
      label: 'Amount', 
      sortable: true,
      type: 'number',
      format: (value: any) => value ? `₹${Number(value).toLocaleString('en-IN')}` : '-'
    },
    { 
      key: 'paid_amount', 
      label: 'Paid', 
      sortable: true,
      type: 'number',
      format: (value: any) => value ? `₹${Number(value).toLocaleString('en-IN')}` : '₹0'
    },
    { 
      key: 'due_date', 
      label: 'Due Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'payment_status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'Paid' ? 'badge-success' : 
                          value === 'Partial' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'due_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  classId?: number;
  paymentStatus?: string;
  showFilters = false;

  classes: any[] = [];

  get classOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Classes' }];
    const list = (this.classes || []).map(c => ({ value: c.class_id, label: c.class_name || '' }));
    return [...all, ...list];
  }

  paymentStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Partial', label: 'Partial' },
    { value: 'Paid', label: 'Paid' },
    { value: 'Overdue', label: 'Overdue' }
  ];

  constructor(
    private feeService: FeeService,
    private classService: ClassService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadFees();
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

  loadFees(): void {
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
    if (this.paymentStatus) {
      params.payment_status = this.paymentStatus;
    }

    this.feeService.getFees(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.fees = response.data.fees || [];
          this.pagination = response.data.pagination || this.pagination;
          this.summary = response.data.summary || this.summary;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading fees', 'error');
        console.error('Error loading fees:', error);
      }
    });
  }
  onPrintReceipt(row: any): void {
    const id = row?.student_fee_id ?? row?.fee_id;
    if (id != null) {
      const url = this.router.serializeUrl(this.router.createUrlTree(['/app/fees/receipt', id])) + '#print';
      window.open(url, '_blank', 'noopener');
    }
  }

  handlePayment(fee: any): void {
    this.router.navigate(['/app/fees/payment', fee.student_fee_id]);
  }



  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadFees();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFees();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFees();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFees();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFees();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.student_fee_id;
  }

  onRefresh(): void {
    this.loadFees();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/fees/edit', row.student_fee_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Fee',
      message: `Are you sure you want to delete fee record for "${row.full_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        // Implement delete if needed
        this.toastService.show('Fee deletion not implemented', 'info');
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.fees.map(fee => ({
      'Admission No.': fee.admission_number,
      'Student Name': fee.full_name,
      'Fee Type': fee.fee_type_name,
      'Amount': fee.fee_amount ? `₹${Number(fee.fee_amount).toLocaleString('en-IN')}` : '-',
      'Paid': fee.paid_amount ? `₹${Number(fee.paid_amount).toLocaleString('en-IN')}` : '₹0',
      'Due Date': this.formatDate(fee.due_date),
      'Status': fee.payment_status
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `fees-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `fees-${Date.now()}.pdf`, headers);
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

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadFees();
  }

  onPaymentStatusChange(status: string | null | undefined): void {
    this.paymentStatus = status || undefined;
    this.pagination.page = 1;
    this.loadFees();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
