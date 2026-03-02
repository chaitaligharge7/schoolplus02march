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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/inquiry-list/inquiry-list.component.ts
function InquiryListComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "strong");
    \u0275\u0275text(2, "Alert:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function InquiryListComponent_div_23_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alertCount = 0);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.alertCount, " inquiry(ies) forwarded but not picked at reception in 10+ minutes. ");
  }
}
var InquiryListComponent = class _InquiryListComponent {
  sg;
  toast;
  router;
  inquiries = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "enquiry_number", label: "Enquiry ID", sortable: true, format: (v, row) => v || (row?.inquiry_id ? "INQ-" + (/* @__PURE__ */ new Date()).getFullYear() + "-" + String(row.inquiry_id).padStart(4, "0") : "-") },
    { key: "visitor_name", label: "Visitor", sortable: true },
    { key: "visitor_phone", label: "Phone", sortable: false },
    { key: "purpose", label: "Purpose", sortable: false, format: (v) => v && v.length > 40 ? v.substring(0, 40) + "..." : v || "-" },
    { key: "person_to_meet", label: "Person to Meet", sortable: true },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "resolved" || v === "picked" ? "badge-success" : v === "forwarded" ? "badge-info" : "badge-warning";
      return `<span class="badge ${c}">${v || "registered"}</span>`;
    } }
  ];
  alertCount = 0;
  alerts = [];
  searchTerm = "";
  status;
  rowIdKey = "inquiry_id";
  constructor(sg, toast, router) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
  }
  ngOnInit() {
    this.load();
    this.loadAlerts();
  }
  loadAlerts() {
    this.sg.getInquiryAlerts().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.alerts) {
          this.alerts = res.data.alerts;
          this.alertCount = this.alerts.length;
        }
      }
    });
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.status)
      params.status = this.status;
    this.sg.getInquiries(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.inquiries = res.data.inquiries || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading inquiries", "error");
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
  onStatusChange(s) {
    this.status = s;
    this.pagination.page = 1;
    this.load();
  }
  onEdit(row) {
    if (row?.inquiry_id)
      this.router.navigate(["/app/security-guard/inquiry/edit", row.inquiry_id]);
  }
  onView(row) {
    if (row?.inquiry_id)
      this.router.navigate(["/app/security-guard/inquiry/view", row.inquiry_id]);
  }
  onDelete(row) {
    if (!row?.inquiry_id)
      return;
    if (!confirm("Delete this inquiry?"))
      return;
    this.sg.deleteInquiry(row.inquiry_id).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Inquiry deleted", "success");
          this.load();
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => this.toast.show("Error deleting inquiry", "error")
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function InquiryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InquiryListComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InquiryListComponent, selectors: [["app-inquiry-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 12, consts: [[1, "page-container"], [1, "page-header", "inquiry-list-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-filters"], [1, "header-filter-label"], [1, "form-control", "header-filter-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "registered"], ["value", "forwarded"], ["value", "picked"], ["value", "resolved"], ["value", "cancelled"], ["class", "alert alert-warning alert-dismissible mb-3", "role", "alert", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "showFilterButton"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "mb-3"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function InquiryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Inquiry Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Security guard \u2013 register and track visitor inquiries");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function InquiryListComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function InquiryListComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Registered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Forwarded");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Picked");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(23, InquiryListComponent_div_23_Template, 5, 1, "div", 13);
      \u0275\u0275elementStart(24, "app-enhanced-table", 14);
      \u0275\u0275listener("pageChange", function InquiryListComponent_Template_app_enhanced_table_pageChange_24_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function InquiryListComponent_Template_app_enhanced_table_pageSizeChange_24_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function InquiryListComponent_Template_app_enhanced_table_searchChange_24_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function InquiryListComponent_Template_app_enhanced_table_sortChange_24_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function InquiryListComponent_Template_app_enhanced_table_rowSelect_24_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function InquiryListComponent_Template_app_enhanced_table_refresh_24_listener() {
        return ctx.onRefresh();
      })("addClick", function InquiryListComponent_Template_app_enhanced_table_addClick_24_listener() {
        return ctx.onAdd();
      })("editClick", function InquiryListComponent_Template_app_enhanced_table_editClick_24_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function InquiryListComponent_Template_app_enhanced_table_deleteClick_24_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function InquiryListComponent_Template_app_enhanced_table_viewClick_24_listener($event) {
        return ctx.onView($event);
      })("exportClick", function InquiryListComponent_Template_app_enhanced_table_exportClick_24_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function InquiryListComponent_Template_app_enhanced_table_filterToggle_24_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.alertCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.inquiries)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("addRoute", "/app/security-guard/inquiry/create")("addLabel", "Register Inquiry")("searchPlaceholder", "Search visitor or purpose...")("showFilterButton", false);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.page-header.inquiry-list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.header-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.header-filters[_ngcontent-%COMP%]   .header-filter-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.header-filters[_ngcontent-%COMP%]   .header-filter-select[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding: 0.35rem 0.6rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-sm);\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=inquiry-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InquiryListComponent, { className: "InquiryListComponent", filePath: "src\\app\\modules\\security-guard\\inquiry-list\\inquiry-list.component.ts", lineNumber: 16 });
})();
export {
  InquiryListComponent
};
//# sourceMappingURL=chunk-KCVTRSBB.js.map
