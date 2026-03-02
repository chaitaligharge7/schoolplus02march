import {
  PromotionService
} from "./chunk-HBRFY3YG.js";
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
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
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
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/promotions/promotion-create/promotion-create.component.ts
function PromotionCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function PromotionCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " From academic year is required ");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r4 = ctx.$implicit;
    \u0275\u0275property("value", year_r4.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r4.academic_year_name, " ");
  }
}
function PromotionCreateComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " To academic year is required ");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r5 = ctx.$implicit;
    \u0275\u0275property("value", cls_r5.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r5.class_name, " ");
  }
}
function PromotionCreateComponent_div_6_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " From class is required ");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r6 = ctx.$implicit;
    \u0275\u0275property("value", cls_r6.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r6.class_name, " ");
  }
}
function PromotionCreateComponent_div_6_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " To class is required ");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, " Promotion date is required ");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_div_53_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 31)(2, "input", 32);
    \u0275\u0275listener("change", function PromotionCreateComponent_div_6_div_53_div_7_Template_input_change_2_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStudent(i_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const student_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("formControl", ctx_r1.studentsArray.at(i_r8).get("promote"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", student_r9.first_name, " ", student_r9.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r9.admission_number);
  }
}
function PromotionCreateComponent_div_6_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 26)(2, "h3");
    \u0275\u0275text(3, "Select Students to Promote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275template(7, PromotionCreateComponent_div_6_div_53_div_7_Template, 8, 4, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getSelectedCount(), " selected");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
  }
}
function PromotionCreateComponent_div_6_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Promoting...");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Promote Students");
    \u0275\u0275elementEnd();
  }
}
function PromotionCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function PromotionCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Promotion Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "From Academic Year ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PromotionCreateComponent_div_6_option_14_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, PromotionCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "To Academic Year ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 13);
    \u0275\u0275text(23, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, PromotionCreateComponent_div_6_option_24_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PromotionCreateComponent_div_6_div_25_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10)(27, "label");
    \u0275\u0275text(28, "From Class ");
    \u0275\u0275elementStart(29, "span", 11);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "select", 17);
    \u0275\u0275listener("change", function PromotionCreateComponent_div_6_Template_select_change_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFromClassChange());
    });
    \u0275\u0275elementStart(32, "option", 13);
    \u0275\u0275text(33, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, PromotionCreateComponent_div_6_option_34_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, PromotionCreateComponent_div_6_div_35_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10)(37, "label");
    \u0275\u0275text(38, "To Class ");
    \u0275\u0275elementStart(39, "span", 11);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "select", 18)(42, "option", 13);
    \u0275\u0275text(43, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, PromotionCreateComponent_div_6_option_44_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, PromotionCreateComponent_div_6_div_45_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 10)(47, "label");
    \u0275\u0275text(48, "Promotion Date ");
    \u0275\u0275elementStart(49, "span", 11);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 19);
    \u0275\u0275template(52, PromotionCreateComponent_div_6_div_52_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, PromotionCreateComponent_div_6_div_53_Template, 8, 2, "div", 20);
    \u0275\u0275elementStart(54, "div", 21)(55, "button", 22);
    \u0275\u0275listener("click", function PromotionCreateComponent_div_6_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(56, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 23);
    \u0275\u0275template(58, PromotionCreateComponent_div_6_span_58_Template, 2, 0, "span", 24)(59, PromotionCreateComponent_div_6_span_59_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.promotionForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.promotionForm.get("from_academic_year_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.promotionForm.get("from_academic_year_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.promotionForm.get("from_academic_year_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.promotionForm.get("from_academic_year_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.promotionForm.get("to_academic_year_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.promotionForm.get("to_academic_year_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.promotionForm.get("to_academic_year_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.promotionForm.get("to_academic_year_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.promotionForm.get("from_class_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.promotionForm.get("from_class_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.promotionForm.get("from_class_id")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.promotionForm.get("from_class_id")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r1.promotionForm.get("to_class_id")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.promotionForm.get("to_class_id")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r1.promotionForm.get("to_class_id")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.promotionForm.get("to_class_id")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_18_0 = ctx_r1.promotionForm.get("promotion_date")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r1.promotionForm.get("promotion_date")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_19_0 = ctx_r1.promotionForm.get("promotion_date")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r1.promotionForm.get("promotion_date")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.students.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.promotionForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function PromotionCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 35);
    \u0275\u0275elementEnd();
  }
}
var PromotionCreateComponent = class _PromotionCreateComponent {
  fb;
  route;
  router;
  promotionService;
  academicYearService;
  classService;
  studentService;
  toastService;
  promotionForm;
  isEditMode = false;
  promotionId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  students = [];
  selectedClassId = null;
  constructor(fb, route, router, promotionService, academicYearService, classService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.promotionService = promotionService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.promotionForm = this.fb.group({
      from_academic_year_id: [null, Validators.required],
      to_academic_year_id: [null, Validators.required],
      from_class_id: [null, Validators.required],
      to_class_id: [null, Validators.required],
      promotion_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      students: this.fb.array([])
    });
  }
  get studentsArray() {
    return this.promotionForm.get("students");
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.promotionId = +params["id"];
        this.loadPromotion();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
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
  onFromClassChange() {
    const classId = this.promotionForm.get("from_class_id")?.value;
    if (classId) {
      this.selectedClassId = classId;
      this.loadStudents(classId);
    }
  }
  loadStudents(classId) {
    this.studentService.getStudents({ class_id: classId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
          this.updateStudentsArray();
        }
      }
    });
  }
  updateStudentsArray() {
    this.studentsArray.clear();
    this.students.forEach((student) => {
      this.studentsArray.push(this.fb.group({
        student_id: [student.student_id],
        promote: [true]
      }));
    });
  }
  getSelectedCount() {
    return this.studentsArray.value.filter((s) => s.promote).length;
  }
  toggleStudent(index) {
    const studentControl = this.studentsArray.at(index);
    studentControl.patchValue({
      promote: !studentControl.value.promote
    });
  }
  loadPromotion() {
    if (!this.promotionId)
      return;
    this.isLoading = true;
    this.promotionService.getPromotions({ promotion_id: this.promotionId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.promotions?.length > 0) {
          const promotion = response.data.promotions[0];
          this.promotionForm.patchValue({
            from_academic_year_id: promotion.from_academic_year_id,
            to_academic_year_id: promotion.to_academic_year_id,
            from_class_id: promotion.from_class_id,
            to_class_id: promotion.to_class_id,
            promotion_date: promotion.promotion_date
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load promotion details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.promotionForm.invalid) {
      this.promotionForm.markAllAsTouched();
      return;
    }
    const selectedStudents = this.studentsArray.value.filter((s, index) => s.promote).map((s) => s.student_id);
    if (selectedStudents.length === 0) {
      this.toastService.warning("Please select at least one student to promote");
      return;
    }
    this.isSaving = true;
    const formData = {
      from_class_id: this.promotionForm.value.from_class_id,
      to_class_id: this.promotionForm.value.to_class_id,
      academic_year_id: this.promotionForm.value.to_academic_year_id,
      // <- backend expects this
      student_ids: selectedStudents,
      promotion_type: "promote"
    };
    if (selectedStudents.length === 1) {
      formData.student_id = selectedStudents[0];
      delete formData.student_ids;
    }
    if (this.isEditMode && this.promotionId) {
      formData.promotion_id = this.promotionId;
    }
    this.promotionService.createPromotion(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Promoted ${selectedStudents.length} students successfully`);
          this.router.navigate(["/app/promotions"]);
        } else {
          this.toastService.error(response.message || "Failed to promote students");
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error("Failed to promote students");
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/promotions"]);
  }
  static \u0275fac = function PromotionCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromotionCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PromotionService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromotionCreateComponent, selectors: [["app-promotion-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "promotion-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "from_academic_year_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "to_academic_year_id", 1, "form-control"], ["formControlName", "from_class_id", 1, "form-control", 3, "change"], ["formControlName", "to_class_id", 1, "form-control"], ["type", "date", "formControlName", "promotion_date", 1, "form-control"], ["class", "form-section", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "section-header"], [1, "selected-count"], [1, "students-grid"], ["class", "student-checkbox", 4, "ngFor", "ngForOf"], [1, "student-checkbox"], [1, "checkbox-label"], ["type", "checkbox", 3, "change", "formControl"], [1, "student-info"], [1, "loading-spinner"], [1, "spinner"]], template: function PromotionCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, PromotionCreateComponent_div_6_Template, 60, 29, "div", 4)(7, PromotionCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Promotion" : "Promote Students");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update promotion details" : "Promote students to next class/academic year");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName], styles: ["\n\n.promotion-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 12px;\n  margin-top: 16px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .student-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .student-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #1a1a1a;\n  margin-bottom: 4px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .students-grid[_ngcontent-%COMP%]   .student-checkbox[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   .student-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.promotion-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=promotion-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromotionCreateComponent, { className: "PromotionCreateComponent", filePath: "src\\app\\modules\\promotions\\promotion-create\\promotion-create.component.ts", lineNumber: 18 });
})();
export {
  PromotionCreateComponent
};
//# sourceMappingURL=chunk-XVCL3H3L.js.map
