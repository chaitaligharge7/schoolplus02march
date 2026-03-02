import {
  LabService
} from "./chunk-WP5BGVND.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
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

// src/app/modules/lab/lab-practical-create/lab-practical-create.component.ts
function LabPracticalCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Practical name is required ");
    \u0275\u0275elementEnd();
  }
}
function LabPracticalCreateComponent_div_6_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("value", year_r3.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r3.academic_year_name, " ");
  }
}
function LabPracticalCreateComponent_div_6_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r4 = ctx.$implicit;
    \u0275\u0275property("value", cls_r4.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r4.class_name, " ");
  }
}
function LabPracticalCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    \u0275\u0275property("value", subject_r5.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r5.subject_name, " ");
  }
}
function LabPracticalCreateComponent_div_6_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Practical date is required ");
    \u0275\u0275elementEnd();
  }
}
function LabPracticalCreateComponent_div_6_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function LabPracticalCreateComponent_div_6_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Schedule", " Practical");
  }
}
function LabPracticalCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function LabPracticalCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Practical Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Practical Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, LabPracticalCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "label");
    \u0275\u0275text(15, "Academic Year ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 15)(19, "option", 16);
    \u0275\u0275text(20, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, LabPracticalCreateComponent_div_6_option_21_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "label");
    \u0275\u0275text(24, "Class ");
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 18)(28, "option", 16);
    \u0275\u0275text(29, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, LabPracticalCreateComponent_div_6_option_30_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "label");
    \u0275\u0275text(33, "Subject ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 19)(37, "option", 16);
    \u0275\u0275text(38, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, LabPracticalCreateComponent_div_6_option_39_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 14)(41, "label");
    \u0275\u0275text(42, "Practical Date ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 20);
    \u0275\u0275template(46, LabPracticalCreateComponent_div_6_div_46_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 14)(48, "label");
    \u0275\u0275text(49, "Status ");
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "select", 21)(53, "option", 22);
    \u0275\u0275text(54, "Scheduled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 23);
    \u0275\u0275text(56, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 24);
    \u0275\u0275text(58, "Cancelled");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 14)(60, "label");
    \u0275\u0275text(61, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 26)(64, "button", 27);
    \u0275\u0275listener("click", function LabPracticalCreateComponent_div_6_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(65, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 28);
    \u0275\u0275template(67, LabPracticalCreateComponent_div_6_span_67_Template, 2, 0, "span", 29)(68, LabPracticalCreateComponent_div_6_span_68_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.practicalForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.practicalForm.get("practical_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.practicalForm.get("practical_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.practicalForm.get("practical_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.practicalForm.get("practical_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.practicalForm.get("academic_year_id")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.practicalForm.get("academic_year_id")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.practicalForm.get("class_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.practicalForm.get("class_id")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.practicalForm.get("subject_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.practicalForm.get("subject_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.practicalForm.get("practical_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.practicalForm.get("practical_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r1.practicalForm.get("practical_date")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.practicalForm.get("practical_date")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.practicalForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function LabPracticalCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
}
var LabPracticalCreateComponent = class _LabPracticalCreateComponent {
  fb;
  route;
  router;
  labService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  practicalForm;
  isEditMode = false;
  practicalId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  subjects = [];
  constructor(fb, route, router, labService, academicYearService, classService, subjectService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.labService = labService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.practicalForm = this.fb.group({
      practical_name: ["", Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      practical_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      status: ["scheduled", Validators.required],
      description: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.practicalId = +params["id"];
        this.loadPractical();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }
  loadAcademicYears() {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
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
  loadSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }
  loadPractical() {
    if (!this.practicalId)
      return;
    this.isLoading = true;
    this.labService.getLabPracticals({ practical_id: this.practicalId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.practicals?.length > 0) {
          const practical = response.data.practicals[0];
          this.practicalForm.patchValue({
            practical_name: practical.practical_name,
            academic_year_id: practical.academic_year_id,
            class_id: practical.class_id,
            subject_id: practical.subject_id,
            practical_date: practical.practical_date,
            status: practical.status,
            description: practical.description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load lab practical details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.practicalForm.invalid) {
      this.practicalForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.practicalForm.value;
    if (this.isEditMode && this.practicalId) {
      formData.practical_id = this.practicalId;
    }
    this.labService.createLabPractical(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Lab practical ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/lab"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} practical`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} practical`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/lab"]);
  }
  static \u0275fac = function LabPracticalCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabPracticalCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LabService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabPracticalCreateComponent, selectors: [["app-lab-practical-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "lab-practical-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "practical_name", "placeholder", "Enter practical name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["formControlName", "academic_year_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "class_id", 1, "form-control"], ["formControlName", "subject_id", 1, "form-control"], ["type", "date", "formControlName", "practical_date", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "scheduled"], ["value", "completed"], ["value", "cancelled"], ["formControlName", "description", "rows", "4", "placeholder", "Enter practical description", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function LabPracticalCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, LabPracticalCreateComponent_div_6_Template, 69, 23, "div", 4)(7, LabPracticalCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Lab Practical" : "Schedule Lab Practical");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update practical details" : "Schedule a new lab practical");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.lab-practical-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.lab-practical-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=lab-practical-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabPracticalCreateComponent, { className: "LabPracticalCreateComponent", filePath: "src\\app\\modules\\lab\\lab-practical-create\\lab-practical-create.component.ts", lineNumber: 18 });
})();
export {
  LabPracticalCreateComponent
};
//# sourceMappingURL=chunk-PJZ3MUD3.js.map
