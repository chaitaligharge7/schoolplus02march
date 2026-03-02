import {
  ComplaintService
} from "./chunk-JALG77HQ.js";
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

// src/app/modules/complaints/complaint-create/complaint-create.component.ts
function ComplaintCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Complaint title is required ");
    \u0275\u0275elementEnd();
  }
}
function ComplaintCreateComponent_div_6_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
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
function ComplaintCreateComponent_div_6_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Category is required ");
    \u0275\u0275elementEnd();
  }
}
function ComplaintCreateComponent_div_6_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Complainant name is required ");
    \u0275\u0275elementEnd();
  }
}
function ComplaintCreateComponent_div_6_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Description is required ");
    \u0275\u0275elementEnd();
  }
}
function ComplaintCreateComponent_div_6_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ComplaintCreateComponent_div_6_span_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Complaint");
  }
}
function ComplaintCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function ComplaintCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Complaint Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Complaint Title ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, ComplaintCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "label");
    \u0275\u0275text(15, "Category ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 15)(19, "option", 16);
    \u0275\u0275text(20, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ComplaintCreateComponent_div_6_option_21_Template, 2, 2, "option", 17);
    \u0275\u0275elementStart(22, "option", 18);
    \u0275\u0275text(23, "Academic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 19);
    \u0275\u0275text(25, "Infrastructure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 20);
    \u0275\u0275text(27, "Behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 21);
    \u0275\u0275text(29, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ComplaintCreateComponent_div_6_div_30_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "label");
    \u0275\u0275text(33, "Complainant Type ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 22)(37, "option", 23);
    \u0275\u0275text(38, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 24);
    \u0275\u0275text(40, "Parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 25);
    \u0275\u0275text(42, "Staff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 21);
    \u0275\u0275text(44, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 14)(46, "label");
    \u0275\u0275text(47, "Complainant Name ");
    \u0275\u0275elementStart(48, "span", 11);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "input", 26);
    \u0275\u0275template(51, ComplaintCreateComponent_div_6_div_51_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 14)(53, "label");
    \u0275\u0275text(54, "Priority ");
    \u0275\u0275elementStart(55, "span", 11);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "select", 27)(58, "option", 28);
    \u0275\u0275text(59, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 29);
    \u0275\u0275text(61, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 30);
    \u0275\u0275text(63, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 31);
    \u0275\u0275text(65, "Urgent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 14)(67, "label");
    \u0275\u0275text(68, "Status ");
    \u0275\u0275elementStart(69, "span", 11);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "select", 32)(72, "option", 33);
    \u0275\u0275text(73, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 34);
    \u0275\u0275text(75, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 35);
    \u0275\u0275text(77, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 36);
    \u0275\u0275text(79, "Closed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 14)(81, "label");
    \u0275\u0275text(82, "Description ");
    \u0275\u0275elementStart(83, "span", 11);
    \u0275\u0275text(84, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(85, "textarea", 37);
    \u0275\u0275template(86, ComplaintCreateComponent_div_6_div_86_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 14)(88, "label");
    \u0275\u0275text(89, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "textarea", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 39)(92, "button", 40);
    \u0275\u0275listener("click", function ComplaintCreateComponent_div_6_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(93, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "button", 41);
    \u0275\u0275template(95, ComplaintCreateComponent_div_6_span_95_Template, 2, 0, "span", 42)(96, ComplaintCreateComponent_div_6_span_96_Template, 2, 1, "span", 42);
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.complaintForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.complaintForm.get("complaint_title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.complaintForm.get("complaint_title")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.complaintForm.get("complaint_title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.complaintForm.get("complaint_title")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.complaintForm.get("complaint_category")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.complaintForm.get("complaint_category")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.complaintForm.get("complaint_category")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.complaintForm.get("complaint_category")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.complaintForm.get("complainant_name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.complaintForm.get("complainant_name")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.complaintForm.get("complainant_name")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.complaintForm.get("complainant_name")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(34);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.complaintForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function ComplaintCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementEnd();
  }
}
var ComplaintCreateComponent = class _ComplaintCreateComponent {
  fb;
  route;
  router;
  complaintService;
  toastService;
  complaintForm;
  isEditMode = false;
  complaintId = null;
  isLoading = false;
  isSaving = false;
  categories = [];
  constructor(fb, route, router, complaintService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.complaintService = complaintService;
    this.toastService = toastService;
    this.complaintForm = this.fb.group({
      complaint_title: ["", Validators.required],
      complaint_category: ["", Validators.required],
      complaint_description: ["", Validators.required],
      complainant_name: ["", Validators.required],
      complainant_type: ["student", Validators.required],
      complainant_id: [null],
      priority: ["medium", Validators.required],
      status: ["open", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.complaintId = +params["id"];
        this.loadComplaint();
      }
    });
    this.loadCategories();
  }
  loadCategories() {
    this.complaintService.getComplaintCategories().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.categories = response.data.categories || [];
        }
      }
    });
  }
  loadComplaint() {
    if (!this.complaintId)
      return;
    this.isLoading = true;
    this.complaintService.getComplaints({ complaint_id: this.complaintId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.complaints?.length > 0) {
          const complaint = response.data.complaints[0];
          this.complaintForm.patchValue({
            complaint_title: complaint.complaint_title,
            complaint_category: complaint.complaint_category,
            complaint_description: complaint.complaint_description,
            complainant_name: complaint.complainant_name,
            complainant_type: complaint.complainant_type,
            complainant_id: complaint.complainant_id,
            priority: complaint.priority,
            status: complaint.status,
            remarks: complaint.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load complaint details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.complaintForm.invalid) {
      this.complaintForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.complaintForm.value;
    if (this.isEditMode && this.complaintId) {
      formData.complaint_id = this.complaintId;
    }
    this.complaintService.createComplaint(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Complaint ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/complaints"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} complaint`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} complaint`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/complaints"]);
  }
  static \u0275fac = function ComplaintCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComplaintCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ComplaintService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplaintCreateComponent, selectors: [["app-complaint-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "complaint-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "complaint_title", "placeholder", "Enter complaint title", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["formControlName", "complaint_category", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "academic"], ["value", "infrastructure"], ["value", "behavior"], ["value", "other"], ["formControlName", "complainant_type", 1, "form-control"], ["value", "student"], ["value", "parent"], ["value", "staff"], ["type", "text", "formControlName", "complainant_name", "placeholder", "Enter complainant name", 1, "form-control"], ["formControlName", "priority", 1, "form-control"], ["value", "low"], ["value", "medium"], ["value", "high"], ["value", "urgent"], ["formControlName", "status", 1, "form-control"], ["value", "open"], ["value", "in_progress"], ["value", "resolved"], ["value", "closed"], ["formControlName", "complaint_description", "rows", "6", "placeholder", "Enter detailed complaint description", 1, "form-control"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function ComplaintCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ComplaintCreateComponent_div_6_Template, 97, 19, "div", 4)(7, ComplaintCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Complaint" : "Create Complaint");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update complaint details" : "Register a new complaint");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.complaint-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.complaint-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=complaint-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplaintCreateComponent, { className: "ComplaintCreateComponent", filePath: "src\\app\\modules\\complaints\\complaint-create\\complaint-create.component.ts", lineNumber: 15 });
})();
export {
  ComplaintCreateComponent
};
//# sourceMappingURL=chunk-ZOPY53JI.js.map
