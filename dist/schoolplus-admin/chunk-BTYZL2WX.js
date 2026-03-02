import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
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
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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

// src/app/modules/syllabus/syllabus-create/syllabus-create.component.ts
function SyllabusCreateComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r1 = ctx.$implicit;
    \u0275\u0275property("value", cls_r1.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r1.class_name, " ");
  }
}
function SyllabusCreateComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r2 = ctx.$implicit;
    \u0275\u0275property("value", subject_r2.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r2.subject_name, " ");
  }
}
function SyllabusCreateComponent_div_54_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function SyllabusCreateComponent_div_54_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeChapter(i_r4));
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function SyllabusCreateComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 9)(2, "div", 10)(3, "label");
    \u0275\u0275text(4, "Chapter Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 33)(7, "label");
    \u0275\u0275text(8, "Chapter Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "label");
    \u0275\u0275text(14, "Estimated Completion Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36);
    \u0275\u0275template(17, SyllabusCreateComponent_div_54_button_17_Template, 2, 0, "button", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r4);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r4.chapters.length > 1);
  }
}
function SyllabusCreateComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 40);
  }
}
function SyllabusCreateComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function SyllabusCreateComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r4.isEditMode ? "Update" : "Create", " Syllabus");
  }
}
var SyllabusCreateComponent = class _SyllabusCreateComponent {
  fb;
  route;
  router;
  syllabusService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  syllabusForm;
  isEditMode = false;
  syllabusId = null;
  isLoading = false;
  isSaving = false;
  classes = [];
  subjects = [];
  constructor(fb, route, router, syllabusService, academicYearService, classService, subjectService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.syllabusService = syllabusService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.syllabusForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      syllabus_title: ["", Validators.required],
      syllabus_description: [""],
      chapters: this.fb.array([])
    });
  }
  get chapters() {
    return this.syllabusForm.get("chapters");
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.syllabusId = +params["id"];
        this.loadSyllabus();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.addChapter();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.syllabusForm.patchValue({ academic_year_id: id });
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
  onClassChange() {
    const classId = this.syllabusForm.get("class_id")?.value;
    if (classId) {
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === "success" && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.subjects = [];
    }
  }
  addChapter() {
    const chapterForm = this.fb.group({
      chapter_name: ["", Validators.required],
      chapter_number: [this.chapters.length + 1],
      estimated_completion_date: [""]
    });
    this.chapters.push(chapterForm);
  }
  removeChapter(index) {
    this.chapters.removeAt(index);
  }
  loadSyllabus() {
    if (!this.syllabusId)
      return;
    this.isLoading = true;
    this.syllabusService.getSyllabusById(this.syllabusId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          const syllabus = response.data.syllabus;
          this.syllabusForm.patchValue({
            academic_year_id: syllabus.academic_year_id,
            class_id: syllabus.class_id,
            subject_id: syllabus.subject_id,
            syllabus_title: syllabus.syllabus_title,
            syllabus_description: syllabus.syllabus_description
          });
          this.onClassChange();
          this.chapters.clear();
          if (syllabus.chapters && syllabus.chapters.length > 0) {
            syllabus.chapters.forEach((chapter) => {
              this.chapters.push(this.fb.group({
                chapter_name: [chapter.chapter_name, Validators.required],
                chapter_number: [chapter.chapter_number],
                estimated_completion_date: [chapter.estimated_completion_date]
              }));
            });
          }
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading syllabus", "error");
      }
    });
  }
  onSubmit() {
    if (this.syllabusForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.syllabusForm.value;
    Object.keys(formValue).forEach((key) => {
      if (key === "chapters") {
        formData.append(key, JSON.stringify(formValue[key]));
      } else if (formValue[key] !== null && formValue[key] !== void 0) {
        formData.append(key, formValue[key]);
      }
    });
    const fileInput = document.getElementById("syllabus_file");
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append("syllabus_file", fileInput.files[0]);
    }
    if (this.isEditMode && this.syllabusId) {
      formData.append("syllabus_id", this.syllabusId.toString());
      this.syllabusService.updateSyllabus(this.syllabusId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Syllabus updated successfully", "success");
            this.router.navigate(["/app/syllabus"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error updating syllabus", "error");
        }
      });
    } else {
      this.syllabusService.createSyllabus(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Syllabus created successfully", "success");
            this.router.navigate(["/app/syllabus"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error creating syllabus", "error");
        }
      });
    }
  }
  static \u0275fac = function SyllabusCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SyllabusCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyllabusCreateComponent, selectors: [["app-syllabus-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 12, consts: [[1, "syllabus-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], [1, "form-group"], [1, "required"], ["formControlName", "class_id", 1, "form-control", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subject_id", 1, "form-control"], [1, "form-group", "full-width"], ["type", "text", "formControlName", "syllabus_title", 1, "form-control"], ["formControlName", "syllabus_description", "rows", "4", 1, "form-control"], [1, "section-header"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle"], ["formArrayName", "chapters", 1, "chapters-list"], ["class", "chapter-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "file", "id", "syllabus_file", "accept", ".pdf,.doc,.docx", 1, "form-control"], [1, "form-text"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-save", 4, "ngIf"], [4, "ngIf"], [1, "chapter-item", 3, "formGroupName"], ["type", "number", "formControlName", "chapter_number", 1, "form-control"], [1, "form-group", "flex-grow"], ["type", "text", "formControlName", "chapter_name", 1, "form-control"], ["type", "date", "formControlName", "estimated_completion_date", 1, "form-control"], [1, "form-group", "actions"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-save"]], template: function SyllabusCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function SyllabusCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/syllabus"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Syllabus ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function SyllabusCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "h3");
      \u0275\u0275text(14, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "label");
      \u0275\u0275text(18, "Class ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "select", 12);
      \u0275\u0275listener("change", function SyllabusCreateComponent_Template_select_change_21_listener() {
        return ctx.onClassChange();
      });
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Select Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, SyllabusCreateComponent_option_24_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "label");
      \u0275\u0275text(27, "Subject ");
      \u0275\u0275elementStart(28, "span", 11);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "select", 15)(31, "option", 13);
      \u0275\u0275text(32, "Select Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, SyllabusCreateComponent_option_33_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 9)(35, "div", 16)(36, "label");
      \u0275\u0275text(37, "Syllabus Title ");
      \u0275\u0275elementStart(38, "span", 11);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 9)(42, "div", 16)(43, "label");
      \u0275\u0275text(44, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "textarea", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 8)(47, "div", 19)(48, "h3");
      \u0275\u0275text(49, "Chapters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 20);
      \u0275\u0275listener("click", function SyllabusCreateComponent_Template_button_click_50_listener() {
        return ctx.addChapter();
      });
      \u0275\u0275element(51, "i", 21);
      \u0275\u0275text(52, " Add Chapter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 22);
      \u0275\u0275template(54, SyllabusCreateComponent_div_54_Template, 18, 2, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 8)(56, "h3");
      \u0275\u0275text(57, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 10)(59, "label");
      \u0275\u0275text(60, "Syllabus File (PDF/Document)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 24);
      \u0275\u0275elementStart(62, "small", 25);
      \u0275\u0275text(63, "Upload syllabus PDF or document file");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 26)(65, "button", 27);
      \u0275\u0275listener("click", function SyllabusCreateComponent_Template_button_click_65_listener() {
        return ctx.router.navigate(["/app/syllabus"]);
      });
      \u0275\u0275text(66, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 28);
      \u0275\u0275template(68, SyllabusCreateComponent_i_68_Template, 1, 0, "i", 29)(69, SyllabusCreateComponent_span_69_Template, 2, 0, "span", 30)(70, SyllabusCreateComponent_span_70_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "Edit" : "Create", " Syllabus");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update syllabus details" : "Create a new syllabus");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.syllabusForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.chapters.controls);
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.syllabus-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group.flex-grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .chapters-list[_ngcontent-%COMP%]   .chapter-item[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 12px;\n}\n.syllabus-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=syllabus-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyllabusCreateComponent, { className: "SyllabusCreateComponent", filePath: "src\\app\\modules\\syllabus\\syllabus-create\\syllabus-create.component.ts", lineNumber: 18 });
})();
export {
  SyllabusCreateComponent
};
//# sourceMappingURL=chunk-BTYZL2WX.js.map
