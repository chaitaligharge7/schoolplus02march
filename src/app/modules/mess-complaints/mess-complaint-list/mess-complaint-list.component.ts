import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { MessComplaintService } from '../../../shared/services/mess-complaint.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-mess-complaint-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './mess-complaint-list.component.html',
  styleUrls: ['./mess-complaint-list.component.scss']
})
export class MessComplaintListComponent implements OnInit {
  complaints: any[] = [];
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
    key: 'complaint_id', 
    label: 'Complaint ID', 
    sortable: true,
    format: (value: any) => `#${value}`
  },
  { 
    key: 'first_name', 
    label: 'Complainant', 
    sortable: true,
    format: (_: any, row: any) => `${row.first_name || ''} ${row.last_name || ''}`.trim() || '-'
  },
  { 
    key: 'complaint_description', 
    label: 'Complaint', 
    sortable: true,
    format: (value: any) => value?.length > 100 ? value.substring(0, 100) + '...' : value || '-'
  },
  { 
    key: 'complaint_date', 
    label: 'Date', 
    sortable: true,
    type: 'date'
  },


    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'resolved' ? 'badge-success' : 
                          value === 'in_progress' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];
  searchTerm = '';
  sortColumn = 'complaint_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  status?: string;

  constructor(
    private messComplaintService: MessComplaintService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router,
     
  ) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
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

    this.messComplaintService.getMessComplaints(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.complaints = response.data.complaints || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading mess complaints', 'error');
        
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadComplaints();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadComplaints();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.complaint_id;
  }

  onRefresh(): void {
    this.loadComplaints();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEditComplaint(complaint: any): void {
  if (!complaint?.complaint_id) {
    this.toastService.show('Invalid complaint selected', 'error');
    return;
  }
  this.router.navigate(['/app/mess-complaints/edit', complaint.complaint_id]);
  }

  onDeleteComplaint(complaint: any): void {
  const complaintId = complaint?.complaint_id;

  if (!complaintId) {
    this.toastService.show('Invalid complaint selected', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Delete Complaint',
    message: 'Are you sure you want to delete this complaint?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed: boolean) => {
    if (confirmed) {
      this.messComplaintService.deleteMessComplaint(complaintId).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.toastService.show('Complaint deleted successfully', 'success');
            this.loadComplaints(); 
          } else {
            this.toastService.show(response.message || 'Failed to delete complaint', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error deleting complaint', 'error');
        }
      });
    }
  });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
       const exportData = this.complaints.map(c => ({
         'Complaint ID': `#${c.complaint_id}`,
         'Complainant': `${c.first_name} ${c.last_name}`,
         'Complaint': c.complaint_description,
         'Date': this.formatDate(c.complaint_date),
         'Status': c.status
       }));
    const headers = this.columns.map(col => col.label);
    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `mess-complaints-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `mess-complaints-${Date.now()}.pdf`, headers);
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

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  resolveComplaint(complaintId: number): void {
    this.dialogService.confirm({
      title: 'Resolve Complaint',
      message: 'Are you sure you want to resolve this mess complaint?',
      confirmText: 'Resolve',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.messComplaintService.resolveComplaint(complaintId, {}).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Complaint resolved successfully', 'success');
              this.loadComplaints();
            }
          },
          error: () => {
            this.toastService.show('Failed to resolve complaint', 'error');
          }
        });
      }
    });
  }

  getSelectedComplaint(): any {
    return this.complaints.find(c => c.complaint_id === this.selectedRowId);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
