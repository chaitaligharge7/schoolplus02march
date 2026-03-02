import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
import {
  EnhancedTableComponent,
  TableColumn,
} from "../../../shared/components/enhanced-table/enhanced-table.component";
import { FeeService } from "../../../shared/services/fee.service";
import { FeeGroupService } from "../../../shared/services/fee-group.service";
import { DialogService } from "../../../shared/services/dialog.service";
import { ToastService } from "../../../shared/services/toast.service";
import { ExportService } from "../../../shared/services/export.service";
import { SearchSelectComponent } from "../../../shared/components/search-select/search-select.component";

@Component({
  selector: "app-fee-type-list",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent, SearchSelectComponent],
  templateUrl: "./fee-type-list.component.html",
  styleUrls: ["./fee-type-list.component.scss"],
})
export class FeeTypeListComponent implements OnInit {
  feeTypes: any[] = [];
  feeGroups: any[] = [];
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
      key: "fee_type_name",
      label: "Fee Type Name",
      sortable: true,
    },
    {
      key: "fee_type_code",
      label: "Fee Type Code",
      sortable: true,
      format: (value: any) => value || "-",
    },
    {
      key: "fee_amount",
      label: "Amount",
      sortable: true,
      type: "number",
      format: (value: any) =>
        value ? `₹${Number(value).toLocaleString("en-IN")}` : "-",
    },
    {
      key: "fee_group_name",
      label: "Fee Group",
      sortable: true,
      format: (value: any) => value || "-",
    },
  ];

  searchTerm = "";
  sortColumn = "fee_type_name";
  sortDirection: "asc" | "desc" = "asc";
  startDate?: string;
  endDate?: string;
  feeGroupId?: number;

  get feeGroupOptions(): { value: number | undefined; label: string }[] {
    const all: { value: number | undefined; label: string }[] = [{ value: undefined, label: "All Fee Groups" }];
    const list = (this.feeGroups || []).map((g) => ({ value: g.fee_group_id, label: g.fee_group_name || "" }));
    return [...all, ...list];
  }

  constructor(
    private feeService: FeeService,
    private feeGroupService: FeeGroupService,
    private dialogService: DialogService,
    private toastService: ToastService,
    private exportService: ExportService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadFeeGroups();
    this.route.queryParams.subscribe((params) => {
      const feeGroupId = params['fee_group_id'];
      if (feeGroupId != null && feeGroupId !== '') {
        this.feeGroupId = Number(feeGroupId);
        this.pagination.page = 1;
      }
      this.loadFeeTypes();
    });
  }

  loadFeeGroups(): void {
    this.feeGroupService.getFeeGroups().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.feeGroups = response.data.fee_groups || [];
        }
      },
    });
  }

  // loadFeeTypes(): void {
  //   this.loading = true;
  //   const params: any = {
  //     page: this.pagination.page,
  //     limit: this.pagination.limit,
  //     sort_column: this.sortColumn,
  //     sort_direction: this.sortDirection.toUpperCase()
  //   };

  //   if (this.searchTerm) {
  //     params.search = this.searchTerm;
  //   }
  //   if (this.startDate) {
  //     params.start_date = this.startDate;
  //   }
  //   if (this.endDate) {
  //     params.end_date = this.endDate;
  //   }
  //   if (this.feeGroupId) {
  //     params.fee_group_id = this.feeGroupId;
  //   }

  //   this.feeService.getFeeTypes(params).subscribe({
  //     next: (response) => {
  //       this.loading = false;
  //       if (response.status === 'success' && response.data) {
  //         this.feeTypes = response.data.fee_types || [];
  //         this.pagination = response.data.pagination || this.pagination;
  //       }
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       this.toastService.show('Error loading fee types', 'error');
  //       console.error('Error loading fee types:', error);
  //     }
  //   });

  // }

  loadFeeTypes(): void {
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
    if (this.feeGroupId) {
      params.fee_group_id = this.feeGroupId;
    }

    console.log("Fee Types API Params:", params);

    this.feeService.getFeeTypes(params).subscribe({
      next: (response) => {
        this.loading = false;

        console.log("Fee Types API Full Response:", response);

        if (response.status === "success" && response.data) {
          this.feeTypes = response.data.fee_types || [];
          this.pagination = response.data.pagination || this.pagination;

          console.log("Fee Types Array:", this.feeTypes);

          if (this.feeTypes.length > 0) {
            console.log("First Fee Type Object:", this.feeTypes[0]);
          }
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading fee types", "error");
        console.error("Error loading fee types:", error);
      },
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadFeeTypes();
  }

  onPageSizeChange(size: number): void {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }

  onSearchChange(search: string): void {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }

  onSortChange(sort: { column: string; direction: "asc" | "desc" }): void {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFeeTypes();
  }

  onDateFilterChange(filters: { startDate?: string; endDate?: string }): void {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }

  onRowSelect(row: any): void {
    this.selectedRowId = row.fee_type_id;
  }

  onRefresh(): void {
    this.loadFeeTypes();
  }

  onAdd(): void {
    // Navigation handled by routerLink
  }

  onEdit(row: any): void {
    this.router.navigate(["/app/fee-types/edit", row.fee_type_id]);
  }

  onDelete(row: any): void {
    this.dialogService
      .confirm({
        title: "Delete Fee Type",
        message: `Are you sure you want to delete "${row.fee_type_name}"?`,
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          this.feeService.deleteFeeType(row.fee_type_id).subscribe({
            next: (response) => {
              if (response.status === "success") {
                this.toastService.show(
                  "Fee type deleted successfully",
                  "success",
                );
                this.loadFeeTypes();
              }
            },
            error: () => {
              this.toastService.show("Error deleting fee type", "error");
            },
          });
        }
      });
  }

  onExportClick(event: { type: string; columns: string[] }): void {
    const exportData = this.feeTypes.map((ft) => ({
      "Fee Type Name": ft.fee_type_name,
      "Fee Type Code": ft.fee_type_code || "-",
      Amount: ft.fee_amount
        ? `₹${Number(ft.fee_amount).toLocaleString("en-IN")}`
        : "-",
      "Fee Group": ft.fee_group_name || "-",
    }));

    const headers = this.columns.map((col) => col.label);

    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(
          exportData,
          `fee-types-${Date.now()}.csv`,
          headers,
        );
        break;
      case "pdf":
        this.exportService.exportToPDF(
          exportData,
          `fee-types-${Date.now()}.pdf`,
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

  onFeeGroupChange(groupId: number | null | undefined): void {
    this.feeGroupId = groupId || undefined;
    this.pagination.page = 1;
    this.loadFeeTypes();
  }
  onFilterToggle(visible: boolean): void {
    this.showFilters = visible;
  }
}
