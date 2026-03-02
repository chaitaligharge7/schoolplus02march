import {
  SecurityGuardService
} from "./chunk-XWWR65CX.js";
import {
  EnhancedTableComponent
} from "./chunk-LT2VDVRY.js";
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

// src/app/modules/security-guard/daily-report-list/daily-report-list.component.ts
var DailyReportListComponent = class _DailyReportListComponent {
  sg;
  toast;
  router;
  reports = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = "report_id";
  columns = [
    { key: "report_date", label: "Date", sortable: true },
    { key: "shift", label: "Shift", sortable: true },
    { key: "summary", label: "Summary", sortable: false, format: (v) => v && v.length > 50 ? v.substring(0, 50) + "..." : v || "-" },
    { key: "reported_by_name", label: "Reported By", sortable: false }
  ];
  reportDate = "";
  constructor(sg, toast, router) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.reportDate)
      params.report_date = this.reportDate;
    this.sg.getDailyReports(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.reports = res.data.reports || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading reports", "error");
      }
    });
  }
  onPageChange(p) {
    this.pagination.page = p;
    this.load();
  }
  onPageSizeChange(s) {
    this.pagination.limit = s;
    this.pagination.page = 1;
    this.load();
  }
  onSearchChange(_) {
    this.load();
  }
  onSortChange(_) {
    this.load();
  }
  onRowSelect(_) {
  }
  onRefresh() {
    this.load();
  }
  onAdd() {
  }
  onExportClick(_) {
  }
  onDateChange() {
    this.pagination.page = 1;
    this.load();
  }
  onEdit(row) {
    if (row?.report_id)
      this.router.navigate(["/app/security-guard/daily-report/edit", row.report_id]);
  }
  onDelete(row) {
    if (!row?.report_id)
      return;
    if (!confirm("Delete this report?"))
      return;
    this.sg.deleteDailyReport(row.report_id).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Report deleted", "success");
          this.load();
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => this.toast.show("Error deleting report", "error")
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function DailyReportListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyReportListComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyReportListComponent, selectors: [["app-daily-report-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "rowIdKey", "addRoute", "addLabel"]], template: function DailyReportListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Daily Reporting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Security shift daily reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Report Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DailyReportListComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportDate, $event) || (ctx.reportDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function DailyReportListComponent_Template_input_change_10_listener() {
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "app-enhanced-table", 7);
      \u0275\u0275listener("pageChange", function DailyReportListComponent_Template_app_enhanced_table_pageChange_11_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function DailyReportListComponent_Template_app_enhanced_table_pageSizeChange_11_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function DailyReportListComponent_Template_app_enhanced_table_searchChange_11_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function DailyReportListComponent_Template_app_enhanced_table_sortChange_11_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function DailyReportListComponent_Template_app_enhanced_table_rowSelect_11_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function DailyReportListComponent_Template_app_enhanced_table_refresh_11_listener() {
        return ctx.onRefresh();
      })("addClick", function DailyReportListComponent_Template_app_enhanced_table_addClick_11_listener() {
        return ctx.onAdd();
      })("editClick", function DailyReportListComponent_Template_app_enhanced_table_editClick_11_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function DailyReportListComponent_Template_app_enhanced_table_deleteClick_11_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function DailyReportListComponent_Template_app_enhanced_table_exportClick_11_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function DailyReportListComponent_Template_app_enhanced_table_filterToggle_11_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportDate);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.reports)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("addRoute", "/app/security-guard/daily-report/create")("addLabel", "Add Report");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=daily-report-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyReportListComponent, { className: "DailyReportListComponent", filePath: "src\\app\\modules\\security-guard\\daily-report-list\\daily-report-list.component.ts", lineNumber: 16 });
})();
export {
  DailyReportListComponent
};
//# sourceMappingURL=chunk-TQ7RLPE5.js.map
