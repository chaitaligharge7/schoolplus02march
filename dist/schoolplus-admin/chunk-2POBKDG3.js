import {
  BusDocumentService
} from "./chunk-G6H3YNUS.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/bus-documents/bus-document-list/bus-document-list.component.ts
function BusDocumentListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "a", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275text(3, " Download Document ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.getSelectedDocument().document_file, \u0275\u0275sanitizeUrl);
  }
}
var BusDocumentListComponent = class _BusDocumentListComponent {
  busDocumentService;
  toastService;
  exportService;
  router;
  documents = [];
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
      key: "bus_number",
      label: "Bus",
      sortable: true,
      format: (value, row) => {
        return `${value || "-"}<br><small>${row?.route_name || "-"}</small>`;
      }
    },
    {
      key: "document_type",
      label: "Document Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "document_number",
      label: "Document Number",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "issue_date",
      label: "Issue Date",
      sortable: true,
      type: "date"
    },
    {
      key: "expiry_date",
      label: "Expiry Date",
      sortable: true,
      type: "date"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "valid" ? "badge-success" : value === "expired" ? "badge-danger" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "expiry_date";
  sortDirection = "asc";
  startDate;
  endDate;
  documentType;
  busId;
  constructor(busDocumentService, toastService, exportService, router) {
    this.busDocumentService = busDocumentService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
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
    if (this.documentType) {
      params.document_type = this.documentType;
    }
    if (this.busId) {
      params.bus_id = this.busId;
    }
    this.busDocumentService.getBusDocuments(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.documents = response.data.documents || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading bus documents", "error");
        console.error("Error loading bus documents:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadDocuments();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDocuments();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onRowSelect(row) {
    this.selectedRowId = row.document_id;
  }
  onRefresh() {
    this.loadDocuments();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.documents.map((doc) => ({
      "Bus Number": doc.bus_number || "-",
      "Route": doc.route_name || "-",
      "Document Type": doc.document_type || "-",
      "Document Number": doc.document_number || "-",
      "Issue Date": this.formatDate(doc.issue_date),
      "Expiry Date": this.formatDate(doc.expiry_date),
      "Status": doc.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `bus-documents-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `bus-documents-${Date.now()}.pdf`, headers);
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
  onDocumentTypeChange(type) {
    this.documentType = type || void 0;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  onBusIdChange(busId) {
    this.busId = busId || void 0;
    this.pagination.page = 1;
    this.loadDocuments();
  }
  isExpiringSoon(expiryDate) {
    if (!expiryDate)
      return false;
    const expiry = new Date(expiryDate);
    const today = /* @__PURE__ */ new Date();
    const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1e3 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  }
  getSelectedDocument() {
    return this.documents.find((d) => d.document_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function BusDocumentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BusDocumentListComponent)(\u0275\u0275directiveInject(BusDocumentService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusDocumentListComponent, selectors: [["app-bus-document-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 17, consts: [[1, "bus-document-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "insurance"], ["value", "permit"], ["value", "fitness"], ["value", "license"], ["value", "other"], ["type", "text", "placeholder", "Filter by Bus ID", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "download-action", 4, "ngIf"], [1, "download-action"], ["target", "_blank", "title", "Download Document", 1, "btn", "btn-secondary", 3, "href"], [1, "bi", "bi-download"]], template: function BusDocumentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Bus Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage bus-related documents");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Document Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function BusDocumentListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.documentType, $event) || (ctx.documentType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BusDocumentListComponent_Template_select_change_11_listener() {
        return ctx.onDocumentTypeChange(ctx.documentType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Insurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Permit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Fitness Certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "License");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 5)(25, "label");
      \u0275\u0275text(26, "Bus ID:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BusDocumentListComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.busId, $event) || (ctx.busId = $event);
        return $event;
      });
      \u0275\u0275listener("input", function BusDocumentListComponent_Template_input_input_27_listener() {
        return ctx.onBusIdChange(ctx.busId);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "app-enhanced-table", 14);
      \u0275\u0275listener("pageChange", function BusDocumentListComponent_Template_app_enhanced_table_pageChange_28_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function BusDocumentListComponent_Template_app_enhanced_table_pageSizeChange_28_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function BusDocumentListComponent_Template_app_enhanced_table_searchChange_28_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function BusDocumentListComponent_Template_app_enhanced_table_sortChange_28_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function BusDocumentListComponent_Template_app_enhanced_table_dateFilterChange_28_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function BusDocumentListComponent_Template_app_enhanced_table_rowSelect_28_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function BusDocumentListComponent_Template_app_enhanced_table_refresh_28_listener() {
        return ctx.onRefresh();
      })("addClick", function BusDocumentListComponent_Template_app_enhanced_table_addClick_28_listener() {
        return ctx.onAdd();
      })("exportClick", function BusDocumentListComponent_Template_app_enhanced_table_exportClick_28_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function BusDocumentListComponent_Template_app_enhanced_table_filterToggle_28_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, BusDocumentListComponent_div_29_Template, 4, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_15_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.documentType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.busId);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.documents)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "document_id")("addRoute", "/app/bus-documents/create")("addLabel", "Upload Document")("searchPlaceholder", "Search bus documents...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedDocument() && ((tmp_15_0 = ctx.getSelectedDocument()) == null ? null : tmp_15_0.document_file));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.bus-document-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .bus-document-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .bus-document-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.bus-document-list-container[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n/*# sourceMappingURL=bus-document-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusDocumentListComponent, { className: "BusDocumentListComponent", filePath: "src\\app\\modules\\bus-documents\\bus-document-list\\bus-document-list.component.ts", lineNumber: 17 });
})();
export {
  BusDocumentListComponent
};
//# sourceMappingURL=chunk-2POBKDG3.js.map
