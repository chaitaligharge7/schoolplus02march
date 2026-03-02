import {
  SmsService
} from "./chunk-QSGU2ZCA.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import {
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

// src/app/modules/sms/sms-list/sms-list.component.ts
var SmsListComponent = class _SmsListComponent {
  smsService;
  toastService;
  exportService;
  router;
  smsList = [];
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
      key: "sent_date",
      label: "Date",
      sortable: true,
      type: "date"
    },
    {
      key: "recipient_name",
      label: "Recipient",
      sortable: true,
      format: (value, row) => {
        return `${value || "-"}<br><small>${row?.recipient_mobile || "-"}</small>`;
      }
    },
    {
      key: "message",
      label: "Message",
      sortable: true,
      format: (value) => {
        if (!value)
          return "-";
        return value.length > 100 ? value.substring(0, 100) + "..." : value;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "sent" ? "badge-success" : value === "pending" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "message_type",
      label: "Type",
      sortable: true,
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "sent_date";
  sortDirection = "desc";
  startDate;
  endDate;
  status;
  smsStatusOptions = [
    { value: null, label: "All Status" },
    { value: "sent", label: "Sent" },
    { value: "pending", label: "Pending" },
    { value: "failed", label: "Failed" }
  ];
  constructor(smsService, toastService, exportService, router) {
    this.smsService = smsService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadSmsList();
  }
  loadSmsList() {
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
    if (this.status) {
      params.status = this.status;
    }
    this.smsService.getSmsList(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.smsList = response.data.sms_list || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading SMS list", "error");
        console.error("Error loading SMS list:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadSmsList();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSmsList();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSmsList();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSmsList();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSmsList();
  }
  onRowSelect(row) {
    this.selectedRowId = row.sms_id || row.id;
  }
  onRefresh() {
    this.loadSmsList();
  }
  onAdd() {
    this.router.navigate(["/app/sms/send"]);
  }
  onExportClick(event) {
    const exportData = this.smsList.map((sms) => ({
      "Date": this.formatDate(sms.sent_date),
      "Recipient": sms.recipient_name || "-",
      "Mobile": sms.recipient_mobile || "-",
      "Message": sms.message || "-",
      "Status": sms.status || "-",
      "Type": sms.message_type || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `sms-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `sms-${Date.now()}.pdf`, headers);
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
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadSmsList();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function SmsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsListComponent)(\u0275\u0275directiveInject(SmsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmsListComponent, selectors: [["app-sms-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 15, consts: [[1, "sms-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function SmsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "SMS Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "View and manage SMS messages");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-search-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function SmsListComponent_Template_app_search_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function SmsListComponent_Template_app_search_select_valueChange_11_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "app-enhanced-table", 7);
      \u0275\u0275listener("pageChange", function SmsListComponent_Template_app_enhanced_table_pageChange_12_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function SmsListComponent_Template_app_enhanced_table_pageSizeChange_12_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function SmsListComponent_Template_app_enhanced_table_searchChange_12_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function SmsListComponent_Template_app_enhanced_table_sortChange_12_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function SmsListComponent_Template_app_enhanced_table_dateFilterChange_12_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function SmsListComponent_Template_app_enhanced_table_rowSelect_12_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function SmsListComponent_Template_app_enhanced_table_refresh_12_listener() {
        return ctx.onRefresh();
      })("addClick", function SmsListComponent_Template_app_enhanced_table_addClick_12_listener() {
        return ctx.onAdd();
      })("exportClick", function SmsListComponent_Template_app_enhanced_table_exportClick_12_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function SmsListComponent_Template_app_enhanced_table_filterToggle_12_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.smsStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.smsList)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "sms_id")("addRoute", "/app/sms/send")("addLabel", "Send SMS")("searchPlaceholder", "Search messages...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.sms-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .sms-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .sms-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.sms-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.sms-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.sms-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.sms-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.sms-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.sms-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.sms-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=sms-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmsListComponent, { className: "SmsListComponent", filePath: "src\\app\\modules\\sms\\sms-list\\sms-list.component.ts", lineNumber: 18 });
})();
export {
  SmsListComponent
};
//# sourceMappingURL=chunk-ONZPEBW5.js.map
