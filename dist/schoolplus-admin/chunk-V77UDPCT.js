import {
  UniformDistributionService
} from "./chunk-KEVWHRDG.js";
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

// src/app/modules/uniform-distribution/uniform-distribution-list/uniform-distribution-list.component.ts
function UniformDistributionListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "button", 18);
    \u0275\u0275listener("click", function UniformDistributionListComponent_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.returnUniform(ctx_r1.selectedRowId));
    });
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275text(3, " Return Uniform ");
    \u0275\u0275elementEnd()();
  }
}
var UniformDistributionListComponent = class _UniformDistributionListComponent {
  uniformService;
  toastService;
  dialogService;
  exportService;
  router;
  distributions = [];
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
        return `${row?.student_first_name || ""} ${row?.student_last_name || ""}`.trim() || "-";
      }
    },
    {
      key: "admission_number",
      label: "Admission No.",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "uniform_type",
      label: "Uniform Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "uniform_size",
      label: "uniform_Size",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "quantity",
      label: "Quantity",
      sortable: true,
      type: "number",
      format: (value) => value || "0"
    },
    {
      key: "distribution_date",
      label: "Distribution Date",
      sortable: true,
      type: "date"
    },
    {
      key: "return_status",
      label: "Return Status",
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
  uniformType;
  returnStatus;
  constructor(uniformService, toastService, dialogService, exportService, router) {
    this.uniformService = uniformService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadDistributions();
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
    if (this.uniformType) {
      params.uniform_type = this.uniformType;
    }
    if (this.returnStatus) {
      params.return_status = this.returnStatus;
    }
    this.uniformService.getDistributions(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.distributions = response.data.distributions || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading uniform distributions", "error");
        console.error("Error loading uniform distributions:", error);
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
  onEditDistribution(distribution) {
    const distributionId = distribution.distribution_id;
    if (!distributionId)
      return;
    this.router.navigate(["/app/uniform-distribution/edit", distributionId]);
  }
  onDeleteDistribution(distribution) {
    const distributionId = distribution?.distribution_id;
    if (!distributionId) {
      this.toastService.show("Invalid distribution selected", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Delete Uniform Distribution",
      message: "Are you sure you want to delete this uniform distribution?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.uniformService.deleteDistribution(distributionId).subscribe({
          next: (res) => {
            if (res.status === "success") {
              this.toastService.show("Uniform distribution deleted successfully", "success");
              this.loadDistributions();
            } else {
              this.toastService.show(res.message || "Failed to delete", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting uniform distribution", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.distributions.map((dist) => ({
      "Student Name": `${dist.student_first_name || ""} ${dist.student_last_name || ""}`.trim(),
      "Admission Number": dist.admission_number || "-",
      "Uniform Type": dist.uniform_type || "-",
      "Size": dist.size || "-",
      "Quantity": dist.quantity || "0",
      "Distribution Date": this.formatDate(dist.distribution_date),
      "Return Status": dist.return_status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `uniform-distributions-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `uniform-distributions-${Date.now()}.pdf`, headers);
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
    this.loadDistributions();
  }
  onReturnStatusChange(status) {
    this.returnStatus = status || void 0;
    this.pagination.page = 1;
    this.loadDistributions();
  }
  returnUniform(distributionId) {
    const distribution = this.distributions.find((d) => d.distribution_id === distributionId);
    if (!distribution || distribution.return_status !== "distributed") {
      this.toastService.show("This uniform cannot be returned", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Return Uniform",
      message: "Mark this uniform as returned?",
      confirmText: "Return",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.uniformService.returnUniform({ distribution_id: distributionId }).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Uniform returned successfully", "success");
              distribution.return_status = "returned";
              this.selectedRowId = void 0;
            } else {
              this.toastService.show(response.message || "Failed to return uniform", "error");
            }
          },
          error: () => {
            this.toastService.show("Error returning uniform", "error");
          }
        });
      }
    });
  }
  getSelectedDistribution() {
    return this.distributions.find((d) => d.distribution_id === this.selectedRowId);
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function UniformDistributionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformDistributionListComponent)(\u0275\u0275directiveInject(UniformDistributionService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UniformDistributionListComponent, selectors: [["app-uniform-distribution-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 18, consts: [[1, "uniform-distribution-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "shirt"], ["value", "pant"], ["value", "skirt"], ["value", "tie"], ["value", "blazer"], ["value", "pending"], ["value", "returned"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "return-action", 4, "ngIf"], [1, "return-action"], ["title", "Return Uniform", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-arrow-return-left"]], template: function UniformDistributionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Uniform Distribution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage uniform distribution and returns");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Uniform Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UniformDistributionListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.uniformType, $event) || (ctx.uniformType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UniformDistributionListComponent_Template_select_change_11_listener() {
        return ctx.onUniformTypeChange(ctx.uniformType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "shirt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "pant");
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
      \u0275\u0275text(26, "Return Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UniformDistributionListComponent_Template_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.returnStatus, $event) || (ctx.returnStatus = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UniformDistributionListComponent_Template_select_change_27_listener() {
        return ctx.onReturnStatusChange(ctx.returnStatus);
      });
      \u0275\u0275elementStart(28, "option", 7);
      \u0275\u0275text(29, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 13);
      \u0275\u0275text(31, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 14);
      \u0275\u0275text(33, "Returned");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "app-enhanced-table", 15);
      \u0275\u0275listener("pageChange", function UniformDistributionListComponent_Template_app_enhanced_table_pageChange_34_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function UniformDistributionListComponent_Template_app_enhanced_table_pageSizeChange_34_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function UniformDistributionListComponent_Template_app_enhanced_table_searchChange_34_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function UniformDistributionListComponent_Template_app_enhanced_table_sortChange_34_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function UniformDistributionListComponent_Template_app_enhanced_table_dateFilterChange_34_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function UniformDistributionListComponent_Template_app_enhanced_table_rowSelect_34_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function UniformDistributionListComponent_Template_app_enhanced_table_refresh_34_listener() {
        return ctx.onRefresh();
      })("addClick", function UniformDistributionListComponent_Template_app_enhanced_table_addClick_34_listener() {
        return ctx.onAdd();
      })("editClick", function UniformDistributionListComponent_Template_app_enhanced_table_editClick_34_listener($event) {
        return ctx.onEditDistribution($event);
      })("deleteClick", function UniformDistributionListComponent_Template_app_enhanced_table_deleteClick_34_listener($event) {
        return ctx.onDeleteDistribution($event);
      })("exportClick", function UniformDistributionListComponent_Template_app_enhanced_table_exportClick_34_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function UniformDistributionListComponent_Template_app_enhanced_table_filterToggle_34_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, UniformDistributionListComponent_div_35_Template, 4, 0, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_16_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.uniformType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.returnStatus);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("data", ctx.distributions)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "distribution_id")("addRoute", "/app/uniform-distribution/create")("addLabel", "Distribute Uniform")("searchPlaceholder", "Search uniform distributions...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedDistribution() && ((tmp_16_0 = ctx.getSelectedDistribution()) == null ? null : tmp_16_0.return_status) === "distributed");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.uniform-distribution-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .uniform-distribution-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .uniform-distribution-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.uniform-distribution-list-container[_ngcontent-%COMP%]   .return-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n/*# sourceMappingURL=uniform-distribution-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UniformDistributionListComponent, { className: "UniformDistributionListComponent", filePath: "src\\app\\modules\\uniform-distribution\\uniform-distribution-list\\uniform-distribution-list.component.ts", lineNumber: 18 });
})();
export {
  UniformDistributionListComponent
};
//# sourceMappingURL=chunk-V77UDPCT.js.map
