import {
  SupportFeedbackService
} from "./chunk-YSZUK25R.js";
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

// src/app/modules/support-feedback/ticket-list/ticket-list.component.ts
var TicketListComponent = class _TicketListComponent {
  ticketService;
  router;
  toast;
  tickets = [];
  loading = false;
  showFilters = false;
  pagination = { page: 1, limit: 20, total: 0, pages: 0 };
  columns = [
    { key: "subject", label: "Subject", sortable: true, format: (v) => v || "-" },
    { key: "ticket_type", label: "Type", sortable: true, format: (v) => v || "-" },
    { key: "message", label: "Message", sortable: false, format: (v) => v && v.length > 40 ? v.substring(0, 40) + "..." : v || "-" },
    { key: "status", label: "Status", sortable: true, format: (v) => {
      const c = v === "resolved" ? "badge-success" : v === "open" ? "badge-warning" : "badge-info";
      return `<span class="badge ${c}">${v || "-"}</span>`;
    } }
  ];
  searchTerm = "";
  status;
  constructor(ticketService, router, toast) {
    this.ticketService = ticketService;
    this.router = router;
    this.toast = toast;
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
    this.ticketService.getTickets(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.tickets = res.data.tickets || [];
          this.pagination = res.data.pagination || this.pagination;
        }
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading tickets", "error");
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
  onEdit(ticket) {
    this.router.navigate(["/app/support-feedback/edit", ticket.ticket_id]);
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
  static \u0275fac = function TicketListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TicketListComponent)(\u0275\u0275directiveInject(SupportFeedbackService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketListComponent, selectors: [["app-ticket-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 9, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "open"], ["value", "in_progress"], ["value", "resolved"], ["value", "closed"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "rowSelect", "refresh", "addClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "addRoute", "addLabel", "searchPlaceholder"]], template: function TicketListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Support & Feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Manage support tickets and feedback");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function TicketListComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TicketListComponent_Template_select_change_10_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option", 8);
      \u0275\u0275text(14, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option", 9);
      \u0275\u0275text(16, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option", 10);
      \u0275\u0275text(18, "Resolved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option", 11);
      \u0275\u0275text(20, "Closed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "app-enhanced-table", 12);
      \u0275\u0275listener("pageChange", function TicketListComponent_Template_app_enhanced_table_pageChange_21_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function TicketListComponent_Template_app_enhanced_table_pageSizeChange_21_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function TicketListComponent_Template_app_enhanced_table_searchChange_21_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function TicketListComponent_Template_app_enhanced_table_sortChange_21_listener($event) {
        return ctx.onSortChange($event);
      })("rowSelect", function TicketListComponent_Template_app_enhanced_table_rowSelect_21_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function TicketListComponent_Template_app_enhanced_table_refresh_21_listener() {
        return ctx.onRefresh();
      })("addClick", function TicketListComponent_Template_app_enhanced_table_addClick_21_listener() {
        return ctx.onAdd();
      })("editClick", function TicketListComponent_Template_app_enhanced_table_editClick_21_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function TicketListComponent_Template_app_enhanced_table_exportClick_21_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function TicketListComponent_Template_app_enhanced_table_filterToggle_21_listener($event) {
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
      \u0275\u0275property("data", ctx.tickets)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("addRoute", "/app/support-feedback/create")("addLabel", "Submit Ticket")("searchPlaceholder", "Search...");
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: 6px;\n  min-width: 150px;\n}\n/*# sourceMappingURL=ticket-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketListComponent, { className: "TicketListComponent", filePath: "src\\app\\modules\\support-feedback\\ticket-list\\ticket-list.component.ts", lineNumber: 16 });
})();
export {
  TicketListComponent
};
//# sourceMappingURL=chunk-XWZGBVGI.js.map
