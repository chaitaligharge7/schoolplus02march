import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { FeeService } from '../../../shared/services/fee.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-fee-receipts-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './fee-receipts-list.component.html',
  styleUrls: ['./fee-receipts-list.component.scss']
})
export class FeeReceiptsListComponent implements OnInit {
  receipts: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'receipt_number', label: 'Receipt No.', sortable: true },
    { key: 'student_name', label: 'Student', sortable: true },
    { key: 'admission_number', label: 'Admission No.', sortable: true },
    { key: 'fee_type_name', label: 'Fee Type', sortable: false },
    { key: 'paid_amount', label: 'Amount', sortable: true, format: (v: any) => `₹${v != null ? Number(v).toFixed(2) : '0.00'}` },
    { key: 'paid_date', label: 'Payment Date', sortable: true },
    { key: 'class_name', label: 'Class', sortable: false }
  ];
  searchTerm = '';
  startDate = '';
  endDate = '';

  constructor(private feeService: FeeService, private toast: ToastService,  private router: Router) {}
  ngOnInit(): void { this.load(); }
 load(): void {
  this.loading = true;

  const params: any = { 
    page: this.pagination.page, 
    limit: this.pagination.limit 
  };

  if (this.searchTerm) params.search = this.searchTerm;
  if (this.startDate) params.start_date = this.startDate;
  if (this.endDate) params.end_date = this.endDate;

  console.log('Loading receipts with params:', params); // <-- log request params

  this.feeService.getReceipts(params).subscribe({
    next: (res) => {
      this.loading = false;
      console.log('Receipts API response:', res); // <-- log full response

      if (res.status === 'success' && res.data) {
        this.receipts = res.data.receipts || [];
        this.pagination = res.data.pagination || this.pagination;

        console.log('Parsed receipts:', this.receipts);
        console.log('Updated pagination:', this.pagination);
      }
    },
    error: (err) => {
      this.loading = false;
      console.error('Error loading receipts:', err); // <-- log error details
      this.toast.show('Error loading receipts', 'error');
    }
  });
  }

  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(row: any) {
    if (row?.student_fee_id) {
      window.open(`#/app/fees/receipt/${row.student_fee_id}`, '_blank');
    }
  }
  onRefresh() { this.load(); }
 
  onExportClick(_: any) {}
 // This will be triggered when the View button in the table is clicked
viewReceipt(row: any) {
  // Assuming row.student_fee_id identifies the receipt
  const url = this.router.serializeUrl(
    this.router.createUrlTree([`/app/fees/receipt`, row.student_fee_id])
  );
  window.open(url, '_blank'); // opens receipt in a new tab
}

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
