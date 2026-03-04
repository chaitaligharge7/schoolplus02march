import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { EnhancedTableComponent, TableColumn } from "../../../shared/components/enhanced-table/enhanced-table.component";
import { AcademicYearService } from "../../../shared/services/academic-year.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ToastService } from "../../../shared/services/toast.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-academic-year-list",
  standalone: true,
  imports: [CommonModule, RouterModule, EnhancedTableComponent, FormsModule],
  templateUrl: "./academic-year-list.component.html",
  styleUrls: ["./academic-year-list.component.scss"],
})
export class AcademicYearListComponent implements OnInit {
  academicYears: any[] = [];
  loading = false;

  showFilters = false;
  selectedRowId?: number;
  status?: string;
  statusFilter: string | undefined;

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
    {
      key: "start_date",
      label: "Start Date",
      sortable: true,
      type: "date",
      format: (value: any) => {
        if (!value) return "-";
        const date = new Date(value);
        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      },
    },
    {
      key: "end_date",
      label: "End Date",
      sortable: true,
      type: "date",
      format: (value: any) => {
        if (!value) return "-";
        const date = new Date(value);
        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      },
    },
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

      link: {
        route: "/app/students",
        queryKey: "academic_year_id",
        rowKey: "academic_year_id",
      },
    },
  ];

  searchTerm = "";
  sortColumn = "start_date";
  sortDirection: "asc" | "desc" = "desc";
  startDate?: string;
  endDate?: string;

  constructor(
    private academicYearService: AcademicYearService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private router: Router,
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
      academic_year_status: this.status,
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

    if (this.status !== undefined && this.status !== null) {
      params.academic_year_status = this.status;
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
  onStatusChange(): void {
    // Translate for API/filter logic, but don't touch this.status
    this.status = this.statusFilter === "zero" ? "0" : this.statusFilter === "one" ? "1" : undefined;

    this.pagination.page = 1;
    this.loadAcademicYears(); // use this.statusFilter internally
  }
  onRefresh(): void {
    this.loadAcademicYears();
  }

  onAdd(): void {
    // Navigation handled by routerLink in template
  }

  onEdit(row: any): void {
    this.router.navigate(["/app/academic-years/edit", row.academic_year_id]);
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
          this.academicYearService.deleteAcademicYear(row.academic_year_id).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show(response.message, "success");
                this.loadAcademicYears();
              } else {
                this.toastService.show(response.message || "Error deleting academic year", "error");
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