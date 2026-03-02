import {
  TeachingPlanService
} from "./chunk-ZHI57HZ2.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  FormsModule
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
  ɵɵtext
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/teaching-plan/plan-list/plan-list.component.ts
var PlanListComponent = class _PlanListComponent {
  planService;
  toast;
  dialogService;
  router;
  plans = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "plan_title", label: "Title", sortable: true, format: (v) => v || "-" },
    { key: "class_name", label: "Class", sortable: true, format: (v) => v || "-" },
    { key: "subject_name", label: "Subject", sortable: true, format: (v) => v || "-" },
    { key: "teacher_name", label: "Teacher", sortable: true, format: (v) => v || "-" },
    { key: "plan_date", label: "Date", sortable: true, type: "date", format: (v) => v || "-" },
    { key: "status", label: "Status", sortable: true, format: (v) => `<span class="badge ${v === "active" ? "badge-success" : "badge-secondary"}">${v || "-"}</span>` }
  ];
  searchTerm = "";
  constructor(planService, toast, dialogService, router) {
    this.planService = planService;
    this.toast = toast;
    this.dialogService = dialogService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.planService.getPlans({ page: this.pagination.page, limit: this.pagination.limit, search: this.searchTerm }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.plans = res.data.plans || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading plans", "error");
      }
    });
  }
  onEdit(row) {
    this.router.navigate(["/app/teaching-plan/edit", row.plan_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Plan",
      message: `Are you sure you want to delete "${row.plan_title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.planService.deletePlan(row.plan_id).subscribe({
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
  onExportClick(_) {
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function PlanListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlanListComponent)(\u0275\u0275directiveInject(TeachingPlanService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanListComponent, selectors: [["app-plan-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function PlanListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Teaching Plan Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage teaching plans by class and subject");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "app-enhanced-table", 4);
      \u0275\u0275listener("pageChange", function PlanListComponent_Template_app_enhanced_table_pageChange_6_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function PlanListComponent_Template_app_enhanced_table_pageSizeChange_6_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function PlanListComponent_Template_app_enhanced_table_searchChange_6_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function PlanListComponent_Template_app_enhanced_table_sortChange_6_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function PlanListComponent_Template_app_enhanced_table_rowSelect_6_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function PlanListComponent_Template_app_enhanced_table_refresh_6_listener() {
        return ctx.onRefresh();
      })("addClick", function PlanListComponent_Template_app_enhanced_table_addClick_6_listener() {
        return ctx.onAdd();
      })("editClick", function PlanListComponent_Template_app_enhanced_table_editClick_6_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function PlanListComponent_Template_app_enhanced_table_deleteClick_6_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function PlanListComponent_Template_app_enhanced_table_exportClick_6_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function PlanListComponent_Template_app_enhanced_table_filterToggle_6_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.plans)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/teaching-plan/create")("addLabel", "Add Plan")("searchPlaceholder", "Search plans...");
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=plan-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanListComponent, { className: "PlanListComponent", filePath: "src\\app\\modules\\teaching-plan\\plan-list\\plan-list.component.ts", lineNumber: 17 });
})();
export {
  PlanListComponent
};
//# sourceMappingURL=chunk-FO3FBW25.js.map
