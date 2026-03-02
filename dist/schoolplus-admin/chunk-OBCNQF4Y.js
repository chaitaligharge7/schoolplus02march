import {
  EnquiryService
} from "./chunk-LNSIZNL3.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/enquiries/enquiry-create/enquiry-create.component.ts
function EnquiryCreateComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r1 = ctx.$implicit;
    \u0275\u0275property("value", cls_r1.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r1.class_name, " ");
  }
}
function EnquiryCreateComponent_i_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 35);
  }
}
function EnquiryCreateComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function EnquiryCreateComponent_span_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Enquiry");
  }
}
var EnquiryCreateComponent = class _EnquiryCreateComponent {
  fb;
  route;
  router;
  enquiryService;
  classService;
  toastService;
  enquiryForm;
  isEditMode = false;
  enquiryId = null;
  isLoading = false;
  isSaving = false;
  classes = [];
  constructor(fb, route, router, enquiryService, classService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.enquiryService = enquiryService;
    this.classService = classService;
    this.toastService = toastService;
    this.enquiryForm = this.fb.group({
      student_name: ["", Validators.required],
      parent_name: ["", Validators.required],
      mobile: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ["", Validators.email],
      address: [""],
      interested_class_id: [null],
      enquiry_source: ["walk-in", Validators.required],
      enquiry_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      follow_up_date: [""],
      follow_up_notes: [""],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.enquiryId = +params["id"];
        this.loadEnquiry();
      }
    });
    this.route.queryParams.subscribe((params) => {
      if (params["enquiry_id"]) {
        this.loadEnquiry(+params["enquiry_id"]);
      }
    });
    this.loadClasses();
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }
  loadEnquiry(id) {
    const enquiryId = id || this.enquiryId;
    if (!enquiryId)
      return;
    this.isLoading = true;
    this.enquiryService.getEnquiry(enquiryId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          const enquiry = response.data.enquiry;
          this.enquiryForm.patchValue({
            student_name: enquiry.student_name,
            parent_name: enquiry.parent_name,
            mobile: enquiry.mobile,
            email: enquiry.email,
            address: enquiry.address,
            interested_class_id: enquiry.interested_class_id,
            enquiry_source: enquiry.enquiry_source,
            enquiry_date: enquiry.enquiry_date,
            follow_up_date: enquiry.follow_up_date,
            follow_up_notes: enquiry.follow_up_notes,
            remarks: enquiry.remarks
          });
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading enquiry", "error");
      }
    });
  }
  onSubmit() {
    if (this.enquiryForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    const formData = this.enquiryForm.value;
    if (this.isEditMode && this.enquiryId) {
      this.enquiryService.updateEnquiry(this.enquiryId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Enquiry updated successfully", "success");
            this.router.navigate(["/app/enquiries"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error updating enquiry", "error");
        }
      });
    } else {
      this.enquiryService.createEnquiry(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Enquiry created successfully", "success");
            this.router.navigate(["/app/enquiries"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error creating enquiry", "error");
        }
      });
    }
  }
  static \u0275fac = function EnquiryCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnquiryCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EnquiryService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnquiryCreateComponent, selectors: [["app-enquiry-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 97, vars: 9, consts: [[1, "enquiry-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "student_name", 1, "form-control"], ["type", "text", "formControlName", "parent_name", 1, "form-control"], ["type", "tel", "formControlName", "mobile", "maxlength", "10", 1, "form-control"], [1, "form-text"], ["type", "email", "formControlName", "email", 1, "form-control"], [1, "form-group", "full-width"], ["formControlName", "address", "rows", "3", 1, "form-control"], ["formControlName", "interested_class_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "enquiry_source", 1, "form-control"], ["value", "walk-in"], ["value", "online"], ["value", "referral"], ["type", "date", "formControlName", "enquiry_date", 1, "form-control"], ["type", "date", "formControlName", "follow_up_date", 1, "form-control"], ["formControlName", "follow_up_notes", "rows", "3", 1, "form-control"], ["formControlName", "remarks", "rows", "2", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-save", 4, "ngIf"], [4, "ngIf"], [1, "bi", "bi-save"]], template: function EnquiryCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function EnquiryCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/enquiries"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Enquiries ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function EnquiryCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "h3");
      \u0275\u0275text(14, "Student Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "label");
      \u0275\u0275text(18, "Student Name ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 10)(23, "label");
      \u0275\u0275text(24, "Parent Name ");
      \u0275\u0275elementStart(25, "span", 11);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9)(29, "div", 10)(30, "label");
      \u0275\u0275text(31, "Mobile ");
      \u0275\u0275elementStart(32, "span", 11);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "input", 14);
      \u0275\u0275elementStart(35, "small", 15);
      \u0275\u0275text(36, "10 digit mobile number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 10)(38, "label");
      \u0275\u0275text(39, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 17)(43, "label");
      \u0275\u0275text(44, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "textarea", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 8)(47, "h3");
      \u0275\u0275text(48, "Enquiry Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 9)(50, "div", 10)(51, "label");
      \u0275\u0275text(52, "Interested Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "select", 19)(54, "option", 20);
      \u0275\u0275text(55, "Select Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, EnquiryCreateComponent_option_56_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 10)(58, "label");
      \u0275\u0275text(59, "Enquiry Source ");
      \u0275\u0275elementStart(60, "span", 11);
      \u0275\u0275text(61, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "select", 22)(63, "option", 23);
      \u0275\u0275text(64, "Walk-in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "option", 24);
      \u0275\u0275text(66, "Online");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "option", 25);
      \u0275\u0275text(68, "Referral");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 10)(70, "label");
      \u0275\u0275text(71, "Enquiry Date ");
      \u0275\u0275elementStart(72, "span", 11);
      \u0275\u0275text(73, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 9)(76, "div", 10)(77, "label");
      \u0275\u0275text(78, "Follow-up Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "input", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 9)(81, "div", 17)(82, "label");
      \u0275\u0275text(83, "Follow-up Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "textarea", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 9)(86, "div", 17)(87, "label");
      \u0275\u0275text(88, "Remarks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "textarea", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 30)(91, "button", 31);
      \u0275\u0275listener("click", function EnquiryCreateComponent_Template_button_click_91_listener() {
        return ctx.router.navigate(["/app/enquiries"]);
      });
      \u0275\u0275text(92, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 32);
      \u0275\u0275template(94, EnquiryCreateComponent_i_94_Template, 1, 0, "i", 33)(95, EnquiryCreateComponent_span_95_Template, 2, 0, "span", 34)(96, EnquiryCreateComponent_span_96_Template, 2, 1, "span", 34);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "Edit" : "Create", " Enquiry");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update enquiry details" : "Add a new student enquiry");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.enquiryForm);
      \u0275\u0275advance(43);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(37);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n.enquiry-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.enquiry-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=enquiry-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnquiryCreateComponent, { className: "EnquiryCreateComponent", filePath: "src\\app\\modules\\enquiries\\enquiry-create\\enquiry-create.component.ts", lineNumber: 16 });
})();
export {
  EnquiryCreateComponent
};
//# sourceMappingURL=chunk-OBCNQF4Y.js.map
