import {
  SecurityGuardService
} from "./chunk-XWWR65CX.js";
import {
  EnhancedTableComponent
} from "./chunk-LT2VDVRY.js";
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

// src/app/modules/security-guard/gate-pass-list/gate-pass-list.component.ts
var GatePassListComponent = class _GatePassListComponent {
  sg;
  toast;
  router;
  gatePasses = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = "gate_pass_id";
  columns = [
    { key: "visitor_name", label: "Visitor", sortable: true },
    { key: "purpose", label: "Purpose", sortable: false },
    { key: "valid_from", label: "Valid From", sortable: false },
    { key: "valid_until", label: "Valid Until", sortable: false },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "active" ? "badge-success" : v === "used" ? "badge-secondary" : "badge-warning";
      return `<span class="badge ${c}">${v || "active"}</span>`;
    } }
  ];
  status;
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
    if (this.status)
      params.status = this.status;
    this.sg.getGatePasses(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.gatePasses = res.data.gate_passes || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading gate passes", "error");
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
  onStatusChange(s) {
    this.status = s;
    this.pagination.page = 1;
    this.load();
  }
  onEdit(row) {
    if (row?.gate_pass_id)
      this.router.navigate(["/app/security-guard/gate-pass/edit", row.gate_pass_id]);
  }
  onDelete(row) {
    if (!row?.gate_pass_id)
      return;
    if (!confirm("Delete this gate pass?"))
      return;
    this.sg.deleteGatePass(row.gate_pass_id).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Gate pass deleted", "success");
          this.load();
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => this.toast.show("Error deleting gate pass", "error")
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function GatePassListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GatePassListComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GatePassListComponent, selectors: [["app-gate-pass-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "active"], ["value", "used"], ["value", "expired"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "rowIdKey", "addRoute", "addLabel"]], template: function GatePassListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Gate Pass Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Issue and track gate passes for visitors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function GatePassListComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function GatePassListComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Used");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Expired");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "app-enhanced-table", 11);
      \u0275\u0275listener("pageChange", function GatePassListComponent_Template_app_enhanced_table_pageChange_19_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function GatePassListComponent_Template_app_enhanced_table_pageSizeChange_19_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function GatePassListComponent_Template_app_enhanced_table_searchChange_19_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function GatePassListComponent_Template_app_enhanced_table_sortChange_19_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function GatePassListComponent_Template_app_enhanced_table_rowSelect_19_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function GatePassListComponent_Template_app_enhanced_table_refresh_19_listener() {
        return ctx.onRefresh();
      })("addClick", function GatePassListComponent_Template_app_enhanced_table_addClick_19_listener() {
        return ctx.onAdd();
      })("editClick", function GatePassListComponent_Template_app_enhanced_table_editClick_19_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function GatePassListComponent_Template_app_enhanced_table_deleteClick_19_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function GatePassListComponent_Template_app_enhanced_table_exportClick_19_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function GatePassListComponent_Template_app_enhanced_table_filterToggle_19_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("data", ctx.gatePasses)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("addRoute", "/app/security-guard/gate-pass/create")("addLabel", "Issue Gate Pass");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=gate-pass-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GatePassListComponent, { className: "GatePassListComponent", filePath: "src\\app\\modules\\security-guard\\gate-pass-list\\gate-pass-list.component.ts", lineNumber: 16 });
})();
export {
  GatePassListComponent
};
//# sourceMappingURL=chunk-PFWVM5WY.js.map
