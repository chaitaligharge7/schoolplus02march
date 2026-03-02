import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { CctvService } from "../../../shared/services/cctv.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";
import { DialogService } from "../../../shared/services/dialog.service";

@Component({
  selector: "app-cctv-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent],
  templateUrl: "./cctv-list.component.html",
  styleUrls: ["./cctv-list.component.scss"],
})
export class CctvListComponent implements OnInit {
  cctvList: any[] = [];
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
      key: "camera_name",
      label: "Camera Name",
      sortable: true,
    },
    {
      key: "camera_location",
      label: "Location",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "camera_ip",
      label: "IP Address",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "camera_status",
      label: "Status",
      sortable: true,
      format: (value: any) => {
        const badgeClass =
          value === "active"
            ? "badge-success"
            : value === "inactive"
              ? "badge-danger"
              : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      },
    },
    {
      key: "last_check",
      label: "Last Check",
      sortable: true,
      format: (value: any) => value || "Never",
    },
  ];

  searchTerm = "";
  sortColumn = "camera_name";
  sortDirection: "asc" | "desc" = "asc";
  startDate?: string;
  endDate?: string;
  location?: string;
  status?: string;

  constructor(
    private cctvService: CctvService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
        private dialogService: DialogService,
    
  ) {}

  ngOnInit(): void {
    this.loadCctvList();
  }

  loadCctvList(): void {
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
      params.camera_location = this.location;
    }
    if (this.status) {
      params.status = this.status;
    }

    this.cctvService.getCctvList(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          // this.cctvList = response.data.cctv_list || [];

          this.cctvList = response.data.cameras || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading CCTV list", "error");
        console.error("Error loading CCTV list:", error);
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCctvList();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCctvList();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCctvList();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCctvList();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCctvList();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.cctv_id;
  }

  onRefresh(): void {
    this.loadCctvList();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.cctvList.map((cctv) => ({
      "Camera Name": cctv.camera_name || "-",
      camera_location: cctv.camera_location || "-",
      "IP Address": cctv.camera_ip || "-",
      camera_status: cctv.camera_status || "-",
      "Last Check": cctv.last_check || "Never",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `cctv-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `cctv-${Date.now()}.pdf`,
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

  onLocationChange(location: string | null | undefined): void {
    this.location = location || undefined;
    this.pagination.page = 1;
    this.loadCctvList();
  }

  onStatusChange(status: string | null | undefined): void {
    this.status = status || undefined;
    this.pagination.page = 1;
    this.loadCctvList();
  }

  checkStatus(cctvId: number): void {
    this.cctvService.checkCctvStatus(cctvId).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.show("CCTV status checked successfully", "success");
          this.loadCctvList();
        }
      },
      error: () => {
        this.toastService.show("Failed to check CCTV status", "error");
      },
    });
  }
  onEdit(row: any): void {
    this.router.navigate(["/app/cctv/edit", row.camera_id]);
  }
  getSelectedCctv(): any {
    return this.cctvList.find((c) => c.cctv_id === this.selectedRowId);
  }



    onDelete(row: any): void {
    this.dialogService.confirm({
      title: 'Delete Section',
      message: `Are you sure you want to delete "${row.section_name}"?`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      type: 'danger'
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.cctvService.deleteCctv(row.camera_id).subscribe({
          next: (response) => {
            if (response.status === 'success') {
              this.toastService.show('CCTV deleted successfully', 'success');
              this.loadCctvList();
            }
          },
          error: () => {
            this.toastService.show('Error deleting CCTV', 'error');
          }
        });
      }
    });
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
