import {
  ReceptionistService
} from "./chunk-5XKVDBLM.js";
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
  ActivatedRoute,
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

// src/app/modules/receptionist/receptionist-inquiry-list/receptionist-inquiry-list.component.ts
var ReceptionistInquiryListComponent = class _ReceptionistInquiryListComponent {
  receptionist;
  toast;
  route;
  router;
  inquiries = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "visitor_name", label: "Visitor", sortable: true },
    { key: "visitor_phone", label: "Phone", sortable: false },
    { key: "purpose", label: "Purpose", sortable: false, format: (v) => v && v.length > 40 ? v.substring(0, 40) + "..." : v || "-" },
    { key: "person_to_meet", label: "Person to Meet", sortable: true },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "resolved" ? "badge-success" : v === "forwarded" ? "badge-info" : "badge-warning";
      return `<span class="badge ${c}">${v || "forwarded"}</span>`;
    } }
  ];
  searchTerm = "";
  status;
  rowIdKey = "inquiry_id";
  constructor(receptionist, toast, route, router) {
    this.receptionist = receptionist;
    this.toast = toast;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((q) => {
      if (q["status"])
        this.status = q["status"];
      this.load();
    });
  }
  load() {
    this.loading = true;
    const params = { page: this.pagination.page, limit: this.pagination.limit };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.status)
      params.status = this.status;
    this.receptionist.getInquiries(params).subscribe({
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
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  onEdit(row) {
    if (row?.inquiry_id)
      this.router.navigate(["/app/receptionist/inquiries/edit", row.inquiry_id]);
  }
  onView(row) {
    if (row?.inquiry_id)
      this.router.navigate(["/app/receptionist/inquiries/edit", row.inquiry_id]);
  }
  static \u0275fac = function ReceptionistInquiryListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceptionistInquiryListComponent)(\u0275\u0275directiveInject(ReceptionistService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReceptionistInquiryListComponent, selectors: [["app-receptionist-inquiry-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "forwarded"], ["value", "picked"], ["value", "resolved"], ["value", "registered"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "rowIdKey", "searchPlaceholder"]], template: function ReceptionistInquiryListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Inquiry Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Inquiries forwarded from security \u2013 follow up and assign");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ReceptionistInquiryListComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function ReceptionistInquiryListComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Forwarded");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "Picked");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Registered");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "app-enhanced-table", 12);
      \u0275\u0275listener("pageChange", function ReceptionistInquiryListComponent_Template_app_enhanced_table_pageChange_21_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function ReceptionistInquiryListComponent_Template_app_enhanced_table_pageSizeChange_21_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function ReceptionistInquiryListComponent_Template_app_enhanced_table_searchChange_21_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function ReceptionistInquiryListComponent_Template_app_enhanced_table_sortChange_21_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function ReceptionistInquiryListComponent_Template_app_enhanced_table_rowSelect_21_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function ReceptionistInquiryListComponent_Template_app_enhanced_table_refresh_21_listener() {
        return ctx.onRefresh();
      })("addClick", function ReceptionistInquiryListComponent_Template_app_enhanced_table_addClick_21_listener() {
        return ctx.onAdd();
      })("editClick", function ReceptionistInquiryListComponent_Template_app_enhanced_table_editClick_21_listener($event) {
        return ctx.onEdit($event);
      })("viewClick", function ReceptionistInquiryListComponent_Template_app_enhanced_table_viewClick_21_listener($event) {
        return ctx.onView($event);
      })("exportClick", function ReceptionistInquiryListComponent_Template_app_enhanced_table_exportClick_21_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function ReceptionistInquiryListComponent_Template_app_enhanced_table_filterToggle_21_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.inquiries)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("rowIdKey", ctx.rowIdKey)("searchPlaceholder", "Search visitor or purpose...");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n}\n/*# sourceMappingURL=receptionist-inquiry-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReceptionistInquiryListComponent, { className: "ReceptionistInquiryListComponent", filePath: "src\\app\\modules\\receptionist\\receptionist-inquiry-list\\receptionist-inquiry-list.component.ts", lineNumber: 16 });
})();
export {
  ReceptionistInquiryListComponent
};
//# sourceMappingURL=chunk-EBIH2TSH.js.map
