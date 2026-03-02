import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SupportFeedbackService } from '../../../shared/services/support-feedback.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'subject', label: 'Subject', sortable: true, format: (v: any) => v || '-' },
    { key: 'ticket_type', label: 'Type', sortable: true, format: (v: any) => v || '-' },
    { key: 'message', label: 'Message', sortable: false, format: (v: any) => (v && v.length > 40) ? v.substring(0, 40) + '...' : (v || '-') },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => {
      const c = v === 'resolved' ? 'badge-success' : v === 'open' ? 'badge-warning' : 'badge-info';
      return `<span class="badge ${c}">${v || '-'}</span>`;
    }}
  ];
  searchTerm = '';
  status: string | undefined;

  constructor(private ticketService: SupportFeedbackService,  private router: Router, private toast: ToastService) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    const params: any = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.status) params.status = this.status;
    this.ticketService.getTickets(params).subscribe({
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
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
   onEdit(ticket: any): void {
  

  // Navigate to the edit route with the page ID
this.router.navigate(['/app/support-feedback/edit', ticket.ticket_id]);
  }

  onExportClick(_: any) {}
  onStatusChange(s: string | undefined) { this.status = s; this.pagination.page = 1; this.load(); }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
