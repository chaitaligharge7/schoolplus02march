import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { DigitalNotesService } from '../../../shared/services/digital-notes.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  resources: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'title', label: 'Title', sortable: true, format: (v: any) => v || '-' },
    { key: 'class_name', label: 'Class', sortable: true, format: (v: any) => v || '-' },
    { key: 'subject_name', label: 'Subject', sortable: true, format: (v: any) => v || '-' },
    { key: 'resource_type', label: 'Type', sortable: true, format: (v: any) => v || '-' },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => `<span class="badge ${v === 'active' ? 'badge-success' : 'badge-secondary'}">${v || '-'}</span>` }
  ];
  searchTerm = '';

  constructor(
    private notesService: DigitalNotesService,
    private toast: ToastService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private router: Router
    ) {}

  ngOnInit(): void { this.load(); }
  
  load(): void {
    this.loading = true;
    this.notesService.getResources({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.resources = res.data.resources || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading resources', 'error'); }
    });
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/digital-notes/edit', row.resource_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Resource',
      message: `Are you sure you want to delete "${row.title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.notesService.deleteResource(row.resource_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toast.show('Resource deleted successfully', 'success');
              this.load();
            }
          },
          error: () => {
            this.toast.show('Error deleting resource', 'error');
          }
        });
      }
    });
  }

  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) {}
  onRefresh() { this.load(); }
  onAdd() {}
  onExportClick(_: any) {}
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
