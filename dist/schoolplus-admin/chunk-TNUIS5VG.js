import {
  LabService
} from "./chunk-WP5BGVND.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterLink,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/lab/lab-items-list/lab-items-list.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-success": a0, "badge-warning": a1, "badge-danger": a2 });
function LabItemsListComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "select", 19)(2, "option", 20);
    \u0275\u0275text(3, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 21);
    \u0275\u0275text(5, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 22);
    \u0275\u0275text(7, "Chemical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 23);
    \u0275\u0275text(9, "Glassware");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 24);
    \u0275\u0275text(11, "Other");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
  }
}
function LabItemsListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "select", 25)(2, "option", 20);
    \u0275\u0275text(3, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 26);
    \u0275\u0275text(5, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 27);
    \u0275\u0275text(7, "In Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 28);
    \u0275\u0275text(9, "Maintenance");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("value", null);
  }
}
function LabItemsListComponent_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function LabItemsListComponent_div_26_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38)(14, "button", 39);
    \u0275\u0275listener("click", function LabItemsListComponent_div_26_table_2_tr_16_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onEdit(item_r2));
    });
    \u0275\u0275element(15, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275element(17, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.item_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c0, item_r2.status === "available", item_r2.status === "in_use", item_r2.status === "maintenance"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.location || "-");
  }
}
function LabItemsListComponent_div_26_table_2_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2, "No lab items found");
    \u0275\u0275elementEnd()();
  }
}
function LabItemsListComponent_div_26_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 34)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Item Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, LabItemsListComponent_div_26_table_2_tr_16_Template, 18, 10, "tr", 35)(17, LabItemsListComponent_div_26_table_2_tr_17_Template, 3, 0, "tr", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.items.length === 0);
  }
}
function LabItemsListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, LabItemsListComponent_div_26_div_1_Template, 2, 0, "div", 30)(2, LabItemsListComponent_div_26_table_2_Template, 18, 2, "table", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
  }
}
function LabItemsListComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementEnd();
  }
}
function LabItemsListComponent_div_27_table_2_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "dateFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const practical_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(practical_r4.practical_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(practical_r4.class_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(practical_r4.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, practical_r4.practical_date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(practical_r4.status);
  }
}
function LabItemsListComponent_div_27_table_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2, "No lab practicals found");
    \u0275\u0275elementEnd()();
  }
}
function LabItemsListComponent_div_27_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 34)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Practical Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, LabItemsListComponent_div_27_table_2_tr_14_Template, 14, 7, "tr", 35)(15, LabItemsListComponent_div_27_table_2_tr_15_Template, 3, 0, "tr", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.practicals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.practicals.length === 0);
  }
}
function LabItemsListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, LabItemsListComponent_div_27_div_1_Template, 2, 0, "div", 30)(2, LabItemsListComponent_div_27_table_2_Template, 16, 2, "table", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
  }
}
function LabItemsListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "button", 46);
    \u0275\u0275listener("click", function LabItemsListComponent_div_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.pagination.page - 1));
    });
    \u0275\u0275text(2, " Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function LabItemsListComponent_div_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.pagination.page + 1));
    });
    \u0275\u0275text(6, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.pagination.page === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r2.pagination.page, " of ", ctx_r2.pagination.pages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.pagination.page === ctx_r2.pagination.pages);
  }
}
var LabItemsListComponent = class _LabItemsListComponent {
  fb;
  labService;
  toastService;
  router;
  items = [];
  practicals = [];
  activeTab = "items";
  isLoading = false;
  searchForm;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  constructor(fb, labService, toastService, router) {
    this.fb = fb;
    this.labService = labService;
    this.toastService = toastService;
    this.router = router;
    this.searchForm = this.fb.group({
      search: [""],
      category: [null],
      status: [null]
    });
  }
  ngOnInit() {
    this.loadItems();
  }
  setActiveTab(tab) {
    this.activeTab = tab;
    if (tab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }
  loadItems() {
    this.isLoading = true;
    const params = __spreadProps(__spreadValues({}, this.searchForm.value), {
      page: this.pagination.page,
      limit: this.pagination.limit
    });
    this.labService.getLabItems(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.items = response.data?.items || [];
          this.pagination = __spreadProps(__spreadValues({}, this.pagination), {
            total: response.data?.total || 0,
            pages: Math.ceil((response.data?.total || 0) / this.pagination.limit)
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.toastService.error("Failed to load lab items");
        this.isLoading = false;
      }
    });
  }
  loadPracticals() {
    this.isLoading = true;
    const params = __spreadProps(__spreadValues({}, this.searchForm.value), {
      page: this.pagination.page,
      limit: this.pagination.limit
    });
    this.labService.getLabPracticals(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.practicals = response.data?.practicals || [];
          this.pagination = __spreadProps(__spreadValues({}, this.pagination), {
            total: response.data?.total || 0,
            pages: Math.ceil((response.data?.total || 0) / this.pagination.limit)
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.toastService.error("Failed to load lab practicals");
        this.isLoading = false;
      }
    });
  }
  onSearch() {
    this.pagination.page = 1;
    if (this.activeTab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }
  onPageChange(page) {
    this.pagination.page = page;
    if (this.activeTab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }
  onEdit(item) {
    if (!item?.item_id) {
      this.toastService.error("Invalid item");
      return;
    }
    this.router.navigate(["/app/lab/items/edit", item.item_id]);
  }
  onDelete(item) {
  }
  static \u0275fac = function LabItemsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabItemsListComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LabService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabItemsListComponent, selectors: [["app-lab-items-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 10, consts: [[1, "lab-items-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "tabs-container"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "filters-card"], [1, "filters-form", 3, "ngSubmit", "formGroup"], [1, "filters-grid"], [1, "form-group"], ["type", "text", "formControlName", "search", "placeholder", "Search...", 1, "form-control", 3, "keyup.enter"], ["class", "form-group", 4, "ngIf"], [1, "form-group", "actions-group"], ["type", "submit", 1, "btn", "btn-secondary"], [1, "bi", "bi-search"], ["routerLink", "/app/lab/items/create", 1, "btn", "btn-primary", "add-btn"], ["class", "table-card", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["formControlName", "category", 1, "form-control"], [3, "value"], ["value", "equipment"], ["value", "chemical"], ["value", "glassware"], ["value", "other"], ["formControlName", "status", 1, "form-control"], ["value", "available"], ["value", "in_use"], ["value", "maintenance"], [1, "table-card"], ["class", "loading-spinner", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], [1, "loading-spinner"], [1, "spinner"], [1, "data-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "actions-cell"], [1, "action-btn", "action-edit", 3, "click"], [1, "bi", "bi-pencil"], [1, "action-btn", "action-delete"], [1, "bi", "bi-trash"], ["colspan", "5", 1, "text-center"], [1, "badge", "badge-success"], [1, "pagination"], [1, "btn", "btn-sm", 3, "click", "disabled"]], template: function LabItemsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Lab Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage lab items and practicals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
      \u0275\u0275listener("click", function LabItemsListComponent_Template_button_click_9_listener() {
        return ctx.setActiveTab("items");
      });
      \u0275\u0275text(10, " Lab Items ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 6);
      \u0275\u0275listener("click", function LabItemsListComponent_Template_button_click_11_listener() {
        return ctx.setActiveTab("practicals");
      });
      \u0275\u0275text(12, " Lab Practicals ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 7)(14, "form", 8);
      \u0275\u0275listener("ngSubmit", function LabItemsListComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "input", 11);
      \u0275\u0275listener("keyup.enter", function LabItemsListComponent_Template_input_keyup_enter_17_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, LabItemsListComponent_div_18_Template, 12, 1, "div", 12)(19, LabItemsListComponent_div_19_Template, 10, 1, "div", 12);
      \u0275\u0275elementStart(20, "div", 13)(21, "button", 14);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275text(23, " Search ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 16);
      \u0275\u0275text(25, " + Add Lab ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(26, LabItemsListComponent_div_26_Template, 3, 2, "div", 17)(27, LabItemsListComponent_div_27_Template, 3, 2, "div", 17)(28, LabItemsListComponent_div_28_Template, 7, 4, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.activeTab === "items");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "practicals");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.searchForm);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "items");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "items");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.activeTab === "items");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "practicals");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pagination.pages > 1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, DateFormatPipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.actions-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n}\n.add-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-weight: 600;\n  padding-left: 20px;\n}\n.lab-items-list-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 0;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #e9ecef;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all 0.3s;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n  background: #f8f9fa;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .tabs-container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  color: #007bff;\n  border-bottom-color: #007bff;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .filters-card[_ngcontent-%COMP%]   .filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  align-items: end;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 24px;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .table-card[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #495057;\n}\n.lab-items-list-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  margin-top: 20px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 6px;\n  transition: 0.2s ease;\n  font-size: 16px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.action-view[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #28a745;\n  border: none;\n}\n.action-edit[_ngcontent-%COMP%] {\n  background: #eaf2ff;\n  color: #0d6efd;\n  border: none;\n}\n.action-delete[_ngcontent-%COMP%] {\n  background: #fdeaea;\n  color: #dc3545;\n  border: none;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=lab-items-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabItemsListComponent, { className: "LabItemsListComponent", filePath: "src\\app\\modules\\lab\\lab-items-list\\lab-items-list.component.ts", lineNumber: 16 });
})();
export {
  LabItemsListComponent
};
//# sourceMappingURL=chunk-TNUIS5VG.js.map
