import {
  UniformFineService
} from "./chunk-DJD7FSNA.js";
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

// src/app/modules/uniform-fines/uniform-fine-list/uniform-fine-list.component.ts
var UniformFineListComponent = class _UniformFineListComponent {
  uniformFineService;
  toastService;
  exportService;
  router;
  dialogService;
  fines = [];
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
        return `${value} (${row?.admission_number || "-"})`;
      }
    },
    {
      key: "uniform_type",
      label: "Uniform Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "violation_description",
      label: "Violation",
      sortable: false,
      format: (value) => value || "-"
    },
    {
      key: "fine_amount",
      label: "Fine Amount",
      sortable: true,
      type: "number",
      format: (value) => {
        return value ? `\u20B9${Number(value).toLocaleString("en-IN")}` : "\u20B90";
      }
    },
    {
      key: "fine_date",
      label: "Fine Date",
      sortable: true,
      type: "date"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "paid" ? "badge-success" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "fine_date";
  sortDirection = "desc";
  startDate;
  endDate;
  uniformType;
  status;
  constructor(uniformFineService, toastService, exportService, router, dialogService) {
    this.uniformFineService = uniformFineService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    this.loadFines();
  }
  loadFines() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
    };
    if (this.searchTerm)
      params.search = this.searchTerm;
    if (this.startDate)
      params.start_date = this.startDate;
    if (this.endDate)
      params.end_date = this.endDate;
    if (this.uniformType)
      params.uniform_type = this.uniformType;
    if (this.status)
      params.status = this.status;
    this.uniformFineService.getUniformFines(params).subscribe({
      next: (response) => {
        this.loading = false;
        console.log("API response fines:", response.data?.fines);
        if (response.status === "success" && response.data?.fines?.length) {
          this.fines = response.data.fines.map((fine) => ({
            fine_id: fine.fine_id,
            student_name: fine.student_first_name || fine.student_last_name ? `${fine.student_first_name || ""} ${fine.student_last_name || ""}`.trim() : `ID: ${fine.person_id}`,
            admission_number: fine.admission_number || "-",
            uniform_type: fine.fine_type || fine.violation_type || "-",
            violation_description: fine.remarks || fine.violation_type || "-",
            fine_amount: fine.fine_amount || fine.amount || 0,
            fine_date: fine.fine_date,
            status: fine.status || "pending"
          }));
          this.pagination = response.data.pagination || this.pagination;
        } else {
          this.fines = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading uniform fines", "error");
        console.error("Error loading uniform fines:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadFines();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadFines();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadFines();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadFines();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadFines();
  }
  onRowSelect(row) {
    this.selectedRowId = row.fine_id;
  }
  onRefresh() {
    this.loadFines();
  }
  onAdd() {
  }
  onEditFine(fine) {
    this.router.navigate(["/app/uniform-fines/edit", fine.fine_id]);
  }
  onDeleteFine(fine) {
    const fineId = fine?.fine_id;
    if (!fineId) {
      this.toastService.show("Invalid fine selected", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Delete Uniform Fine",
      message: "Are you sure you want to delete this fine?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.uniformFineService.deleteUniformFine(fineId).subscribe({
          next: (res) => {
            if (res.status === "success") {
              this.toastService.show("Fine deleted successfully", "success");
              this.loadFines();
            } else {
              this.toastService.show(res.message || "Failed to delete fine", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting fine", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.fines.map((fine) => ({
      "Student Name": fine.student_name || "-",
      "Admission Number": fine.admission_number || "-",
      "Uniform Type": fine.uniform_type || "-",
      "Violation": fine.violation_description || "-",
      "Fine Amount": `\u20B9${Number(fine.fine_amount || 0).toLocaleString("en-IN")}`,
      "Fine Date": this.formatDate(fine.fine_date),
      "Status": fine.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `uniform-fines-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `uniform-fines-${Date.now()}.pdf`, headers);
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
  onUniformTypeChange(type) {
    this.uniformType = type || void 0;
    this.pagination.page = 1;
    this.loadFines();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadFines();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function UniformFineListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformFineListComponent)(\u0275\u0275directiveInject(UniformFineService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UniformFineListComponent, selectors: [["app-uniform-fine-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 17, consts: [[1, "uniform-fine-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "shirt"], ["value", "pant"], ["value", "skirt"], ["value", "tie"], ["value", "blazer"], ["value", "pending"], ["value", "paid"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function UniformFineListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Uniform Fines");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage uniform fines and violations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Uniform Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UniformFineListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.uniformType, $event) || (ctx.uniformType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UniformFineListComponent_Template_select_change_11_listener() {
        return ctx.onUniformTypeChange(ctx.uniformType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Pant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Skirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Tie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 12);
      \u0275\u0275text(23, "Blazer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 5)(25, "label");
      \u0275\u0275text(26, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UniformFineListComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UniformFineListComponent_Template_select_change_27_listener() {
        return ctx.onStatusChange(ctx.status);
      });
      \u0275\u0275elementStart(28, "option", 7);
      \u0275\u0275text(29, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 13);
      \u0275\u0275text(31, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 14);
      \u0275\u0275text(33, "Paid");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "app-enhanced-table", 15);
      \u0275\u0275listener("pageChange", function UniformFineListComponent_Template_app_enhanced_table_pageChange_34_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function UniformFineListComponent_Template_app_enhanced_table_pageSizeChange_34_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function UniformFineListComponent_Template_app_enhanced_table_searchChange_34_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function UniformFineListComponent_Template_app_enhanced_table_sortChange_34_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function UniformFineListComponent_Template_app_enhanced_table_dateFilterChange_34_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function UniformFineListComponent_Template_app_enhanced_table_rowSelect_34_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function UniformFineListComponent_Template_app_enhanced_table_refresh_34_listener() {
        return ctx.onRefresh();
      })("addClick", function UniformFineListComponent_Template_app_enhanced_table_addClick_34_listener() {
        return ctx.onAdd();
      })("editClick", function UniformFineListComponent_Template_app_enhanced_table_editClick_34_listener($event) {
        return ctx.onEditFine($event);
      })("deleteClick", function UniformFineListComponent_Template_app_enhanced_table_deleteClick_34_listener($event) {
        return ctx.onDeleteFine($event);
      })("exportClick", function UniformFineListComponent_Template_app_enhanced_table_exportClick_34_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function UniformFineListComponent_Template_app_enhanced_table_filterToggle_34_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.uniformType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.fines)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "fine_id")("addRoute", "/app/uniform-fines/create")("addLabel", "Add Fine")("searchPlaceholder", "Search by student name...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.uniform-fine-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .uniform-fine-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .uniform-fine-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.uniform-fine-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=uniform-fine-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UniformFineListComponent, { className: "UniformFineListComponent", filePath: "src\\app\\modules\\uniform-fines\\uniform-fine-list\\uniform-fine-list.component.ts", lineNumber: 18 });
})();
export {
  UniformFineListComponent
};
//# sourceMappingURL=chunk-WGSAES6N.js.map
