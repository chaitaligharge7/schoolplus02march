import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { VisitorService } from '../../../shared/services/visitor.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';



@Component({
  selector: 'app-visitor-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './visitor-category-list.component.html',
  styleUrls: ['./visitor-category-list.component.scss']
})



export class VisitorCategoriesListComponent implements OnInit {

  // Table data
  categories: any[] = [];

  // Table column configuration
  columns = [
    {
      key: 'category_name',
      label: 'Category Name',
      sortable: true
    },
    {
      key: 'description',
      label: 'Description',
      sortable: false
    },
    {
      key: 'category_status',
      label: 'Status',
      sortable: true
    }
  ];

  // Pagination config
  pagination = {
    page: 1,
    pageSize: 10,
    total: 0
  };

  loading = false;


  showFilters = false;
  selectedRowId: number | null = null;

  // Filters & sorting
  searchTerm = '';
  sortKey = '';
  sortDirection: 'asc' | 'desc' | '' = '';

  constructor(
   private visitorService: VisitorService,
    private toastService: ToastService,
    private exportService: ExportService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // ========================
  // Data loading
  // ========================
 loadCategories(): void {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.categories = response.data?.categories || [];
        }
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
    this.pagination.pageSize = size;
    this.pagination.page = 1;
    this.loadCategories();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCategories();
  }

  onSortChange(event: { key: string; direction: 'asc' | 'desc' }): void {
    this.sortKey = event.key;
    this.sortDirection = event.direction;
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
    console.log('Add category clicked');
    // Navigate or open modal
     this.router.navigate(['app/visitors/add']);
  }

  onEdit(row: any): void {
    console.log('Edit category', row);
    // Navigate or open modal
  
    this.router.navigate(['/app/visitors/category/edit', row.category_id]);
  }
  onDelete(category: any): void {
    if (!category || !category.category_id) {
      return;
    }

    this.dialogService.confirm({
      title: 'Delete Category',
      message: `Are you sure you want to delete category "${category.category_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (!confirmed) return;

      this.visitorService.deleteCategory(category.category_id).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toastService.show('Category deleted successfully', 'success');
            this.loadCategories(); // reload the category list
          } else {
            this.toastService.show(res.message || 'Error deleting category', 'error');
          }
        },
        error: (err) => {
          this.toastService.show(err?.error?.message || 'Error deleting category', 'error');
        }
      });
    });
  }
  goBack() {
  this.router.navigate(['app/visitors/list']);
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}

