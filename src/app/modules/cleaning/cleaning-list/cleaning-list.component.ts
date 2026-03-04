import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { CleaningService } from "../../../shared/services/cleaning.service";
import { ToastService } from "../../../shared/services/toast.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ExportService } from "../../../shared/services/export.service";
import { SearchSelectComponent } from "../../../shared/components/search-select/search-select.component";

@Component({
  selector: "app-cleaning-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: "./cleaning-list.component.html",
  styleUrls: ["./cleaning-list.component.scss"],
})
export class CleaningListComponent implements OnInit {
  schedules: any[] = [];
  loading = false;
  selectedRowId?: number;
  showFilters = false;

  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };

  columns: TableColumn[] = [
    {
      key: "location",
      label: "location",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "schedule_date",
      label: "Schedule Date",
      sortable: true,
      type: "date",
    },
    {
      key: "assigned_to",
      label: "Assigned To",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "completion_status",
      label: "completion_status",
      sortable: true,
      format: (value: any) => {
        const badgeClass =
          value === "completed" ? "badge-success" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      },
    },
    {
      key: "created_at",
      label: "Completion Date",
      sortable: true,
      type: "date",
      format: (value: any) => value || "-",
    },
  ];

  searchTerm = "";
  sortColumn = "schedule_date";
  sortDirection: "asc" | "desc" = "desc";
  startDate?: string;
  endDate?: string;
  location?: string;
  status?: string;
  dutyOn = false;
  dutyLoginAt: string | null = null;
  dutyLoading = false;
  currentLogId: number | null = null;

  cleaningStatusOptions: { value: string | undefined; label: string }[] = [
    { value: undefined, label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];

  constructor(
    private cleaningService: CleaningService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private exportService: ExportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadSchedules();
    this.loadDutyStatus();
  }
  loadDutyStatus(): void {
    this.cleaningService.getDutyStatus().subscribe({
      next: (res) => {
        if (res.status === 'success' && res.data?.on_duty && res.data?.current_log) {
          this.dutyOn = true;
          this.dutyLoginAt = res.data.current_log.login_at ? new Date(res.data.current_log.login_at).toLocaleString() : null;
          this.currentLogId = res.data.current_log.log_id ?? null;
        } else {
          this.dutyOn = false;
          this.dutyLoginAt = null;
          this.currentLogId = null;
        }
      }
    });
  }

  startDuty = (): void => {
    this.dutyLoading = true;
    this.cleaningService.dutyLogin().subscribe({
      next: (res) => {
        this.dutyLoading = false;
        if (res.status === 'success') {
          this.toastService.show('Duty started', 'success');
          this.loadDutyStatus();
        }
      },
      error: () => { this.dutyLoading = false; }
    });
  };

  endDuty = (): void => {
    this.dutyLoading = true;
    this.cleaningService.dutyLogout(this.currentLogId ?? undefined).subscribe({
      next: (res) => {
        this.dutyLoading = false;
        if (res.status === 'success') {
          this.toastService.show('Duty ended', 'success');
          this.loadDutyStatus();
        }
      },
      error: () => { this.dutyLoading = false; }
    });
  };

  loadSchedules(): void {
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
    if (this.location) {
      params.location = this.location;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.cleaningService.getCleaningSchedules(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.schedules = response.data.schedules || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading cleaning schedules", "error");
        console.error("Error loading cleaning schedules:", error);
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadSchedules();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSchedules();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.schedule_id;
  }

  onRefresh(): void {
    this.loadSchedules();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.schedules.map((schedule) => ({
      Area: schedule.location || "-",
      "Schedule Date": this.formatDate(schedule.schedule_date),
      "Assigned To": schedule.assigned_to || "-",
      Status: schedule.status || "-",
      "Completed Date": schedule.completed_date
        ? this.formatDate(schedule.completed_date)
        : "-",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `cleaning-schedules-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `cleaning-schedules-${Date.now()}.pdf`,
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

  onAreaChange(location: string | null | undefined): void {
    this.location = location || undefined;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadSchedules();
  }

  completeCleaning(scheduleId: number): void {
    this.dialogService
      .confirm({
        title: "Complete Cleaning",
        message: "Mark this cleaning as complete?",
        confirmText: "Complete",
        cancelText: "Cancel",
        type: "info",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.cleaningService.completeCleaning(scheduleId).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show(
                  "Cleaning marked as complete",
                  "success",
                );
                this.loadSchedules();
              }
            },
            error: () => {
              this.toastService.show(
                "Failed to update cleaning status",
                "error",
              );
            },
          });
        }
      });
  }

  getSelectedSchedule(): any {
    return this.schedules.find((s) => s.schedule_id === this.selectedRowId);
  }

  onEdit(row: any): void {
    this.router.navigate(["/app/cleaning/edit", row.schedule_id]);
  }

  onDelete(row: any): void {
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
          this.cleaningService
            .deleteCleaningSchedule(row.schedule_id)
            .subscribe({
              next: (response) => {
                if (response.status === "success") {
                  this.toastService.show(
                    "cleaning shedule deleted successfully",
                    "success",
                  );
                  this.loadSchedules();
                }
              },
              error: (err: any) => {
                this.toastService.show(
                  "error deleting the cleaning shedules",
                  "error",
                );
              },
            });
        }
      });
  }

  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
