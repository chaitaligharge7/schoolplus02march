import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { IdCardService } from '../../../shared/services/id-card.service';
import { ToastService } from '../../../shared/services/toast.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-id-card-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './id-card-list.component.html',
  styleUrls: ['./id-card-list.component.scss']
})
export class IdCardListComponent implements OnInit {
  idCards: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  selectedCard: any = null; 
  
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
      key: 'card_type', 
      label: 'Card Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'person_type', 
      label: 'Person Type', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'card_number', 
      label: 'Card Number', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'issued_date', 
      label: 'Issued Date', 
      sortable: true,
      type: 'date',
      format: (value: any, row?: any) => row.issued_date || '-' 
    },
    { 
      key: 'expiry_date', 
      label: 'Expiry Date', 
      sortable: true,
      type: 'date',
      format: (value: any, row?: any) => row.expiry_date || '-'
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        const badgeClass = value === 'active' ? 'badge-success' : 'badge-secondary';
        return `<span class="badge ${badgeClass}">${value || '-'}</span>`;
      }
    }
  ];

    searchTerm = '';
    sortColumn = 'issued_date';
    sortDirection: 'asc' | 'desc' = 'desc';
    startDate?: string;
    endDate?: string;
    cardType?: string;
    personType?: string;
    status?: string;

  constructor(
    private idCardService: IdCardService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadIdCards();
  }

  loadIdCards(): void {
  this.loading = true;

  const params: any = {
    page: this.pagination.page,
    limit: this.pagination.limit,
    sort_column: this.sortColumn,
    sort_direction: this.sortDirection.toUpperCase()
  };

  if (this.searchTerm) params.search = this.searchTerm;
  if (this.startDate) params.start_date = this.startDate;
  if (this.endDate) params.end_date = this.endDate;
  if (this.cardType) params.card_type = this.cardType;
  if (this.personType) params.person_type = this.personType;

  this.idCardService.getIdCards(params).subscribe({
    next: (response) => {
      this.loading = false;

      if (response.status === 'success' && response.data) {
        this.idCards = (response.data.cards || []).map((card: any) => ({
          ...card,
          issued_date: card.issued_date || null,
          expiry_date: card.expiry_date || null,
          student_first_name: card.student_first_name || '',
          student_last_name: card.student_last_name || '',
          staff_first_name: card.staff_first_name || '',
          staff_last_name: card.staff_last_name || '',
          status: card.status || 'active'
        }));

        this.pagination = response.data.pagination || this.pagination;
      } else {
        this.idCards = [];
      }
    },
    error: (error) => {
      this.loading = false;
      this.toastService.show('Error loading ID cards', 'error');
      
    }
  });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadIdCards();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadIdCards();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadIdCards();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadIdCards();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadIdCards();
  }

onRowSelect(event: any): void {
  this.selectedCard = event.data; 
}
  onRefresh(): void {
    this.loadIdCards();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEdit(card: any): void {
  if (!card || !card.card_id) return;
  this.router.navigate(['/app/id-cards/edit', card.card_id]);
}

  onDelete(card: any): void {
  if (!card || !card.card_id) return;

  this.dialogService.confirm({
    title: 'Delete ID Card',
    message: `Are you sure you want to delete the ID card for ${card.student_first_name || card.staff_first_name || 'this person'}?`,
    confirmText: 'Delete',
    cancelText: 'Cancel',
    type: 'warning'
  }).subscribe((confirmed: boolean) => {
    if (!confirmed) return;

    this.idCardService.deleteIdCard(card.card_id).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          this.toastService.show('ID card deleted successfully', 'success');
          this.loadIdCards(); 
        } else {
          this.toastService.show(response.message || 'Failed to delete ID card', 'error');
        }
      },
      error: (err: any) => {
        this.toastService.show('Error deleting ID card', 'error');
      }
    });
  });
}

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.idCards.map(card => {
      const name = card.student_first_name ? 
        `${card.student_first_name} ${card.student_last_name}` : 
        `${card.staff_first_name || ''} ${card.staff_last_name || ''}`;
      const id = card.admission_number || card.employee_id || '';
      return {
        'Person': name.trim(),
        'ID': id,
        'Card Type': card.card_type || '-',
        'Person Type': card.person_type || '-',
        'Card Number': card.card_number || '-',
        'Issued Date': this.formatDate(card.issued_date),
        'Expiry Date': card.expiry_date ? this.formatDate(card.expiry_date) : '-',
        'Status': card.status || '-'
      };
    });

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `id-cards-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `id-cards-${Date.now()}.pdf`, headers);
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

  onCardTypeChange(type: string | null | undefined): void {
    this.cardType = type || undefined;
    this.pagination.page = 1;
    this.loadIdCards();
  }

  onPersonTypeChange(type: string | null | undefined): void {
    this.personType = type || undefined;
    this.pagination.page = 1;
    this.loadIdCards();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadIdCards();
  }
  generateIdCards(): void {
  if (!this.selectedCard) {
    this.toastService.show('Please select a record to generate ID cards', 'warning');
    return;
  }

  this.dialogService.confirm({
    title: 'Generate ID Cards',
    message: 'Generate ID cards for selected record?',
    confirmText: 'Generate',
    cancelText: 'Cancel',
    type: 'info'
  }).subscribe((confirmed) => {
    if (!confirmed) return;

    const payload = {
      person_ids: [this.selectedCard.person_id], 
      person_type: this.selectedCard.person_type || 'student',
      card_type: this.selectedCard.card_type || 'student'
    };

    this.idCardService.generateIdCards(payload).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.toastService.show('ID card generated successfully', 'success');
          this.pagination.page = 1;
          this.sortColumn = 'card_id';
          this.sortDirection = 'desc';
          this.loadIdCards();
        } else {
          this.toastService.show(response.message || 'Failed to generate ID card', 'error');
        }
      },
      error: (error) => {
        this.toastService.show('Error generating ID card', 'error');
        
      }
    });
  });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}