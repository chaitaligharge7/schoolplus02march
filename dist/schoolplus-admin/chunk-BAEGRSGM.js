import {
  CommitteeService
} from "./chunk-CDZZMPSH.js";
import {
  EnhancedTableComponent,
  ExportService
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
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/committees/committee-list/committee-list.component.ts
var _c0 = (a0, a1) => ({ "badge-success": a0, "badge-secondary": a1 });
function CommitteeListComponent_div_35_div_1_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const committee_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", committee_r2.committee_description, " ");
  }
}
function CommitteeListComponent_div_35_div_1_div_14_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", member_r4.role, ")");
  }
}
function CommitteeListComponent_div_35_div_1_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275template(3, CommitteeListComponent_div_35_div_1_div_14_div_1_span_3_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", member_r4.first_name, " ", member_r4.last_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r4.role);
  }
}
function CommitteeListComponent_div_35_div_1_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " No members in this committee ");
    \u0275\u0275elementEnd();
  }
}
function CommitteeListComponent_div_35_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, CommitteeListComponent_div_35_div_1_div_14_div_1_Template, 4, 3, "div", 30)(2, CommitteeListComponent_div_35_div_1_div_14_div_2_Template, 2, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const committee_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.committeeMembers[committee_r2.committee_id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.committeeMembers[committee_r2.committee_id] == null ? null : ctx_r2.committeeMembers[committee_r2.committee_id].length) === 0);
  }
}
function CommitteeListComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275listener("click", function CommitteeListComponent_div_35_div_1_Template_div_click_1_listener() {
      const committee_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleMembers(committee_r2.committee_id));
    });
    \u0275\u0275elementStart(2, "div")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21)(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CommitteeListComponent_div_35_div_1_p_12_Template, 2, 1, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CommitteeListComponent_div_35_div_1_div_14_Template, 3, 2, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const committee_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(committee_r2.committee_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(committee_r2.committee_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", committee_r2.member_count || 0, " members");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c0, committee_r2.status === "active", committee_r2.status === "inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", committee_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", committee_r2.committee_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.expandedCommitteeId === committee_r2.committee_id ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandedCommitteeId === committee_r2.committee_id && ctx_r2.committeeMembers[committee_r2.committee_id]);
  }
}
function CommitteeListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, CommitteeListComponent_div_35_div_1_Template, 15, 11, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.committees);
  }
}
var CommitteeListComponent = class _CommitteeListComponent {
  committeeService;
  toastService;
  exportService;
  router;
  committees = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  expandedCommitteeId = null;
  committeeMembers = {};
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "committee_name",
      label: "Committee Name",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "committee_type",
      label: "Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "member_count",
      label: "Members",
      sortable: true,
      type: "number",
      format: (value) => {
        return `<span class="badge badge-success">${value || 0}</span>`;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "active" ? "badge-success" : "badge-secondary";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "committee_name";
  sortDirection = "asc";
  startDate;
  endDate;
  committeeType;
  status;
  constructor(committeeService, toastService, exportService, router) {
    this.committeeService = committeeService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCommittees();
  }
  loadCommittees() {
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
    if (this.committeeType) {
      params.committee_type = this.committeeType;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.committeeService.getCommittees(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.committees = response.data.committees || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading committees", "error");
        console.error("Error loading committees:", error);
      }
    });
  }
  toggleMembers(committeeId) {
    if (this.expandedCommitteeId === committeeId) {
      this.expandedCommitteeId = null;
    } else {
      this.expandedCommitteeId = committeeId;
      if (!this.committeeMembers[committeeId]) {
        this.loadMembers(committeeId);
      }
    }
  }
  onEdit(row) {
    this.router.navigate(["/app/committees/edit", row.committee_id]);
  }
  loadMembers(committeeId) {
    this.committeeService.getMembers(committeeId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.committeeMembers[committeeId] = response.data.members || [];
        }
      },
      error: () => {
        this.toastService.show("Error loading committee members", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCommittees();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCommittees();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCommittees();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCommittees();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCommittees();
  }
  onRowSelect(row) {
    this.selectedRowId = row.committee_id;
  }
  onRefresh() {
    this.loadCommittees();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.committees.map((committee) => ({
      "Committee Name": committee.committee_name || "-",
      "Type": committee.committee_type || "-",
      "Members": committee.member_count || 0,
      "Status": committee.status || "-",
      "Description": committee.committee_description || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `committees-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `committees-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onCommitteeTypeChange(type) {
    this.committeeType = type || void 0;
    this.pagination.page = 1;
    this.loadCommittees();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadCommittees();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function CommitteeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommitteeListComponent)(\u0275\u0275directiveInject(CommitteeService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommitteeListComponent, selectors: [["app-committee-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 18, consts: [[1, "committee-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "academic"], ["value", "sports"], ["value", "cultural"], ["value", "discipline"], ["value", "other"], ["value", "active"], ["value", "inactive"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "committee-details", 4, "ngIf"], [1, "committee-details"], ["class", "committee-item", 4, "ngFor", "ngForOf"], [1, "committee-item"], [1, "committee-header", 3, "click"], [1, "committee-info"], [1, "badge", "badge-info"], [1, "badge", "badge-success"], [1, "badge", 3, "ngClass"], ["class", "committee-description", 4, "ngIf"], [1, "bi", 3, "ngClass"], ["class", "members-list", 4, "ngIf"], [1, "committee-description"], [1, "members-list"], ["class", "member-item", 4, "ngFor", "ngForOf"], ["class", "no-members", 4, "ngIf"], [1, "member-item"], [4, "ngIf"], [1, "no-members"]], template: function CommitteeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Committees Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage school committees and members");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Committee Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CommitteeListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.committeeType, $event) || (ctx.committeeType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CommitteeListComponent_Template_select_change_11_listener() {
        return ctx.onCommitteeTypeChange(ctx.committeeType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Academic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Sports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Cultural");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Discipline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 5)(25, "label");
      \u0275\u0275text(26, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CommitteeListComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function CommitteeListComponent_Template_select_change_27_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(28, "option", 7);
      \u0275\u0275text(29, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 13);
      \u0275\u0275text(31, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 14);
      \u0275\u0275text(33, "Inactive");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "app-enhanced-table", 15);
      \u0275\u0275listener("pageChange", function CommitteeListComponent_Template_app_enhanced_table_pageChange_34_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function CommitteeListComponent_Template_app_enhanced_table_pageSizeChange_34_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function CommitteeListComponent_Template_app_enhanced_table_searchChange_34_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function CommitteeListComponent_Template_app_enhanced_table_sortChange_34_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function CommitteeListComponent_Template_app_enhanced_table_dateFilterChange_34_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function CommitteeListComponent_Template_app_enhanced_table_rowSelect_34_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function CommitteeListComponent_Template_app_enhanced_table_refresh_34_listener() {
        return ctx.onRefresh();
      })("addClick", function CommitteeListComponent_Template_app_enhanced_table_addClick_34_listener() {
        return ctx.onAdd();
      })("editClick", function CommitteeListComponent_Template_app_enhanced_table_editClick_34_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function CommitteeListComponent_Template_app_enhanced_table_exportClick_34_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function CommitteeListComponent_Template_app_enhanced_table_filterToggle_34_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, CommitteeListComponent_div_35_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.committeeType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.committees)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "committee_id")("addRoute", "/app/committees/create")("addLabel", "Create Committee")("searchPlaceholder", "Search by committee name...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.committees.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.committee-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .committee-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .committee-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.committee-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.committee-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.committee-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.committee-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.committee-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.committee-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.committee-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-md);\n  overflow: hidden;\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .committee-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color var(--transition-base);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .committee-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .committee-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-xs) 0;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .committee-header[_ngcontent-%COMP%]   .committee-info[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  display: flex;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .committee-header[_ngcontent-%COMP%]   .committee-description[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0 0 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  background: var(--bg-primary);\n  border-top: 1px solid var(--border-color);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.committee-list-container[_ngcontent-%COMP%]   .committee-details[_ngcontent-%COMP%]   .committee-item[_ngcontent-%COMP%]   .members-list[_ngcontent-%COMP%]   .no-members[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n/*# sourceMappingURL=committee-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommitteeListComponent, { className: "CommitteeListComponent", filePath: "src\\app\\modules\\committees\\committee-list\\committee-list.component.ts", lineNumber: 17 });
})();
export {
  CommitteeListComponent
};
//# sourceMappingURL=chunk-BAEGRSGM.js.map
