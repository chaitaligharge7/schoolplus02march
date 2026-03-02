import {
  LeaveManagementService
} from "./chunk-QUQ26OR6.js";
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

// src/app/modules/leave-management/leave-list/leave-list.component.ts
var LeaveListComponent = class _LeaveListComponent {
  leaveService;
  toastService;
  dialogService;
  router;
  leaves = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "staff_name", label: "Staff", sortable: true, format: (v) => v || "-" },
    { key: "leave_type", label: "Type", sortable: true, format: (v) => v || "-" },
    { key: "start_date", label: "Start", sortable: true, format: (v) => v || "-" },
    { key: "end_date", label: "End", sortable: true, format: (v) => v || "-" },
    { key: "days_count", label: "Days", sortable: true, type: "number", format: (v) => v ?? "-" },
    { key: "reason", label: "Reason", sortable: false, format: (v) => v && v.length > 40 ? v.substring(0, 40) + "..." : v || "-" },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "approved" ? "badge-success" : v === "rejected" ? "badge-danger" : "badge-warning";
      return `<span class="badge ${c}">${v || "pending"}</span>`;
    } }
  ];
  searchTerm = "";
  status;
  constructor(leaveService, toastService, dialogService, router) {
    this.leaveService = leaveService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.router = router;
  }
  ngOnInit() {
    this.loadLeaves();
  }
  loadLeaves() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.status)
      params.status = this.status;
    this.leaveService.getLeaves(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.leaves = res.data.leaves || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show("Error loading leave requests", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadLeaves();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadLeaves();
  }
  onSearchChange(s) {
    this.searchTerm = s;
    this.pagination.page = 1;
    this.loadLeaves();
  }
  onSortChange(_) {
    this.loadLeaves();
  }
  onRowSelect(_) {
  }
  onRefresh() {
    this.loadLeaves();
  }
  onAdd() {
  }
  onEdit(row) {
    console.log("Edit clicked for:", row);
    this.router.navigate(["/app/leave-management/edit", row.leave_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Branch",
      message: `Are you sure you want to delete "${row.leave_type}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.leaveService.deleteLeave(row.leave_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("leave deleted successfully", "success");
              this.loadLeaves();
            }
          },
          error: () => {
            this.toastService.show("Error deleting leave", "error");
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
    this.loadLeaves();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function LeaveListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveListComponent)(\u0275\u0275directiveInject(LeaveManagementService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveListComponent, selectors: [["app-leave-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 11, consts: [[1, "leave-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "pending"], ["value", "approved"], ["value", "rejected"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function LeaveListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Leave Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Teacher & staff leave requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function LeaveListComponent_Template_select_change_11_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Rejected");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 11);
      \u0275\u0275listener("pageChange", function LeaveListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function LeaveListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function LeaveListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function LeaveListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function LeaveListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function LeaveListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("addClick", function LeaveListComponent_Template_app_enhanced_table_addClick_20_listener() {
        return ctx.onAdd();
      })("editClick", function LeaveListComponent_Template_app_enhanced_table_editClick_20_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function LeaveListComponent_Template_app_enhanced_table_deleteClick_20_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function LeaveListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function LeaveListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("data", ctx.leaves)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/leave-management/create")("addLabel", "Apply Leave")("searchPlaceholder", "Search...");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.leave-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.leave-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.leave-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n.leave-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.leave-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n}\n.leave-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-md);\n}\n/*# sourceMappingURL=leave-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveListComponent, { className: "LeaveListComponent", filePath: "src\\app\\modules\\leave-management\\leave-list\\leave-list.component.ts", lineNumber: 17 });
})();
export {
  LeaveListComponent
};
//# sourceMappingURL=chunk-D2APNKHI.js.map
