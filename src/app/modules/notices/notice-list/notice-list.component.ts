import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { NoticeService } from '../../../shared/services/notice.service';
import { ClassService } from '../../../shared/services/class.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-notice-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {
  notices: any[] = [];
  classes: any[] = [];
  loading = false;
  selectedRowId?: number;
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'notice_title', 
      label: 'Title', 
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<strong>${value || ''}</strong>`;
        if (row && row.is_important == 1) {
          html += ` <span class="badge badge-danger ml-2">Important</span>`;
        }
        return html;
      }
    },
    { 
      key: 'notice_type', 
      label: 'Type', 
      sortable: true 
    },
    { 
      key: 'target_audience', 
      label: 'Audience', 
      sortable: true 
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true,
      format: (value: any) => value || 'All'
    },
    { 
      key: 'notice_date', 
      label: 'Date', 
      sortable: true,
      type: 'date'
    }
  ];

  searchTerm = '';
  sortColumn = 'notice_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  noticeType?: string;
  targetAudience?: string;
  classId?: number;
  showFilters = false;

  constructor(
    private noticeService: NoticeService,
    private classService: ClassService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadNotices();
  }

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  loadNotices(): void {
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
    if (this.noticeType) {
      params.notice_type = this.noticeType;
    }
    if (this.targetAudience) {
      params.target_audience = this.targetAudience;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }

    this.noticeService.getNotices(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.notices = response.data.notices || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading notices', 'error');
        console.error('Error loading notices:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadNotices();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadNotices();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.notice_id;
  }

  onRefresh(): void {
    this.loadNotices();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/notices/edit', row.notice_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Notice',
      message: `Are you sure you want to delete "${row.notice_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.noticeService.deleteNotice(row.notice_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Notice deleted successfully', 'success');
              this.loadNotices();
            }
          },
          error: () => {
            this.toastService.show('Error deleting notice', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.notices.map(notice => ({
      'Title': notice.notice_title,
      'Type': notice.notice_type,
      'Audience': notice.target_audience,
      'Class': notice.class_name || 'All',
      'Date': this.formatDate(notice.notice_date)
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `notices-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `notices-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  onNoticeTypeChange(type: string | null | undefined): void {
    this.noticeType = type || undefined;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onTargetAudienceChange(audience: string | null | undefined): void {
    this.targetAudience = audience || undefined;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadNotices();
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
