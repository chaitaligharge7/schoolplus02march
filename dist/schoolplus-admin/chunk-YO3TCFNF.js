import {
  BookDistributionService
} from "./chunk-EMLEAQUW.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
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
  ɵɵpureFunction0,
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

// src/app/modules/book-distribution/book-distribution-list/book-distribution-list.component.ts
var _c0 = () => ["issued", "overdue"];
function BookDistributionListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r1 = ctx.$implicit;
    \u0275\u0275property("value", year_r1.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r1.academic_year_name, " ");
  }
}
function BookDistributionListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275listener("click", function BookDistributionListComponent_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.returnBook(ctx_r2.selectedRowId));
    });
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3, " Return Book ");
    \u0275\u0275elementEnd()();
  }
}
var BookDistributionListComponent = class _BookDistributionListComponent {
  bookService;
  academicYearService;
  toastService;
  dialogService;
  exportService;
  router;
  distributions = [];
  academicYears = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "student_name",
      label: "Student",
      sortable: true,
      format: (value, row) => {
        return `${row?.first_name || ""} ${row?.last_name || ""}`.trim() || "-";
      }
    },
    {
      key: "admission_number",
      label: "Admission No.",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "book_title",
      label: "Book Title",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "book_code",
      label: "ISBN",
      sortable: true,
      format: (v) => v || "-"
    },
    {
      key: "distribution_date",
      label: "Distribution Date",
      sortable: true,
      type: "date"
    },
    {
      key: "return_date",
      label: "Return Date",
      sortable: true,
      type: "date",
      format: (value, row) => {
        if (row?.return_status === "returned" && value) {
          return this.formatDate(value);
        }
        return row?.return_date ? this.formatDate(row.return_date) : "-";
      }
    },
    {
      key: "return_status",
      label: "return_Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "returned" ? "badge-success" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "distribution_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  returnStatus;
  constructor(bookService, academicYearService, toastService, dialogService, exportService, router) {
    this.bookService = bookService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadDistributions();
  }
  loadAcademicYears() {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
  }
  loadDistributions() {
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
    if (this.academicYearId) {
      params.academic_year_id = this.academicYearId;
    }
    if (this.returnStatus) {
      params.return_status = this.returnStatus;
    }
    this.bookService.getDistributions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.distributions = response.data.distributions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading book distributions", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadDistributions();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadDistributions();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  onRowSelect(row) {
    this.selectedRowId = row.distribution_id;
  }
  onRefresh() {
    this.loadDistributions();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.distributions.map((dist) => ({
      "Student Name": `${dist.first_name || ""} ${dist.last_name || ""}`.trim(),
      "Admission Number": dist.admission_number || "-",
      "Book Title": dist.book_title || "-",
      "ISBN": dist.book_isbn || "-",
      "Distribution Date": this.formatDate(dist.distribution_date),
      "Return Date": dist.return_date ? this.formatDate(dist.return_date) : "-",
      "Return Status": dist.return_status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `book-distributions-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `book-distributions-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  onReturnStatusChange(status) {
    if (status === "pending")
      this.returnStatus = "not_returned";
    else if (status === "returned")
      this.returnStatus = "returned";
    else
      this.returnStatus = void 0;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  onEdit(row) {
    this.router.navigate(["/app/book-distribution/edit", row.distribution_id]);
  }
  onView(row) {
    this.router.navigate(["/app/book-distribution/view", row.distribution_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Book Distribution",
      message: "Are you sure you want to delete this record?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.bookService.deleteDistribution(row.distribution_id).subscribe({
        next: () => {
          this.toastService.show("Record deleted successfully", "success");
          this.distributions = this.distributions.filter((d) => d.distribution_id !== row.distribution_id);
          if (this.selectedRowId === row.distribution_id) {
            this.selectedRowId = void 0;
          }
          if (this.distributions.length === 0 && this.pagination.page > 1) {
            this.pagination.page--;
            this.loadDistributions();
          }
        },
        error: (err) => {
          this.toastService.show("Error deleting record", "error");
        }
      });
    });
  }
  returnBook(distributionId) {
    const dist = this.distributions.find((d) => d.distribution_id === distributionId);
    if (!dist || dist.return_status === "returned")
      return;
    this.dialogService.confirm({
      title: "Return Book",
      message: "Mark this book as returned?",
      confirmText: "Return",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.bookService.returnBook({ distribution_id: distributionId }).subscribe({
        next: (res) => {
          if (res.status === "success") {
            this.toastService.show("Book returned successfully", "success");
            dist.return_status = "returned";
            dist.return_date = (/* @__PURE__ */ new Date()).toISOString();
            this.distributions = [...this.distributions];
          }
        },
        error: (err) => {
          this.toastService.show("Error returning book", "error");
        }
      });
    });
  }
  getSelectedDistribution() {
    return this.distributions.find((d) => d.distribution_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function BookDistributionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDistributionListComponent)(\u0275\u0275directiveInject(BookDistributionService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDistributionListComponent, selectors: [["app-book-distribution-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 20, consts: [[1, "book-distribution-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "pending"], ["value", "returned"], [3, "editClick", "deleteClick", "viewClick", "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "return-action", 4, "ngIf"], [1, "return-action"], ["title", "Return Book", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-arrow-return-left"]], template: function BookDistributionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Book Distribution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage book distribution and returns");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function BookDistributionListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BookDistributionListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, BookDistributionListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Return Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function BookDistributionListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.returnStatus, $event) || (ctx.returnStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BookDistributionListComponent_Template_select_change_18_listener() {
        return ctx.onReturnStatusChange(ctx.returnStatus);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 9);
      \u0275\u0275text(22, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 10);
      \u0275\u0275text(24, "Returned");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "app-enhanced-table", 11);
      \u0275\u0275listener("editClick", function BookDistributionListComponent_Template_app_enhanced_table_editClick_25_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function BookDistributionListComponent_Template_app_enhanced_table_deleteClick_25_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function BookDistributionListComponent_Template_app_enhanced_table_viewClick_25_listener($event) {
        return ctx.onView($event);
      })("pageChange", function BookDistributionListComponent_Template_app_enhanced_table_pageChange_25_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function BookDistributionListComponent_Template_app_enhanced_table_pageSizeChange_25_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function BookDistributionListComponent_Template_app_enhanced_table_searchChange_25_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function BookDistributionListComponent_Template_app_enhanced_table_sortChange_25_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function BookDistributionListComponent_Template_app_enhanced_table_dateFilterChange_25_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function BookDistributionListComponent_Template_app_enhanced_table_rowSelect_25_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function BookDistributionListComponent_Template_app_enhanced_table_refresh_25_listener() {
        return ctx.onRefresh();
      })("addClick", function BookDistributionListComponent_Template_app_enhanced_table_addClick_25_listener() {
        return ctx.onAdd();
      })("exportClick", function BookDistributionListComponent_Template_app_enhanced_table_exportClick_25_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function BookDistributionListComponent_Template_app_enhanced_table_filterToggle_25_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, BookDistributionListComponent_div_26_Template, 4, 0, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_17_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.returnStatus);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.distributions)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "distribution_id")("addRoute", "/app/book-distribution/create")("addLabel", "Distribute Book")("searchPlaceholder", "Search book distributions...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedDistribution() && \u0275\u0275pureFunction0(19, _c0).includes((tmp_17_0 = ctx.getSelectedDistribution()) == null ? null : tmp_17_0.return_status));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.book-distribution-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .book-distribution-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .book-distribution-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.book-distribution-list-container[_ngcontent-%COMP%]   .return-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n/*# sourceMappingURL=book-distribution-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDistributionListComponent, { className: "BookDistributionListComponent", filePath: "src\\app\\modules\\book-distribution\\book-distribution-list\\book-distribution-list.component.ts", lineNumber: 19 });
})();
export {
  BookDistributionListComponent
};
//# sourceMappingURL=chunk-YO3TCFNF.js.map
