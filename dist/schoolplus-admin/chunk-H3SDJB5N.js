import {
  CctvService
} from "./chunk-FTRO2KCS.js";
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/cctv/cctv-list/cctv-list.component.ts
function CctvListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275listener("click", function CctvListComponent_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkStatus(ctx_r1.selectedRowId));
    });
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275text(3, " Check Status ");
    \u0275\u0275elementEnd()();
  }
}
var CctvListComponent = class _CctvListComponent {
  cctvService;
  toastService;
  exportService;
  router;
  dialogService;
  cctvList = [];
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
      key: "camera_name",
      label: "Camera Name",
      sortable: true
    },
    {
      key: "camera_location",
      label: "Location",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "camera_ip",
      label: "IP Address",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "camera_status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "active" ? "badge-success" : value === "inactive" ? "badge-danger" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "last_check",
      label: "Last Check",
      sortable: true,
      format: (value) => value || "Never"
    }
  ];
  searchTerm = "";
  sortColumn = "camera_name";
  sortDirection = "asc";
  startDate;
  endDate;
  location;
  status;
  constructor(cctvService, toastService, exportService, router, dialogService) {
    this.cctvService = cctvService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    this.loadCctvList();
  }
  loadCctvList() {
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
      params.camera_location = this.location;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.cctvService.getCctvList(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.cctvList = response.data.cameras || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading CCTV list", "error");
        console.error("Error loading CCTV list:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCctvList();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCctvList();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCctvList();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCctvList();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCctvList();
  }
  onRowSelect(row) {
    this.selectedRowId = row.cctv_id;
  }
  onRefresh() {
    this.loadCctvList();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.cctvList.map((cctv) => ({
      "Camera Name": cctv.camera_name || "-",
      camera_location: cctv.camera_location || "-",
      "IP Address": cctv.camera_ip || "-",
      camera_status: cctv.camera_status || "-",
      "Last Check": cctv.last_check || "Never"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `cctv-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `cctv-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onLocationChange(location) {
    this.location = location || void 0;
    this.pagination.page = 1;
    this.loadCctvList();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadCctvList();
  }
  checkStatus(cctvId) {
    this.cctvService.checkCctvStatus(cctvId).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.show("CCTV status checked successfully", "success");
          this.loadCctvList();
        }
      },
      error: () => {
        this.toastService.show("Failed to check CCTV status", "error");
      }
    });
  }
  onEdit(row) {
    this.router.navigate(["/app/cctv/edit", row.camera_id]);
  }
  getSelectedCctv() {
    return this.cctvList.find((c) => c.cctv_id === this.selectedRowId);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Section",
      message: `Are you sure you want to delete "${row.section_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.cctvService.deleteCctv(row.camera_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("CCTV deleted successfully", "success");
              this.loadCctvList();
            }
          },
          error: () => {
            this.toastService.show("Error deleting CCTV", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function CctvListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CctvListComponent)(\u0275\u0275directiveInject(CctvService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CctvListComponent, selectors: [["app-cctv-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 17, consts: [[1, "cctv-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["type", "text", "placeholder", "Filter by location", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "active"], ["value", "inactive"], ["value", "maintenance"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "check-status-action", 4, "ngIf"], [1, "check-status-action"], ["title", "Check Status", 1, "btn", "btn-info", 3, "click"], [1, "bi", "bi-arrow-clockwise"]], template: function CctvListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "CCTV Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Monitor and manage CCTV cameras");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Location:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CctvListComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.location, $event) || (ctx.location = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CctvListComponent_Template_input_input_11_listener() {
        return ctx.onLocationChange(ctx.location);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function CctvListComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CctvListComponent_Template_select_change_15_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(16, "option", 8);
      \u0275\u0275text(17, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 9);
      \u0275\u0275text(19, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 10);
      \u0275\u0275text(21, "Inactive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 11);
      \u0275\u0275text(23, "Maintenance");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "app-enhanced-table", 12);
      \u0275\u0275listener("pageChange", function CctvListComponent_Template_app_enhanced_table_pageChange_24_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function CctvListComponent_Template_app_enhanced_table_pageSizeChange_24_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function CctvListComponent_Template_app_enhanced_table_searchChange_24_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function CctvListComponent_Template_app_enhanced_table_sortChange_24_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function CctvListComponent_Template_app_enhanced_table_dateFilterChange_24_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function CctvListComponent_Template_app_enhanced_table_rowSelect_24_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function CctvListComponent_Template_app_enhanced_table_refresh_24_listener() {
        return ctx.onRefresh();
      })("addClick", function CctvListComponent_Template_app_enhanced_table_addClick_24_listener() {
        return ctx.onAdd();
      })("editClick", function CctvListComponent_Template_app_enhanced_table_editClick_24_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function CctvListComponent_Template_app_enhanced_table_deleteClick_24_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function CctvListComponent_Template_app_enhanced_table_exportClick_24_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function CctvListComponent_Template_app_enhanced_table_filterToggle_24_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, CctvListComponent_div_25_Template, 4, 0, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.location);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("data", ctx.cctvList)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "cctv_id")("addRoute", "/app/cctv/create")("addLabel", "Add CCTV")("searchPlaceholder", "Search by camera name or location...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.cctv-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .cctv-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .cctv-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.cctv-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.cctv-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.cctv-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.cctv-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.cctv-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.cctv-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.cctv-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cctv-list-container[_ngcontent-%COMP%]   .check-status-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=cctv-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CctvListComponent, { className: "CctvListComponent", filePath: "src\\app\\modules\\cctv\\cctv-list\\cctv-list.component.ts", lineNumber: 21 });
})();
export {
  CctvListComponent
};
//# sourceMappingURL=chunk-H3SDJB5N.js.map
