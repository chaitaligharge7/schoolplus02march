import {
  ComplaintService
} from "./chunk-JALG77HQ.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import "./chunk-6W4TS6AE.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/complaints/complaint-list/complaint-list.component.ts
function ComplaintListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function ComplaintListComponent_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resolveComplaint(ctx_r1.selectedRowId));
    });
    \u0275\u0275element(2, "i", 13);
    \u0275\u0275text(3, " Resolve Complaint ");
    \u0275\u0275elementEnd()();
  }
}
var ComplaintListComponent = class _ComplaintListComponent {
  complaintService;
  toastService;
  dialogService;
  exportService;
  router;
  complaints = [];
  categories = [];
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
      key: "complaint_number",
      label: "Complaint ID",
      sortable: true,
      format: (value) => `#${value || "-"}`
    },
    {
      key: "complainant_name",
      label: "Complainant",
      sortable: true,
      format: (value, row) => {
        return `${value || "-"}<br><small>${row?.complainant_type || "-"}</small>`;
      }
    },
    {
      key: "complaint_category",
      label: "Category",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "complaint_subject",
      label: "Subject",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "priority",
      label: "Priority",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "low" ? "badge-info" : value === "medium" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "resolved" || value === "closed" ? "badge-success" : value === "in_progress" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "complaint_date",
      label: "Date",
      sortable: true,
      type: "date"
    }
  ];
  searchTerm = "";
  sortColumn = "complaint_date";
  sortDirection = "desc";
  startDate;
  endDate;
  complaintCategory;
  status;
  priority;
  get complaintCategoryOptions() {
    const all = [{ value: void 0, label: "All Categories" }];
    const list = (this.categories || []).map((c) => ({ value: c.category_name, label: c.category_name || "" }));
    return [...all, ...list];
  }
  complaintStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "open", label: "Open" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: "Resolved" },
    { value: "closed", label: "Closed" }
  ];
  complaintPriorityOptions = [
    { value: void 0, label: "All Priorities" },
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
    { value: "urgent", label: "Urgent" }
  ];
  constructor(complaintService, toastService, dialogService, exportService, router) {
    this.complaintService = complaintService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadComplaints();
  }
  loadCategories() {
    this.complaintService.getComplaintCategories().subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.categories = response.data?.categories || [];
        }
      }
    });
  }
  loadComplaints() {
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
    if (this.complaintCategory) {
      params.complaint_category = this.complaintCategory;
    }
    if (this.status) {
      params.status = this.status;
    }
    if (this.priority) {
      params.priority = this.priority;
    }
    this.complaintService.getComplaints(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.complaints = response.data.complaints || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading complaints", "error");
        console.error("Error loading complaints:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadComplaints();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadComplaints();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  onRowSelect(row) {
    this.selectedRowId = row.complaint_id;
  }
  onRefresh() {
    this.loadComplaints();
  }
  onAdd() {
  }
  onView(row) {
    this.router.navigate(["/app/complaints/view", row.complaint_id]);
  }
  onExportClick(event) {
    const exportData = this.complaints.map((complaint) => ({
      "Complaint ID": `#${complaint.complaint_number || "-"}`,
      "Complainant": complaint.complainant_name || "-",
      "Type": complaint.complainant_type || "-",
      "Category": complaint.complaint_category || "-",
      "Subject": complaint.complaint_subject || "-",
      "Priority": complaint.priority || "-",
      "Status": complaint.status || "-",
      "Date": this.formatDate(complaint.complaint_date)
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `complaints-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `complaints-${Date.now()}.pdf`, headers);
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
  onComplaintCategoryChange(category) {
    this.complaintCategory = category || void 0;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  onPriorityChange(priority) {
    this.priority = priority || void 0;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  resolveComplaint(complaintId) {
    this.dialogService.confirm({
      title: "Resolve Complaint",
      message: "Are you sure you want to resolve this complaint?",
      confirmText: "Resolve",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.complaintService.resolveComplaint(complaintId, {}).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Complaint resolved successfully", "success");
              this.loadComplaints();
            }
          },
          error: () => {
            this.toastService.show("Failed to resolve complaint", "error");
          }
        });
      }
    });
  }
  getSelectedComplaint() {
    return this.complaints.find((c) => c.complaint_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function ComplaintListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComplaintListComponent)(\u0275\u0275directiveInject(ComplaintService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintListComponent, selectors: [["app-complaint-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 21, consts: [[1, "complaint-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["placeholder", "Search or select category", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "Search or select priority", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton"], ["class", "resolve-action", 4, "ngIf"], [1, "resolve-action"], ["title", "Resolve Complaint", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"]], template: function ComplaintListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Complaint Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage and resolve complaints");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Category:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-search-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ComplaintListComponent_Template_app_search_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.complaintCategory, $event) || (ctx.complaintCategory = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function ComplaintListComponent_Template_app_search_select_valueChange_11_listener($event) {
        return ctx.onComplaintCategoryChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-search-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ComplaintListComponent_Template_app_search_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function ComplaintListComponent_Template_app_search_select_valueChange_15_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Priority:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "app-search-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ComplaintListComponent_Template_app_search_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priority, $event) || (ctx.priority = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function ComplaintListComponent_Template_app_search_select_valueChange_19_listener($event) {
        return ctx.onPriorityChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function ComplaintListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function ComplaintListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function ComplaintListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function ComplaintListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function ComplaintListComponent_Template_app_enhanced_table_dateFilterChange_20_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function ComplaintListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function ComplaintListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("addClick", function ComplaintListComponent_Template_app_enhanced_table_addClick_20_listener() {
        return ctx.onAdd();
      })("viewClick", function ComplaintListComponent_Template_app_enhanced_table_viewClick_20_listener($event) {
        return ctx.onView($event);
      })("exportClick", function ComplaintListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function ComplaintListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ComplaintListComponent_div_21_Template, 4, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_19_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.complaintCategoryOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.complaintCategory);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.complaintStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.complaintPriorityOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.priority);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.complaints)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "complaint_id")("addRoute", "/app/complaints/create")("addLabel", "New Complaint")("searchPlaceholder", "Search complaints...")("enableExport", true)("enableDateFilter", true)("showViewButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedComplaint() && ((tmp_19_0 = ctx.getSelectedComplaint()) == null ? null : tmp_19_0.status) !== "resolved" && ((tmp_19_0 = ctx.getSelectedComplaint()) == null ? null : tmp_19_0.status) !== "closed");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.complaint-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .complaint-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .complaint-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.complaint-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.complaint-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.complaint-list-container[_ngcontent-%COMP%]   .resolve-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=complaint-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintListComponent, { className: "ComplaintListComponent", filePath: "src\\app\\modules\\complaints\\complaint-list\\complaint-list.component.ts", lineNumber: 19 });
})();
export {
  ComplaintListComponent
};
//# sourceMappingURL=chunk-EDCNRUSN.js.map
