import {
  MessComplaintService
} from "./chunk-SDFRYBU3.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/mess-complaints/mess-complaint-create/mess-complaint-create.component.ts
function MessComplaintCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r3 = ctx.$implicit;
    \u0275\u0275property("value", student_r3.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", student_r3.first_name, " ", student_r3.last_name, " (", student_r3.admission_number, ") ");
  }
}
function MessComplaintCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Complaint date is required ");
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Subject is required ");
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Description is required ");
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label");
    \u0275\u0275text(2, "Resolution Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 36);
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label");
    \u0275\u0275text(2, "Resolved Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 37);
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function MessComplaintCreateComponent_div_6_span_74_Template(rf, ctx) {
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
function MessComplaintCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function MessComplaintCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Complaint Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MessComplaintCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MessComplaintCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Complaint Date ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275template(22, MessComplaintCreateComponent_div_6_div_22_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10)(24, "label");
    \u0275\u0275text(25, "Complaint Type ");
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 17)(29, "option", 18);
    \u0275\u0275text(30, "Food Quality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 19);
    \u0275\u0275text(32, "Food Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 20);
    \u0275\u0275text(34, "Hygiene");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 21);
    \u0275\u0275text(36, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 22);
    \u0275\u0275text(38, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 10)(40, "label");
    \u0275\u0275text(41, "Status ");
    \u0275\u0275elementStart(42, "span", 11);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "select", 23)(45, "option", 24);
    \u0275\u0275text(46, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 25);
    \u0275\u0275text(48, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 26);
    \u0275\u0275text(50, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 27);
    \u0275\u0275text(52, "Closed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 10)(54, "label");
    \u0275\u0275text(55, "Subject ");
    \u0275\u0275elementStart(56, "span", 11);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(58, "input", 28);
    \u0275\u0275template(59, MessComplaintCreateComponent_div_6_div_59_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 10)(61, "label");
    \u0275\u0275text(62, "Description ");
    \u0275\u0275elementStart(63, "span", 11);
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(65, "textarea", 29);
    \u0275\u0275template(66, MessComplaintCreateComponent_div_6_div_66_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, MessComplaintCreateComponent_div_6_div_67_Template, 4, 0, "div", 30)(68, MessComplaintCreateComponent_div_6_div_68_Template, 4, 0, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 31)(70, "button", 32);
    \u0275\u0275listener("click", function MessComplaintCreateComponent_div_6_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(71, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 33);
    \u0275\u0275template(73, MessComplaintCreateComponent_div_6_span_73_Template, 2, 0, "span", 34)(74, MessComplaintCreateComponent_div_6_span_74_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.complaintForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.complaintForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.complaintForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.complaintForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.complaintForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.complaintForm.get("complaint_date")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.complaintForm.get("complaint_date")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.complaintForm.get("complaint_date")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.complaintForm.get("complaint_date")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(36);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.complaintForm.get("subject")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.complaintForm.get("subject")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.complaintForm.get("subject")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.complaintForm.get("subject")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.complaintForm.get("description")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.complaintForm.get("complaint_description")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.complaintForm.get("description")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode && ((tmp_12_0 = ctx_r1.complaintForm.get("status")) == null ? null : tmp_12_0.value) === "resolved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode && ((tmp_13_0 = ctx_r1.complaintForm.get("status")) == null ? null : tmp_13_0.value) === "resolved");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.complaintForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function MessComplaintCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
var MessComplaintCreateComponent = class _MessComplaintCreateComponent {
  fb;
  route;
  router;
  messComplaintService;
  studentService;
  toastService;
  complaintForm;
  isEditMode = false;
  complaintId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  constructor(fb, route, router, messComplaintService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.messComplaintService = messComplaintService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.complaintForm = this.fb.group({
      student_id: [null, Validators.required],
      complaint_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      complaint_type: ["food_quality", Validators.required],
      subject: ["", Validators.required],
      complaint_description: ["", Validators.required],
      status: ["pending", Validators.required],
      resolution_notes: [""],
      resolved_at: [""]
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
    this.loadStudents();
  }
  loadStudents() {
    this.studentService.getStudents({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
        }
      }
    });
  }
  loadComplaint() {
    if (!this.complaintId)
      return;
    this.isLoading = true;
    this.messComplaintService.getMessComplaints({ complaint_id: this.complaintId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.complaints?.length > 0) {
          const complaint = response.data.complaints[0];
          this.complaintForm.patchValue({
            student_id: complaint.student_id,
            complaint_date: complaint.complaint_date,
            complaint_type: complaint.complaint_type,
            subject: complaint.subject,
            complaint_description: complaint.complaint_description,
            status: complaint.status,
            resolution_notes: complaint.resolution_notes || "",
            resolved_at: complaint.resolved_at ? complaint.resolved_at.split(" ")[0] : ""
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
    const formData = __spreadValues({}, this.complaintForm.value);
    if (formData.resolved_at) {
      formData.resolved_at = formData.resolved_at + " 00:00:00";
    }
    if (this.isEditMode && this.complaintId) {
      this.messComplaintService.updateMessComplaint(this.complaintId, formData).subscribe({
        next: (response) => {
          this.toastService.success("Mess complaint updated successfully");
          this.router.navigate(["/app/mess-complaints"]);
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update complaint");
          this.isSaving = false;
        }
      });
    } else {
      this.messComplaintService.createMessComplaint(formData).subscribe({
        next: (response) => {
          this.toastService.success("Mess complaint created successfully");
          this.router.navigate(["/app/mess-complaints"]);
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create complaint");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/mess-complaints"]);
  }
  static \u0275fac = function MessComplaintCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessComplaintCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessComplaintService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessComplaintCreateComponent, selectors: [["app-mess-complaint-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "mess-complaint-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "complaint_date", 1, "form-control"], ["formControlName", "complaint_type", 1, "form-control"], ["value", "food_quality"], ["value", "food_quantity"], ["value", "hygiene"], ["value", "service"], ["value", "other"], ["formControlName", "status", 1, "form-control"], ["value", "pending"], ["value", "in_progress"], ["value", "resolved"], ["value", "closed"], ["type", "text", "formControlName", "subject", "placeholder", "Enter complaint subject", 1, "form-control"], ["formControlName", "complaint_description", "rows", "5", "placeholder", "Enter detailed complaint description", 1, "form-control"], ["class", "form-group", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], ["formControlName", "resolution_notes", 1, "form-control"], ["type", "date", "formControlName", "resolved_at", 1, "form-control"], [1, "loading-spinner"], [1, "spinner"]], template: function MessComplaintCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, MessComplaintCreateComponent_div_6_Template, 75, 21, "div", 4)(7, MessComplaintCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Mess Complaint" : "Create Mess Complaint");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update complaint details" : "Create a new mess complaint");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.mess-complaint-create-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.mess-complaint-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=mess-complaint-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessComplaintCreateComponent, { className: "MessComplaintCreateComponent", filePath: "src\\app\\modules\\mess-complaints\\mess-complaint-create\\mess-complaint-create.component.ts", lineNumber: 16 });
})();
export {
  MessComplaintCreateComponent
};
//# sourceMappingURL=chunk-IIPG3I5F.js.map
