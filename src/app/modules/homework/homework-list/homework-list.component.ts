import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { HomeworkService } from '../../../shared/services/homework.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-homework-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.scss']
})
export class HomeworkListComponent implements OnInit {
  homeworks: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
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
      key: 'homework_title', 
      label: 'Title', 
      sortable: true 
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true 
    },
    { 
      key: 'subject_name', 
      label: 'Subject', 
      sortable: true 
    },
    { 
      key: 'assigned_date', 
      label: 'Assigned Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'due_date', 
      label: 'Due Date', 
      sortable: true,
      type: 'date',
      format: (value: any, row?: any) => {
        if (!value) return '-';
        const date = new Date(value);
        const isOverdue = date < new Date() && row?.status !== 'completed';
        const dateStr = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return isOverdue ? `<span class="text-danger">${dateStr}</span>` : dateStr;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'completed' ? 'badge-success' : 
                          value === 'expired' ? 'badge-danger' : 'badge-warning';
        return `<span class="badge ${badgeClass}">${value || 'active'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'assigned_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  classId?: number;
  subjectId?: number;
  status?: string;

  constructor(
    private homeworkService: HomeworkService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClasses();
    this.loadHomeworks();
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

  loadSubjects(classId?: number): void {
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === 'success' && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.subjects = [];
    }
  }

  loadHomeworks(): void {
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
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.homeworkService.getHomeworks(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.homeworks = response.data.homeworks || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading homeworks', 'error');
        console.error('Error loading homeworks:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadHomeworks();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadHomeworks();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadHomeworks();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadHomeworks();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadHomeworks();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.homework_id;
  }

  onRefresh(): void {
    this.loadHomeworks();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(['/app/homework/edit', row.homework_id]);
  }

  onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Homework',
      message: `Are you sure you want to delete "${row.homework_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.homeworkService.deleteHomework(row.homework_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Homework deleted successfully', 'success');
              this.loadHomeworks();
            }
          },
          error: () => {
            this.toastService.show('Error deleting homework', 'error');
          }
        });
      }
    });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.homeworks.map(hw => ({
      'Title': hw.homework_title,
      'Class': hw.class_name,
      'Subject': hw.subject_name,
      'Assigned Date': this.formatDate(hw.assigned_date),
      'Due Date': this.formatDate(hw.due_date),
      'Status': hw.status || 'active'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `homework-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `homework-${Date.now()}.pdf`, headers);
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

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.subjectId = undefined; // Reset subject when class changes
    this.subjects = [];
    if (classId) {
      this.loadSubjects(classId);
    }
    this.pagination.page = 1;
    this.loadHomeworks();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadHomeworks();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadHomeworks();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
