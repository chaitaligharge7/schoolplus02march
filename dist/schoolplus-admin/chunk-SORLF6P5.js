import {
  RteStudentService
} from "./chunk-XWDKP3DZ.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/rte-students/rte-student-create/rte-student-create.component.ts
function RteStudentCreateComponent_div_6_option_14_Template(rf, ctx) {
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
function RteStudentCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function RteStudentCreateComponent_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " RTE number is required ");
    \u0275\u0275elementEnd();
  }
}
function RteStudentCreateComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " RTE category is required ");
    \u0275\u0275elementEnd();
  }
}
function RteStudentCreateComponent_div_6_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r4 = ctx.$implicit;
    \u0275\u0275property("value", cls_r4.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cls_r4.class_name);
  }
}
function RteStudentCreateComponent_div_6_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Admission date is required ");
    \u0275\u0275elementEnd();
  }
}
function RteStudentCreateComponent_div_6_span_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function RteStudentCreateComponent_div_6_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Register", " RTE Student");
  }
}
function RteStudentCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function RteStudentCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Student Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RteStudentCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, RteStudentCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "RTE Number ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275template(22, RteStudentCreateComponent_div_6_div_22_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 10)(24, "label");
    \u0275\u0275text(25, "RTE Category ");
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "select", 17)(29, "option", 18);
    \u0275\u0275text(30, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 19);
    \u0275\u0275text(32, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 20);
    \u0275\u0275text(34, "SC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 21);
    \u0275\u0275text(36, "ST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 22);
    \u0275\u0275text(38, "OBC");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, RteStudentCreateComponent_div_6_div_39_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 23)(44, "option", 13);
    \u0275\u0275text(45, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, RteStudentCreateComponent_div_6_option_46_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 10)(48, "label");
    \u0275\u0275text(49, "Admission Date ");
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "input", 24);
    \u0275\u0275template(53, RteStudentCreateComponent_div_6_div_53_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 10)(55, "label");
    \u0275\u0275text(56, "Income Certificate Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 10)(59, "label");
    \u0275\u0275text(60, "Caste Certificate Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 10)(63, "label");
    \u0275\u0275text(64, "Status ");
    \u0275\u0275elementStart(65, "span", 11);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "select", 27)(68, "option", 28);
    \u0275\u0275text(69, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 29);
    \u0275\u0275text(71, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 10)(73, "label");
    \u0275\u0275text(74, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "textarea", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 31)(77, "button", 32);
    \u0275\u0275listener("click", function RteStudentCreateComponent_div_6_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(78, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 33);
    \u0275\u0275template(80, RteStudentCreateComponent_div_6_span_80_Template, 2, 0, "span", 34)(81, RteStudentCreateComponent_div_6_span_81_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.rteForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.rteForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.rteForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.rteForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.rteForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.rteForm.get("rte_number")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.rteForm.get("rte_number")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.rteForm.get("rte_number")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.rteForm.get("rte_number")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.rteForm.get("rte_category")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.rteForm.get("rte_category")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.rteForm.get("rte_category")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.rteForm.get("rte_category")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.rteForm.get("admission_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.rteForm.get("admission_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.rteForm.get("admission_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.rteForm.get("admission_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.rteForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function RteStudentCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementEnd();
  }
}
var RteStudentCreateComponent = class _RteStudentCreateComponent {
  fb;
  route;
  router;
  rteStudentService;
  studentService;
  academicYearService;
  classService;
  toastService;
  rteForm;
  isEditMode = false;
  rteId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  academicYears = [];
  classes = [];
  sections = [];
  constructor(fb, route, router, rteStudentService, studentService, academicYearService, classService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.rteStudentService = rteStudentService;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.rteForm = this.fb.group({
      student_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null],
      section_id: [null],
      rte_number: ["", Validators.required],
      rte_category: ["", Validators.required],
      admission_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      income_certificate_number: [""],
      caste_certificate_number: [""],
      status: ["active", Validators.required],
      remarks: [""],
      quota_type: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.rteId = +params["id"];
      }
    });
    this.loadStudents();
    this.loadAcademicYears();
    this.loadClasses();
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
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.rteForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }
  // loadClasses(): void {
  //   this.classService.getClasses().subscribe({
  //     next: (response) => {
  //       if (response.status === 'success' && response.data) {
  //         this.classes = response.data.classes || [];
  //       }
  //     }
  //   });
  // }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes.map((c) => __spreadProps(__spreadValues({}, c), {
            class_id: Number(c.class_id)
          }));
          if (this.isEditMode && this.rteId) {
            this.loadRteStudent();
          }
        }
      },
      error: () => {
        this.toastService.error("Failed to load classes");
      }
    });
  }
  loadRteStudent() {
    if (!this.rteId)
      return;
    this.isLoading = true;
    this.rteStudentService.getRteStudents({ rte_student_id: this.rteId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.rte_students?.length > 0) {
          const rteStudent = response.data.rte_students[0];
          this.rteForm.patchValue({
            student_id: rteStudent.student_id,
            academic_year_id: rteStudent.academic_year_id,
            class_id: rteStudent.class_id,
            section_id: rteStudent.section_id,
            rte_number: rteStudent.rte_number,
            rte_category: rteStudent.rte_category,
            admission_date: rteStudent.admission_date,
            income_certificate_number: rteStudent.income_certificate_number,
            caste_certificate_number: rteStudent.caste_certificate_number,
            status: rteStudent.status,
            remarks: rteStudent.remarks,
            quota_type: rteStudent.quota_type
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load RTE student details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.rteForm.invalid) {
      this.rteForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.rteForm.value;
    if (this.isEditMode && this.rteId) {
      formData.rte_student_id = this.rteId;
    }
    this.rteStudentService.createRteStudent(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`RTE student record ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/rte-students"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} RTE student`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} RTE student`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/rte-students"]);
  }
  static \u0275fac = function RteStudentCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RteStudentCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RteStudentService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RteStudentCreateComponent, selectors: [["app-rte-student-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "rte-student-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "rte_number", "placeholder", "Enter RTE number", 1, "form-control"], ["formControlName", "rte_category", 1, "form-control"], ["value", ""], ["value", "General"], ["value", "SC"], ["value", "ST"], ["value", "OBC"], ["formControlName", "class_id", 1, "form-control"], ["type", "date", "formControlName", "admission_date", 1, "form-control"], ["type", "text", "formControlName", "income_certificate_number", "placeholder", "Enter income certificate number", 1, "form-control"], ["type", "text", "formControlName", "caste_certificate_number", "placeholder", "Enter caste certificate number", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function RteStudentCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RteStudentCreateComponent_div_6_Template, 82, 21, "div", 4)(7, RteStudentCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit RTE Student" : "Register RTE Student");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update RTE student details" : "Register a student under RTE (Right to Education)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.rte-student-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.rte-student-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=rte-student-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RteStudentCreateComponent, { className: "RteStudentCreateComponent", filePath: "src\\app\\modules\\rte-students\\rte-student-create\\rte-student-create.component.ts", lineNumber: 18 });
})();
export {
  RteStudentCreateComponent
};
//# sourceMappingURL=chunk-SORLF6P5.js.map
