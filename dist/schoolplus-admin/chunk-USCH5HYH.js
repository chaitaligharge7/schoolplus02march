import {
  WaterTdsService
} from "./chunk-EHM7ZY6F.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/water-tds/water-tds-list/water-tds-list.component.ts
var WaterTdsListComponent = class _WaterTdsListComponent {
  waterTdsService;
  toastService;
  exportService;
  router;
  dialogService;
  readings = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "location",
      label: "Location",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "tds_value",
      label: "TDS Reading",
      sortable: true,
      type: "number",
      format: (value, row) => {
        const tdsClass = value <= 500 ? "tds-good" : value <= 1e3 ? "tds-warning" : "tds-danger";
        return `<span class="tds-value ${tdsClass}">${value || 0} ppm</span>`;
      }
    },
    {
      key: "measurement_date",
      label: "Measurement Date",
      sortable: true,
      type: "date",
      format: (value) => {
        if (!value)
          return "-";
        const date = new Date(value);
        return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value, row) => {
        const tds = row.tds_value;
        let status = "normal";
        if (tds > 500 && tds <= 1e3)
          status = "high";
        if (tds > 1e3)
          status = "critical";
        const badgeClass = status === "normal" ? "badge-success" : status === "high" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${status}</span>`;
      }
    },
    {
      key: "remarks",
      label: "Remarks",
      sortable: false,
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "reading_date";
  sortDirection = "desc";
  startDate;
  endDate;
  location;
  constructor(waterTdsService, toastService, exportService, router, dialogService) {
    this.waterTdsService = waterTdsService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    this.loadReadings();
  }
  loadReadings() {
    this.loading = true;
    const params = {
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
    if (this.location) {
      params.location = this.location;
    }
    this.waterTdsService.getWaterTdsReadings(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.readings = response.data.tds || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading water TDS readings", "error");
        console.error("Error loading water TDS readings:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadReadings();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadReadings();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadReadings();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadReadings();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadReadings();
  }
  onRowSelect(row) {
    this.selectedRowId = row.reading_id;
  }
  onRefresh() {
    this.loadReadings();
  }
  onAdd() {
  }
  onEdit(reading) {
    if (!reading?.tds_id) {
      this.toastService.show("Invalid reading selected", "error");
      return;
    }
    this.router.navigate(["/app/water-tds/edit", reading.tds_id]);
  }
  onDelete(reading) {
    const tdsId = reading?.tds_id;
    if (!tdsId) {
      this.toastService.show("Invalid reading selected", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Delete TDS Reading",
      message: "Are you sure you want to delete this TDS reading?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.waterTdsService.deleteWaterTdsReading(tdsId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("TDS reading deleted successfully", "success");
              this.loadReadings();
            } else {
              this.toastService.show(response.message || "Failed to delete reading", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting TDS reading", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.readings.map((reading) => ({
      "Location": reading.location || "-",
      "TDS Reading": `${reading.tds_value || 0} ppm`,
      "Measurement Date": this.formatDate(reading.measurement_date),
      "Status": reading.status || "-",
      "Remarks": reading.remarks || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `water-tds-readings-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `water-tds-readings-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  onLocationChange(location) {
    this.location = location || void 0;
    this.pagination.page = 1;
    this.loadReadings();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function WaterTdsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaterTdsListComponent)(\u0275\u0275directiveInject(WaterTdsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WaterTdsListComponent, selectors: [["app-water-tds-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 14, consts: [[1, "water-tds-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["type", "text", "placeholder", "Filter by location", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "deleteClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function WaterTdsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Water TDS Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Monitor water TDS readings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Location:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function WaterTdsListComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.location, $event) || (ctx.location = $event);
        return $event;
      });
      \u0275\u0275listener("input", function WaterTdsListComponent_Template_input_input_11_listener() {
        return ctx.onLocationChange(ctx.location);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "app-enhanced-table", 7);
      \u0275\u0275listener("pageChange", function WaterTdsListComponent_Template_app_enhanced_table_pageChange_12_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function WaterTdsListComponent_Template_app_enhanced_table_pageSizeChange_12_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function WaterTdsListComponent_Template_app_enhanced_table_searchChange_12_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function WaterTdsListComponent_Template_app_enhanced_table_sortChange_12_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function WaterTdsListComponent_Template_app_enhanced_table_dateFilterChange_12_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function WaterTdsListComponent_Template_app_enhanced_table_rowSelect_12_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function WaterTdsListComponent_Template_app_enhanced_table_refresh_12_listener() {
        return ctx.onRefresh();
      })("addClick", function WaterTdsListComponent_Template_app_enhanced_table_addClick_12_listener() {
        return ctx.onAdd();
      })("deleteClick", function WaterTdsListComponent_Template_app_enhanced_table_deleteClick_12_listener($event) {
        return ctx.onDelete($event);
      })("editClick", function WaterTdsListComponent_Template_app_enhanced_table_editClick_12_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function WaterTdsListComponent_Template_app_enhanced_table_exportClick_12_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function WaterTdsListComponent_Template_app_enhanced_table_filterToggle_12_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.location);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.readings)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "reading_id")("addRoute", "/app/water-tds/create")("addLabel", "Add Reading")("searchPlaceholder", "Search water TDS readings...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.water-tds-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .water-tds-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .water-tds-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.water-tds-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.water-tds-list-container[_ngcontent-%COMP%]     .tds-value {\n  font-weight: 600;\n}\n.water-tds-list-container[_ngcontent-%COMP%]     .tds-value.tds-good {\n  color: #10b981;\n}\n.water-tds-list-container[_ngcontent-%COMP%]     .tds-value.tds-warning {\n  color: #f59e0b;\n}\n.water-tds-list-container[_ngcontent-%COMP%]     .tds-value.tds-danger {\n  color: #ef4444;\n}\n/*# sourceMappingURL=water-tds-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WaterTdsListComponent, { className: "WaterTdsListComponent", filePath: "src\\app\\modules\\water-tds\\water-tds-list\\water-tds-list.component.ts", lineNumber: 18 });
})();
export {
  WaterTdsListComponent
};
//# sourceMappingURL=chunk-USCH5HYH.js.map
