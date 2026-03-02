import {
  FoodCalendarService
} from "./chunk-JGK4IK2G.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/food-calendar/food-calendar-list/food-calendar-list.component.ts
var FoodCalendarListComponent = class _FoodCalendarListComponent {
  foodCalendarService;
  toastService;
  dialogService;
  exportService;
  router;
  calendar = [];
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
      key: "meal_date",
      label: "Date",
      sortable: true,
      type: "date"
    },
    {
      key: "meal_type",
      label: "Meal Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "menu_item",
      label: "Menu Item",
      sortable: false,
      format: (value) => value || "-"
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "all" ? "badge-success" : "badge-secondary";
        return `<span class="badge ${badgeClass}">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "meal_date";
  sortDirection = "desc";
  startDate;
  endDate;
  mealType;
  constructor(foodCalendarService, toastService, dialogService, exportService, router) {
    this.foodCalendarService = foodCalendarService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadCalendar();
  }
  loadCalendar() {
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
    if (this.mealType)
      params.meal_type = this.mealType;
    this.foodCalendarService.getFoodCalendar(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data?.foods?.length > 0) {
          this.calendar = response.data.foods.map((item) => __spreadProps(__spreadValues({}, item), {
            menu_item: item.meal_description || "-",
            status: item.status || "-"
          }));
          this.pagination.total = this.calendar.length;
        } else {
          this.calendar = [];
          this.pagination.total = 0;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading food calendar", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCalendar();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadCalendar();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadCalendar();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadCalendar();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadCalendar();
  }
  onRowSelect(row) {
    this.selectedRowId = row.food_id;
  }
  onRefresh() {
    this.loadCalendar();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/food-calendar/edit", row.food_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Food Calendar",
      message: `Are you sure you want to delete this food calendar entry?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "warning"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.foodCalendarService.deleteFoodCalendar(row.food_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Food calendar deleted successfully", "success");
              this.loadCalendar();
            }
          },
          error: () => {
            this.toastService.show("Error deleting food calendar", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.calendar.map((entry) => ({
      "Date": this.formatDate(entry.meal_date),
      "Meal Type": entry.meal_type || "-",
      "Menu Items": entry.menu_items || "-",
      "Status": entry.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `food-calendar-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `food-calendar-${Date.now()}.pdf`, headers);
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
  onMealTypeChange(type) {
    this.mealType = type || void 0;
    this.pagination.page = 1;
    this.loadCalendar();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function FoodCalendarListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoodCalendarListComponent)(\u0275\u0275directiveInject(FoodCalendarService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoodCalendarListComponent, selectors: [["app-food-calendar-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 15, consts: [[1, "food-calendar-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["value", "breakfast"], ["value", "lunch"], ["value", "snacks"], ["value", "dinner"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter"]], template: function FoodCalendarListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Food Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage food calendar and meal schedules");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Meal Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function FoodCalendarListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mealType, $event) || (ctx.mealType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FoodCalendarListComponent_Template_select_change_11_listener() {
        return ctx.onMealTypeChange(ctx.mealType);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "option", 8);
      \u0275\u0275text(15, "Breakfast");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Lunch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Snacks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Dinner");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "app-enhanced-table", 12);
      \u0275\u0275listener("pageChange", function FoodCalendarListComponent_Template_app_enhanced_table_pageChange_22_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function FoodCalendarListComponent_Template_app_enhanced_table_pageSizeChange_22_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function FoodCalendarListComponent_Template_app_enhanced_table_searchChange_22_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function FoodCalendarListComponent_Template_app_enhanced_table_sortChange_22_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function FoodCalendarListComponent_Template_app_enhanced_table_dateFilterChange_22_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function FoodCalendarListComponent_Template_app_enhanced_table_rowSelect_22_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function FoodCalendarListComponent_Template_app_enhanced_table_refresh_22_listener() {
        return ctx.onRefresh();
      })("addClick", function FoodCalendarListComponent_Template_app_enhanced_table_addClick_22_listener() {
        return ctx.onAdd();
      })("editClick", function FoodCalendarListComponent_Template_app_enhanced_table_editClick_22_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function FoodCalendarListComponent_Template_app_enhanced_table_deleteClick_22_listener($event) {
        return ctx.onDelete($event);
      })("exportClick", function FoodCalendarListComponent_Template_app_enhanced_table_exportClick_22_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function FoodCalendarListComponent_Template_app_enhanced_table_filterToggle_22_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mealType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.calendar)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "calendar_id")("addRoute", "/app/food-calendar/create")("addLabel", "Add Entry")("searchPlaceholder", "Search food calendar...")("enableExport", true)("enableDateFilter", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.food-calendar-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .food-calendar-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .food-calendar-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.food-calendar-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=food-calendar-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoodCalendarListComponent, { className: "FoodCalendarListComponent", filePath: "src\\app\\modules\\food-calendar\\food-calendar-list\\food-calendar-list.component.ts", lineNumber: 18 });
})();
export {
  FoodCalendarListComponent
};
//# sourceMappingURL=chunk-HJJFYLHZ.js.map
