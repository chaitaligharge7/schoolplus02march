import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { UniformFineService } from '../../../shared/services/uniform-fine.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-uniform-fine-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './uniform-fine-list.component.html',
  styleUrls: ['./uniform-fine-list.component.scss']
})
export class UniformFineListComponent implements OnInit {
  fines: any[] = [];
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
    return `${value} (${row?.admission_number || '-'})`;
    }
    },

    { 
      key: 'uniform_type', 
      label: 'Uniform Type', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'violation_description', 
      label: 'Violation', 
      sortable: false,
      format: (value: any) => value || '-'
    },
    { 
      key: 'fine_amount', 
      label: 'Fine Amount', 
      sortable: true,
      type: 'number',
      format: (value: any) => {
        return value ? `₹${Number(value).toLocaleString('en-IN')}` : '₹0';
      }
    },
    { 
      key: 'fine_date', 
      label: 'Fine Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
      const badgeClass = value === 'paid' ? 'badge-success' : 'badge-warning';
      return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'fine_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  uniformType?: string;
  status?: string;
 
  constructor(
    private uniformFineService: UniformFineService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private dialogService: DialogService
  ) {}
  

  ngOnInit(): void {
    this.loadFines();
  }
    
 loadFines(): void {
  this.loading = true;

  const params: any = {
    page: this.pagination.page,
    limit: this.pagination.limit,
    sort_column: this.sortColumn,
    sort_direction: this.sortDirection.toUpperCase()
  };

  if (this.searchTerm) params.search = this.searchTerm;
  if (this.startDate) params.start_date = this.startDate;
  if (this.endDate) params.end_date = this.endDate;
  if (this.uniformType) params.uniform_type = this.uniformType;
  if (this.status) params.status = this.status;

  this.uniformFineService.getUniformFines(params).subscribe({
    next: (response) => {
      this.loading = false;
      console.log('API response fines:', response.data?.fines);

      if (response.status === 'success' && response.data?.fines?.length) {
        this.fines = response.data.fines.map((fine: any) => ({
          fine_id: fine.fine_id,
          student_name: fine.student_first_name || fine.student_last_name? `${fine.student_first_name || ''} ${fine.student_last_name || ''}`.trim() : `ID: ${fine.person_id}`,
          admission_number: fine.admission_number || '-',
          uniform_type: fine.fine_type || fine.violation_type || '-',
          violation_description: fine.remarks || fine.violation_type || '-',
          fine_amount: fine.fine_amount || fine.amount || 0,
          fine_date: fine.fine_date,
          status: fine.status || 'pending'
        }));

      
        this.pagination = response.data.pagination || this.pagination;
      } else {
        this.fines = [];
      }
    },
    error: (error) => {
      this.loading = false;
      this.toastService.show('Error loading uniform fines', 'error');
      console.error('Error loading uniform fines:', error);
    }
  });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadFines();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFines();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFines();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFines();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFines();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.fine_id;
  }

  onRefresh(): void {
    this.loadFines();
  }
  
  onAdd(): void {
    // Navigation handled by routerLink
  }
    
   onEditFine(fine: any) {
  this.router.navigate(['/app/uniform-fines/edit', fine.fine_id]);
 }

    onDeleteFine(fine: any): void {
  const fineId = fine?.fine_id;

  if (!fineId) {
    this.toastService.show('Invalid fine selected', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Delete Uniform Fine',
    message: 'Are you sure you want to delete this fine?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed) => {
    if (confirmed) {
      this.uniformFineService.deleteUniformFine(fineId).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toastService.show('Fine deleted successfully', 'success');
            this.loadFines();
          } else {
            this.toastService.show(res.message || 'Failed to delete fine', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error deleting fine', 'error');
        }
      });
    }
  });
}

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.fines.map(fine => ({
      'Student Name': fine.student_name || '-',
      'Admission Number': fine.admission_number || '-',
      'Uniform Type': fine.uniform_type || '-',
      'Violation': fine.violation_description || '-',
      'Fine Amount': `₹${Number(fine.fine_amount || 0).toLocaleString('en-IN')}`,
      'Fine Date': this.formatDate(fine.fine_date),
      'Status': fine.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `uniform-fines-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `uniform-fines-${Date.now()}.pdf`, headers);
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

  onUniformTypeChange(type: string | null | undefined): void {
    this.uniformType = type || undefined;
    this.pagination.page = 1;
    this.loadFines();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadFines();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
