import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { CommitteeService } from '../../../shared/services/committee.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-committee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent implements OnInit {
  committees: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  expandedCommitteeId: number | null = null;
  committeeMembers: { [key: number]: any[] } = {};
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'committee_name', 
      label: 'Committee Name', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'committee_type', 
      label: 'Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'member_count', 
      label: 'Members', 
      sortable: true,
      type: 'number',
      format: (value: any) => {
        return `<span class="badge badge-success">${value || 0}</span>`;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'active' ? 'badge-success' : 'badge-secondary';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'committee_name';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  committeeType?: string;
  status?: string;

  constructor(
    private committeeService: CommitteeService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCommittees();
  }

  loadCommittees(): void {
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
    if (this.committeeType) {
      params.committee_type = this.committeeType;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.committeeService.getCommittees(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.committees = response.data.committees || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading committees', 'error');
        console.error('Error loading committees:', error);
      }
    });
  }

  toggleMembers(committeeId: number): void {
    if (this.expandedCommitteeId === committeeId) {
      this.expandedCommitteeId = null;
    } else {
      this.expandedCommitteeId = committeeId;
      if (!this.committeeMembers[committeeId]) {
        this.loadMembers(committeeId);
      }
    }
  }
 onEdit(row: any): void {
  

  
  this.router.navigate(['/app/committees/edit', row.committee_id]);
  }

  loadMembers(committeeId: number): void {
    this.committeeService.getMembers(committeeId).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.committeeMembers[committeeId] = response.data.members || [];
        }
      },
      error: () => {
        this.toastService.show('Error loading committee members', 'error');
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCommittees();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCommittees();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCommittees();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCommittees();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCommittees();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.committee_id;
  }

  onRefresh(): void {
    this.loadCommittees();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.committees.map(committee => ({
      'Committee Name': committee.committee_name || '-',
      'Type': committee.committee_type || '-',
      'Members': committee.member_count || 0,
      'Status': committee.status || '-',
      'Description': committee.committee_description || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `committees-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `committees-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onCommitteeTypeChange(type: string | null | undefined): void {
    this.committeeType = type || undefined;
    this.pagination.page = 1;
    this.loadCommittees();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadCommittees();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
