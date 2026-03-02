import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { AcademicYearService } from "../../../shared/services/academic-year.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ToastService } from "../../../shared/services/toast.service";
import { SearchSelectOption } from "../../../shared/components/search-select/search-select.component";

@Component({
  selector: "app-academic-year-list-enhanced",
  standalone: true,
  imports: [CommonModule, RouterModule, EnhancedTableComponent],
  templateUrl: "./academic-year-list-enhanced.component.html",
  styleUrls: ["./academic-year-list-enhanced.component.scss"],
})
export class AcademicYearListEnhancedComponent implements OnInit {
  academicYears: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;

  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };

  columns: TableColumn[] = [
    {
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true,
      format: (value: any, row?: any) => {
        let html = `<strong>${value}</strong>`;
        if (row && row.is_current == 1) {
          html += ` <span class="badge badge-primary ml-2">Current</span>`;
        }
        return html;
      },
    },
    { key: "start_date", label: "Start Date", sortable: true, type: "date" },
    { key: "end_date", label: "End Date", sortable: true, type: "date" },
    {
      key: "academic_year_status",
      label: "Status",
      sortable: true,
      format: (value: any) => {
        const status = value == 1 ? "Active" : "Inactive";
        const badgeClass = value == 1 ? "badge-success" : "badge-danger";
        return `<span class="badge ${badgeClass}">${status}</span>`;
      },
    },
    {
      key: "total_classes",
      label: "Classes",
      sortable: true,
      type: "number",
      link: {
        route: "/app/classes",
        queryKey: "academic_year_id",
        rowKey: "academic_year_id",
      },
    },
    {
      key: "total_students",
      label: "Students",
      sortable: true,
      type: "number",
    },
  ];

  searchTerm = "";
  sortColumn = "start_date";
  sortDirection: "asc" | "desc" = "desc";
  startDate?: string;
  endDate?: string;
  get statusOptions(): SearchSelectOption[] {
    return [
      { value: null, label: "All" },
      { value: 1, label: "Active" },
      { value: 0, label: "Inactive" },
    ];
  }
  constructor(
    private academicYearService: AcademicYearService,
    private dialogService: DialogService,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.loadAcademicYears();
  }

  loadAcademicYears(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
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

    this.academicYearService.getAcademicYears(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        console.error("Error loading academic years:", error);
        this.toastService.show("Error loading academic years", "error");
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadAcademicYears();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAcademicYears();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAcademicYears();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAcademicYears();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAcademicYears();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.academic_year_id;
  }

  onRefresh(): void {
    this.loadAcademicYears();
  }

  onAdd(): void {
    // Navigation handled by routerLink in template
  }

  onEdit(row: any): void {
    // Navigation handled by routerLink in template
  }

  onDelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete Academic Year",
        message: `Are you sure you want to delete "${row.academic_year_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.academicYearService
            .deleteAcademicYear(row.academic_year_id)
            .subscribe({
              next: (response) => {
                if (response.status === "success") {
                  this.toastService.show(
                    "Academic year deleted successfully",
                    "success",
                  );
                  this.loadAcademicYears();
                }
              },
              error: () => {
                this.toastService.show("Error deleting academic year", "error");
              },
            });
        }
      });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    console.log("Export:", event);
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
