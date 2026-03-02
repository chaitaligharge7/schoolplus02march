import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SportsService } from '../../../shared/services/sports.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any[] = [];
  loading = false;

  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns: TableColumn[] = [
    { key: 'event_name', label: 'Event', sortable: true, format: (v: any) => v || '-' },
    { key: 'event_type', label: 'Type', sortable: true, format: (v: any) => v || '-' },
    { key: 'event_date', label: 'Date', sortable: true, type: 'date', format: (v: any) => v || '-' },
    { key: 'venue', label: 'Venue', sortable: true, format: (v: any) => v || '-' },
    { key: 'status', label: 'Status', sortable: true, format: (v: any) => `<span class="badge badge-info">${v || '-'}</span>` }
  ];
  searchTerm = '';

  constructor(private sportsService: SportsService, private toast: ToastService, private router: Router, private dialogService: DialogService,
    private exportService: ExportService,) { }
  ngOnInit(): void { this.load(); }
  load(): void {
    this.loading = true;
    this.sportsService.getEvents({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success' && res.data) {
          this.events = res.data.events || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => { this.loading = false; this.toast.show('Error loading events', 'error'); }
    });
  }
  onPageChange(p: number) { this.pagination.page = p; this.load(); }
  onPageSizeChange(s: number) { this.pagination.limit = s; this.pagination.page = 1; this.load(); }
  onSearchChange(s: string) { this.searchTerm = s; this.pagination.page = 1; this.load(); }
  onSortChange(_: any) { this.load(); }
  onRowSelect(_: any) { }
  onRefresh() { this.load(); }
  onAdd() { }
  onEdit(row: any): void {
    this.router.navigate(['/app/sports/edit', row.event_id]);
  }
  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Section',
      message: `Are you sure you want to delete "${row.event_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.sportsService.deleteEvent(row.event_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toast.show('Section deleted successfully', 'success');
              this.load();
            }
          },
          error: () => {
            this.toast.show('Error deleting section', 'error');
          }
        });
      }
    });
  }
  onExportClick(_: any) { }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
