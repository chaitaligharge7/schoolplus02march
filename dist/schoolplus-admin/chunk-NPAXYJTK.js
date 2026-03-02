import {
  UniformDistributionService
} from "./chunk-KEVWHRDG.js";
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/uniform-distribution/uniform-distribution-create/uniform-distribution-create.component.ts
var _c0 = (a0) => ({ "is-invalid": a0 });
function UniformDistributionCreateComponent_div_6_option_14_Template(rf, ctx) {
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
function UniformDistributionCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Uniform type is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Size is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Quantity must be at least 1 ");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Distribution date is required ");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function UniformDistributionCreateComponent_div_6_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Distribute", " Uniform");
  }
}
function UniformDistributionCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function UniformDistributionCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Distribution Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UniformDistributionCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, UniformDistributionCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Uniform Type ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 17);
    \u0275\u0275text(23, "Select Uniform Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Shirt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 19);
    \u0275\u0275text(27, "Pant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 20);
    \u0275\u0275text(29, "Skirt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 21);
    \u0275\u0275text(31, "Tie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 22);
    \u0275\u0275text(33, "Blazer");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, UniformDistributionCreateComponent_div_6_div_34_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 10)(36, "label");
    \u0275\u0275text(37, "Uniform Size ");
    \u0275\u0275elementStart(38, "span", 11);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 23)(41, "option", 24);
    \u0275\u0275text(42, "Select Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 25);
    \u0275\u0275text(44, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 26);
    \u0275\u0275text(46, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 27);
    \u0275\u0275text(48, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 28);
    \u0275\u0275text(50, "XL");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, UniformDistributionCreateComponent_div_6_div_51_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 10)(53, "label");
    \u0275\u0275text(54, "Quantity ");
    \u0275\u0275elementStart(55, "span", 11);
    \u0275\u0275text(56, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "input", 29);
    \u0275\u0275template(58, UniformDistributionCreateComponent_div_6_div_58_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 10)(60, "label");
    \u0275\u0275text(61, "Distribution Date ");
    \u0275\u0275elementStart(62, "span", 11);
    \u0275\u0275text(63, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(64, "input", 30);
    \u0275\u0275template(65, UniformDistributionCreateComponent_div_6_div_65_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 10)(67, "label");
    \u0275\u0275text(68, "Status ");
    \u0275\u0275elementStart(69, "span", 11);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "select", 31)(72, "option", 32);
    \u0275\u0275text(73, "Distributed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 33);
    \u0275\u0275text(75, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 34);
    \u0275\u0275text(77, "Returned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "option", 35);
    \u0275\u0275text(79, " not Returned");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 10)(81, "label");
    \u0275\u0275text(82, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "textarea", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 37)(85, "button", 38);
    \u0275\u0275listener("click", function UniformDistributionCreateComponent_div_6_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(86, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "button", 39);
    \u0275\u0275template(88, UniformDistributionCreateComponent_div_6_span_88_Template, 2, 0, "span", 40)(89, UniformDistributionCreateComponent_div_6_span_89_Template, 2, 1, "span", 40);
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
    \u0275\u0275property("formGroup", ctx_r1.distributionForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c0, ((tmp_6_0 = ctx_r1.distributionForm.get("uniform_type")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.distributionForm.get("uniform_type")) == null ? null : tmp_6_0.touched)));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.distributionForm.get("uniform_type")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.distributionForm.get("uniform_type")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.distributionForm.get("uniform_size")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.distributionForm.get("uniform_size")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.distributionForm.get("uniform_size")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.distributionForm.get("uniform_size")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.distributionForm.get("quantity")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.distributionForm.get("quantity")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.distributionForm.get("quantity")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.distributionForm.get("quantity")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.distributionForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function UniformDistributionCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementEnd();
  }
}
var UniformDistributionCreateComponent = class _UniformDistributionCreateComponent {
  fb;
  route;
  router;
  uniformDistributionService;
  studentService;
  toastService;
  distributionForm;
  isEditMode = false;
  distributionId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  constructor(fb, route, router, uniformDistributionService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.uniformDistributionService = uniformDistributionService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.distributionForm = this.fb.group({
      student_id: [null, Validators.required],
      uniform_type: ["shirt", Validators.required],
      uniform_size: ["", Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      distribution_date: [this.getTodayDate(), Validators.required],
      return_status: ["distributed", Validators.required],
      remarks: [""]
    });
  }
  getTodayDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.distributionId = +params["id"];
        this.loadDistribution();
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
      },
      error: () => {
        this.toastService.error("Failed to load students");
      }
    });
  }
  loadDistribution() {
    if (!this.distributionId)
      return;
    this.isLoading = true;
    this.uniformDistributionService.getDistributions({
      distribution_id: this.distributionId,
      t: (/* @__PURE__ */ new Date()).getTime()
    }).subscribe({
      next: (response) => {
        this.isLoading = false;
        const distribution = response.data?.distributions?.find((d) => +d.distribution_id === this.distributionId);
        if (!distribution) {
          this.toastService.error("Distribution not found");
          return;
        }
        this.distributionForm.patchValue({
          student_id: distribution.student_id,
          uniform_type: distribution.uniform_type,
          uniform_size: distribution.uniform_size,
          quantity: distribution.quantity,
          distribution_date: distribution.distribution_date?.split("T")[0] || "",
          return_status: distribution.return_status,
          remarks: distribution.remarks ?? ""
        });
      },
      error: () => {
        this.isLoading = false;
        this.toastService.error("Failed to load distribution details");
      }
    });
  }
  markAsReturned(distribution) {
    if (!distribution || distribution.return_status !== "distributed")
      return;
    this.uniformDistributionService.updateDistribution(distribution.distribution_id, {
      return_status: "returned",
      return_date: this.getTodayDate()
    }).subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.toastService.success("Uniform marked as returned");
          distribution.return_status = "returned";
          distribution.return_date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        } else {
          this.toastService.error(res.message || "Failed to mark as returned");
        }
      },
      error: () => this.toastService.error("Failed to mark as returned")
    });
  }
  onSubmit() {
    if (this.distributionForm.invalid) {
      this.distributionForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.distributionForm.value;
    if (this.isEditMode && this.distributionId) {
      this.uniformDistributionService.updateDistribution(this.distributionId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.success("Uniform distribution updated successfully");
            this.router.navigate(["/app/uniform-distribution"], { replaceUrl: true });
            const updatedDistribution = response.data;
            if (updatedDistribution) {
              this.distributionForm.patchValue({
                student_id: updatedDistribution.student_id,
                uniform_type: updatedDistribution.uniform_type,
                uniform_size: updatedDistribution.uniform_size,
                quantity: updatedDistribution.quantity,
                distribution_date: updatedDistribution.distribution_date?.split("T")[0] || "",
                return_status: updatedDistribution.return_status,
                remarks: updatedDistribution.remarks ?? ""
              });
            }
          } else {
            this.toastService.error(response.message || "Failed to update distribution");
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error("Failed to update distribution");
        }
      });
    } else {
      this.uniformDistributionService.createDistribution(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.success("Uniform distribution created successfully");
            this.router.navigate(["/app/uniform-distribution"]);
          } else {
            this.toastService.error(response.message || "Failed to create distribution");
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error("Failed to create distribution");
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/uniform-distribution"]);
  }
  static \u0275fac = function UniformDistributionCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformDistributionCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UniformDistributionService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UniformDistributionCreateComponent, selectors: [["app-uniform-distribution-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "uniform-distribution-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "uniform_type", 1, "form-control", 3, "ngClass"], ["value", "", "disabled", ""], ["value", "Shirt"], ["value", "Pant"], ["value", "Skirt"], ["value", "Tie"], ["value", "Blazer"], ["formControlName", "uniform_size", 1, "form-control"], ["value", ""], ["value", "S"], ["value", "M"], ["value", "L"], ["value", "XL"], ["type", "number", "formControlName", "quantity", "min", "1", 1, "form-control"], ["type", "date", "formControlName", "distribution_date", 1, "form-control"], ["formControlName", "return_status", 1, "form-control"], ["value", "distributed"], ["value", "pending"], ["value", "returned"], ["value", "not_returned"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function UniformDistributionCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, UniformDistributionCreateComponent_div_6_Template, 90, 23, "div", 4)(7, UniformDistributionCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Uniform Distribution" : "Distribute Uniform");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update distribution details" : "Record uniform distribution to student");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.uniform-distribution-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.uniform-distribution-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=uniform-distribution-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UniformDistributionCreateComponent, { className: "UniformDistributionCreateComponent", filePath: "src\\app\\modules\\uniform-distribution\\uniform-distribution-create\\uniform-distribution-create.component.ts", lineNumber: 16 });
})();
export {
  UniformDistributionCreateComponent
};
//# sourceMappingURL=chunk-NPAXYJTK.js.map
