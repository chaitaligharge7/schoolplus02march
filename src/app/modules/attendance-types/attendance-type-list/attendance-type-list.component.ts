import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { EnhancedTableComponent, TableColumn } from "../../../shared/components/enhanced-table/enhanced-table.component";
import { AttendanceService } from "../../../shared/services/attendance.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";

@Component({
  selector: "app-attendance-type-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: "./attendance-type-list.component.html",
  styleUrls: ["./attendance-type-list.component.scss"],
})
export class AttendanceTypeListComponent implements OnInit {
  attendanceTypes: any[] = [];
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
      key: "attendance_type_name",
      label: "Attendance Type Name",
      sortable: true,
    },
    {
      key: "attendance_type_code",
      label: "Code",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "is_present",
      label: "Status",
      sortable: true,
      format: (value: any) => {
        const badgeClass = value == 1 ? "badge-success" : "badge-danger";
        const text = value == 1 ? "Present" : "Absent";
        return `<span class="badge ${badgeClass}">${text}</span>`;
      },
    },
  ];

  searchTerm = "";
  sortColumn = "attendance_type_name";
  sortDirection: "asc" | "desc" = "asc";
  startDate?: string;
  endDate?: string;
  status?: string;

  constructor(
    private attendanceService: AttendanceService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadAttendanceTypes();
  }

  loadAttendanceTypes(): void {
    this.loading = true;
    const params: any = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
      is_present: this.status,
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

    this.attendanceService.getAttendanceTypes(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.attendanceTypes = response.data.attendance_types || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading attendance types", "error");
        console.error("Error loading attendance types:", error);
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadAttendanceTypes();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAttendanceTypes();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAttendanceTypes();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAttendanceTypes();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAttendanceTypes();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.attendance_type_id;
  }

  onRefresh(): void {
    this.loadAttendanceTypes();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(["/app/attendance-types/edit", row.attendance_type_id]);
  }

  onDelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete Attendance Type",
        message: `Are you sure you want to delete "${row.attendance_type_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.attendanceService.deleteAttendanceType(row.attendance_type_id).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show("Attendance type deleted successfully", "success");
                this.loadAttendanceTypes();
              }
            },
            error: () => {
              this.toastService.show("Error deleting attendance type", "error");
            },
          });
        }
      });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.attendanceTypes.map((at) => ({
      "Attendance Type Name": at.attendance_type_name,
      Code: at.attendance_type_code || "-",
      Status: at.is_present == 1 ? "Present" : "Absent",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `attendance-types-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `attendance-types-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  // onStatusChange(status: string | null | undefined): void {
  //   this.status = status === "zero" ? "0" : status === "one" ? "1" : undefined;
  //   this.pagination.page = 1;
  //   this.loadAttendanceTypes();
  // }

  onStatusChange(status: string | null | undefined): void {
    if (status === "one") this.status = "1";
    else if (status === "zero") this.status = "0";
    else this.status = undefined;

    this.pagination.page = 1;
    this.loadAttendanceTypes();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
