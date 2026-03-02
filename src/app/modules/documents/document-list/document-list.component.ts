import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { SearchSelectComponent } from '../../../shared/components/search-select/search-select.component';
import { DocumentService } from '../../../shared/services/document.service';
import { StudentService } from '../../../shared/services/student.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documents: any[] = [];
  students: any[] = [];
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
      key: 'first_name', 
      label: 'Student Name', 
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
      key: 'document_type', 
      label: 'Document Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'document_title', 
      label: 'Document Title', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'issue_date', 
      label: 'Issue Date', 
      sortable: true,
      type: 'date'
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
  sortColumn = 'issue_date';
  sortDirection: 'asc' | 'desc' = 'desc';
  startDate?: string;
  endDate?: string;
  studentId?: number;
  documentType?: string;
  status?: string;

  get studentOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: 'All Students' }];
    const list = (this.students || []).map((s) => ({
      value: s.student_id,
      label: `${s.first_name || ''} ${s.last_name || ''} (${s.admission_number || ''})`.trim() || ''
    }));
    return [...all, ...list];
  }

  documentTypeOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Types' },
    { value: 'bonafide', label: 'Bonafide Certificate' },
    { value: 'leaving_certificate', label: 'Leaving Certificate' },
    { value: 'other', label: 'Other' },
  ];

  documentStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  constructor(
    private documentService: DocumentService,
    private studentService: StudentService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadDocuments();
  }

  loadStudents(): void {
    this.studentService.getStudents({ limit: 1000 }).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }

  loadDocuments(): void {
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
    if (this.studentId) {
      params.student_id = this.studentId;
    }
    if (this.documentType) {
      params.document_type = this.documentType;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.documentService.getDocuments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.documents = response.data.documents || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading documents', 'error');
        console.error('Error loading documents:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadDocuments();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDocuments();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.document_id;
  }

  onRefresh(): void {
    this.loadDocuments();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEdit(row: any): void {
  console.log('Edit button clicked', row); // Logs the entire row object

  if (!row || !row.document_id) {
    console.error('Invalid document selected', row);
    this.toastService.error('Invalid document selected');
    return;
  }

  console.log('Navigating to edit document with ID:', row.document_id);
  this.router.navigate(['/app/documents/edit', row.document_id]);
  }

 onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Document',
      message: `Are you sure you want to delete "${row.Document_title}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.deleteDocument(row.document_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Document deleted successfully', 'success');
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show('Error deleting document', 'error');
          }
        });
      }
    });
  }
  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.documents.map(doc => ({
      'Student Name': `${doc.first_name || ''} ${doc.last_name || ''}`.trim(),
      'Admission No.': doc.admission_number || '-',
      'Document Type': doc.document_type || '-',
      'Document Title': doc.document_title || '-',
      'Issue Date': this.formatDate(doc.issue_date),
      'Status': doc.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `documents-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `documents-${Date.now()}.pdf`, headers);
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

  onStudentChange(studentId: number | null | undefined): void {
    this.studentId = studentId || undefined;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onDocumentTypeChange(type: string | null | undefined): void {
    this.documentType = type || undefined;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadDocuments();
  }

  getSelectedDocument(): any {
    return this.documents.find(d => d.document_id === this.selectedRowId);
  }

  downloadDocument(documentFile: string): void {
    if (documentFile) {
      const url = documentFile.startsWith('http') ? documentFile : this.documentService.getDownloadUrl(documentFile);
      window.open(url, '_blank');
    }
  }

  generateBonafide(studentId: number): void {
    this.dialogService.confirm({
      title: 'Generate Bonafide Certificate',
      message: 'Generate bonafide certificate for this student?',
      confirmText: 'Generate',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.generateBonafide(studentId).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Bonafide certificate generated successfully', 'success');
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show('Error generating bonafide certificate', 'error');
          }
        });
      }
    });
  }

  generateLeaving(studentId: number): void {
    this.dialogService.confirm({
      title: 'Generate Leaving Certificate',
      message: 'Generate leaving certificate for this student?',
      confirmText: 'Generate',
      cancelText: 'Cancel',
      type: 'info'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.documentService.generateLeaving(studentId).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Leaving certificate generated successfully', 'success');
              this.loadDocuments();
            }
          },
          error: () => {
            this.toastService.show('Error generating leaving certificate', 'error');
          }
        });
      }
    });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
