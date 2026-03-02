import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EnhancedTableComponent, TableColumn } from '../../../shared/components/enhanced-table/enhanced-table.component';
import { ImportantNotesService } from '../../../shared/services/important-notes.service';
import { AcademicYearService } from '../../../shared/services/academic-year.service';
import { ClassService } from '../../../shared/services/class.service';
import { SubjectService } from '../../../shared/services/subject.service';
import { ToastService } from '../../../shared/services/toast.service';
import { ExportService } from '../../../shared/services/export.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: any[] = [];
  academicYears: any[] = [];
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
      key: 'note_title', 
      label: 'Note Title', 
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<strong>${value || '-'}</strong>`;
        if (row?.note_description) {
          const desc = row.note_description.length > 50 ? 
            row.note_description.substring(0, 50) + '...' : row.note_description;
          html += `<p class="note-description">${desc}</p>`;
        }
        return html;
      }
    },
    { 
      key: 'class_name', 
      label: 'Class', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'subject_name', 
      label: 'Subject', 
      sortable: true,
      format: (value: any) => value || '-'
    },
    { 
      key: 'teacher_name', 
      label: 'Teacher', 
      sortable: true,
      format: (value: any, row?: any) => {
        return `${row?.teacher_first_name || ''} ${row?.teacher_last_name || ''}`.trim() || '-';
      }
    },
    { 
      key: 'note_type', 
      label: 'Type', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-info">${value || '-'}</span>`;
      }
    },
    { 
      key: 'status', 
      label: 'Status', 
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-success">${value || '-'}</span>`;
      }
    }
  ];

  searchTerm = '';
  sortColumn = 'note_title';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  academicYearId?: number;
  classId?: number;
  subjectId?: number;
  noteType?: string;

  constructor(
    private notesService: ImportantNotesService,
    private academicYearService: AcademicYearService,
    private classService: ClassService,
    private subjectService: SubjectService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadNotes();
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

  loadClasses(): void {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }

  loadSubjects(): void {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }

  loadNotes(): void {
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
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }
    if (this.noteType) {
      params.note_type = this.noteType;
    }

    this.notesService.getNotes(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === 'success' && response.data) {
          this.notes = response.data.notes || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show('Error loading important notes', 'error');
        console.error('Error loading important notes:', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadNotes();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onSortChange(sort: { column: string; direction: 'asc' | 'desc' }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadNotes();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.note_id;
  }

  onRefresh(): void {
    this.loadNotes();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }
  onEdit(row: any): void {
    this.router.navigate(['/app/important-notes/edit', row.note_id]);
  }

 onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Deactivate Student',
      message: `Are you sure you want to deactivate "${row.note_id}"?`,
      confirmText: 'Deactivate',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.notesService.deleteNote(row.note_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('Student deactivated successfully', 'success');
              this.loadNotes();
            }
          },
          error: () => {
            this.toastService.show('Error deactivating student', 'error');
          }
        });
      }
    });
  }

  onView(row: any): void {
    this.router.navigate(['/app/important-notes/view', row.note_id]);
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.notes.map(note => ({
      'Note Title': note.note_title || '-',
      'Description': note.note_description || '-',
      'Class': note.class_name || '-',
      'Subject': note.subject_name || '-',
      'Teacher': `${note.teacher_first_name || ''} ${note.teacher_last_name || ''}`.trim() || '-',
      'Type': note.note_type || '-',
      'Status': note.status || '-'
    }));

    const headers = this.columns.map(col => col.label);

    switch (event.type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `important-notes-${Date.now()}.csv`, headers);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `important-notes-${Date.now()}.pdf`, headers);
        break;
      case 'print':
        this.exportService.printTable(exportData, headers);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  onAcademicYearChange(yearId: number | null | undefined): void {
    this.academicYearId = yearId || undefined;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onClassChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onSubjectChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadNotes();
  }

  onNoteTypeChange(type: string | null | undefined): void {
    this.noteType = type || undefined;
    this.pagination.page = 1;
    this.loadNotes();
  }

  getSelectedNote(): any {
    if (!this.selectedRowId) return null;
    return this.notes.find(n => n.note_id === this.selectedRowId);
  }// Add this property in your class (with other properties)
downloadNote(): void {
  const note = this.getSelectedNote();
  if (note && note.note_file) {
    const fileUrl = `${environment.apiUrl.replace('/php_includes', '')}/${note.note_file}`;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    
    const fileExtension = note.note_file.split('.').pop() || 'pdf';
    link.setAttribute('download', `${note.note_title || 'download'}.${fileExtension}`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    this.toastService.show('Download started', 'success');
  } else {
    this.toastService.show('No file available for download', 'warning');
  }
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
