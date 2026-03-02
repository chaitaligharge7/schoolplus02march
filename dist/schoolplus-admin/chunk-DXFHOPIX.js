import {
  EnquiryService
} from "./chunk-LNSIZNL3.js";
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
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/pages/public-enquiry/public-enquiry.component.ts
function PublicEnquiryComponent_div_1_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function PublicEnquiryComponent_div_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function PublicEnquiryComponent_div_1_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1, "Valid 10-digit number required");
    \u0275\u0275elementEnd();
  }
}
function PublicEnquiryComponent_div_1_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r3 = ctx.$implicit;
    \u0275\u0275property("value", cls_r3.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cls_r3.class_name);
  }
}
function PublicEnquiryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h1", 4);
    \u0275\u0275text(2, "Student Enquiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Submit your enquiry. Reception will be notified and will contact you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 6);
    \u0275\u0275listener("ngSubmit", function PublicEnquiryComponent_div_1_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(6, "div", 7)(7, "h3");
    \u0275\u0275text(8, "Student Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "label");
    \u0275\u0275text(12, "Student Name ");
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 11);
    \u0275\u0275template(16, PublicEnquiryComponent_div_1_small_16_Template, 2, 0, "small", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9)(18, "label");
    \u0275\u0275text(19, "Parent Name ");
    \u0275\u0275elementStart(20, "span", 10);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 13);
    \u0275\u0275template(23, PublicEnquiryComponent_div_1_small_23_Template, 2, 0, "small", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 8)(25, "div", 9)(26, "label");
    \u0275\u0275text(27, "Mobile ");
    \u0275\u0275elementStart(28, "span", 10);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 14);
    \u0275\u0275template(31, PublicEnquiryComponent_div_1_small_31_Template, 2, 0, "small", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 9)(33, "label");
    \u0275\u0275text(34, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 9)(37, "label");
    \u0275\u0275text(38, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "textarea", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 7)(41, "h3");
    \u0275\u0275text(42, "Enquiry Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "label");
    \u0275\u0275text(46, "Interested Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 17)(48, "option", 18);
    \u0275\u0275text(49, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, PublicEnquiryComponent_div_1_option_50_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 9)(52, "label");
    \u0275\u0275text(53, "Source ");
    \u0275\u0275elementStart(54, "span", 10);
    \u0275\u0275text(55, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "select", 20)(57, "option", 21);
    \u0275\u0275text(58, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 22);
    \u0275\u0275text(60, "Walk-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 23);
    \u0275\u0275text(62, "Referral");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "div", 9)(64, "label");
    \u0275\u0275text(65, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "textarea", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 25)(68, "button", 26);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.form.get("student_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("student_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("parent_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("parent_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.form.get("mobile")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("mobile")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(17);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSaving ? "Submitting..." : "Submit Enquiry", " ");
  }
}
function PublicEnquiryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Thank you");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Your enquiry has been submitted. Our reception team will contact you shortly.");
    \u0275\u0275elementEnd()();
  }
}
var PublicEnquiryComponent = class _PublicEnquiryComponent {
  fb;
  http;
  enquiryService;
  form;
  classes = [];
  isSaving = false;
  submitted = false;
  constructor(fb, http, enquiryService) {
    this.fb = fb;
    this.http = http;
    this.enquiryService = enquiryService;
    this.form = this.fb.group({
      student_name: ["", Validators.required],
      parent_name: ["", Validators.required],
      mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ["", Validators.email],
      address: [""],
      interested_class_id: [null],
      enquiry_source: ["online", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.http.get(`${environment.apiUrl}/enquiries/public-classes.php`).subscribe({
      next: (res) => {
        if (res?.status === "success" && res?.data?.classes) {
          this.classes = res.data.classes;
        }
      }
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((k) => this.form.get(k)?.markAsTouched());
      return;
    }
    this.isSaving = true;
    const data = __spreadProps(__spreadValues({}, this.form.value), {
      enquiry_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
    this.enquiryService.createPublicEnquiry(data).subscribe({
      next: (res) => {
        this.isSaving = false;
        if (res?.status === "success") {
          this.submitted = true;
        } else {
          alert(res?.message || "Something went wrong. Please try again.");
        }
      },
      error: () => {
        this.isSaving = false;
        alert("Unable to submit. Please try again or contact the school.");
      }
    });
  }
  static \u0275fac = function PublicEnquiryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicEnquiryComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(EnquiryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicEnquiryComponent, selectors: [["app-public-enquiry"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "public-enquiry-page"], ["class", "public-enquiry-card", 4, "ngIf"], ["class", "public-enquiry-card success-card", 4, "ngIf"], [1, "public-enquiry-card"], [1, "title"], [1, "subtitle"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "student_name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "text", "formControlName", "parent_name", 1, "form-control"], ["type", "tel", "formControlName", "mobile", "maxlength", "10", "placeholder", "10 digits", 1, "form-control"], ["type", "email", "formControlName", "email", 1, "form-control"], ["formControlName", "address", "rows", "2", 1, "form-control"], ["formControlName", "interested_class_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "enquiry_source", 1, "form-control"], ["value", "online"], ["value", "walk-in"], ["value", "referral"], ["formControlName", "remarks", "rows", "2", 1, "form-control"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error"], [1, "public-enquiry-card", "success-card"], [1, "bi", "bi-check-circle-fill", "success-icon"]], template: function PublicEnquiryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PublicEnquiryComponent_div_1_Template, 70, 8, "div", 1)(2, PublicEnquiryComponent_div_2_Template, 6, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n.public-enquiry-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8eeff 100%);\n  padding: 2rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.public-enquiry-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 1rem;\n  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.12);\n  max-width: 560px;\n  width: 100%;\n  padding: 2rem;\n  border: 1px solid rgba(37, 99, 235, 0.1);\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.5rem;\n  color: #1e40af;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 1rem;\n  color: #334155;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n  margin-bottom: 0.75rem;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #374151;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.2rem;\n  display: block;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e2e8f0;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  color: #fff;\n  border: none;\n  padding: 0.6rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.05);\n}\n.public-enquiry-card[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.success-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n}\n.success-card[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #10b981;\n  margin-bottom: 1rem;\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #1e40af;\n}\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n/*# sourceMappingURL=public-enquiry.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicEnquiryComponent, { className: "PublicEnquiryComponent", filePath: "src\\app\\pages\\public-enquiry\\public-enquiry.component.ts", lineNumber: 15 });
})();
export {
  PublicEnquiryComponent
};
//# sourceMappingURL=chunk-DXFHOPIX.js.map
