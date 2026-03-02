import {
  InwardRequestService
} from "./chunk-FK5JIMV6.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
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

// src/app/modules/inward-requests/inward-request-list/inward-request-list.component.ts
function InwardRequestListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function InwardRequestListComponent_div_37_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resolveRequest(ctx_r1.selectedRowId));
    });
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275text(3, " Resolve Request ");
    \u0275\u0275elementEnd()();
  }
}
var InwardRequestListComponent = class _InwardRequestListComponent {
  inwardRequestService;
  toastService;
  dialogService;
  exportService;
  router;
  requests = [];
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
      key: "request_number",
      label: "Request Number",
      sortable: true,
      format: (value) => `#${value || "-"}`
    },
    {
      key: "request_type",
      label: "Request Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "request_title",
      label: "Title",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "requested_by_name",
      label: "Requested By",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "assigned_to_name",
      label: "Assigned To",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "resolved" || value === "closed" ? "badge-success" : value === "in_progress" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "created_at",
      label: "Created Date",
      sortable: true,
      type: "date"
    }
  ];
  searchTerm = "";
  sortColumn = "created_at";
  sortDirection = "desc";
  startDate;
  endDate;
  requestType;
  status;
  constructor(inwardRequestService, toastService, dialogService, exportService, router) {
    this.inwardRequestService = inwardRequestService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadRequests();
  }
  loadRequests() {
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
    if (this.requestType) {
      params.request_type = this.requestType;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.inwardRequestService.getInwardRequests(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.requests = response.data.requests || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading inward requests", "error");
        console.error("Error loading inward requests:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadRequests();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadRequests();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadRequests();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadRequests();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadRequests();
  }
  onRowSelect(row) {
    this.selectedRowId = row.request_id;
  }
  onRefresh() {
    this.loadRequests();
  }
  onAdd() {
  }
  onView(row) {
    this.router.navigate(["/app/inward-requests/view", row.request_id]);
  }
  onEdit(request) {
    if (!request || !request.request_id)
      return;
    console.log("Clicked record:", request);
    this.router.navigate(["/app/inward-requests/edit", request.request_id]);
  }
  onExportClick(event) {
    const exportData = this.requests.map((request) => ({
      "Request Number": `#${request.request_number || "-"}`,
      "Request Type": request.request_type || "-",
      "Title": request.request_title || "-",
      "Requested By": request.requested_by_name || "-",
      "Assigned To": request.assigned_to_name || "-",
      "Status": request.status || "-",
      "Created Date": this.formatDate(request.created_at)
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `inward-requests-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `inward-requests-${Date.now()}.pdf`, headers);
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
  onRequestTypeChange(type) {
    this.requestType = type || void 0;
    this.pagination.page = 1;
    this.loadRequests();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadRequests();
  }
  resolveRequest(requestId) {
    this.dialogService.confirm({
      title: "Resolve Request",
      message: "Are you sure you want to resolve this inward request?",
      confirmText: "Resolve",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.inwardRequestService.resolveRequest(requestId, {}).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Request resolved successfully", "success");
              this.loadRequests();
            }
          },
          error: () => {
            this.toastService.show("Failed to resolve request", "error");
          }
        });
      }
    });
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete request",
      message: `Are you sure you want to delete "${row.request_title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.inwardRequestService.deleteInwardRequest(row.request_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("request deleted successfully", "success");
              this.loadRequests();
            }
          },
          error: () => {
            this.toastService.show("Error deleting request", "error");
          }
        });
      }
    });
  }
  getSelectedRequest() {
    return this.requests.find((r) => r.request_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function InwardRequestListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InwardRequestListComponent)(\u0275\u0275directiveInject(InwardRequestService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InwardRequestListComponent, selectors: [["app-inward-request-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 19, consts: [[1, "inward-request-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "maintenance"], ["value", "supply"], ["value", "repair"], ["value", "other"], ["value", "open"], ["value", "in_progress"], ["value", "resolved"], ["value", "closed"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton"], ["class", "resolve-action", 4, "ngIf"], [1, "resolve-action"], ["title", "Resolve Request", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"]], template: function InwardRequestListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Inward Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage inward requests and resolutions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Request Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function InwardRequestListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.requestType, $event) || (ctx.requestType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InwardRequestListComponent_Template_select_change_11_listener() {
        return ctx.onRequestTypeChange(ctx.requestType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Supply");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Repair");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function InwardRequestListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InwardRequestListComponent_Template_select_change_25_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 12);
      \u0275\u0275text(29, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 13);
      \u0275\u0275text(31, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 14);
      \u0275\u0275text(33, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 15);
      \u0275\u0275text(35, "Closed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "app-enhanced-table", 16);
      \u0275\u0275listener("pageChange", function InwardRequestListComponent_Template_app_enhanced_table_pageChange_36_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function InwardRequestListComponent_Template_app_enhanced_table_pageSizeChange_36_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function InwardRequestListComponent_Template_app_enhanced_table_searchChange_36_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function InwardRequestListComponent_Template_app_enhanced_table_sortChange_36_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function InwardRequestListComponent_Template_app_enhanced_table_dateFilterChange_36_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function InwardRequestListComponent_Template_app_enhanced_table_rowSelect_36_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function InwardRequestListComponent_Template_app_enhanced_table_refresh_36_listener() {
        return ctx.onRefresh();
      })("addClick", function InwardRequestListComponent_Template_app_enhanced_table_addClick_36_listener() {
        return ctx.onAdd();
      })("editClick", function InwardRequestListComponent_Template_app_enhanced_table_editClick_36_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function InwardRequestListComponent_Template_app_enhanced_table_deleteClick_36_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function InwardRequestListComponent_Template_app_enhanced_table_viewClick_36_listener($event) {
        return ctx.onView($event);
      })("exportClick", function InwardRequestListComponent_Template_app_enhanced_table_exportClick_36_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function InwardRequestListComponent_Template_app_enhanced_table_filterToggle_36_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, InwardRequestListComponent_div_37_Template, 4, 0, "div", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_17_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.requestType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.requests)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "request_id")("addRoute", "/app/inward-requests/create")("addLabel", "New Request")("searchPlaceholder", "Search by request number or title...")("enableExport", true)("enableDateFilter", true)("showViewButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedRequest() && ((tmp_17_0 = ctx.getSelectedRequest()) == null ? null : tmp_17_0.status) !== "resolved" && ((tmp_17_0 = ctx.getSelectedRequest()) == null ? null : tmp_17_0.status) !== "closed");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.inward-request-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .inward-request-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .inward-request-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.inward-request-list-container[_ngcontent-%COMP%]   .resolve-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n/*# sourceMappingURL=inward-request-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InwardRequestListComponent, { className: "InwardRequestListComponent", filePath: "src\\app\\modules\\inward-requests\\inward-request-list\\inward-request-list.component.ts", lineNumber: 18 });
})();
export {
  InwardRequestListComponent
};
//# sourceMappingURL=chunk-IDYO7674.js.map
