import {
  UniformFineService
} from "./chunk-DJD7FSNA.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
import "./chunk-TXDUYLVM.js";

// src/app/modules/uniform-fines/uniform-fine-create/uniform-fine-create.component.ts
function UniformFineCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
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
function UniformFineCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Fine date is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Amount is required and must be greater than 0 ");
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label");
    \u0275\u0275text(2, "Payment Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 36);
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Description is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function UniformFineCreateComponent_div_6_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Fine");
  }
}
function UniformFineCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function UniformFineCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Fine Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UniformFineCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UniformFineCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Fine Date ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275template(22, UniformFineCreateComponent_div_6_div_22_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10)(24, "label");
    \u0275\u0275text(25, "fine Type ");
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 17)(29, "option", 18);
    \u0275\u0275text(30, "Uniform Damage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 19);
    \u0275\u0275text(32, "Uniform Loss");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 20);
    \u0275\u0275text(34, "Uniform Misuse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 21);
    \u0275\u0275text(36, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 10)(38, "label");
    \u0275\u0275text(39, "Amount ");
    \u0275\u0275elementStart(40, "span", 11);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(42, "input", 22);
    \u0275\u0275template(43, UniformFineCreateComponent_div_6_div_43_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 10)(45, "label");
    \u0275\u0275text(46, "Status ");
    \u0275\u0275elementStart(47, "span", 11);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "select", 23)(50, "option", 24);
    \u0275\u0275text(51, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 25);
    \u0275\u0275text(53, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 26);
    \u0275\u0275text(55, "Waived");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, UniformFineCreateComponent_div_6_div_56_Template, 4, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 10)(58, "label");
    \u0275\u0275text(59, "Description ");
    \u0275\u0275elementStart(60, "span", 11);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(62, "textarea", 28);
    \u0275\u0275template(63, UniformFineCreateComponent_div_6_div_63_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 10)(65, "label");
    \u0275\u0275text(66, "Violation type");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 30)(69, "button", 31);
    \u0275\u0275listener("click", function UniformFineCreateComponent_div_6_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(70, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 32);
    \u0275\u0275template(72, UniformFineCreateComponent_div_6_span_72_Template, 2, 0, "span", 33)(73, UniformFineCreateComponent_div_6_span_73_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.fineForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.fineForm.get("person_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.fineForm.get("person_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.fineForm.get("person_id")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.fineForm.get("person_id")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_5_0 = ctx_r1.fineForm.get("fine_date")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.fineForm.get("fine_date")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.fineForm.get("fine_date")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.fineForm.get("fine_date")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.fineForm.get("fine_amount")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.fineForm.get("fine_amount")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.fineForm.get("fine_amount")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.fineForm.get("fine_amount")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.fineForm.get("status")) == null ? null : tmp_9_0.value) === "paid");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.fineForm.get("description")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.fineForm.get("description")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.fineForm.get("description")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.fineForm.get("description")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.fineForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function UniformFineCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementEnd();
  }
}
var UniformFineCreateComponent = class _UniformFineCreateComponent {
  fb;
  route;
  router;
  uniformFineService;
  studentService;
  toastService;
  fineForm;
  isEditMode = false;
  fineId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  constructor(fb, route, router, uniformFineService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.uniformFineService = uniformFineService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.fineForm = this.fb.group({
      person_id: [null, Validators.required],
      fine_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      fine_type: ["student", Validators.required],
      violation_type: [""],
      fine_amount: [null, [Validators.required, Validators.min(0)]],
      description: ["", Validators.required],
      barcode_scanned: [""],
      status: ["pending", Validators.required],
      payment_date: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.fineId = +params["id"];
        this.loadFine();
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
  loadFine() {
    if (!this.fineId)
      return;
    this.isLoading = true;
    this.uniformFineService.getUniformFines({ fine_id: this.fineId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.fines?.length > 0) {
          const fine = response.data.fines[0];
          this.fineForm.patchValue({
            person_id: fine.person_id,
            fine_date: fine.fine_date,
            fine_type: fine.fine_type,
            violation_type: fine.violation_type || "",
            fine_amount: fine.fine_amount,
            description: fine.remarks,
            barcode_scanned: fine.barcode_scanned || "",
            status: fine.status,
            payment_date: fine.payment_date || ""
          });
        } else {
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load fine details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.fineForm.invalid) {
      this.fineForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = {
      fine_id: this.fineId,
      person_id: this.fineForm.value.person_id,
      fine_type: this.fineForm.value.fine_type,
      fine_amount: this.fineForm.value.fine_amount,
      description: this.fineForm.value.description,
      fine_date: this.fineForm.value.fine_date,
      status: this.fineForm.value.status,
      violation_type: this.fineForm.value.violation_type,
      barcode_scanned: this.fineForm.value.barcode_scanned,
      payment_date: this.fineForm.value.payment_date || null
    };
    if (this.isEditMode && this.fineId) {
      this.uniformFineService.updateUniformFine(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Uniform fine updated successfully");
            this.router.navigate(["/app/uniform-fines"]);
            this.loadFine();
          } else {
            this.toastService.error(response.message || "Failed to update fine");
          }
          this.isSaving = false;
        },
        error: (err) => {
          this.toastService.error("Failed to update fine");
          this.isSaving = false;
        }
      });
    } else {
      this.uniformFineService.createUniformFine(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Uniform fine created successfully");
            this.router.navigate(["/app/uniform-fines"]);
          } else {
            this.toastService.error(response.message || "Failed to create fine");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create fine");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/uniform-fines"]);
  }
  static \u0275fac = function UniformFineCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformFineCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UniformFineService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UniformFineCreateComponent, selectors: [["app-uniform-fine-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "uniform-fine-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "person_id", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "fine_date", 1, "form-control"], ["formControlName", "fine_type", 1, "form-control"], ["value", "uniform_damage"], ["value", "uniform_loss"], ["value", "uniform_misuse"], ["value", "other"], ["type", "number", "formControlName", "fine_amount", "min", "0", "step", "0.01", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "pending"], ["value", "paid"], ["value", "waived"], ["class", "form-group", 4, "ngIf"], ["formControlName", "description", "rows", "4", "placeholder", "Enter fine description", 1, "form-control"], ["type", "text", "formControlName", "violation_type", "placeholder", "e.g. Shirt lost in playground", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [3, "value"], [1, "invalid-feedback"], ["type", "date", "formControlName", "payment_date", 1, "form-control"], [1, "loading-spinner"], [1, "spinner"]], template: function UniformFineCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, UniformFineCreateComponent_div_6_Template, 74, 19, "div", 4)(7, UniformFineCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Uniform Fine" : "Create Uniform Fine");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update fine details" : "Create a new uniform fine for a student");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.uniform-fine-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.uniform-fine-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=uniform-fine-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UniformFineCreateComponent, { className: "UniformFineCreateComponent", filePath: "src\\app\\modules\\uniform-fines\\uniform-fine-create\\uniform-fine-create.component.ts", lineNumber: 16 });
})();
export {
  UniformFineCreateComponent
};
//# sourceMappingURL=chunk-WKDKJCWZ.js.map
