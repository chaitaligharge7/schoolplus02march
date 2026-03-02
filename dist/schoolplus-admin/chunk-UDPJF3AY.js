import {
  DoubtHandlingService
} from "./chunk-VJNVVQUJ.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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

// src/app/modules/doubt-handling/doubt-list/doubt-list.component.ts
function DoubtListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DoubtListComponent_div_6_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.status, $event) || (ctx_r1.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DoubtListComponent_div_6_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange(ctx_r1.status));
    });
    \u0275\u0275elementStart(5, "option", 9);
    \u0275\u0275text(6, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 10);
    \u0275\u0275text(8, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 11);
    \u0275\u0275text(10, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 12);
    \u0275\u0275text(12, "Closed");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.status);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
  }
}
var DoubtListComponent = class _DoubtListComponent {
  doubtService;
  toast;
  dialogService;
  router;
  doubts = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "student_name", label: "Student", sortable: true, format: (v) => v || "-" },
    { key: "class_name", label: "Class", sortable: true, format: (v) => v || "-" },
    { key: "subject_name", label: "Subject", sortable: true, format: (v) => v || "-" },
    { key: "doubt_text", label: "Doubt", sortable: false, format: (v) => v && v.length > 50 ? v.substring(0, 50) + "..." : v || "-" },
    // { key: 'pripority_level', label: 'Pripority', sortable: false, format: (v: any) => (v && v.length > 50) ? v.substring(0, 50) + '...' : (v || '-') },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "resolved" ? "badge-success" : v === "closed" ? "badge-secondary" : "badge-warning";
      return `<span class="badge ${c}">${v || "pending"}</span>`;
    } }
  ];
  searchTerm = "";
  status;
  constructor(doubtService, toast, dialogService, router) {
    this.doubtService = doubtService;
    this.toast = toast;
    this.dialogService = dialogService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.status)
      params.status = this.status;
    this.doubtService.getDoubts(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.doubts = res.data.doubts || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading doubts", "error");
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
  onSearchChange(s) {
    this.searchTerm = s;
    this.pagination.page = 1;
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
  onEdit(row) {
    this.router.navigate(["/app/doubt-handling/respond", row.doubt_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Plan",
      message: `Are you sure you want to delete "${row.doubt_id}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.doubtService.deleteDoubt(row.doubt_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toast.show("plan deleted successfully", "success");
              this.load();
            }
          },
          error: () => {
            this.toast.show("Error deleting plan", "error");
          }
        });
      }
    });
  }
  onExportClick(_) {
  }
  onStatusChange(s) {
    this.status = s;
    this.pagination.page = 1;
    this.load();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function DoubtListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoubtListComponent)(\u0275\u0275directiveInject(DoubtHandlingService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoubtListComponent, selectors: [["app-doubt-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "filters", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "pending"], ["value", "resolved"], ["value", "closed"]], template: function DoubtListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Doubt Handling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Student doubts and teacher responses");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DoubtListComponent_div_6_Template, 13, 2, "div", 4);
      \u0275\u0275elementStart(7, "app-enhanced-table", 5);
      \u0275\u0275listener("pageChange", function DoubtListComponent_Template_app_enhanced_table_pageChange_7_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function DoubtListComponent_Template_app_enhanced_table_pageSizeChange_7_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function DoubtListComponent_Template_app_enhanced_table_searchChange_7_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function DoubtListComponent_Template_app_enhanced_table_sortChange_7_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function DoubtListComponent_Template_app_enhanced_table_rowSelect_7_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function DoubtListComponent_Template_app_enhanced_table_refresh_7_listener() {
        return ctx.onRefresh();
      })("addClick", function DoubtListComponent_Template_app_enhanced_table_addClick_7_listener() {
        return ctx.onAdd();
      })("editClick", function DoubtListComponent_Template_app_enhanced_table_editClick_7_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function DoubtListComponent_Template_app_enhanced_table_deleteClick_7_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function DoubtListComponent_Template_app_enhanced_table_exportClick_7_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function DoubtListComponent_Template_app_enhanced_table_filterToggle_7_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", true);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.doubts)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/doubt-handling/create")("addLabel", "Add Doubt")("searchPlaceholder", "Search...");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: 6px;\n  min-width: 150px;\n}\n/*# sourceMappingURL=doubt-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoubtListComponent, { className: "DoubtListComponent", filePath: "src\\app\\modules\\doubt-handling\\doubt-list\\doubt-list.component.ts", lineNumber: 17 });
})();
export {
  DoubtListComponent
};
//# sourceMappingURL=chunk-UDPJF3AY.js.map
