import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { StaffAllotmentService } from "../../../shared/services/staff-allotment.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";
import { DialogService } from "../../../shared/services/dialog.service";

@Component({
  selector: "app-staff-allotment-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: "./staff-allotment-list.component.html",
  styleUrls: ["./staff-allotment-list.component.scss"],
})
export class StaffAllotmentListComponent implements OnInit {
  allotments: any[] = [];
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
      key: "staff_name",
      label: "Staff",
      sortable: true,
      format: (value: any, row?: any) => {
        return `${value || "-"}<br><small>${row?.employee_id || "-"}</small>`;
      },
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "subject_name",
      label: "Subject",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "allotment_date",
      label: "Allotment Date",
      sortable: true,
      type: "date",
    },
    {
      key: "allotment_status",
      label: "Status",
      sortable: true,
      format: (value: any) => {
        return `<span class="badge badge-success">${value || "-"}</span>`;
      },
    },
  ];

  searchTerm = "";
  sortColumn = "allotment_date";
  sortDirection: "asc" | "desc" = "desc";
  startDate?: string;
  endDate?: string;
  staffId?: number;
  classId?: number;
  subjectId?: number;

  constructor(
    private staffAllotmentService: StaffAllotmentService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadAllotments();
  }

  loadAllotments(): void {
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
    if (this.staffId) {
      params.staff_id = this.staffId;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }

    this.staffAllotmentService.getStaffAllotments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.allotments = response.data.allotments || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading staff allotments", "error");
        console.error("Error loading staff allotments:", error);
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadAllotments();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadAllotments();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.allotment_id;
  }

  onRefresh(): void {
    this.loadAllotments();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.allotments.map((allotment) => ({
      Staff: allotment.staff_name || "-",
      "Employee ID": allotment.employee_id || "-",
      Class: allotment.class_name || "-",
      Subject: allotment.subject_name || "-",
      "Academic Year": allotment.academic_year_name || "-",
      "Allotment Date": this.formatDate(allotment.allotment_date),
      allotment_status: allotment.allotment_status || "-",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `staff-allotments-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `staff-allotments-${Date.now()}.pdf`,
          headers,
        );
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }

  formatDate(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  onStaffIdChange(staffId: number | null | undefined): void {
    this.staffId = staffId || undefined;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  onClassIdChange(classId: number | null | undefined): void {
    this.classId = classId || undefined;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  onSubjectIdChange(subjectId: number | null | undefined): void {
    this.subjectId = subjectId || undefined;
    this.pagination.page = 1;
    this.loadAllotments();
  }

  ondelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete Section",
        message: `Are you sure you want to delete "${row.section_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.staffAllotmentService
            .deleteAllotment(row.allotment_id)
            .subscribe({
              next: (response) => {
                if (response.status === "success")
                  this.toastService.show(
                    "staff allpotment deleted successfully",
                    "success",
                  );
                this.loadAllotments();
              },

              error: (err: any) => {
                this.toastService.show(
                  "error deleting the staff allotment",
                  "error",
                );
              },
            });
        }
      });
  }

  onEdit(row: any) {
    this.router.navigate(["/app/staff-allotment/edit", row.allotment_id]);
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
