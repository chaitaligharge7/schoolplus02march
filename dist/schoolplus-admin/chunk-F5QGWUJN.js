import {
  VisitorService
} from "./chunk-FOWRUAYD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/visitors/visitor-create/visitor-create.component.ts
function VisitorCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Visitor name is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    \u0275\u0275property("value", category_r3.category_name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r3.category_name, " ");
  }
}
function VisitorCreateComponent_div_6_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Visitor type is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Valid 10-digit mobile number is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Valid email address is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Purpose is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Visit date is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Visit time is required ");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_span_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function VisitorCreateComponent_div_6_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Register", " Visitor");
  }
}
function VisitorCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function VisitorCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Visitor Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Visitor Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, VisitorCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Visitor Type ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 14)(19, "option", 15);
    \u0275\u0275text(20, "Select Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, VisitorCreateComponent_div_6_option_21_Template, 2, 2, "option", 16);
    \u0275\u0275elementStart(22, "option", 17);
    \u0275\u0275text(23, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Vendor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 19);
    \u0275\u0275text(27, "Guest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 20);
    \u0275\u0275text(29, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, VisitorCreateComponent_div_6_div_30_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Mobile ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 21);
    \u0275\u0275template(37, VisitorCreateComponent_div_6_div_37_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 10)(39, "label");
    \u0275\u0275text(40, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 22);
    \u0275\u0275template(42, VisitorCreateComponent_div_6_div_42_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 10)(44, "label");
    \u0275\u0275text(45, "Purpose ");
    \u0275\u0275elementStart(46, "span", 11);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(48, "input", 23);
    \u0275\u0275template(49, VisitorCreateComponent_div_6_div_49_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 10)(51, "label");
    \u0275\u0275text(52, "Person to Meet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 10)(55, "label");
    \u0275\u0275text(56, "Visit Date ");
    \u0275\u0275elementStart(57, "span", 11);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(59, "input", 25);
    \u0275\u0275template(60, VisitorCreateComponent_div_6_div_60_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 10)(62, "label");
    \u0275\u0275text(63, "Visit Time ");
    \u0275\u0275elementStart(64, "span", 11);
    \u0275\u0275text(65, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(66, "input", 26);
    \u0275\u0275template(67, VisitorCreateComponent_div_6_div_67_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 10)(69, "label");
    \u0275\u0275text(70, "Status ");
    \u0275\u0275elementStart(71, "span", 11);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "select", 27)(74, "option", 28);
    \u0275\u0275text(75, "In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 29);
    \u0275\u0275text(77, "Out");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 10)(79, "label");
    \u0275\u0275text(80, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "textarea", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 31)(83, "button", 32);
    \u0275\u0275listener("click", function VisitorCreateComponent_div_6_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(84, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 33);
    \u0275\u0275template(86, VisitorCreateComponent_div_6_span_86_Template, 2, 0, "span", 34)(87, VisitorCreateComponent_div_6_span_87_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.visitorForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.visitorForm.get("visitor_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.visitorForm.get("visitor_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.visitorForm.get("visitor_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.visitorForm.get("visitor_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.visitorForm.get("visitor_type")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.visitorForm.get("visitor_type")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.visitorForm.get("visitor_type")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.visitorForm.get("visitor_type")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.visitorForm.get("mobile")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.visitorForm.get("mobile")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.visitorForm.get("mobile")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.visitorForm.get("mobile")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.visitorForm.get("email")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.visitorForm.get("email")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.visitorForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.visitorForm.get("email")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.visitorForm.get("purpose")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.visitorForm.get("purpose")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.visitorForm.get("purpose")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.visitorForm.get("purpose")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r1.visitorForm.get("visit_date")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.visitorForm.get("visit_date")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.visitorForm.get("visit_date")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.visitorForm.get("visit_date")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r1.visitorForm.get("visit_time")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.visitorForm.get("visit_time")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r1.visitorForm.get("visit_time")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.visitorForm.get("visit_time")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.visitorForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function VisitorCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementEnd();
  }
}
var VisitorCreateComponent = class _VisitorCreateComponent {
  fb;
  route;
  router;
  visitorService;
  toastService;
  visitorForm;
  isEditMode = false;
  visitorId = null;
  isLoading = false;
  isSaving = false;
  categories = [];
  constructor(fb, route, router, visitorService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.visitorService = visitorService;
    this.toastService = toastService;
    this.visitorForm = this.fb.group({
      visitor_name: ["", Validators.required],
      visitor_type: ["", Validators.required],
      mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ["", Validators.email],
      purpose: ["", Validators.required],
      visit_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      visit_time: [(/* @__PURE__ */ new Date()).toTimeString().slice(0, 5), Validators.required],
      person_to_meet: [""],
      status: ["in", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.visitorId = +params["id"];
        this.loadVisitor();
      }
    });
    this.loadCategories();
  }
  loadCategories() {
    this.visitorService.getVisitorCategories().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.categories = response.data.categories || [];
        }
      }
    });
  }
  loadVisitor() {
    if (!this.visitorId)
      return;
    this.isLoading = true;
    this.visitorService.getVisitors({ visitor_id: this.visitorId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.visitors?.length > 0) {
          const visitor = response.data.visitors[0];
          this.visitorForm.patchValue({
            visitor_name: visitor.visitor_name,
            visitor_type: visitor.visitor_type,
            mobile: visitor.mobile,
            email: visitor.email,
            purpose: visitor.purpose,
            visit_date: visitor.visit_date,
            visit_time: visitor.visit_time,
            person_to_meet: visitor.person_to_meet,
            status: visitor.status,
            remarks: visitor.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load visitor details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.visitorForm.invalid) {
      this.visitorForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.visitorForm.value;
    if (this.isEditMode && this.visitorId) {
      formData.visitor_id = this.visitorId;
    }
    this.visitorService.createVisitor(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Visitor record ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/visitors"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} visitor`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} visitor`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/visitors"]);
  }
  static \u0275fac = function VisitorCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitorCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(VisitorService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorCreateComponent, selectors: [["app-visitor-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "visitor-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "visitor_name", "placeholder", "Enter visitor name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "visitor_type", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "parent"], ["value", "vendor"], ["value", "guest"], ["value", "other"], ["type", "text", "formControlName", "mobile", "placeholder", "10-digit mobile number", "maxlength", "10", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "form-control"], ["type", "text", "formControlName", "purpose", "placeholder", "Enter visit purpose", 1, "form-control"], ["type", "text", "formControlName", "person_to_meet", "placeholder", "Enter person name", 1, "form-control"], ["type", "date", "formControlName", "visit_date", 1, "form-control"], ["type", "time", "formControlName", "visit_time", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "in"], ["value", "out"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function VisitorCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, VisitorCreateComponent_div_6_Template, 88, 28, "div", 4)(7, VisitorCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Visitor Record" : "Register Visitor");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update visitor details" : "Register a new visitor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n.visitor-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.visitor-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=visitor-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorCreateComponent, { className: "VisitorCreateComponent", filePath: "src\\app\\modules\\visitors\\visitor-create\\visitor-create.component.ts", lineNumber: 15 });
})();
export {
  VisitorCreateComponent
};
//# sourceMappingURL=chunk-F5QGWUJN.js.map
