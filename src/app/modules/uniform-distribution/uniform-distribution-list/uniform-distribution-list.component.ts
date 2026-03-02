import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { UniformDistributionService } from '../../../shared/services/uniform-distribution.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-uniform-distribution-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './uniform-distribution-list.component.html',
  styleUrls: ['./uniform-distribution-list.component.scss']
})
export class UniformDistributionListComponent implements OnInit {
  distributions: any[] = [];
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
      return `${row?.student_first_name || ''} ${row?.student_last_name || ''}`.trim() || '-';
    }
   },

    { 
      key: 'admission_number', 
      label: 'Admission No.', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'uniform_type', 
      label: 'Uniform Type', 
      sortable: true,
      format: (value: any) => value || '-'
    },
   { 
      key: 'uniform_size',   
      label: 'uniform_Size', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'quantity', 
      label: 'Quantity', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '0'
    },
    { 
      key: 'distribution_date', 
      label: 'Distribution Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'return_status', 
      label: 'Return Status', 
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
  uniformType?: string;
  returnStatus?: string;

  constructor(
    private uniformService: UniformDistributionService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
    
  ) {}

  ngOnInit(): void {
    this.loadDistributions();
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
    if (this.uniformType) {
      params.uniform_type = this.uniformType;
    }
    if (this.returnStatus) {
      params.return_status = this.returnStatus;
    }

    this.uniformService.getDistributions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.distributions = response.data.distributions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading uniform distributions', 'error');
        console.error('Error loading uniform distributions:', error);
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
     
  onEditDistribution(distribution: any): void {
  const distributionId = distribution.distribution_id;
  if (!distributionId) return;
  this.router.navigate(['/app/uniform-distribution/edit', distributionId]);
  }

  onDeleteDistribution(distribution: any): void {
  const distributionId = distribution?.distribution_id;

  if (!distributionId) {
    this.toastService.show('Invalid distribution selected', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Delete Uniform Distribution',
    message: 'Are you sure you want to delete this uniform distribution?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed) => {
    if (confirmed) {
      this.uniformService.deleteDistribution(distributionId).subscribe({
       next: (res: any) => {

          if (res.status === 'success') {
            this.toastService.show('Uniform distribution deleted successfully', 'success');
            this.loadDistributions();
          } else {
            this.toastService.show(res.message || 'Failed to delete', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error deleting uniform distribution', 'error');
        }
      });
    }
  });
}
  
  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.distributions.map(dist => ({
      'Student Name': `${dist.student_first_name || ''} ${dist.student_last_name || ''}`.trim(),
      'Admission Number': dist.admission_number || '-',
      'Uniform Type': dist.uniform_type || '-',
      'Size': dist.size || '-',
      'Quantity': dist.quantity || '0',
      'Distribution Date': this.formatDate(dist.distribution_date),
      'Return Status': dist.return_status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `uniform-distributions-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `uniform-distributions-${Date.now()}.pdf`, headers);
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
    this.loadDistributions();
  }

  onReturnStatusChange(status: string | null | undefined): void {
    this.returnStatus = status || undefined;
    this.pagination.page = 1;
    this.loadDistributions();
  }

  returnUniform(distributionId: number): void {
  const distribution = this.distributions.find(d => d.distribution_id === distributionId);
  if (!distribution || distribution.return_status !== 'distributed') {
    this.toastService.show('This uniform cannot be returned', 'error');
    return;
  }

  this.dialogService.confirm({
    title: 'Return Uniform',
    message: 'Mark this uniform as returned?',
    confirmText: 'Return',
    cancelText: 'Cancel',
    type: 'info'
  }).subscribe((confirmed) => {
    if (confirmed) {
      this.uniformService.returnUniform({ distribution_id: distributionId }).subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            this.toastService.show('Uniform returned successfully', 'success');
            distribution.return_status = 'returned';
            this.selectedRowId = undefined; // deselect the row
          } else {
            this.toastService.show(response.message || 'Failed to return uniform', 'error');
          }
        },
        error: () => {
          this.toastService.show('Error returning uniform', 'error');
        }
      });
    }
  });
  }

  getSelectedDistribution(): any {
    return this.distributions.find(d => d.distribution_id === this.selectedRowId);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
