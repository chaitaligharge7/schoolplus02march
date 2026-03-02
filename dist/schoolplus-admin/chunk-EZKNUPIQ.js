import {
  CleaningService
} from "./chunk-THBM6DIN.js";
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
  DefaultValueAccessor,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/cleaning/cleaning-list/cleaning-list.component.ts
function CleaningListComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not on duty");
    \u0275\u0275elementEnd();
  }
}
function CleaningListComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("On duty since ", ctx_r0.dutyLoginAt, "");
  }
}
function CleaningListComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function CleaningListComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startDuty());
    });
    \u0275\u0275text(1, "Start Duty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.dutyLoading);
  }
}
function CleaningListComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CleaningListComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.endDuty());
    });
    \u0275\u0275text(1, "End Duty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.dutyLoading);
  }
}
function CleaningListComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "button", 21);
    \u0275\u0275listener("click", function CleaningListComponent_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.completeCleaning(ctx_r0.selectedRowId));
    });
    \u0275\u0275element(2, "i", 22);
    \u0275\u0275text(3, " Complete Cleaning ");
    \u0275\u0275elementEnd()();
  }
}
var CleaningListComponent = class _CleaningListComponent {
  cleaningService;
  toastService;
  dialogService;
  exportService;
  router;
  schedules = [];
  loading = false;
  selectedRowId;
  showFilters = false;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "location",
      label: "location",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "schedule_date",
      label: "Schedule Date",
      sortable: true,
      type: "date"
    },
    {
      key: "assigned_to_name",
      label: "Assigned To",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "completion_status",
      label: "completion_status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "completed" ? "badge-success" : "badge-warning";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    },
    {
      key: "created_at",
      label: "Completion Date",
      sortable: true,
      type: "date",
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "schedule_date";
  sortDirection = "desc";
  startDate;
  endDate;
  area;
  status;
  dutyOn = false;
  dutyLoginAt = null;
  dutyLoading = false;
  currentLogId = null;
  cleaningStatusOptions = [
    { value: void 0, label: "All Status" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" }
  ];
  constructor(cleaningService, toastService, dialogService, exportService, router) {
    this.cleaningService = cleaningService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadSchedules();
    this.loadDutyStatus();
  }
  loadDutyStatus() {
    this.cleaningService.getDutyStatus().subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.on_duty && res.data?.current_log) {
          this.dutyOn = true;
          this.dutyLoginAt = res.data.current_log.login_at ? new Date(res.data.current_log.login_at).toLocaleString() : null;
          this.currentLogId = res.data.current_log.log_id ?? null;
        } else {
          this.dutyOn = false;
          this.dutyLoginAt = null;
          this.currentLogId = null;
        }
      }
    });
  }
  startDuty = () => {
    this.dutyLoading = true;
    this.cleaningService.dutyLogin().subscribe({
      next: (res) => {
        this.dutyLoading = false;
        if (res.status === "success") {
          this.toastService.show("Duty started", "success");
          this.loadDutyStatus();
        }
      },
      error: () => {
        this.dutyLoading = false;
      }
    });
  };
  endDuty = () => {
    this.dutyLoading = true;
    this.cleaningService.dutyLogout(this.currentLogId ?? void 0).subscribe({
      next: (res) => {
        this.dutyLoading = false;
        if (res.status === "success") {
          this.toastService.show("Duty ended", "success");
          this.loadDutyStatus();
        }
      },
      error: () => {
        this.dutyLoading = false;
      }
    });
  };
  loadSchedules() {
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
    if (this.area) {
      params.area = this.area;
    }
    if (this.status) {
      params.status = this.status;
    }
    this.cleaningService.getCleaningSchedules(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.schedules = response.data.schedules || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading cleaning schedules", "error");
        console.error("Error loading cleaning schedules:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadSchedules();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadSchedules();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  onRowSelect(row) {
    this.selectedRowId = row.schedule_id;
  }
  onRefresh() {
    this.loadSchedules();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.schedules.map((schedule) => ({
      Area: schedule.area || "-",
      "Schedule Date": this.formatDate(schedule.schedule_date),
      "Assigned To": schedule.assigned_to_name || "-",
      Status: schedule.status || "-",
      "Completed Date": schedule.completed_date ? this.formatDate(schedule.completed_date) : "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `cleaning-schedules-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `cleaning-schedules-${Date.now()}.pdf`, headers);
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
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  onAreaChange(area) {
    this.area = area || void 0;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  onStatusChange(status) {
    this.status = status || void 0;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  completeCleaning(scheduleId) {
    this.dialogService.confirm({
      title: "Complete Cleaning",
      message: "Mark this cleaning as complete?",
      confirmText: "Complete",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.cleaningService.completeCleaning(scheduleId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Cleaning marked as complete", "success");
              this.loadSchedules();
            }
          },
          error: () => {
            this.toastService.show("Failed to update cleaning status", "error");
          }
        });
      }
    });
  }
  getSelectedSchedule() {
    return this.schedules.find((s) => s.schedule_id === this.selectedRowId);
  }
  onEdit(row) {
    this.router.navigate(["/app/cleaning/edit", row.schedule_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Section",
      message: `Are you sure you want to delete "${row.section_name}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.cleaningService.deleteCleaningSchedule(row.schedule_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("cleaning shedule deleted successfully", "success");
              this.loadSchedules();
            }
          },
          error: (err) => {
            this.toastService.show("error deleting the cleaning shedules", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function CleaningListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CleaningListComponent)(\u0275\u0275directiveInject(CleaningService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CleaningListComponent, selectors: [["app-cleaning-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 21, consts: [[1, "cleaning-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "duty-strip", "card", "mb-3"], [1, "card-body", "py-2", "d-flex", "align-items-center", "gap-3"], [1, "text-muted"], [4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-success", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-danger", 3, "disabled", "click", 4, "ngIf"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], ["type", "text", "placeholder", "Filter by area", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["placeholder", "Search or select status", 3, "ngModelChange", "valueChange", "options", "ngModel"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "complete-action", 4, "ngIf"], [1, "text-success"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "complete-action"], ["title", "Complete Cleaning", 1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-check-circle"]], template: function CleaningListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Cleaning Schedules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage cleaning schedules and completion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
      \u0275\u0275text(10, "Duty:");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CleaningListComponent_span_11_Template, 2, 0, "span", 7)(12, CleaningListComponent_span_12_Template, 2, 1, "span", 8)(13, CleaningListComponent_button_13_Template, 2, 1, "button", 9)(14, CleaningListComponent_button_14_Template, 2, 1, "button", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "label");
      \u0275\u0275text(18, "Area:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CleaningListComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.area, $event) || (ctx.area = $event);
        return $event;
      });
      \u0275\u0275listener("input", function CleaningListComponent_Template_input_input_19_listener() {
        return ctx.onAreaChange(ctx.area);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12)(21, "label");
      \u0275\u0275text(22, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "app-search-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function CleaningListComponent_Template_app_search_select_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.status, $event) || (ctx.status = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CleaningListComponent_Template_app_search_select_valueChange_23_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "app-enhanced-table", 15);
      \u0275\u0275listener("pageChange", function CleaningListComponent_Template_app_enhanced_table_pageChange_24_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function CleaningListComponent_Template_app_enhanced_table_pageSizeChange_24_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function CleaningListComponent_Template_app_enhanced_table_searchChange_24_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function CleaningListComponent_Template_app_enhanced_table_sortChange_24_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function CleaningListComponent_Template_app_enhanced_table_dateFilterChange_24_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function CleaningListComponent_Template_app_enhanced_table_rowSelect_24_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function CleaningListComponent_Template_app_enhanced_table_refresh_24_listener() {
        return ctx.onRefresh();
      })("addClick", function CleaningListComponent_Template_app_enhanced_table_addClick_24_listener() {
        return ctx.onAdd();
      })("editClick", function CleaningListComponent_Template_app_enhanced_table_editClick_24_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function CleaningListComponent_Template_app_enhanced_table_deleteClick_24_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function CleaningListComponent_Template_app_enhanced_table_exportClick_24_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function CleaningListComponent_Template_app_enhanced_table_filterToggle_24_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, CleaningListComponent_div_25_Template, 4, 0, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_19_0;
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", !ctx.dutyOn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dutyOn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.dutyOn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dutyOn);
      \u0275\u0275advance();
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.area);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.cleaningStatusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.status);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.schedules)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "schedule_id")("addRoute", "/app/cleaning/create")("addLabel", "Add Schedule")("searchPlaceholder", "Search cleaning schedules...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRowId && ctx.getSelectedSchedule() && ((tmp_19_0 = ctx.getSelectedSchedule()) == null ? null : tmp_19_0.completion_status) === "pending");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, SearchSelectComponent], styles: ["\n\n.cleaning-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .cleaning-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .cleaning-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.cleaning-list-container[_ngcontent-%COMP%]   .complete-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n/*# sourceMappingURL=cleaning-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CleaningListComponent, { className: "CleaningListComponent", filePath: "src\\app\\modules\\cleaning\\cleaning-list\\cleaning-list.component.ts", lineNumber: 22 });
})();
export {
  CleaningListComponent
};
//# sourceMappingURL=chunk-EZKNUPIQ.js.map
