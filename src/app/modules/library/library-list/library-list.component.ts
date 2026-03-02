import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { LibraryService } from '../../../shared/services/library.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {
  books: any[] = [];
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
      key: 'isbn', 
      label: 'ISBN', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'book_title', 
      label: 'Title', 
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<div class="book-title">${value || '-'}</div>`;
        if (row?.publisher) {
          html += `<div class="book-publisher">${row.publisher}</div>`;
        }
        return html;
      }
    },
    { 
      key: 'author', 
      label: 'Author', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'category', 
      label: 'Category', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'total_copies', 
      label: 'Total Copies', 
      sortable: true,
      type: 'number'
    },
    { 
      key: 'available_copies', 
      label: 'Available', 
      sortable: true,
      type: 'number'
    },
    { 
      key: 'issued_copies', 
      label: 'Issued', 
      sortable: true,
      type: 'number'
    },
    { 
      key: 'available_copies', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = (value || 0) > 0 ? 'badge-success' : 'badge-warning';
        const text = (value || 0) > 0 ? 'Available' : 'Out of Stock';
        return `<span class="badge ${badgeClass}">${text}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'book_title';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  author?: string;
  category?: string;
  availability?: string;

  constructor(
    private libraryService: LibraryService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
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
    if (this.author) {
      params.author = this.author;
    }
    if (this.category) {
      params.category = this.category;
    }
    if (this.availability) {
      params.availability = this.availability;
    }

    this.libraryService.getBooks(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.books = response.data.books || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading books', 'error');
        console.error('Error loading books:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadBooks();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBooks();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadBooks();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadBooks();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadBooks();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.book_id;
  }

  onRefresh(): void {
    this.loadBooks();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/library/edit', row.book_id]);
  }

  onView(row: any): void {
    this.router.navigate(['/app/library/view', row.book_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Book',
      message: `Are you sure you want to delete "${row.book_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.libraryService.deleteBook(row.book_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Book deleted successfully', 'success');
              this.loadBooks();
            }
          },
          error: () => {
            this.toastService.show('Error deleting book', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.books.map(book => ({
      'ISBN': book.isbn || '-',
      'Title': book.book_title,
      'Author': book.author || '-',
      'Category': book.category || '-',
      'Total Copies': book.total_copies || 0,
      'Available': book.available_copies || 0,
      'Issued': book.issued_copies || 0,
      'Status': (book.available_copies || 0) > 0 ? 'Available' : 'Out of Stock'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `library-books-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `library-books-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onAuthorChange(author: string | null | undefined): void {
    this.author = author || undefined;
    this.pagination.page = 1;
    this.loadBooks();
  }

  onCategoryChange(category: string | null | undefined): void {
    this.category = category || undefined;
    this.pagination.page = 1;
    this.loadBooks();
  }

  onAvailabilityChange(availability: string | null | undefined): void {
    this.availability = availability || undefined;
    this.pagination.page = 1;
    this.loadBooks();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
