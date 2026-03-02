import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { UserService } from '../../../shared/services/user.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
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
      key: 'username', 
      label: 'Username', 
      sortable: true 
    },
    { 
      key: 'email', 
      label: 'Email', 
      sortable: true 
    },
    { 
      key: 'first_name', 
      label: 'Name', 
      sortable: true,
      format: (value: any, row?: any) => {
        const fullName = `${row?.first_name || ''} ${row?.last_name || ''}`.trim();
        return fullName || '-';
      }
    },
    { 
      key: 'user_type', 
      label: 'User Type', 
      sortable: true,
      format: (value: any, row?: any) => {
        return row?.role_name || value || '-';
      }
    },
    { 
      key: 'is_active', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value == 1 ? 'badge-success' : 'badge-danger';
        const text = value == 1 ? 'Active' : 'Inactive';
        return `<span class="badge ${badgeClass}">${text}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'created_at';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  userType?: string;
  isActive?: number;

  userTypeOptions: { value: string | null; label: string }[] = [
    { value: null, label: 'All Types' },
    { value: 'admin', label: 'Admin' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'parent', label: 'Parent' },
    { value: 'student', label: 'Student' },
  ];

  userStatusOptions: { value: number | null; label: string }[] = [
    { value: null, label: 'All' },
    { value: 1, label: 'Active' },
    { value: 0, label: 'Inactive' },
  ];

  constructor(
    private userService: UserService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
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
    if (this.userType) {
      params.user_type = this.userType;
    }
    if (this.isActive !== undefined && this.isActive !== null) {
      params.is_active = this.isActive;
    }

    this.userService.getUsers(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.users = response.data.users || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading users', 'error');
        console.error('Error loading users:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadUsers();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadUsers();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadUsers();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadUsers();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadUsers();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.user_id;
  }

  onRefresh(): void {
    this.loadUsers();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/users/edit', row.user_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete User',
      message: `Are you sure you want to delete user "${row.username}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.userService.deleteUser(row.user_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('User deleted successfully', 'success');
              this.loadUsers();
            }
          },
          error: () => {
            this.toastService.show('Error deleting user', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.users.map(user => ({
      'Username': user.username,
      'Email': user.email,
      'Name': `${user.first_name || ''} ${user.last_name || ''}`.trim(),
      'User Type': user.role_name || user.user_type,
      'Status': user.is_active == 1 ? 'Active' : 'Inactive'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `users-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `users-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onUserTypeChange(type: string | null | undefined): void {
    this.userType = type || undefined;
    this.pagination.page = 1;
    this.loadUsers();
  }

  onActiveStatusChange(status: number | null | undefined): void {
    this.isActive = status !== null && status !== undefined ? status : undefined;
    this.pagination.page = 1;
    this.loadUsers();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
