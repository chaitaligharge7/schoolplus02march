import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { KeyboardShortcutsDirective } from '../../directives/keyboard-shortcuts.directive';
import { ExportService } from '../../services/export.service';

/** Config for foreign-key style clickable cell that navigates to related list with filter */
export interface TableColumnLink {
  route: string;
  /** Query param name (e.g. 'class_id') */
  queryKey: string;
  /** Row property to use as value (e.g. 'class_id') */
  rowKey: string;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  visible?: boolean;
  width?: string;
  type?: 'text' | 'date' | 'number' | 'badge' | 'custom';
  format?: (value: any, row?: any) => string;
  template?: TemplateRef<any>;
  /** When set, cell is rendered as a clickable link (primary bg, white text) to the given route with query param */
  link?: TableColumnLink;
}

export interface PaginationConfig {
  page: number;
  limit: number;
  total: number;
  pages: number;
  pageSizeOptions?: number[];
}

@Component({
  selector: 'app-enhanced-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, KeyboardShortcutsDirective],
  templateUrl: './enhanced-table.component.html',
  styleUrls: ['./enhanced-table.component.scss']
})
export class EnhancedTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() pagination: PaginationConfig = { page: 1, limit: 20, total: 0, pages: 0 };
  @Input() loading = false;
  @Input() searchPlaceholder = 'Search...';
  @Input() addRoute?: string;
  @Input() addLabel = 'Add New';
  @Input() enableExport = true;
  @Input() enableDateFilter = true;
  @Input() selectedRowId?: number | string;
  @Input() rowIdKey = 'id';
  @Input() showViewButton = false;
  @Input() showPrintButton = false;
  @Input() showConvertButton = false;
  @Input() showFilterButton: boolean = true;

  @Output() pageChange = new EventEmitter<number>();
  @Output() filterToggle = new EventEmitter<boolean>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<{ column: string; direction: 'asc' | 'desc' }>();
  @Output() dateFilterChange = new EventEmitter<{ startDate?: string; endDate?: string }>();
  @Output() rowSelect = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<void>();
  @Output() addClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() viewClick = new EventEmitter<any>();
  @Output() payClick = new EventEmitter<any>();
  @Output() printClick = new EventEmitter<any>();
  @Output() convertClick = new EventEmitter<any>();

  @Output() exportClick = new EventEmitter<{ type: string; columns: string[] }>();

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  searchTerm = '';
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  startDate?: string;
  endDate?: string;
  @Input() showPayButton = false;
  showColumnVisibility = false;
  visibleColumns: Set<string> = new Set();
  exportDropdownOpen = false;
  pageSizeOptions = [10, 20, 50, 100, 200];
  filterVisible = false;

  constructor(
    private exportService: ExportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize visible columns
    this.columns.forEach(col => {
      if (col.visible !== false) {
        this.visibleColumns.add(col.key);
      }
    });
    
    // Set page size options from pagination config if provided
    if (this.pagination.pageSizeOptions) {
      this.pageSizeOptions = this.pagination.pageSizeOptions;
    }
  }

  get visibleColumnsList(): TableColumn[] {
    return this.columns.filter(col => this.visibleColumns.has(col.key));
  }

  onSearch(): void {
    this.searchChange.emit(this.searchTerm);
  }
  onPay(row: any): void {
    this.payClick.emit(row);
  }

  onPrint(row: any): void {
    this.printClick.emit(row);
  }

  onSort(column: TableColumn): void {
    if (!column.sortable) return;
    
    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }
    
    this.sortChange.emit({ column: this.sortColumn, direction: this.sortDirection });
  }

  onDateFilterChange(): void {
    this.dateFilterChange.emit({
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  onPageSizeChange(size: number): void {
    this.pageSizeChange.emit(size);
  }

  onRowClick(row: any): void {
    this.selectedRowId = row[this.rowIdKey];
    this.rowSelect.emit(row);
  }

  isRowSelected(row: any): boolean {
    return this.selectedRowId === row[this.rowIdKey];
  }

  toggleColumnVisibility(key: string): void {
    if (this.visibleColumns.has(key)) {
      this.visibleColumns.delete(key);
    } else {
      this.visibleColumns.add(key);
    }
  }

  onExport(type: 'csv' | 'pdf' | 'print' | 'copy'): void {
    const visibleCols = this.visibleColumnsList.map(col => col.key);
    const exportData = this.data.map(row => {
      const exportRow: any = {};
      visibleCols.forEach(key => {
        exportRow[key] = this.getNestedValue(row, key);
      });
      return exportRow;
    });

    const columnLabels = this.visibleColumnsList.map(col => col.label);

    switch (type) {
      case 'csv':
        this.exportService.exportToCSV(exportData, `export-${Date.now()}.csv`, visibleCols);
        break;
      case 'pdf':
        this.exportService.exportToPDF(exportData, `export-${Date.now()}.pdf`, visibleCols);
        break;
      case 'print':
        this.exportService.printTable(exportData, visibleCols);
        break;
      case 'copy':
        this.exportService.copyToClipboard(exportData, visibleCols);
        break;
    }

    this.exportDropdownOpen = false;
    this.exportClick.emit({ type, columns: visibleCols });
  }

  onRefresh(): void {
    this.refresh.emit();
  }

  onAdd(): void {
    if (this.addRoute) {
      this.router.navigate([this.addRoute]);
    } else {
      this.addClick.emit();
    }
  }

  onFilterToggle(): void {
    this.filterVisible = !this.filterVisible;
    this.filterToggle.emit(this.filterVisible);
  }

  onEdit(row: any): void {
    this.editClick.emit(row);
  }

  onView(row: any): void {
    this.viewClick.emit(row);
  }

  onConvert(row: any): void {
    this.convertClick.emit(row);
  }

  onDelete(row: any): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.deleteClick.emit(row);
    }
  }

  // Keyboard shortcuts
  onF2Pressed(): void {
    if (this.addRoute) {
      this.router.navigate([this.addRoute]);
    } else {
      this.onAdd();
    }
  }

  onF3Pressed(): void {
    if (this.selectedRowId) {
      const selectedRow = this.data.find(row => row[this.rowIdKey] === this.selectedRowId);
      if (selectedRow) {
        this.onEdit(selectedRow);
      }
    }
  }

  onF5Pressed(): void {
    this.onRefresh();
  }

  onCtrlFPressed(): void {
    this.searchInput?.nativeElement?.focus();
  }

  onDeletePressed(): void {
    if (this.selectedRowId) {
      const selectedRow = this.data.find(row => row[this.rowIdKey] === this.selectedRowId);
      if (selectedRow) {
        this.onDelete(selectedRow);
      }
    }
  }

  getCellValue(row: any, column: TableColumn): any {
    const value = this.getNestedValue(row, column.key);
    if (column.format) {
      return column.format(value, row);
    }
    
    // Handle date formatting
    if (column.type === 'date' && value) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-GB', { 
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric' 
        });
      }
    }
    
    // Handle number formatting
    if (column.type === 'number' && value !== null && value !== undefined) {
      return Number(value).toLocaleString();
    }
    
    return value;
  }

  getLinkQueryParams(row: any, column: TableColumn): Record<string, string | number> {
    if (!column.link) return {};
    const val = row[column.link.rowKey];
    if (val === null || val === undefined) return {};
    return { [column.link.queryKey]: val };
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, prop) => current?.[prop], obj) ?? '';
  }

  getSortIcon(column: TableColumn): string {
    if (this.sortColumn !== column.key) {
      return 'bi-arrow-down-up';
    }
    return this.sortDirection === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
  }

  // Expose Math to template
  Math = Math;
}

