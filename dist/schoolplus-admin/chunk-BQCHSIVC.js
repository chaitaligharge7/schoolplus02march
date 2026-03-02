import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  ClassworkService
} from "./chunk-EFMPRXWF.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/classwork/classwork-create/classwork-create.component.ts
function ClassworkCreateComponent_option_24_Template(rf, ctx) {
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
function ClassworkCreateComponent_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275property("value", section_r2.section_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r2.section_name, " ");
  }
}
function ClassworkCreateComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    \u0275\u0275property("value", subject_r3.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r3.subject_name, " ");
  }
}
function ClassworkCreateComponent_option_50_Template(rf, ctx) {
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
function ClassworkCreateComponent_i_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 30);
  }
}
function ClassworkCreateComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ClassworkCreateComponent_span_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.isEditMode ? "Update Classwork" : "Create Classwork");
  }
}
var ClassworkCreateComponent = class _ClassworkCreateComponent {
  fb;
  router;
  route;
  classworkService;
  academicYearService;
  classService;
  subjectService;
  teacherService;
  toastService;
  classworkForm;
  isSaving = false;
  classes = [];
  sections = [];
  subjects = [];
  teachers = [];
  isEditMode = false;
  classworkId = null;
  constructor(fb, router, route, classworkService, academicYearService, classService, subjectService, teacherService, toastService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.classworkService = classworkService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.teacherService = teacherService;
    this.toastService = toastService;
    this.classworkForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      section_id: [null],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      classwork_title: ["", Validators.required],
      classwork_description: [""],
      assigned_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      due_date: [""]
    });
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadTeachers();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.classworkId = +params["id"];
        this.loadClasswork(this.classworkId);
      }
    });
  }
  loadClasswork(id) {
    console.log("Loading classwork with id:", id);
    this.classworkService.getClasswork({ id }).subscribe({
      next: (response) => {
        console.log("Classwork API response:", response);
        if (response.status === "success" && response.data?.classwork?.length > 0) {
          const cw = response.data.classwork.find((c) => c.classwork_id === id);
          console.log("Fetched classwork:", cw);
          if (!cw) {
            this.toastService.show("Classwork not found", "error");
            return;
          }
          this.classworkForm.patchValue({
            academic_year_id: cw.academic_year_id,
            class_id: cw.class_id,
            teacher_id: cw.teacher_id,
            classwork_title: cw.classwork_title,
            classwork_description: cw.classwork_description,
            assigned_date: cw.assigned_date,
            due_date: cw.due_date
          });
          const classId = cw.class_id;
          if (classId) {
            this.classService.getSections(classId).subscribe({
              next: (res) => {
                this.sections = res.data?.sections || [];
                this.classworkForm.patchValue({ section_id: cw.section_id });
              }
            });
            this.classService.getClassSubjects(classId).subscribe({
              next: (res) => {
                this.subjects = res.data?.subjects || [];
                this.classworkForm.patchValue({ subject_id: cw.subject_id });
              }
            });
          }
        }
      },
      error: (err) => {
        console.error("Error fetching classwork:", err);
        this.toastService.show("Failed to load classwork", "error");
      }
    });
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.classworkForm.patchValue({ academic_year_id: id });
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
  loadTeachers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }
  onClassChange() {
    const classId = this.classworkForm.get("class_id")?.value;
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === "success" && response.data) {
            this.sections = response.data.sections || [];
          }
        }
      });
      this.classService.getClassSubjects(classId).subscribe({
        next: (response) => {
          if (response.status === "success" && response.data) {
            this.subjects = response.data.subjects || [];
          }
        }
      });
    } else {
      this.sections = [];
      this.subjects = [];
    }
  }
  onSubmit() {
    if (this.classworkForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.classworkForm.value;
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] !== null && formValue[key] !== void 0 && formValue[key] !== "") {
        formData.append(key, formValue[key]);
      }
    });
    const fileInput = document.getElementById("classwork_file");
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append("classwork_file", fileInput.files[0]);
    }
    if (this.isEditMode && this.classworkId) {
      formData.append("classwork_id", this.classworkId.toString());
    }
    const request$ = this.isEditMode ? this.classworkService.updateClasswork(formData) : this.classworkService.createClasswork(formData);
    request$.subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.toastService.show(this.isEditMode ? "Classwork updated successfully" : "Classwork created successfully", "success");
          this.router.navigate(["/app/classwork"]);
        } else {
          this.toastService.show(response.message || "Error saving classwork", "error");
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show("Error saving classwork", "error");
      }
    });
  }
  static \u0275fac = function ClassworkCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassworkCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ClassworkService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassworkCreateComponent, selectors: [["app-classwork-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 93, vars: 15, consts: [[1, "classwork-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], [1, "form-group"], [1, "required"], ["formControlName", "class_id", 1, "form-control", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "section_id", 1, "form-control"], ["formControlName", "subject_id", 1, "form-control"], ["formControlName", "teacher_id", 1, "form-control"], [1, "form-group", "full-width"], ["type", "text", "formControlName", "classwork_title", 1, "form-control"], ["formControlName", "classwork_description", "rows", "4", 1, "form-control"], ["type", "date", "formControlName", "assigned_date", 1, "form-control"], ["type", "date", "formControlName", "due_date", 1, "form-control"], ["type", "file", "id", "classwork_file", "accept", ".pdf,.doc,.docx,.jpg,.jpeg,.png", 1, "form-control"], [1, "form-text"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-save", 4, "ngIf"], [4, "ngIf"], [1, "bi", "bi-save"]], template: function ClassworkCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function ClassworkCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/classwork"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Classwork ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function ClassworkCreateComponent_Template_form_ngSubmit_11_listener() {
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
      \u0275\u0275listener("change", function ClassworkCreateComponent_Template_select_change_21_listener() {
        return ctx.onClassChange();
      });
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Select Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, ClassworkCreateComponent_option_24_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "label");
      \u0275\u0275text(27, "Section");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 15)(29, "option", 13);
      \u0275\u0275text(30, "All Sections");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, ClassworkCreateComponent_option_31_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 9)(33, "div", 10)(34, "label");
      \u0275\u0275text(35, "Subject ");
      \u0275\u0275elementStart(36, "span", 11);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "select", 16)(39, "option", 13);
      \u0275\u0275text(40, "Select Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, ClassworkCreateComponent_option_41_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 10)(43, "label");
      \u0275\u0275text(44, "Teacher ");
      \u0275\u0275elementStart(45, "span", 11);
      \u0275\u0275text(46, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "select", 17)(48, "option", 13);
      \u0275\u0275text(49, "Select Teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, ClassworkCreateComponent_option_50_Template, 2, 3, "option", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 8)(52, "h3");
      \u0275\u0275text(53, "Classwork Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 9)(55, "div", 18)(56, "label");
      \u0275\u0275text(57, "Title ");
      \u0275\u0275elementStart(58, "span", 11);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 9)(62, "div", 18)(63, "label");
      \u0275\u0275text(64, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "textarea", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 9)(67, "div", 10)(68, "label");
      \u0275\u0275text(69, "Assigned Date ");
      \u0275\u0275elementStart(70, "span", 11);
      \u0275\u0275text(71, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 10)(74, "label");
      \u0275\u0275text(75, "Due Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "input", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 8)(78, "h3");
      \u0275\u0275text(79, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 10)(81, "label");
      \u0275\u0275text(82, "Classwork File (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "input", 23);
      \u0275\u0275elementStart(84, "small", 24);
      \u0275\u0275text(85, "Upload classwork file or materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 25)(87, "button", 26);
      \u0275\u0275listener("click", function ClassworkCreateComponent_Template_button_click_87_listener() {
        return ctx.router.navigate(["/app/classwork"]);
      });
      \u0275\u0275text(88, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 27);
      \u0275\u0275template(90, ClassworkCreateComponent_i_90_Template, 1, 0, "i", 28)(91, ClassworkCreateComponent_span_91_Template, 2, 0, "span", 29)(92, ClassworkCreateComponent_span_92_Template, 2, 1, "span", 29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Classwork" : "Create Classwork");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update the classwork assignment" : "Add a new classwork assignment", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.classworkForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.sections);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.teachers);
      \u0275\u0275advance(39);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.classwork-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.classwork-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row.full-width[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.classwork-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=classwork-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassworkCreateComponent, { className: "ClassworkCreateComponent", filePath: "src\\app\\modules\\classwork\\classwork-create\\classwork-create.component.ts", lineNumber: 19 });
})();
export {
  ClassworkCreateComponent
};
//# sourceMappingURL=chunk-BQCHSIVC.js.map
