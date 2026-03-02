import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { BirthdayService } from '../../../shared/services/birthday.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-birthday-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './birthday-list.component.html',
  styleUrls: ['./birthday-list.component.scss']
})
export class BirthdayListComponent implements OnInit {
  birthdays: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  selectedReminders: number[] = [];
  
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };

  columns: TableColumn[] = [
    { 
      key: 'person_name', 
      label: 'Person', 
      sortable: true,
      format: (value: any, row?: any) => {
        const name = row?.student_first_name ? 
          `${row.student_first_name} ${row.student_last_name}` : 
          `${row?.staff_first_name || ''} ${row?.staff_last_name || ''}`;
        const id = row?.admission_number || row?.employee_id || '';
        return `${name.trim() || '-'}<br><small>${id}</small>`;
      }
    },
    { 
      key: 'person_type', 
      label: 'Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'birth_date', 
      label: 'Birth Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'reminder_sent', 
      label: 'Reminder Sent', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 1 ? 'badge-success' : 'badge-warning';
        const text = value === 1 ? 'Sent' : 'Pending';
        return `<span class="badge ${badgeClass}">${text}</span>`;
      }
    },
    { 
      key: 'reminder_date', 
      label: 'Reminder Date', 
      sortable: true,
      type: 'date',
      format: (value: any) => value || '-'
    }
  ];

  searchTerm = '';
  sortColumn = 'birth_date';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  dateFilter: string = 'today';

  constructor(
    private birthdayService: BirthdayService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBirthdays();
  }

  loadBirthdays(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
      date_filter: this.dateFilter
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

    this.birthdayService.getBirthdays(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.birthdays = response.data.birthdays || [];
          this.pagination = response.data.pagination || this.pagination;
          // Clear selections when data changes
          this.selectedReminders = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading birthdays', 'error');
        console.error('Error loading birthdays:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadBirthdays();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBirthdays();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadBirthdays();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadBirthdays();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadBirthdays();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.reminder_id;
  }

  onRefresh(): void {
    this.loadBirthdays();
  }

  onAdd(): void {
    // No add functionality for birthdays
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.birthdays.map(birthday => {
      const name = birthday.student_first_name ? 
        `${birthday.student_first_name} ${birthday.student_last_name}` : 
        `${birthday.staff_first_name || ''} ${birthday.staff_last_name || ''}`;
      const id = birthday.admission_number || birthday.employee_id || '';
      return {
        'Person': name.trim(),
        'ID': id,
        'Type': birthday.person_type || '-',
        'Birth Date': this.formatDate(birthday.birth_date),
        'Reminder Sent': birthday.reminder_sent === 1 ? 'Sent' : 'Pending',
        'Reminder Date': birthday.reminder_date ? this.formatDate(birthday.reminder_date) : '-'
      };
    });

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `birthdays-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `birthdays-${Date.now()}.pdf`, headers);
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

  onDateFilterChangeSelect(filter: string): void {
    this.dateFilter = filter;
    this.pagination.page = 1;
    this.loadBirthdays();
  }

  toggleSelection(reminderId: number): void {
    const index = this.selectedReminders.indexOf(reminderId);
    if (index > -1) {
      this.selectedReminders.splice(index, 1);
    } else {
      this.selectedReminders.push(reminderId);
    }
  }

  toggleSelectAll(): void {
    if (this.selectedReminders.length === this.birthdays.length && this.birthdays.length > 0) {
      this.selectedReminders = [];
    } else {
      this.selectedReminders = this.birthdays.map(b => b.reminder_id);
    }
  }

  isSelected(reminderId: number): boolean {
    return this.selectedReminders.includes(reminderId);
  }

  sendBirthdayReminders(): void {
    if (this.selectedReminders.length === 0) {
      this.toastService.show('Please select at least one birthday reminder', 'warning');
      return;
    }

    this.dialogService.confirm({
      title: 'Send Birthday Reminders',
      message: `Send ${this.selectedReminders.length} birthday reminder(s) to recipients?`,
      confirmText: 'Send',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.birthdayService.sendBirthdayReminders(this.selectedReminders).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show(`Birthday reminders sent to ${response.data?.sent || 0} recipients`, 'success');
              this.selectedReminders = [];
              this.loadBirthdays();
            }
          },
          error: () => {
            this.toastService.show('Failed to send birthday reminders', 'error');
          }
        });
      }
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
