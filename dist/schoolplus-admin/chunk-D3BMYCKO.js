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
  HttpClient,
  HttpParams,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/services/birthday.service.ts
var BirthdayService = class _BirthdayService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getBirthdays(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/birthday/list.php`, { params: httpParams });
  }
  sendBirthdayReminders(reminderIds) {
    return this.http.post(`${this.apiUrl}/birthday/list.php`, {
      reminder_ids: reminderIds
    });
  }
  static \u0275fac = function BirthdayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BirthdayService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BirthdayService, factory: _BirthdayService.\u0275fac, providedIn: "root" });
};

// src/app/modules/birthday/birthday-list/birthday-list.component.ts
function BirthdayListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 17)(2, "input", 18);
    \u0275\u0275listener("change", function BirthdayListComponent_div_22_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSelectAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedReminders.length === ctx_r1.birthdays.length && ctx_r1.birthdays.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Select All (", ctx_r1.selectedReminders.length, " of ", ctx_r1.birthdays.length, " selected)");
  }
}
function BirthdayListComponent_div_24_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 23)(1, "input", 18);
    \u0275\u0275listener("change", function BirthdayListComponent_div_24_label_5_Template_input_change_1_listener() {
      const birthday_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(birthday_r4.reminder_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const birthday_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isSelected(birthday_r4.reminder_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", birthday_r4.student_first_name ? birthday_r4.student_first_name + " " + birthday_r4.student_last_name : birthday_r4.staff_first_name + " " + birthday_r4.staff_last_name, " (", birthday_r4.admission_number || birthday_r4.employee_id, ") ");
  }
}
function BirthdayListComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "strong");
    \u0275\u0275text(3, "Select Birthdays for Reminders:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275template(5, BirthdayListComponent_div_24_label_5_Template, 4, 3, "label", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.birthdays);
  }
}
var BirthdayListComponent = class _BirthdayListComponent {
  birthdayService;
  toastService;
  dialogService;
  exportService;
  router;
  birthdays = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  selectedReminders = [];
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "person_name",
      label: "Person",
      sortable: true,
      format: (value, row) => {
        const name = row?.student_first_name ? `${row.student_first_name} ${row.student_last_name}` : `${row?.staff_first_name || ""} ${row?.staff_last_name || ""}`;
        const id = row?.admission_number || row?.employee_id || "";
        return `${name.trim() || "-"}<br><small>${id}</small>`;
      }
    },
    {
      key: "person_type",
      label: "Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "birth_date",
      label: "Birth Date",
      sortable: true,
      type: "date"
    },
    {
      key: "reminder_sent",
      label: "Reminder Sent",
      sortable: true,
      format: (value) => {
        const badgeClass = value === 1 ? "badge-success" : "badge-warning";
        const text = value === 1 ? "Sent" : "Pending";
        return `<span class="badge ${badgeClass}">${text}</span>`;
      }
    },
    {
      key: "reminder_date",
      label: "Reminder Date",
      sortable: true,
      type: "date",
      format: (value) => value || "-"
    }
  ];
  searchTerm = "";
  sortColumn = "birth_date";
  sortDirection = "asc";
  startDate;
  endDate;
  dateFilter = "today";
  constructor(birthdayService, toastService, dialogService, exportService, router) {
    this.birthdayService = birthdayService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadBirthdays();
  }
  loadBirthdays() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase(),
      date_filter: this.dateFilter
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
    this.birthdayService.getBirthdays(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.birthdays = response.data.birthdays || [];
          this.pagination = response.data.pagination || this.pagination;
          this.selectedReminders = [];
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading birthdays", "error");
        console.error("Error loading birthdays:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadBirthdays();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadBirthdays();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadBirthdays();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadBirthdays();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadBirthdays();
  }
  onRowSelect(row) {
    this.selectedRowId = row.reminder_id;
  }
  onRefresh() {
    this.loadBirthdays();
  }
  onAdd() {
  }
  onExportClick(event) {
    const exportData = this.birthdays.map((birthday) => {
      const name = birthday.student_first_name ? `${birthday.student_first_name} ${birthday.student_last_name}` : `${birthday.staff_first_name || ""} ${birthday.staff_last_name || ""}`;
      const id = birthday.admission_number || birthday.employee_id || "";
      return {
        "Person": name.trim(),
        "ID": id,
        "Type": birthday.person_type || "-",
        "Birth Date": this.formatDate(birthday.birth_date),
        "Reminder Sent": birthday.reminder_sent === 1 ? "Sent" : "Pending",
        "Reminder Date": birthday.reminder_date ? this.formatDate(birthday.reminder_date) : "-"
      };
    });
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `birthdays-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `birthdays-${Date.now()}.pdf`, headers);
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
  onDateFilterChangeSelect(filter) {
    this.dateFilter = filter;
    this.pagination.page = 1;
    this.loadBirthdays();
  }
  toggleSelection(reminderId) {
    const index = this.selectedReminders.indexOf(reminderId);
    if (index > -1) {
      this.selectedReminders.splice(index, 1);
    } else {
      this.selectedReminders.push(reminderId);
    }
  }
  toggleSelectAll() {
    if (this.selectedReminders.length === this.birthdays.length && this.birthdays.length > 0) {
      this.selectedReminders = [];
    } else {
      this.selectedReminders = this.birthdays.map((b) => b.reminder_id);
    }
  }
  isSelected(reminderId) {
    return this.selectedReminders.includes(reminderId);
  }
  sendBirthdayReminders() {
    if (this.selectedReminders.length === 0) {
      this.toastService.show("Please select at least one birthday reminder", "warning");
      return;
    }
    this.dialogService.confirm({
      title: "Send Birthday Reminders",
      message: `Send ${this.selectedReminders.length} birthday reminder(s) to recipients?`,
      confirmText: "Send",
      cancelText: "Cancel",
      type: "info"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.birthdayService.sendBirthdayReminders(this.selectedReminders).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show(`Birthday reminders sent to ${response.data?.sent || 0} recipients`, "success");
              this.selectedReminders = [];
              this.loadBirthdays();
            }
          },
          error: () => {
            this.toastService.show("Failed to send birthday reminders", "error");
          }
        });
      }
    });
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function BirthdayListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BirthdayListComponent)(\u0275\u0275directiveInject(BirthdayService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BirthdayListComponent, selectors: [["app-birthday-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 16, consts: [[1, "birthday-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-send"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", "today"], ["value", "this_week"], ["value", "this_month"], ["class", "selection-info", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "searchPlaceholder", "enableExport", "enableDateFilter"], ["class", "checkbox-panel", 4, "ngIf"], [1, "selection-info"], [1, "select-all-label"], ["type", "checkbox", 3, "change", "checked"], [1, "checkbox-panel"], [1, "panel-header"], [1, "checkbox-grid"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], [1, "checkbox-item"]], template: function BirthdayListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Birthday Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage birthday reminders and send greetings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function BirthdayListComponent_Template_button_click_8_listener() {
        return ctx.sendBirthdayReminders();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "label");
      \u0275\u0275text(14, "Date Filter:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function BirthdayListComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateFilter, $event) || (ctx.dateFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function BirthdayListComponent_Template_select_change_15_listener() {
        return ctx.onDateFilterChangeSelect(ctx.dateFilter);
      });
      \u0275\u0275elementStart(16, "option", 10);
      \u0275\u0275text(17, "Today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 11);
      \u0275\u0275text(19, "This Week");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 12);
      \u0275\u0275text(21, "This Month");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(22, BirthdayListComponent_div_22_Template, 5, 3, "div", 13);
      \u0275\u0275elementStart(23, "app-enhanced-table", 14);
      \u0275\u0275listener("pageChange", function BirthdayListComponent_Template_app_enhanced_table_pageChange_23_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function BirthdayListComponent_Template_app_enhanced_table_pageSizeChange_23_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function BirthdayListComponent_Template_app_enhanced_table_searchChange_23_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function BirthdayListComponent_Template_app_enhanced_table_sortChange_23_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function BirthdayListComponent_Template_app_enhanced_table_dateFilterChange_23_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function BirthdayListComponent_Template_app_enhanced_table_rowSelect_23_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function BirthdayListComponent_Template_app_enhanced_table_refresh_23_listener() {
        return ctx.onRefresh();
      })("exportClick", function BirthdayListComponent_Template_app_enhanced_table_exportClick_23_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function BirthdayListComponent_Template_app_enhanced_table_filterToggle_23_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, BirthdayListComponent_div_24_Template, 6, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.selectedReminders.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Send Reminders (", ctx.selectedReminders.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFilter);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.birthdays.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.birthdays)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "reminder_id")("searchPlaceholder", "Search birthdays...")("enableExport", true)("enableDateFilter", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.birthdays.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.birthday-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.birthday-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.birthday-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.birthday-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.birthday-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  cursor: pointer;\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   .select-all-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: var(--spacing-sm);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-xs);\n  cursor: pointer;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: background-color var(--transition-base);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(37, 99, 235, 0.05);\n}\n.birthday-list-container[_ngcontent-%COMP%]   .checkbox-panel[_ngcontent-%COMP%]   .checkbox-grid[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=birthday-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BirthdayListComponent, { className: "BirthdayListComponent", filePath: "src\\app\\modules\\birthday\\birthday-list\\birthday-list.component.ts", lineNumber: 18 });
})();
export {
  BirthdayListComponent
};
//# sourceMappingURL=chunk-D3BMYCKO.js.map
