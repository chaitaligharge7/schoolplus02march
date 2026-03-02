import {
  CounselorService
} from "./chunk-4NB4NAU4.js";
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

// src/app/modules/counselor/lead-list/lead-list.component.ts
var LeadListComponent = class _LeadListComponent {
  counselor;
  toast;
  router;
  leads = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  rowIdKey = "enquiry_id";
  showViewButton = true;
  columns = [
    { key: "student_name", label: "Student", sortable: true },
    { key: "parent_name", label: "Parent", sortable: true },
    { key: "mobile", label: "Mobile", sortable: false },
    { key: "enquiry_date", label: "Enquiry Date", sortable: true },
    { key: "lead_status", label: "Lead Status", sortable: true, format: (v) => {
      const s = v || "new";
      const c = s === "admitted" ? "badge-success" : s === "contacted" ? "badge-info" : "badge-warning";
      return `<span class="badge ${c}">${s}</span>`;
    } },
    { key: "campus_tour_done", label: "Campus Tour", sortable: false, format: (v) => v ? "Yes" : "No" },
    { key: "fee_discussion_done", label: "Fee Discussion", sortable: false, format: (v) => v ? "Yes" : "No" }
  ];
  searchTerm = "";
  status;
  constructor(counselor, toast, router) {
    this.counselor = counselor;
    this.toast = toast;
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
    this.counselor.getLeads(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.leads = res.data.leads || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading leads", "error");
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
  onView(row) {
    if (row?.enquiry_id)
      this.router.navigate(["/app/counselor/leads/view", row.enquiry_id]);
  }
  onEdit(row) {
    if (row?.enquiry_id)
      this.router.navigate(["/app/counselor/leads/edit", row.enquiry_id]);
  }
  onDelete(row) {
    if (!row?.enquiry_id)
      return;
    if (!confirm("Remove this lead? The enquiry will remain but counselor assignment will be removed."))
      return;
    this.counselor.deleteLead(row.enquiry_id, row.lead_id || void 0).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toast.show("Lead removed", "success");
          this.load();
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => this.toast.show("Error removing lead", "error")
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function LeadListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeadListComponent)(\u0275\u0275directiveInject(CounselorService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadListComponent, selectors: [["app-lead-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "new"], ["value", "contacted"], ["value", "campus_tour"], ["value", "fee_discussion"], ["value", "admitted"], ["value", "dropped"], ["value", "transferred"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "viewClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "rowIdKey", "showViewButton", "searchPlaceholder"]], template: function LeadListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Lead Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage admission leads and follow-ups");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Lead Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function LeadListComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function LeadListComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Contacted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Campus Tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Fee Discussion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "Admitted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 13);
      \u0275\u0275text(24, "Dropped");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 14);
      \u0275\u0275text(26, "Transferred");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "app-enhanced-table", 15);
      \u0275\u0275listener("pageChange", function LeadListComponent_Template_app_enhanced_table_pageChange_27_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function LeadListComponent_Template_app_enhanced_table_pageSizeChange_27_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function LeadListComponent_Template_app_enhanced_table_searchChange_27_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function LeadListComponent_Template_app_enhanced_table_sortChange_27_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function LeadListComponent_Template_app_enhanced_table_rowSelect_27_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function LeadListComponent_Template_app_enhanced_table_refresh_27_listener() {
        return ctx.onRefresh();
      })("addClick", function LeadListComponent_Template_app_enhanced_table_addClick_27_listener() {
        return ctx.onAdd();
      })("viewClick", function LeadListComponent_Template_app_enhanced_table_viewClick_27_listener($event) {
        return ctx.onView($event);
      })("editClick", function LeadListComponent_Template_app_enhanced_table_editClick_27_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function LeadListComponent_Template_app_enhanced_table_deleteClick_27_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function LeadListComponent_Template_app_enhanced_table_exportClick_27_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function LeadListComponent_Template_app_enhanced_table_filterToggle_27_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(16);
      \u0275\u0275property("data", ctx.leads)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("showViewButton", ctx.showViewButton)("searchPlaceholder", "Search student or parent...");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=lead-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadListComponent, { className: "LeadListComponent", filePath: "src\\app\\modules\\counselor\\lead-list\\lead-list.component.ts", lineNumber: 16 });
})();
export {
  LeadListComponent
};
//# sourceMappingURL=chunk-CZXN3IZI.js.map
