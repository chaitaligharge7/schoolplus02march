import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { ComplaintService } from '../../../shared/services/complaint.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-complaint-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.scss']
})
export class ComplaintListComponent implements OnInit {
  complaints: any[] = [];
  categories: any[] = [];
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
      key: 'complaint_number', 
      label: 'Complaint ID', 
      sortable: true,
      format: (value: any) => `#${value || '-'}`
    },
    { 
      key: 'complainant_name', 
      label: 'Complainant', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || '-'}<br><small>${row?.complainant_type || '-'}</small>`;
      }
    },
    { 
      key: 'complaint_category', 
      label: 'Category', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'complaint_subject', 
      label: 'Subject', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'priority', 
      label: 'Priority', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'low' ? 'badge-info' : 
                          value === 'medium' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'resolved' || value === 'closed' ? 'badge-success' : 
                          value === 'in_progress' ? 'badge-warning' : 'badge-danger';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    },
    { 
      key: 'complaint_date', 
      label: 'Date', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'complaint_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  complaintCategory?: string;
  status?: string;
  priority?: string;

  get complaintCategoryOptions(): { value: string | undefined; label: string }[] {
    const all: { value: string | undefined; label: string }[] = [{ value: undefined, label: 'All Categories' }];
    const list = (this.categories || []).map((c) => ({ value: c.category_name, label: c.category_name || '' }));
    return [...all, ...list];
  }

  complaintStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'open', label: 'Open' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'closed', label: 'Closed' },
  ];

  complaintPriorityOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Priorities' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' },
  ];

  constructor(
    private complaintService: ComplaintService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadComplaints();
  }

  loadCategories(): void {
    this.complaintService.getComplaintCategories().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.categories = response.data?.categories || [];
        }
      }
    });
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
    if (this.complaintCategory) {
      params.complaint_category = this.complaintCategory;
    }
    if (this.status) {
      params.status = this.status;
    }
    if (this.priority) {
      params.priority = this.priority;
    }

    this.complaintService.getComplaints(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.complaints = response.data.complaints || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading complaints', 'error');
        console.error('Error loading complaints:', error);
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

  onView(row: any): void {
    this.router.navigate(['/app/complaints/view', row.complaint_id]);
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.complaints.map(complaint => ({
      'Complaint ID': `#${complaint.complaint_number || '-'}`,
      'Complainant': complaint.complainant_name || '-',
      'Type': complaint.complainant_type || '-',
      'Category': complaint.complaint_category || '-',
      'Subject': complaint.complaint_subject || '-',
      'Priority': complaint.priority || '-',
      'Status': complaint.status || '-',
      'Date': this.formatDate(complaint.complaint_date)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `complaints-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `complaints-${Date.now()}.pdf`, headers);
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

  onComplaintCategoryChange(category: string | null | undefined): void {
    this.complaintCategory = category || undefined;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  onPriorityChange(priority: string | null | undefined): void {
    this.priority = priority || undefined;
    this.pagination.page = 1;
    this.loadComplaints();
  }

  resolveComplaint(complaintId: number): void {
    this.dialogService.confirm({
      title: 'Resolve Complaint',
      message: 'Are you sure you want to resolve this complaint?',
      confirmText: 'Resolve',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.complaintService.resolveComplaint(complaintId, {}).subscribe({
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
