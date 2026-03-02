import {
  StudyProgressService
} from "./chunk-IAPUA4JQ.js";
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
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/study-progress/study-progress-create/study-progress-create.component.ts
function StudyProgressCreateComponent_div_6_option_14_Template(rf, ctx) {
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
function StudyProgressCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r4 = ctx.$implicit;
    \u0275\u0275property("value", teacher_r4.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", teacher_r4.first_name, " ", teacher_r4.last_name, " ");
  }
}
function StudyProgressCreateComponent_div_6_option_33_Template(rf, ctx) {
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
function StudyProgressCreateComponent_div_6_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Class is required ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r6 = ctx.$implicit;
    \u0275\u0275property("ngValue", sec_r6.section_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sec_r6.section_name, " ");
  }
}
function StudyProgressCreateComponent_div_6_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Section is required ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r7 = ctx.$implicit;
    \u0275\u0275property("value", subject_r7.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r7.subject_name, " ");
  }
}
function StudyProgressCreateComponent_div_6_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Subject is required ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Progress date is required ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Progress percentage must be between 0 and 100 ");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_span_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function StudyProgressCreateComponent_div_6_span_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Record", " Progress");
  }
}
function StudyProgressCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function StudyProgressCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Progress Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StudyProgressCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StudyProgressCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Teacher ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 13);
    \u0275\u0275text(23, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StudyProgressCreateComponent_div_6_option_24_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "label");
    \u0275\u0275text(27, "Class ");
    \u0275\u0275elementStart(28, "span", 11);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "select", 17)(31, "option", 13);
    \u0275\u0275text(32, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, StudyProgressCreateComponent_div_6_option_33_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, StudyProgressCreateComponent_div_6_div_34_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 10)(36, "label");
    \u0275\u0275text(37, "Section ");
    \u0275\u0275elementStart(38, "span", 11);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "select", 18)(41, "option", 19);
    \u0275\u0275text(42, "Select Section");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, StudyProgressCreateComponent_div_6_option_43_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, StudyProgressCreateComponent_div_6_div_44_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 10)(46, "label");
    \u0275\u0275text(47, "Subject ");
    \u0275\u0275elementStart(48, "span", 11);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "select", 21)(51, "option", 13);
    \u0275\u0275text(52, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, StudyProgressCreateComponent_div_6_option_53_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, StudyProgressCreateComponent_div_6_div_54_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 10)(56, "label");
    \u0275\u0275text(57, "Progress Date ");
    \u0275\u0275elementStart(58, "span", 11);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "input", 22);
    \u0275\u0275template(61, StudyProgressCreateComponent_div_6_div_61_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 10)(63, "label");
    \u0275\u0275text(64, "Chapters Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 23);
    \u0275\u0275listener("blur", function StudyProgressCreateComponent_div_6_Template_input_blur_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calculateProgress());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 10)(67, "label");
    \u0275\u0275text(68, "Total Chapters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 24);
    \u0275\u0275listener("blur", function StudyProgressCreateComponent_div_6_Template_input_blur_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calculateProgress());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 10)(71, "label");
    \u0275\u0275text(72, "Progress Percentage ");
    \u0275\u0275elementStart(73, "span", 11);
    \u0275\u0275text(74, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(75, "input", 25);
    \u0275\u0275elementStart(76, "small", 26);
    \u0275\u0275text(77, "Auto-calculated if chapters are provided");
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, StudyProgressCreateComponent_div_6_div_78_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 10)(80, "label");
    \u0275\u0275text(81, "Status ");
    \u0275\u0275elementStart(82, "span", 11);
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "select", 27)(85, "option", 28);
    \u0275\u0275text(86, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "option", 29);
    \u0275\u0275text(88, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "option", 30);
    \u0275\u0275text(90, "Behind Schedule");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 10)(92, "label");
    \u0275\u0275text(93, "Test Score");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 10)(96, "label");
    \u0275\u0275text(97, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "textarea", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 33)(100, "button", 34);
    \u0275\u0275listener("click", function StudyProgressCreateComponent_div_6_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(101, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "button", 35);
    \u0275\u0275template(103, StudyProgressCreateComponent_div_6_span_103_Template, 2, 0, "span", 36)(104, StudyProgressCreateComponent_div_6_span_104_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.progressForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.progressForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.progressForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.progressForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.progressForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.progressForm.get("class_id")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.progressForm.get("class_id")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.progressForm.get("class_id")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.progressForm.get("class_id")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.progressForm.get("section_id")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.progressForm.get("section_id")) == null ? null : tmp_12_0.touched));
    \u0275\u0275property("disabled", !((tmp_13_0 = ctx_r1.progressForm.get("class_id")) == null ? null : tmp_13_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.sections);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r1.progressForm.get("section_id")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.progressForm.get("section_id")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r1.progressForm.get("subject_id")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.progressForm.get("subject_id")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = ctx_r1.progressForm.get("subject_id")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r1.progressForm.get("subject_id")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_21_0 = ctx_r1.progressForm.get("progress_date")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx_r1.progressForm.get("progress_date")) == null ? null : tmp_21_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_22_0 = ctx_r1.progressForm.get("progress_date")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r1.progressForm.get("progress_date")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ((tmp_23_0 = ctx_r1.progressForm.get("completion_percentage")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r1.progressForm.get("completion_percentage")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_24_0 = ctx_r1.progressForm.get("completion_percentage")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r1.progressForm.get("completion_percentage")) == null ? null : tmp_24_0.touched));
    \u0275\u0275advance(22);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.progressForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function StudyProgressCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
