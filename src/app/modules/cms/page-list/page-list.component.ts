import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { CmsService } from '../../../shared/services/cms.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  pages: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'title', label: 'Title', sortable: true, format: (v: any) => v || '-' },
    { key: 'slug', label: 'Slug', sortable: true, format: (v: any) => v || '-' },
    { key: 'is_published', label: 'Published', sortable: true, format: (v: any) => `<span class="badge ${v == 1 ? 'badge-success' : 'badge-secondary'}">${v == 1 ? 'Yes' : 'No'}</span>` }
  ];
  searchTerm = '';

  constructor(private cmsService: CmsService,  private router: Router,   private dialogService: DialogService,  private toast: ToastService) {}
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.cmsService.getPages({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.pages = res.data.pages || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading pages', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onEdit(page: any): void {
  console.log('Edit clicked for CMS page:', page);

  // Navigate to the edit route with the page ID
  this.router.navigate(['/app/cms/edit', page.page_id]);
  }
 onDelete(page: any): void {
  this.dialogService.confirm({
    title: 'Delete Page',
    message: `Are you sure you want to delete "${page.title}"?`,
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'danger'
  }).subscribe((confirmed) => {
    if (confirmed) {
      this.cmsService.deletePage(page.page_id).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            this.toast.show('Page deleted successfully', 'success');
            this.load(); // Refresh the list
          } else {
            this.toast.show(res.message || 'Failed to delete page', 'error');
          }
        },
        error: (err) => {
          console.error('Delete page error:', err);
          this.toast.show('An error occurred while deleting the page', 'error');
        }
      });
    }
  });
}


  onExportClick(_: any) {}

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
