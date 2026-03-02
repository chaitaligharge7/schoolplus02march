import {
  ImportantNotesService
} from "./chunk-4HD23BJT.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/important-notes/notes-create/notes-create.component.ts
function NotesCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Note title is required ");
    \u0275\u0275elementEnd();
  }
}
function NotesCreateComponent_div_6_option_21_Template(rf, ctx) {
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
function NotesCreateComponent_div_6_option_30_Template(rf, ctx) {
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
function NotesCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r5 = ctx.$implicit;
    \u0275\u0275property("value", teacher_r5.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", teacher_r5.first_name, " ", teacher_r5.last_name, " ");
  }
}
function NotesCreateComponent_div_6_div_77_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275text(1, " View Current File ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function NotesCreateComponent_div_6_div_77_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.filePreview, \u0275\u0275sanitizeUrl);
  }
}
function NotesCreateComponent_div_6_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, NotesCreateComponent_div_6_div_77_a_1_Template, 2, 1, "a", 38)(2, NotesCreateComponent_div_6_div_77_img_2_Template, 1, 1, "img", 39);
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
function NotesCreateComponent_div_6_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function NotesCreateComponent_div_6_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Note");
  }
}
function NotesCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function NotesCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Note Title ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, NotesCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "label");
    \u0275\u0275text(15, "Class ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 15)(19, "option", 16);
    \u0275\u0275text(20, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, NotesCreateComponent_div_6_option_21_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 14)(23, "label");
    \u0275\u0275text(24, "Subject ");
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "select", 18)(28, "option", 16);
    \u0275\u0275text(29, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, NotesCreateComponent_div_6_option_30_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 14)(32, "label");
    \u0275\u0275text(33, "Teacher ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 19)(37, "option", 16);
    \u0275\u0275text(38, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, NotesCreateComponent_div_6_option_39_Template, 2, 3, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 14)(41, "label");
    \u0275\u0275text(42, "Note Type ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "select", 20)(46, "option", 21);
    \u0275\u0275text(47, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 22);
    \u0275\u0275text(49, "Formula");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 23);
    \u0275\u0275text(51, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 24);
    \u0275\u0275text(53, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 14)(55, "label");
    \u0275\u0275text(56, "Status ");
    \u0275\u0275elementStart(57, "span", 11);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 25)(60, "option", 26);
    \u0275\u0275text(61, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 27);
    \u0275\u0275text(63, "Inactive");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(64, "div", 8)(65, "h3");
    \u0275\u0275text(66, "Note Content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 14)(68, "label");
    \u0275\u0275text(69, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "textarea", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 14)(72, "label");
    \u0275\u0275text(73, "Upload Note File");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 29);
    \u0275\u0275listener("change", function NotesCreateComponent_div_6_Template_input_change_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "small", 30);
    \u0275\u0275text(76, "Allowed formats: PDF, Word, JPG, PNG (Max 10MB)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, NotesCreateComponent_div_6_div_77_Template, 3, 2, "div", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 32)(79, "button", 33);
    \u0275\u0275listener("click", function NotesCreateComponent_div_6_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(80, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 34);
    \u0275\u0275template(82, NotesCreateComponent_div_6_span_82_Template, 2, 0, "span", 35)(83, NotesCreateComponent_div_6_span_83_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.noteForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.noteForm.get("note_title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.noteForm.get("note_title")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.noteForm.get("note_title")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.noteForm.get("note_title")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.noteForm.get("class_id")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.noteForm.get("class_id")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.noteForm.get("subject_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.noteForm.get("subject_id")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.noteForm.get("teacher_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.noteForm.get("teacher_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance(38);
    \u0275\u0275property("ngIf", ctx_r1.filePreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.noteForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function NotesCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementEnd();
  }
}
var NotesCreateComponent = class _NotesCreateComponent {
  fb;
  route;
  router;
  notesService;
  academicYearService;
  classService;
  subjectService;
  teacherService;
  toastService;
  noteForm;
  isEditMode = false;
  noteId = null;
  isLoading = false;
  isSaving = false;
  selectedFile = null;
  filePreview = null;
  academicYears = [];
  classes = [];
  subjects = [];
  teachers = [];
  constructor(fb, route, router, notesService, academicYearService, classService, subjectService, teacherService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.notesService = notesService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.teacherService = teacherService;
    this.toastService = toastService;
    this.noteForm = this.fb.group({
      note_title: ["", Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      note_type: ["note", Validators.required],
      note_description: [""],
      note_file: [null],
      status: ["active", Validators.required]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.noteId = +params["id"];
        this.loadNote();
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadTeachers();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.noteForm.patchValue({ academic_year_id: id });
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
  loadTeachers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }
  loadNote() {
    if (!this.noteId)
      return;
    this.isLoading = true;
    this.notesService.getNotes({ note_id: this.noteId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.notes?.length > 0) {
          const note = response.data.notes.find((n) => n.note_id === this.noteId);
          if (!note) {
            console.warn("Note with ID", this.noteId, "not found in response");
            this.isLoading = false;
            return;
          }
          this.noteForm.patchValue({
            note_title: note.note_title,
            academic_year_id: note.academic_year_id,
            class_id: note.class_id,
            subject_id: note.subject_id,
            teacher_id: note.teacher_id,
            note_type: note.note_type,
            note_description: note.note_description,
            status: note.status
          });
          if (note.note_file) {
            this.filePreview = note.note_file;
          }
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load note details");
        this.isLoading = false;
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (!allowedTypes.includes(file.type)) {
        this.toastService.error("Please upload only PDF, Word, or image files");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        this.toastService.error("File size should not exceed 10MB");
        return;
      }
      this.selectedFile = file;
      this.noteForm.patchValue({ note_file: file });
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.filePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  onSubmit() {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.noteForm.value;
    Object.keys(formValue).forEach((key) => {
      if (key !== "note_file" && formValue[key] !== null && formValue[key] !== "") {
        formData.append(key, formValue[key]);
      }
    });
    if (this.selectedFile) {
      formData.append("note_file", this.selectedFile);
    }
    if (this.isEditMode && this.noteId) {
      formData.append("note_id", this.noteId.toString());
      this.notesService.updateNote(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Important note updated successfully");
            this.router.navigate(["/app/important-notes"]);
          } else {
            this.toastService.error(response.message || "Failed to update note");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update note");
          this.isSaving = false;
        }
      });
    } else {
      this.notesService.createNote(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Important note created successfully");
            this.router.navigate(["/app/important-notes"]);
          } else {
            this.toastService.error(response.message || "Failed to create note");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create note");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/important-notes"]);
  }
  static \u0275fac = function NotesCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ImportantNotesService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesCreateComponent, selectors: [["app-notes-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "notes-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group", "full-width"], [1, "required"], ["type", "text", "formControlName", "note_title", "placeholder", "Enter note title", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group"], ["formControlName", "class_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subject_id", 1, "form-control"], ["formControlName", "teacher_id", 1, "form-control"], ["formControlName", "note_type", 1, "form-control"], ["value", "note"], ["value", "formula"], ["value", "summary"], ["value", "other"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["formControlName", "note_description", "rows", "6", "placeholder", "Enter note description", 1, "form-control"], ["type", "file", "accept", ".pdf,.doc,.docx,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], [1, "form-text", "text-muted"], ["class", "file-preview mt-2", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "file-preview", "mt-2"], ["target", "_blank", 3, "href", 4, "ngIf"], ["alt", "Preview", "class", "preview-image", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href"], ["alt", "Preview", 1, "preview-image", 3, "src"], [1, "loading-spinner"], [1, "spinner"]], template: function NotesCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, NotesCreateComponent_div_6_Template, 84, 21, "div", 4)(7, NotesCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Important Note" : "Create Important Note");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update note details" : "Create a new important note");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.notes-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.notes-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .file-preview[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 200px;\n  max-height: 200px;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.notes-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.notes-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=notes-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesCreateComponent, { className: "NotesCreateComponent", filePath: "src\\app\\modules\\important-notes\\notes-create\\notes-create.component.ts", lineNumber: 19 });
})();
export {
  NotesCreateComponent
};
//# sourceMappingURL=chunk-DQ7XYCOR.js.map
