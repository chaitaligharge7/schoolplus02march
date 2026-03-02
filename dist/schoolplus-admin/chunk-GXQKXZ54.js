import {
  QuestionPaperService
} from "./chunk-M43RSQWQ.js";
import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  ExamTypeService
} from "./chunk-JK2YUQED.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/question-papers/question-paper-create/question-paper-create.component.ts
function QuestionPaperCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, " Paper title is required ");
    \u0275\u0275elementEnd();
  }
}
function QuestionPaperCreateComponent_div_6_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r3 = ctx.$implicit;
    \u0275\u0275property("value", cls_r3.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r3.class_name, " ");
  }
}
function QuestionPaperCreateComponent_div_6_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r4 = ctx.$implicit;
    \u0275\u0275property("value", subject_r4.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r4.subject_name, " ");
  }
}
function QuestionPaperCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const examType_r5 = ctx.$implicit;
    \u0275\u0275property("value", examType_r5.exam_type_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", examType_r5.exam_type_name, " ");
  }
}
function QuestionPaperCreateComponent_div_6_div_69_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r8 = ctx.$implicit;
    \u0275\u0275property("ngValue", ch_r8.chapter_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r8.chapter_name);
  }
}
function QuestionPaperCreateComponent_div_6_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "label");
    \u0275\u0275text(3, "Chapter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 41);
    \u0275\u0275listener("change", function QuestionPaperCreateComponent_div_6_div_69_Template_select_change_4_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onChapterSelect($event, i_r7));
    });
    \u0275\u0275elementStart(5, "option", 42);
    \u0275\u0275text(6, "Select Chapter");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QuestionPaperCreateComponent_div_6_div_69_option_7_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44)(9, "label");
    \u0275\u0275text(10, "Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 46)(13, "button", 47);
    \u0275\u0275listener("click", function QuestionPaperCreateComponent_div_6_div_69_Template_button_click_13_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeChapter(i_r7));
    });
    \u0275\u0275element(14, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r7);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "chapter_id");
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.chapters);
  }
}
function QuestionPaperCreateComponent_div_6_div_79_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275text(1, " View Current File ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function QuestionPaperCreateComponent_div_6_div_79_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function QuestionPaperCreateComponent_div_6_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, QuestionPaperCreateComponent_div_6_div_79_a_1_Template, 2, 1, "a", 50)(2, QuestionPaperCreateComponent_div_6_div_79_img_2_Template, 1, 1, "img", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filePreview.startsWith("http"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filePreview.startsWith("data:"));
  }
}
function QuestionPaperCreateComponent_div_6_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function QuestionPaperCreateComponent_div_6_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Paper");
  }
}
function QuestionPaperCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function QuestionPaperCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Paper Title ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, QuestionPaperCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "label");
    \u0275\u0275text(15, "Class ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 15);
    \u0275\u0275listener("change", function QuestionPaperCreateComponent_div_6_Template_select_change_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClassChange());
    });
    \u0275\u0275elementStart(19, "option", 16);
    \u0275\u0275text(20, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, QuestionPaperCreateComponent_div_6_option_21_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "label");
    \u0275\u0275text(24, "Subject ");
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 18);
    \u0275\u0275listener("change", function QuestionPaperCreateComponent_div_6_Template_select_change_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubjectChange());
    });
    \u0275\u0275elementStart(28, "option", 16);
    \u0275\u0275text(29, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, QuestionPaperCreateComponent_div_6_option_30_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "label");
    \u0275\u0275text(33, "Exam Type ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 19)(37, "option", 16);
    \u0275\u0275text(38, "Select Exam Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, QuestionPaperCreateComponent_div_6_option_39_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 14)(41, "label");
    \u0275\u0275text(42, "Total Marks ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 14)(47, "label");
    \u0275\u0275text(48, "Duration (Minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 14)(51, "label");
    \u0275\u0275text(52, "Status ");
    \u0275\u0275elementStart(53, "span", 11);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "select", 22)(56, "option", 23);
    \u0275\u0275text(57, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 24);
    \u0275\u0275text(59, "Published");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 8)(61, "div", 25)(62, "h5");
    \u0275\u0275text(63, "Chapters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 26);
    \u0275\u0275listener("click", function QuestionPaperCreateComponent_div_6_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addChapter());
    });
    \u0275\u0275element(65, "i", 27);
    \u0275\u0275text(66, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "hr");
    \u0275\u0275elementStart(68, "div", 28);
    \u0275\u0275template(69, QuestionPaperCreateComponent_div_6_div_69_Template, 15, 4, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 8)(71, "h3");
    \u0275\u0275text(72, "Paper File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 14)(74, "label");
    \u0275\u0275text(75, "Upload Question Paper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 30);
    \u0275\u0275listener("change", function QuestionPaperCreateComponent_div_6_Template_input_change_76_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "small", 31);
    \u0275\u0275text(78, "Allowed formats: PDF, JPG, PNG (Max 10MB)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, QuestionPaperCreateComponent_div_6_div_79_Template, 3, 2, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 14)(81, "label");
    \u0275\u0275text(82, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "textarea", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 34)(85, "button", 35);
    \u0275\u0275listener("click", function QuestionPaperCreateComponent_div_6_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(86, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "button", 36);
    \u0275\u0275template(88, QuestionPaperCreateComponent_div_6_span_88_Template, 2, 0, "span", 37)(89, QuestionPaperCreateComponent_div_6_span_89_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.paperForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.paperForm.get("paper_title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.paperForm.get("paper_title")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.paperForm.get("paper_title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.paperForm.get("paper_title")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.paperForm.get("class_id")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.paperForm.get("class_id")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.paperForm.get("subject_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.paperForm.get("subject_id")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.paperForm.get("exam_type_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.paperForm.get("exam_type_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.examTypes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.paperForm.get("total_marks")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.paperForm.get("total_marks")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.chaptersArray.controls);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.filePreview);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.paperForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function QuestionPaperCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementEnd();
  }
}
var QuestionPaperCreateComponent = class _QuestionPaperCreateComponent {
  fb;
  route;
  router;
  questionPaperService;
  academicYearService;
  classService;
  syllabusService;
  subjectService;
  examTypeService;
  toastService;
  paperForm;
  isEditMode = false;
  paperId = null;
  isLoading = false;
  isSaving = false;
  selectedFile = null;
  filePreview = null;
  academicYears = [];
  classes = [];
  subjects = [];
  examTypes = [];
  chapters = [];
  constructor(fb, route, router, questionPaperService, academicYearService, classService, syllabusService, subjectService, examTypeService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.questionPaperService = questionPaperService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.syllabusService = syllabusService;
    this.subjectService = subjectService;
    this.examTypeService = examTypeService;
    this.toastService = toastService;
    this.paperForm = this.fb.group({
      paper_title: ["", Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      exam_type_id: [null, Validators.required],
      total_marks: [null, Validators.required],
      duration_minutes: [null],
      paper_file: [null],
      status: ["draft", Validators.required],
      description: [""],
      chapter_id: [null],
      marks_allocation: [null],
      chapters: this.fb.array([])
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.paperId = +params["id"];
        this.loadPaper();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadExamTypes();
  }
  loadChapters(classId, subjectId) {
    this.syllabusService.getSyllabus({
      class_id: classId,
      subject_id: subjectId
    }).subscribe({
      next: (res) => {
        if (res.status === "success" && res.data?.syllabus?.length) {
          const syllabus = res.data.syllabus[0];
          this.chapters = (syllabus.chapters || []).map((ch) => ({
            chapter_id: ch.chapter_id,
            chapter_name: ch.chapter_name
          }));
        } else {
          this.chapters = [];
        }
      },
      error: () => {
        this.chapters = [];
      }
    });
  }
  onSubjectChange() {
    this.paperForm.patchValue({
      chapter_id: null
    });
    this.chapters = [];
    const classId = this.paperForm.get("class_id")?.value;
    const subjectId = this.paperForm.get("subject_id")?.value;
    if (classId && subjectId) {
      this.loadChapters(classId, subjectId);
    }
  }
  onClassChange() {
    this.paperForm.patchValue({
      subject_id: null,
      chapter_id: null
    });
    this.subjects = [];
    this.chapters = [];
    const classId = this.paperForm.get("class_id")?.value;
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.subjects) {
            this.subjects = res.data.subjects;
          }
        }
      });
    }
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.paperForm.patchValue({ academic_year_id: id });
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
  loadExamTypes() {
    this.examTypeService.getExamTypes().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.examTypes = response.data.exam_types || [];
        }
      }
    });
  }
  loadPaper() {
    if (!this.paperId)
      return;
    console.log("Loading paper with ID:", this.paperId);
    this.isLoading = true;
    this.questionPaperService.getQuestionPapers({ paper_id: this.paperId }).subscribe({
      next: (response) => {
        console.log("Response from getQuestionPapers:", response);
        if (response.status === "success" && response.data?.papers?.length > 0) {
          const paper = response.data.papers.find((p) => p.paper_id === this.paperId);
          if (!paper) {
            console.warn("Paper with ID", this.paperId, "not found in response");
            this.isLoading = false;
            return;
          }
          console.log("Paper data retrieved:", paper);
          this.paperForm.patchValue({
            paper_title: paper.paper_title,
            academic_year_id: paper.academic_year_id,
            class_id: paper.class_id,
            subject_id: paper.subject_id,
            exam_type_id: paper.exam_type_id,
            total_marks: paper.total_marks,
            duration_minutes: paper.duration_minutes,
            status: paper.status,
            description: paper.description
          });
          console.log("Form patched with main paper values");
          console.log("Loading chapters for class_id:", paper.class_id, "subject_id:", paper.subject_id);
          this.loadChapters(paper.class_id, paper.subject_id);
          setTimeout(() => {
            if (paper.chapters && paper.chapters.length > 0) {
              console.log("Patching chapters FormArray with:", paper.chapters);
              const chaptersFGs = paper.chapters.map((ch) => this.fb.group({
                chapter_id: ch.chapter_id,
                chapter_name: ch.chapter_name,
                marks_allocation: ch.marks_allocation
              }));
              const chaptersFormArray = this.fb.array(chaptersFGs);
              this.paperForm.setControl("chapters", chaptersFormArray);
              console.log("Chapters FormArray patched");
            } else {
              console.log("No chapters to patch");
            }
          }, 100);
          if (paper.paper_file) {
            this.filePreview = paper.paper_file;
            console.log("File preview set to:", this.filePreview);
          }
        } else {
          console.warn("No papers found in response");
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error loading paper:", err);
        this.toastService.error("Failed to load question paper details");
        this.isLoading = false;
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error("Please upload only PDF or image files");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.error("File size should not exceed 10MB");
        return;
      }
      this.selectedFile = file;
      this.paperForm.patchValue({ paper_file: file });
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  // getter for FormArray
  get chaptersArray() {
    return this.paperForm.get("chapters");
  }
  // Add Chapter
  addChapter() {
    this.chaptersArray.push(this.fb.group({
      chapter_id: [null],
      chapter_name: [""],
      marks_allocation: [null]
    }));
  }
  // Remove Chapter
  removeChapter(index) {
    this.chaptersArray.removeAt(index);
  }
  onChapterSelect(event, index) {
    const selectedId = event.target.value;
    const chapter = this.chapters.find((c) => c.chapter_id == selectedId);
    if (chapter) {
      this.chaptersArray.at(index).patchValue({
        chapter_name: chapter.chapter_name
      });
    } else {
      this.chaptersArray.at(index).patchValue({
        chapter_name: ""
      });
    }
  }
  onSubmit() {
    if (this.paperForm.invalid) {
      this.paperForm.markAllAsTouched();
      console.log("Form is invalid", this.paperForm.value);
      return;
    }
    if (this.chaptersArray.length === 0) {
      this.toastService.error("Please add at least one chapter");
      console.log("No chapters added");
      return;
    }
    this.chaptersArray.controls.forEach((ch, index) => {
      const selectedChapter = this.chapters.find((c) => c.chapter_id == ch.value.chapter_id);
      ch.patchValue({
        chapter_name: selectedChapter ? selectedChapter.chapter_name : ""
      });
    });
    console.log("Chapters before FormData append:", this.chaptersArray.value);
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.paperForm.value;
    Object.keys(formValue).forEach((key) => {
      if (key !== "paper_file" && key !== "chapters" && formValue[key] !== null && formValue[key] !== "") {
        formData.append(key, formValue[key]);
        console.log(`Appending field: ${key} = ${formValue[key]}`);
      }
    });
    if (this.selectedFile) {
      formData.append("paper_file", this.selectedFile);
      console.log("Appending selected file:", this.selectedFile.name);
    }
    this.chaptersArray.controls.forEach((ch, index) => {
      console.log(`Appending chapter ${index}:`, ch.value);
      formData.append(`chapters[${index}][chapter_id]`, ch.value.chapter_id ?? "");
      formData.append(`chapters[${index}][chapter_name]`, ch.value.chapter_name ?? "");
      formData.append(`chapters[${index}][marks_allocation]`, ch.value.marks_allocation ?? "");
    });
    if (this.isEditMode && this.paperId) {
      formData.append("paper_id", this.paperId.toString());
      console.log("Editing paper_id:", this.paperId);
    }
    const request = this.isEditMode && this.paperId ? this.questionPaperService.updateQuestionPaper(this.paperId, formData) : this.questionPaperService.createQuestionPaper(formData);
    request.subscribe({
      next: (response) => {
        console.log("API response:", response);
        if (response.status === "success") {
          this.toastService.success(this.isEditMode ? "Question paper updated successfully" : "Question paper created successfully");
          this.router.navigate(["/app/question-papers"]);
        } else {
          this.toastService.error(response.message || "Operation failed");
        }
        this.isSaving = false;
      },
      error: (err) => {
        console.error("API error:", err);
        this.toastService.error("Operation failed");
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/question-papers"]);
  }
  static \u0275fac = function QuestionPaperCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionPaperCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(QuestionPaperService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ExamTypeService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionPaperCreateComponent, selectors: [["app-question-paper-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "question-paper-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "paper_title", "placeholder", "Enter paper title", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["formControlName", "class_id", 1, "form-control", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subject_id", 1, "form-control", 3, "change"], ["formControlName", "exam_type_id", 1, "form-control"], ["type", "number", "formControlName", "total_marks", "min", "1", 1, "form-control"], ["type", "number", "formControlName", "duration_minutes", "min", "1", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "draft"], ["value", "published"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["formArrayName", "chapters", 1, "mt-2", "chapters-list"], ["class", "row g-2 mb-2 align-items-end", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "form-text", "text-muted"], ["class", "file-preview mt-2", 4, "ngIf"], ["formControlName", "description", "rows", "4", "placeholder", "Enter paper description", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "row", "g-2", "mb-2", "align-items-end", 3, "formGroupName"], [1, "col"], [1, "form-control", 3, "change", "formControlName"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col-3"], ["type", "number", "formControlName", "marks_allocation", "min", "1", 1, "form-control"], [1, "col-2", "d-grid"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "file-preview", "mt-2"], ["target", "_blank", 3, "href", 4, "ngIf"], ["alt", "Preview", "class", "preview-image", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href"], ["alt", "Preview", 1, "preview-image", 3, "src"], [1, "loading-spinner"], [1, "spinner"]], template: function QuestionPaperCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, QuestionPaperCreateComponent_div_6_Template, 90, 24, "div", 4)(7, QuestionPaperCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Question Paper" : "Create Question Paper");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update question paper details" : "Create a new question paper");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.question-paper-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.question-paper-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=question-paper-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionPaperCreateComponent, { className: "QuestionPaperCreateComponent", filePath: "src\\app\\modules\\question-papers\\question-paper-create\\question-paper-create.component.ts", lineNumber: 20 });
})();
export {
  QuestionPaperCreateComponent
};
//# sourceMappingURL=chunk-GXQKXZ54.js.map
