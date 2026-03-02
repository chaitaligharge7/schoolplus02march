import {
  UnitTestMarksService
} from "./chunk-5GMQINMQ.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
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
  MaxValidator,
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
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/unit-test-marks/unit-test-marks-create/unit-test-marks-create.component.ts
function UnitTestMarksCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " Test name is required ");
    \u0275\u0275elementEnd();
  }
}
function UnitTestMarksCreateComponent_div_6_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    \u0275\u0275property("value", teacher_r3.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", teacher_r3.first_name, " ", teacher_r3.last_name, " ");
  }
}
function UnitTestMarksCreateComponent_div_6_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
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
function UnitTestMarksCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
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
function UnitTestMarksCreateComponent_div_6_div_56_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275element(7, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "input", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const mark_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", mark_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.students[i_r7] == null ? null : ctx_r1.students[i_r7].first_name, " ", ctx_r1.students[i_r7] == null ? null : ctx_r1.students[i_r7].last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.students[i_r7] == null ? null : ctx_r1.students[i_r7].admission_number);
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (tmp_8_0 = ctx_r1.testForm.get("max_marks")) == null ? null : tmp_8_0.value);
  }
}
function UnitTestMarksCreateComponent_div_6_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Enter Marks for Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Admission Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Marks Obtained");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, UnitTestMarksCreateComponent_div_6_div_56_tr_19_Template, 10, 5, "tr", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.students.length, " students");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.marksArray.controls);
  }
}
function UnitTestMarksCreateComponent_div_6_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p");
    \u0275\u0275text(2, "No students found for the selected class.");
    \u0275\u0275elementEnd()();
  }
}
function UnitTestMarksCreateComponent_div_6_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p");
    \u0275\u0275text(2, "Please select a class to load students and enter marks.");
    \u0275\u0275elementEnd()();
  }
}
function UnitTestMarksCreateComponent_div_6_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function UnitTestMarksCreateComponent_div_6_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Test");
  }
}
function UnitTestMarksCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function UnitTestMarksCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Test Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Test Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, UnitTestMarksCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Teacher ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 14)(19, "option", 15);
    \u0275\u0275text(20, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, UnitTestMarksCreateComponent_div_6_option_21_Template, 2, 3, "option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "label");
    \u0275\u0275text(24, "Class ");
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 17);
    \u0275\u0275listener("change", function UnitTestMarksCreateComponent_div_6_Template_select_change_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClassChange());
    });
    \u0275\u0275elementStart(28, "option", 15);
    \u0275\u0275text(29, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, UnitTestMarksCreateComponent_div_6_option_30_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Subject ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 18)(37, "option", 15);
    \u0275\u0275text(38, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, UnitTestMarksCreateComponent_div_6_option_39_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Test Date ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 10)(47, "label");
    \u0275\u0275text(48, "Max Marks ");
    \u0275\u0275elementStart(49, "span", 11);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(51, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 10)(53, "label");
    \u0275\u0275text(54, "Passing Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(56, UnitTestMarksCreateComponent_div_6_div_56_Template, 20, 2, "div", 22)(57, UnitTestMarksCreateComponent_div_6_div_57_Template, 3, 0, "div", 23)(58, UnitTestMarksCreateComponent_div_6_div_58_Template, 3, 0, "div", 23);
    \u0275\u0275elementStart(59, "div", 24)(60, "button", 25);
    \u0275\u0275listener("click", function UnitTestMarksCreateComponent_div_6_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(61, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 26);
    \u0275\u0275template(63, UnitTestMarksCreateComponent_div_6_span_63_Template, 2, 0, "span", 27)(64, UnitTestMarksCreateComponent_div_6_span_64_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.testForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.testForm.get("test_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.testForm.get("test_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.testForm.get("test_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.testForm.get("test_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.testForm.get("class_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.testForm.get("class_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r1.testForm.get("subject_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.testForm.get("subject_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.testForm.get("test_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.testForm.get("test_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.testForm.get("max_marks")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.testForm.get("max_marks")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.marksArray.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.marksArray.length === 0 && ctx_r1.selectedClassId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedClassId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.testForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function UnitTestMarksCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
var UnitTestMarksCreateComponent = class _UnitTestMarksCreateComponent {
  fb;
  route;
  router;
  unitTestMarksService;
  academicYearService;
  classService;
  teacherService;
  subjectService;
  studentService;
  toastService;
  testForm;
  isEditMode = false;
  testId = null;
  isLoading = false;
  isSaving = false;
  classes = [];
  subjects = [];
  students = [];
  teachers = [];
  selectedClassId = null;
  constructor(fb, route, router, unitTestMarksService, academicYearService, classService, teacherService, subjectService, studentService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.unitTestMarksService = unitTestMarksService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.teacherService = teacherService;
    this.subjectService = subjectService;
    this.studentService = studentService;
    this.toastService = toastService;
    this.testForm = this.fb.group({
      test_name: ["", Validators.required],
      teacher_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      test_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      max_marks: [null, Validators.required],
      passing_marks: [null],
      marks: this.fb.array([])
    });
  }
  get marksArray() {
    return this.testForm.get("marks");
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.testId = +params["id"];
        this.loadTest();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadTeachers();
  }
  loadTeachers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.testForm.patchValue({ academic_year_id: id });
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
  onClassChange() {
    const classId = this.testForm.get("class_id")?.value;
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
          this.updateMarksArray();
        }
      }
    });
  }
  updateMarksArray() {
    this.marksArray.clear();
    this.students.forEach((student) => {
      this.marksArray.push(this.fb.group({
        student_id: [student.student_id],
        marks_obtained: [null, [Validators.min(0)]],
        remarks: [""]
      }));
    });
  }
  loadTest() {
    if (!this.testId)
      return;
    this.isLoading = true;
    this.unitTestMarksService.getUnitTestMarks({ test_id: this.testId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.tests?.length > 0) {
          const test = response.data.tests[0];
          this.testForm.patchValue({
            test_name: test.test_name,
            academic_year_id: test.academic_year_id,
            class_id: test.class_id,
            subject_id: test.subject_id,
            test_date: test.test_date,
            max_marks: test.max_marks,
            passing_marks: test.passing_marks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load test details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.testForm.invalid) {
      this.testForm.markAllAsTouched();
      return;
    }
    if (this.marksArray.length === 0) {
      this.toastService.warning("Please select a class to load students");
      return;
    }
    this.isSaving = true;
    const formData = __spreadProps(__spreadValues({}, this.testForm.value), {
      marks: this.marksArray.value.filter((m) => m.marks_obtained !== null && m.marks_obtained !== "")
    });
    if (this.isEditMode && this.testId) {
      formData.test_id = this.testId;
    }
    this.unitTestMarksService.createUnitTestMarks(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Unit test marks ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/unit-test-marks"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} test marks`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} test marks`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/unit-test-marks"]);
  }
  static \u0275fac = function UnitTestMarksCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitTestMarksCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UnitTestMarksService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnitTestMarksCreateComponent, selectors: [["app-unit-test-marks-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "unit-test-marks-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "test_name", "placeholder", "e.g., Unit Test 1, Mid Term Test", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "teacher_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "class_id", 1, "form-control", 3, "change"], ["formControlName", "subject_id", 1, "form-control"], ["type", "date", "formControlName", "test_date", 1, "form-control"], ["type", "number", "formControlName", "max_marks", "min", "1", 1, "form-control"], ["type", "number", "formControlName", "passing_marks", "min", "0", 1, "form-control"], ["class", "form-section", 4, "ngIf"], ["class", "empty-marks", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "section-header"], [1, "student-count"], [1, "marks-table"], [1, "data-table"], [3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["type", "number", "formControlName", "marks_obtained", "min", "0", 1, "form-control", "form-control-sm", 3, "max"], ["type", "text", "formControlName", "remarks", "placeholder", "Optional", 1, "form-control", "form-control-sm"], [1, "empty-marks"], [1, "loading-spinner"], [1, "spinner"]], template: function UnitTestMarksCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, UnitTestMarksCreateComponent_div_6_Template, 65, 25, "div", 4)(7, UnitTestMarksCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Unit Test Marks" : "Create Unit Test");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update test marks" : "Create a new unit test and enter marks");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName], styles: ["\n\n.unit-test-marks-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .student-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  overflow-x: auto;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: #495057;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .marks-table[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .form-control-sm[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  font-size: 13px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .empty-marks[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-top: 20px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.unit-test-marks-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=unit-test-marks-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnitTestMarksCreateComponent, { className: "UnitTestMarksCreateComponent", filePath: "src\\app\\modules\\unit-test-marks\\unit-test-marks-create\\unit-test-marks-create.component.ts", lineNumber: 20 });
})();
export {
  UnitTestMarksCreateComponent
};
//# sourceMappingURL=chunk-H7S4DEQ2.js.map
