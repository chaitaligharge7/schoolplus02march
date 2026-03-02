import {
  MessComplaintService
} from "./chunk-SDFRYBU3.js";
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

// src/app/modules/mess-complaints/mess-complaint-list/mess-complaint-list.component.ts
function MessComplaintListComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275listener("click", function MessComplaintListComponent_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resolveComplaint(ctx_r1.selectedRowId));
    });
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275text(3, " Resolve Complaint ");
    \u0275\u0275elementEnd()();
  }
}
var MessComplaintListComponent = class _MessComplaintListComponent {
  messComplaintService;
  toastService;
  dialogService;
  exportService;
  router;
  complaints = [];
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
      key: "complaint_id",
      label: "Complaint ID",
      sortable: true,
      format: (value) => `#${value}`
    },
    {
      key: "first_name",
      label: "Complainant",
      sortable: true,
      format: (_, row) => `${row.first_name || ""} ${row.last_name || ""}`.trim() || "-"
    },
    {
      key: "complaint_description",
      label: "Complaint",
      sortable: true,
      format: (value) => value?.length > 100 ? value.substring(0, 100) + "..." : value || "-"
    },
    {
      key: "complaint_date",
      label: "Date",
      sortable: true,
      type: "date"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "resolved" ? "badge-success" : value === "in_progress" ? "badge-warning" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "complaint_date";
  sortDirection = "desc";
  startDate;
  endDate;
  status;
  constructor(messComplaintService, toastService, dialogService, exportService, router) {
    this.messComplaintService = messComplaintService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadComplaints();
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
    if (this.status) {
      params.status = this.status;
    }
    this.messComplaintService.getMessComplaints(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.complaints = response.data.complaints || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading mess complaints", "error");
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
  onEditComplaint(complaint) {
    if (!complaint?.complaint_id) {
      this.toastService.show("Invalid complaint selected", "error");
      return;
    }
    this.router.navigate(["/app/mess-complaints/edit", complaint.complaint_id]);
  }
  onDeleteComplaint(complaint) {
    const complaintId = complaint?.complaint_id;
    if (!complaintId) {
      this.toastService.show("Invalid complaint selected", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Delete Complaint",
      message: "Are you sure you want to delete this complaint?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.messComplaintService.deleteMessComplaint(complaintId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Complaint deleted successfully", "success");
              this.loadComplaints();
            } else {
              this.toastService.show(response.message || "Failed to delete complaint", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting complaint", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.complaints.map((c) => ({
      "Complaint ID": `#${c.complaint_id}`,
      "Complainant": `${c.first_name} ${c.last_name}`,
      "Complaint": c.complaint_description,
      "Date": this.formatDate(c.complaint_date),
      "Status": c.status
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `mess-complaints-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `mess-complaints-${Date.now()}.pdf`, headers);
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
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadComplaints();
  }
  resolveComplaint(complaintId) {
    this.dialogService.confirm({
      title: "Resolve Complaint",
      message: "Are you sure you want to resolve this mess complaint?",
      confirmText: "Resolve",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.messComplaintService.resolveComplaint(complaintId, {}).subscribe({
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
  static \u0275fac = function MessComplaintListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessComplaintListComponent)(\u0275\u0275directiveInject(MessComplaintService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessComplaintListComponent, selectors: [["app-mess-complaint-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 16, consts: [[1, "mess-complaint-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "open"], ["value", "in_progress"], ["value", "resolved"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "deleteClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "resolve-action", 4, "ngIf"], [1, "resolve-action"], ["title", "Resolve Complaint", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"]], template: function MessComplaintListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Mess Complaints");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage mess-related complaints");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function MessComplaintListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function MessComplaintListComponent_Template_select_change_11_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Open");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "In Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Resolved");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "app-enhanced-table", 11);
      \u0275\u0275listener("pageChange", function MessComplaintListComponent_Template_app_enhanced_table_pageChange_20_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function MessComplaintListComponent_Template_app_enhanced_table_pageSizeChange_20_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function MessComplaintListComponent_Template_app_enhanced_table_searchChange_20_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function MessComplaintListComponent_Template_app_enhanced_table_sortChange_20_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function MessComplaintListComponent_Template_app_enhanced_table_dateFilterChange_20_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function MessComplaintListComponent_Template_app_enhanced_table_rowSelect_20_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function MessComplaintListComponent_Template_app_enhanced_table_refresh_20_listener() {
        return ctx.onRefresh();
      })("addClick", function MessComplaintListComponent_Template_app_enhanced_table_addClick_20_listener() {
        return ctx.onAdd();
      })("deleteClick", function MessComplaintListComponent_Template_app_enhanced_table_deleteClick_20_listener($event) {
        return ctx.onDeleteComplaint($event);
      })("editClick", function MessComplaintListComponent_Template_app_enhanced_table_editClick_20_listener($event) {
        return ctx.onEditComplaint($event);
      })("exportClick", function MessComplaintListComponent_Template_app_enhanced_table_exportClick_20_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function MessComplaintListComponent_Template_app_enhanced_table_filterToggle_20_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, MessComplaintListComponent_div_21_Template, 4, 0, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_14_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("data", ctx.complaints)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "complaint_id")("addRoute", "/app/mess-complaints/create")("addLabel", "New Complaint")("searchPlaceholder", "Search complaints...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedComplaint() && ((tmp_14_0 = ctx.getSelectedComplaint()) == null ? null : tmp_14_0.status) !== "resolved");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.mess-complaint-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .mess-complaint-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .mess-complaint-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.mess-complaint-list-container[_ngcontent-%COMP%]   .resolve-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=mess-complaint-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessComplaintListComponent, { className: "MessComplaintListComponent", filePath: "src\\app\\modules\\mess-complaints\\mess-complaint-list\\mess-complaint-list.component.ts", lineNumber: 18 });
})();
export {
  MessComplaintListComponent
};
//# sourceMappingURL=chunk-7D6ZQSFO.js.map
