import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { DesignationService } from '../../../shared/services/designation.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-designation-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.scss']
})
export class DesignationListComponent implements OnInit {
  designations: any[] = [];
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
      key: 'designation_name', 
      label: 'Designation Name', 
      sortable: true 
    },
    { 
      key: 'designation_code', 
      label: 'Designation Code', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'total_teachers', 
      label: 'Teachers', 
      sortable: true,
      type: 'number',
      link: { route: '/app/teachers', queryKey: 'designation_id', rowKey: 'designation_id' }
    }
  ];

  searchTerm = '';
  sortColumn = 'designation_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;

  constructor(
    private designationService: DesignationService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDesignations();
  }

  loadDesignations(): void {
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

    this.designationService.getDesignations(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.designations = response.data.designations || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading designations', 'error');
        console.error('Error loading designations:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadDesignations();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDesignations();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDesignations();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDesignations();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDesignations();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.designation_id;
  }

  onRefresh(): void {
    this.loadDesignations();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/designations/edit', row.designation_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Designation',
      message: `Are you sure you want to delete "${row.designation_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.designationService.deleteDesignation(row.designation_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Designation deleted successfully', 'success');
              this.loadDesignations();
            }
          },
          error: () => {
            this.toastService.show('Error deleting designation', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.designations.map(desig => ({
      'Designation Name': desig.designation_name,
      'Designation Code': desig.designation_code || '-',
      'Teachers': desig.total_teachers
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `designations-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `designations-${Date.now()}.pdf`, headers);
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
