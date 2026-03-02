import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeeService } from '../../../shared/services/fee.service';
import { ToastService } from '../../../shared/services/toast.service';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';

@Component({
  selector: 'app-admission-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './admission-tickets.component.html',
  styleUrls: ['./admission-tickets.component.scss']
})
export class AdmissionTicketsComponent implements OnInit {
  tickets: any[] = [];
  loading = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  searchTerm = '';
  ticketStatus = 'pending_payment';
  columns: TableColumn[] = [
    { key: 'admission_number', label: 'Admission No', sortable: true },
    { key: 'student_name', label: 'Student', sortable: true },
    { key: 'parent_name', label: 'Parent', sortable: false },
    { key: 'parent_mobile', label: 'Mobile', sortable: false },
    { key: 'applied_class_name', label: 'Class', sortable: false },
    { key: 'admission_ticket_status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'paid' ? 'badge-success' : 'badge-warning';
      return `<span class="badge ${c}">${v || 'pending_payment'}</span>`;
    }}
  ];
  rowIdKey = 'admission_id';
  showPayModal = false;
  selectedTicket: any = null;
  payForm: any = { paid_amount: 0, payment_mode: 'Cash', payment_date: '', transaction_id: '', remarks: '', send_whatsapp: true, send_email: true };
  saving = false;

  constructor(private feeService: FeeService, private toast: ToastService) {}

  ngOnInit(): void {
    this.payForm.payment_date = new Date().toISOString().split('T')[0];
    this.load();
  }

  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit, ticket_status: this.ticketStatus };
    if (this.searchTerm) params.search = this.searchTerm;
    this.feeService.getAdmissionTickets(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.tickets = res.data.tickets || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading tickets', 'error'); }
    });
  }

  onPageChange(p: number): void { this.pagination.page = p; this.load(); }
  onSearchChange(s: string): void { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onStatusChange(s: string): void { this.ticketStatus = s; this.pagination.page = 1; this.load(); }
  onRefresh(): void { this.load(); }

  openPay(ticket: any): void {
    this.selectedTicket = ticket;
    this.payForm = {
      paid_amount: 0,
      payment_mode: 'Cash',
      payment_date: new Date().toISOString().split('T')[0],
      transaction_id: '',
      remarks: '',
      send_whatsapp: true,
      send_email: true
    };
    this.showPayModal = true;
  }

  closePay(): void {
    this.showPayModal = false;
    this.selectedTicket = null;
  }

  submitPayment(): void {
    if (!this.selectedTicket?.admission_id || this.payForm.paid_amount <= 0) {
      this.toast.show('Enter valid amount', 'error');
      return;
    }
    this.saving = true;
    this.feeService.recordAdmissionPayment({
      admission_id: this.selectedTicket.admission_id,
      paid_amount: this.payForm.paid_amount,
      payment_mode: this.payForm.payment_mode,
      payment_date: this.payForm.payment_date,
      transaction_id: this.payForm.transaction_id || undefined,
      remarks: this.payForm.remarks || undefined,
      send_whatsapp: this.payForm.send_whatsapp,
      send_email: this.payForm.send_email
    }).subscribe({
      next: (res) => {
        this.saving = false;
        if (res.status === 'success') {
          this.toast.show('Payment recorded. Receipt: ' + (res.data?.receipt_number || ''), 'success');
          this.closePay();
          this.load();
        } else this.toast.show(res.message || 'Error', 'error');
      },
      error: () => { this.saving = false; this.toast.show('Error recording payment', 'error'); }
    });
  }

  onEdit(row: any): void { this.openPay(row); }
  onView(row: any): void { this.openPay(row); }
}
