import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { FeeGroupService } from '../../../shared/services/fee-group.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-fee-group-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './fee-group-list.component.html',
  styleUrls: ['./fee-group-list.component.scss']
})
export class FeeGroupListComponent implements OnInit {
  feeGroups: any[] = [];
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
      key: 'fee_group_name', 
      label: 'Fee Group Name', 
      sortable: true 
    },
    { 
      key: 'fee_group_code', 
      label: 'Fee Group Code', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'total_fee_types', 
      label: 'Fee Types', 
      sortable: true,
      type: 'number',
      link: { route: '/app/fee-types', queryKey: 'fee_group_id', rowKey: 'fee_group_id' }
    },
    { 
      key: 'total_assignments', 
      label: 'Assignments', 
      sortable: true,
      type: 'number'
    }
  ];

  searchTerm = '';
  sortColumn = 'fee_group_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;

  constructor(
    private feeGroupService: FeeGroupService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFeeGroups();
  }

  loadFeeGroups(): void {
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

    this.feeGroupService.getFeeGroups(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.feeGroups = response.data.fee_groups || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading fee groups', 'error');
        console.error('Error loading fee groups:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadFeeGroups();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFeeGroups();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFeeGroups();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFeeGroups();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFeeGroups();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.fee_group_id;
  }

  onRefresh(): void {
    this.loadFeeGroups();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/fee-groups/edit', row.fee_group_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Fee Group',
      message: `Are you sure you want to delete "${row.fee_group_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.feeGroupService.deleteFeeGroup(row.fee_group_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Fee group deleted successfully', 'success');
              this.loadFeeGroups();
            }
          },
          error: () => {
            this.toastService.show('Error deleting fee group', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.feeGroups.map(fg => ({
      'Fee Group Name': fg.fee_group_name,
      'Fee Group Code': fg.fee_group_code || '-',
      'Fee Types': fg.total_fee_types,
      'Assignments': fg.total_assignments
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `fee-groups-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `fee-groups-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
