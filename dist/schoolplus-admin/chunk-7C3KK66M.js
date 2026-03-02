import {
  VisitorService
} from "./chunk-FOWRUAYD.js";
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

// src/app/modules/visitors/visitor-list/visitor-list.component.ts
var VisitorListComponent = class _VisitorListComponent {
  visitorService;
  toastService;
  exportService;
  router;
  visitors = [];
  categories = [];
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
      key: "visitor_name",
      label: "Visitor Name",
      sortable: true
    },
    {
      key: "visitor_phone",
      label: "Phone",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "visitor_category",
      label: "Category",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "purpose_of_visit",
      label: "Purpose",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "visit_date",
      label: "Visit Date",
      sortable: true,
      type: "date"
    },
    {
      key: "check_in_time",
      label: "Check In",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "check_out_time",
      label: "Check Out",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "checked_out" ? "badge-success" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "visit_date";
  sortDirection = "desc";
  startDate;
  endDate;
  visitorCategory;
  status;
  get visitorCategoryOptions() {
    const all = [{ value: void 0, label: "All Categories" }];
    const list = (this.categories || []).map((c) => ({ value: c.category_name, label: c.category_name || "" }));
    return [...all, ...list];
  }
  visitorStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "checked_in", label: "Checked In" },
    { value: "checked_out", label: "Checked Out" }
  ];
  constructor(visitorService, toastService, exportService, router) {
    this.visitorService = visitorService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadVisitors();
  }
  loadCategories() {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.categories = response.data?.categories || [];
        }
      }
    });
  }
  loadVisitors() {
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
    if (this.visitorCategory) {
      params.visitor_category = this.visitorCategory;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.visitorService.getVisitors(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.visitors = response.data.visitors || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading visitors", "error");
        console.error("Error loading visitors:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadVisitors();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadVisitors();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onRowSelect(row) {
    this.selectedRowId = row.visitor_id;
  }
  onRefresh() {
    this.loadVisitors();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.visitors.map((visitor) => ({
      "Visitor Name": visitor.visitor_name || "-",
      "Phone": visitor.visitor_phone || "-",
      "Category": visitor.visitor_category || "-",
      "Purpose": visitor.purpose_of_visit || "-",
      "Visit Date": this.formatDate(visitor.visit_date),
      "Check In": visitor.check_in_time || "-",
      "Check Out": visitor.check_out_time || "-",
      "Status": visitor.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `visitors-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `visitors-${Date.now()}.pdf`, headers);
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
  onVisitorCategoryChange(category) {
    this.visitorCategory = category || void 0;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadVisitors();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function VisitorListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitorListComponent)(\u0275\u0275directiveInject(VisitorService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorListComponent, selectors: [["app-visitor-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 17, consts: [[1, "visitor-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select category", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function VisitorListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Visitor Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage visitor entries and check-ins");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Category:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-search-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function VisitorListComponent_Template_app_search_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.visitorCategory, $event) || (ctx.visitorCategory = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function VisitorListComponent_Template_app_search_select_valueChange_11_listener($event) {
        return ctx.onVisitorCategoryChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function VisitorListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function VisitorListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "app-enhanced-table", 8);
      \u0275\u0275listener("pageChange", function VisitorListComponent_Template_app_enhanced_table_pageChange_16_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function VisitorListComponent_Template_app_enhanced_table_pageSizeChange_16_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function VisitorListComponent_Template_app_enhanced_table_searchChange_16_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function VisitorListComponent_Template_app_enhanced_table_sortChange_16_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function VisitorListComponent_Template_app_enhanced_table_dateFilterChange_16_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function VisitorListComponent_Template_app_enhanced_table_rowSelect_16_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function VisitorListComponent_Template_app_enhanced_table_refresh_16_listener() {
        return ctx.onRefresh();
      })("addClick", function VisitorListComponent_Template_app_enhanced_table_addClick_16_listener() {
        return ctx.onAdd();
      })("exportClick", function VisitorListComponent_Template_app_enhanced_table_exportClick_16_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function VisitorListComponent_Template_app_enhanced_table_filterToggle_16_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.visitorCategoryOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.visitorCategory);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.visitorStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.visitors)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "visitor_id")("addRoute", "/app/visitors/create")("addLabel", "Add Visitor")("searchPlaceholder", "Search by name or phone...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.visitor-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .visitor-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .visitor-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.visitor-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.visitor-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.visitor-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.visitor-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.visitor-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.visitor-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.visitor-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=visitor-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorListComponent, { className: "VisitorListComponent", filePath: "src\\app\\modules\\visitors\\visitor-list\\visitor-list.component.ts", lineNumber: 18 });
})();
export {
  VisitorListComponent
};
//# sourceMappingURL=chunk-7C3KK66M.js.map