var StudyProgressCreateComponent = class _StudyProgressCreateComponent {
  fb;
  route;
  router;
  studyProgressService;
  studentService;
  academicYearService;
  teacherService;
  classService;
  subjectService;
  toastService;
  progressForm;
  isEditMode = false;
  progressId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  academicYears = [];
  classes = [];
  subjects = [];
  sections = [];
  teachers = [];
  constructor(fb, route, router, studyProgressService, studentService, academicYearService, teacherService, classService, subjectService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.studyProgressService = studyProgressService;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.teacherService = teacherService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.progressForm = this.fb.group({
      student_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      section_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      progress_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      completion_percentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      chapters_completed: [null],
      chapters_total: [null],
      status: ["in_progress", Validators.required],
      test_scores: [""],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.progressId = +params["id"];
        this.loadProgress();
      }
    });
    this.loadStudents();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadTeachers();
    this.progressForm.get("class_id")?.valueChanges.subscribe((classId) => {
      if (classId) {
        this.loadSections(classId);
      } else {
        this.sections = [];
        this.progressForm.get("section_id")?.setValue(null);
      }
    });
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
  loadSections(classId) {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.sections = response.data.sections || [];
        }
      }
    });
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
          this.progressForm.patchValue({ academic_year_id: id });
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
  loadProgress() {
    if (!this.progressId)
      return;
    this.isLoading = true;
    this.studyProgressService.getStudyProgress({ progress_id: this.progressId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.progress?.length > 0) {
          const progress = response.data.progress.find((p) => p.id === this.progressId);
          if (progress) {
            this.progressForm.patchValue({
              student_id: progress.student_id,
              academic_year_id: progress.academic_year_id,
              class_id: progress.class_id,
              section_id: progress.section_id,
              teacher_id: progress.teacher_id,
              subject_id: progress.subject_id,
              progress_date: progress.progress_date,
              completion_percentage: progress.completion_percentage,
              chapters_completed: progress.chapters_completed,
              chapters_total: progress.chapters_total,
              status: progress.status || "in_progress",
              test_scores: progress.test_scores,
              remarks: progress.remarks
            });
            if (progress.class_id) {
              this.loadSections(progress.class_id);
            }
          } else {
            this.toastService.error("Progress record not found");
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load study progress details");
        this.isLoading = false;
      }
    });
  }
  calculateProgress() {
    const completed = this.progressForm.get("chapters_completed")?.value;
    const total = this.progressForm.get("chapters_total")?.value;
    if (completed && total && total > 0) {
      const percentage = Math.round(completed / total * 100);
      this.progressForm.patchValue({ completion_percentage: percentage });
    }
  }
  onSubmit() {
    if (this.progressForm.invalid) {
      this.progressForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = __spreadValues({}, this.progressForm.value);
    if (this.isEditMode && this.progressId) {
      formData.progress_id = this.progressId;
      this.studyProgressService.updateStudyProgress(this.progressId, this.progressForm.value).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.success("Study progress updated successfully");
            this.router.navigate(["/app/study-progress"]);
          } else {
            this.toastService.error(response.message || "Failed to update progress");
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error("Failed to update progress");
        }
      });
    } else {
      this.studyProgressService.createStudyProgress(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.success("Study progress created successfully");
            this.router.navigate(["/app/study-progress"]);
          } else {
            this.toastService.error(response.message || "Failed to create progress");
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.error("Failed to create progress");
        }
      });
    }
  }
  handleResponse(response) {
    this.isSaving = false;
    if (response.status === "success") {
      this.toastService.success(`Study progress ${this.isEditMode ? "updated" : "created"} successfully`);
      this.router.navigate(["/app/study-progress"]);
    } else {
      this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} progress`);
    }
  }
  handleError() {
    this.isSaving = false;
    this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} progress`);
  }
  cancel() {
    this.router.navigate(["/app/study-progress"]);
  }
  static \u0275fac = function StudyProgressCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudyProgressCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StudyProgressService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudyProgressCreateComponent, selectors: [["app-study-progress-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "study-progress-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "teacher_id", 1, "form-control"], ["formControlName", "class_id", 1, "form-control"], ["formControlName", "section_id", 1, "form-control", 3, "disabled"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "subject_id", 1, "form-control"], ["type", "date", "formControlName", "progress_date", 1, "form-control"], ["type", "number", "formControlName", "chapters_completed", "min", "0", 1, "form-control", 3, "blur"], ["type", "number", "formControlName", "chapters_total", "min", "1", 1, "form-control", 3, "blur"], ["type", "number", "formControlName", "completion_percentage", "min", "0", "max", "100", 1, "form-control"], [1, "form-text", "text-muted"], ["formControlName", "status", 1, "form-control"], ["value", "in_progress"], ["value", "completed"], ["value", "behind"], ["formControlName", "test_scores", "rows", "3", "placeholder", "Enter test scores", 1, "form-control"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function StudyProgressCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, StudyProgressCreateComponent_div_6_Template, 105, 34, "div", 4)(7, StudyProgressCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Study Progress" : "Record Study Progress");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update progress details" : "Record student study progress");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName], styles: ["\n\n.study-progress-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.study-progress-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=study-progress-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudyProgressCreateComponent, { className: "StudyProgressCreateComponent", filePath: "src\\app\\modules\\study-progress\\study-progress-create\\study-progress-create.component.ts", lineNumber: 20 });
})();
export {
  StudyProgressCreateComponent
};
//# sourceMappingURL=chunk-TQF7XVJE.js.map
