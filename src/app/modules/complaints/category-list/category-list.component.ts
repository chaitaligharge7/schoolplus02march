import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ComplaintService } from '../../../shared/services/complaint.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  // Table data
  categories: any[] = [];

  // Table column configuration
  columns: TableColumn[] = [
    { key: 'category_name', label: 'Category Name', sortable: true },
    { key: 'description', label: 'Description', sortable: false },
   {
  key: 'category_status',
  label: 'Status',
  sortable: true,
  format: (value: any) => {
    // Map 1 → Active, 0 → Inactive
    const statusText = value === 1 || value === '1' ? 'Active' : 'Inactive';
    const badgeClass = statusText === 'Active' ? 'badge-success' : 'badge-danger';
    return `<span class="badge ${badgeClass}">${statusText}</span>`;
  }
}

  ];

  // Pagination config
  pagination = {
    page: 1,
    limit: 10,
    total: 0
  };

  loading = false;


  showFilters = false;
  selectedRowId?: number;
  searchTerm = '';
  sortKey = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  isEditMode = false;

  constructor(
    private complaintService: ComplaintService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
  // Simply load all categories when the page loads
  this.loadCategories();
}


  // ========================
  // Data loading
  // ========================
 loadCategories(): void {
  this.loading = true;

  // Prepare API parameters
  const params: any = {
    page: this.pagination.page,
    limit: this.pagination.limit
  };

  // Add optional filters
  if (this.searchTerm) params.search = this.searchTerm;
  if (this.sortKey) params.sort_column = this.sortKey;
  if (this.sortDirection) params.sort_direction = this.sortDirection.toUpperCase();

  // Call the service
  this.complaintService.getComplaintCategories().subscribe({
    next: (res) => {
      this.loading = false;

      if (res.status === 'success' && res.data) {
        this.categories = res.data.categories || [];
        this.pagination.total = res.data.pagination?.total ?? this.categories.length;
      }
    },
    error: (err) => {
      this.loading = false;
      console.error('Error loading categories:', err);
      this.toastService.show('Failed to load categories', 'error');
    }
  });
}



  // ========================
  // Table events
  // ========================
  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCategories();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCategories();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCategories();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.category_id;
  }

  onRefresh(): void {
    this.loadCategories();
  }

  // ========================
  // Actions
  // ========================
  onAdd(): void {
    this.router.navigate(['/app/complaints/add']);
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/complaints/categoryedit', row.category_id]);
}


  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Category',
      message: `Are you sure you want to delete "${row.category_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.complaintService.deleteComplaintCategory(row.category_id).subscribe({
          next: (res) => {
            if (res.status === 'success') {
              this.toastService.show('Category deleted successfully', 'success');
              this.loadCategories();
            }
          },
          error: () => {
            this.toastService.show('Failed to delete category', 'error');
          }
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/app/complaints/list']);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
