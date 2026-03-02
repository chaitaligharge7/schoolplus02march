import {
  MessScheduleService
} from "./chunk-UMGB5Z47.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
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
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/mess-schedules/mess-schedule-list/mess-schedule-list.component.ts
function MessScheduleListComponent_option_14_Template(rf, ctx) {
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
function MessScheduleListComponent_div_30_div_1_div_13_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "dateFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const meal_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, meal_r5.meal_date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(meal_r5.meal_type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meal_r5.menu_items);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meal_r5.meal_time || "-");
  }
}
function MessScheduleListComponent_div_30_div_1_div_13_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "No meals scheduled");
    \u0275\u0275elementEnd()();
  }
}
function MessScheduleListComponent_div_30_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 24)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Meal Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Menu Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Time");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, MessScheduleListComponent_div_30_div_1_div_13_tr_13_Template, 10, 6, "tr", 25)(14, MessScheduleListComponent_div_30_div_1_div_13_tr_14_Template, 3, 0, "tr", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const schedule_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r3.scheduleMeals[schedule_r3.schedule_id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.scheduleMeals[schedule_r3.schedule_id] == null ? null : ctx_r3.scheduleMeals[schedule_r3.schedule_id].length) === 0);
  }
}
function MessScheduleListComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275listener("click", function MessScheduleListComponent_div_30_div_1_Template_div_click_1_listener() {
      const schedule_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMeals(schedule_r3.schedule_id));
    });
    \u0275\u0275elementStart(2, "div")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "dateFormat");
    \u0275\u0275pipe(9, "dateFormat");
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MessScheduleListComponent_div_30_div_1_div_13_Template, 15, 2, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 6, schedule_r3.schedule_type), " Schedule");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Week: ", \u0275\u0275pipeBind1(8, 8, schedule_r3.week_start_date), " - ", \u0275\u0275pipeBind1(9, 10, schedule_r3.week_end_date), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.scheduleMeals[schedule_r3.schedule_id] && ctx_r3.scheduleMeals[schedule_r3.schedule_id].length || schedule_r3.meal_count || 0, " meals");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.expandedScheduleId === schedule_r3.schedule_id ? "bi-chevron-up" : "bi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.expandedScheduleId === schedule_r3.schedule_id && ctx_r3.scheduleMeals[schedule_r3.schedule_id]);
  }
}
function MessScheduleListComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, MessScheduleListComponent_div_30_div_1_Template, 14, 12, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.schedules);
  }
}
var MessScheduleListComponent = class _MessScheduleListComponent {
  messScheduleService;
  academicYearService;
  toastService;
  exportService;
  router;
  dialogService;
  schedules = [];
  academicYears = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  expandedScheduleId = null;
  scheduleMeals = {};
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "schedule_type",
      label: "Schedule Type",
      sortable: true,
      format: (value) => {
        return value ? value.charAt(0).toUpperCase() + value.slice(1) : "-";
      }
    },
    {
      key: "week_start_date",
      label: "Week Start",
      sortable: true,
      type: "date",
      format: (value, row) => {
        return `${value || "-"} - ${row?.week_end_date || "-"}`;
      }
    },
    {
      key: "meal_count",
      label: "Meals",
      sortable: true,
      type: "number",
      format: (value) => {
        return `<span class="badge badge-info">${value || 0}</span>`;
      }
    },
    {
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true,
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "week_start_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  scheduleType;
  constructor(messScheduleService, academicYearService, toastService, exportService, router, dialogService) {
    this.messScheduleService = messScheduleService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.dialogService = dialogService;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadSchedules();
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
  loadSchedules() {
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
    if (this.academicYearId)
      params.academic_year_id = this.academicYearId;
    if (this.scheduleType)
      params.schedule_type = this.scheduleType;
    this.messScheduleService.getSchedules(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data?.schedules) {
          this.schedules = response.data.schedules.map((s) => {
            return __spreadProps(__spreadValues({}, s), {
              schedule_id: s.schedule_id || s.id,
              week_start_date: s.week_start_date || "-",
              week_end_date: s.week_end_date || "-",
              academic_year_name: s.academic_year_name || "-",
              meal_count: s.meals?.length ?? s.meal_count ?? 0
            });
          });
          this.pagination = response.data.pagination || this.pagination;
        } else {
          this.schedules = [];
          this.toastService.show(response.message || "Failed to load mess schedules", "error");
        }
      },
      error: (error) => {
        this.loading = false;
        this.schedules = [];
        this.toastService.show("Error loading mess schedules", "error");
        console.error("Error loading mess schedules:", error);
      }
    });
  }
  toggleMeals(scheduleId) {
    if (this.expandedScheduleId === scheduleId) {
      this.expandedScheduleId = null;
    } else {
      this.expandedScheduleId = scheduleId;
      if (!this.scheduleMeals[scheduleId]) {
        this.loadMeals(scheduleId);
      }
    }
  }
  loadMeals(scheduleId) {
    this.messScheduleService.getMeals(scheduleId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.scheduleMeals[scheduleId] = response.data.meals || [];
        }
      },
      error: () => {
        this.toastService.show("Error loading schedule meals", "error");
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
  onEdit(schedule) {
    if (!schedule?.schedule_id) {
      this.toastService.show("Invalid schedule selected", "error");
      return;
    }
    this.router.navigate(["/app/mess-schedules/edit", schedule.schedule_id]);
  }
  onDelete(schedule) {
    const scheduleId = schedule?.schedule_id;
    if (!scheduleId) {
      this.toastService.show("Invalid schedule selected", "error");
      return;
    }
    this.dialogService.confirm({
      title: "Delete Mess Schedule",
      message: "Are you sure you want to delete this schedule?",
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.messScheduleService.deleteSchedule(scheduleId).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Schedule deleted successfully", "success");
              this.loadSchedules();
            } else {
              this.toastService.show(response.message || "Failed to delete schedule", "error");
            }
          },
          error: () => {
            this.toastService.show("Error deleting schedule", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.schedules.map((schedule) => ({
      "Schedule Type": schedule.schedule_type ? schedule.schedule_type.charAt(0).toUpperCase() + schedule.schedule_type.slice(1) : "-",
      "Week Start": this.formatDate(schedule.week_start_date),
      "Week End": this.formatDate(schedule.week_end_date),
      "Meals": schedule.meal_count || 0,
      "Academic Year": schedule.academic_year_name || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `mess-schedules-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `mess-schedules-${Date.now()}.pdf`, headers);
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
    this.loadSchedules();
  }
  onScheduleTypeChange(type) {
    this.scheduleType = type || void 0;
    this.pagination.page = 1;
    this.loadSchedules();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function MessScheduleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessScheduleListComponent)(\u0275\u0275directiveInject(MessScheduleService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DialogService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessScheduleListComponent, selectors: [["app-mess-schedule-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 19, consts: [[1, "mess-schedule-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "breakfast"], ["value", "lunch"], ["value", "dinner"], ["value", "snacks"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "deleteClick", "editClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "schedule-details", 4, "ngIf"], [1, "schedule-details"], ["class", "schedule-item", 4, "ngFor", "ngForOf"], [1, "schedule-item"], [1, "schedule-header", 3, "click"], [1, "schedule-info"], [1, "badge", "badge-info"], [1, "bi", 3, "ngClass"], ["class", "meals-list", 4, "ngIf"], [1, "meals-list"], [1, "meals-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "4", 1, "text-center"]], template: function MessScheduleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Mess Schedules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage mess meal schedules");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function MessScheduleListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function MessScheduleListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, MessScheduleListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Schedule Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function MessScheduleListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.scheduleType, $event) || (ctx.scheduleType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function MessScheduleListComponent_Template_select_change_18_listener() {
        return ctx.onScheduleTypeChange(ctx.scheduleType);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "option", 9);
      \u0275\u0275text(22, "Breakfast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 10);
      \u0275\u0275text(24, "Lunch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 11);
      \u0275\u0275text(26, "Dinner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 12);
      \u0275\u0275text(28, "Snacks");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "app-enhanced-table", 13);
      \u0275\u0275listener("pageChange", function MessScheduleListComponent_Template_app_enhanced_table_pageChange_29_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function MessScheduleListComponent_Template_app_enhanced_table_pageSizeChange_29_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function MessScheduleListComponent_Template_app_enhanced_table_searchChange_29_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function MessScheduleListComponent_Template_app_enhanced_table_sortChange_29_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function MessScheduleListComponent_Template_app_enhanced_table_dateFilterChange_29_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function MessScheduleListComponent_Template_app_enhanced_table_rowSelect_29_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function MessScheduleListComponent_Template_app_enhanced_table_refresh_29_listener() {
        return ctx.onRefresh();
      })("addClick", function MessScheduleListComponent_Template_app_enhanced_table_addClick_29_listener() {
        return ctx.onAdd();
      })("deleteClick", function MessScheduleListComponent_Template_app_enhanced_table_deleteClick_29_listener($event) {
        return ctx.onDelete($event);
      })("editClick", function MessScheduleListComponent_Template_app_enhanced_table_editClick_29_listener($event) {
        return ctx.onEdit($event);
      })("exportClick", function MessScheduleListComponent_Template_app_enhanced_table_exportClick_29_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function MessScheduleListComponent_Template_app_enhanced_table_filterToggle_29_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, MessScheduleListComponent_div_30_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.scheduleType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.schedules)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "schedule_id")("addRoute", "/app/mess-schedules/create")("addLabel", "Create Schedule")("searchPlaceholder", "Search mess schedules...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.schedules.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, DateFormatPipe], styles: ["\n\n.mess-schedule-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .mess-schedule-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .mess-schedule-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-md);\n  overflow: hidden;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .schedule-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color var(--transition-base);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .schedule-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .schedule-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-xs) 0;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .schedule-header[_ngcontent-%COMP%]   .schedule-info[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) 0 0 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  display: flex;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  background: var(--bg-primary);\n  border-top: 1px solid var(--border-color);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.02);\n}\n.mess-schedule-list-container[_ngcontent-%COMP%]   .schedule-details[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meals-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=mess-schedule-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessScheduleListComponent, { className: "MessScheduleListComponent", filePath: "src\\app\\modules\\mess-schedules\\mess-schedule-list\\mess-schedule-list.component.ts", lineNumber: 21 });
})();
export {
  MessScheduleListComponent
};
//# sourceMappingURL=chunk-BHNVBFA5.js.map
