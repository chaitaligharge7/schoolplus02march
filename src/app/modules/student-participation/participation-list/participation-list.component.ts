import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { StudentParticipationService } from '../../../shared/services/student-participation.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-participation-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.scss']
})
export class ParticipationListComponent implements OnInit {
  participations: any[] = [];
  academicYears: any[] = [];
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
      key: 'student_name', 
      label: 'Student', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${row?.first_name || ''} ${row?.last_name || ''}`.trim() || '-';
      }
    },
    { 
      key: 'admission_number', 
      label: 'Admission No.', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'event_name', 
      label: 'Event Name', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'participation_type', 
      label: 'Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'participation_level', 
      label: 'Level', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'event_date', 
      label: 'Event Date', 
      sortable: true,
      type: 'date'
    },
    { 
      key: 'achievement', 
      label: 'Achievement', 
      sortable: false,
      format: (value: any) => value || '-'
    },
    { 
      key: 'points', 
      label: 'Points', 
      sortable: true,
      type: 'number',
      format: (value: any) => value || '0'
    }
  ];

  searchTerm = '';
  sortColumn = 'event_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  participationType?: string;

  constructor(
    private participationService: StudentParticipationService,
    private academicYearService: AcademicYearService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadParticipations();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
  }

  loadParticipations(): void {
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
    if (this.academicYearId) {
      params.academic_year_id = this.academicYearId;
    }
    if (this.participationType) {
      params.participation_type = this.participationType;
    }

    this.participationService.getParticipations(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.participations = response.data.participations || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading student participations', 'error');
        console.error('Error loading student participations:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadParticipations();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadParticipations();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadParticipations();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadParticipations();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadParticipations();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.participation_id;
  }

  onRefresh(): void {
    this.loadParticipations();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.participations.map(participation => ({
      'Student Name': `${participation.first_name || ''} ${participation.last_name || ''}`.trim(),
      'Admission Number': participation.admission_number || '-',
      'Event Name': participation.event_name || '-',
      'Type': participation.participation_type || '-',
      'Level': participation.participation_level || '-',
      'Event Date': this.formatDate(participation.event_date),
      'Achievement': participation.achievement || '-',
      'Points': participation.points || '0'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `student-participations-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `student-participations-${Date.now()}.pdf`, headers);
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

  onAcademicYearChange(yearId: number | null | undefined): void {
    this.academicYearId = yearId || undefined;
    this.pagination.page = 1;
    this.loadParticipations();
  }

  onParticipationTypeChange(type: string | null | undefined): void {
    this.participationType = type || undefined;
    this.pagination.page = 1;
    this.loadParticipations();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
