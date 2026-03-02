import {
  MarksheetService
} from "./chunk-55M5MP7M.js";
import {
  ExaminationService
} from "./chunk-COPF5RUH.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/marksheets/marksheet-create/marksheet-create.component.ts
function MarksheetCreateComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exam_r1 = ctx.$implicit;
    \u0275\u0275property("value", exam_r1.examination_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", exam_r1.examination_name, " ");
  }
}
function MarksheetCreateComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r2 = ctx.$implicit;
    \u0275\u0275property("value", student_r2.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", student_r2.first_name, " ", student_r2.last_name, " (", student_r2.admission_number, ") ");
  }
}
function MarksheetCreateComponent_i_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 34);
  }
}
function MarksheetCreateComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function MarksheetCreateComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.isEditMode ? "Update" : "Create", " Marksheet");
  }
}
function MarksheetCreateComponent_button_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MarksheetCreateComponent_button_87_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendToWhatsApp());
    });
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, " Send to WhatsApp ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isSaving);
  }
}
function MarksheetCreateComponent_button_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function MarksheetCreateComponent_button_88_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.notifyParent());
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, " Notify Parent ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.isSaving);
  }
}
var MarksheetCreateComponent = class _MarksheetCreateComponent {
  fb;
  route;
  router;
  marksheetService;
  examinationService;
  studentService;
  academicYearService;
  toastService;
  marksheetForm;
  isEditMode = false;
  marksheetId = null;
  isLoading = false;
  isSaving = false;
  examinations = [];
  students = [];
  constructor(fb, route, router, marksheetService, examinationService, studentService, academicYearService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.marksheetService = marksheetService;
    this.examinationService = examinationService;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.marksheetForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      examination_id: [null, Validators.required],
      student_id: [null, Validators.required],
      total_marks: [null],
      obtained_marks: [null],
      percentage: [null],
      grade: [""],
      rank: [""],
      status: ["draft"]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.marksheetId = +params["id"];
        this.loadMarksheet();
      }
    });
    this.loadAcademicYears();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.marksheetForm.patchValue({ academic_year_id: id });
          this.loadExaminations(id);
        }
      }
    });
  }
  onAcademicYearChange() {
    const academicYearId = this.marksheetForm.get("academic_year_id")?.value;
    if (academicYearId) {
      this.loadExaminations(academicYearId);
    }
  }
  loadExaminations(academicYearId) {
    this.examinationService.getExaminations({ academic_year_id: academicYearId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.examinations = response.data.examinations || [];
        }
      }
    });
  }
  onExaminationChange() {
    const examinationId = this.marksheetForm.get("examination_id")?.value;
    if (examinationId) {
      this.loadStudents();
    }
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
  loadMarksheet() {
    if (!this.marksheetId)
      return;
    this.isLoading = true;
    this.marksheetService.getMarksheet(this.marksheetId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data) {
          const marksheet = response.data.marksheet;
          this.marksheetForm.patchValue({
            academic_year_id: marksheet.academic_year_id,
            examination_id: marksheet.examination_id,
            student_id: marksheet.student_id,
            total_marks: marksheet.total_marks,
            obtained_marks: marksheet.obtained_marks,
            percentage: marksheet.percentage,
            grade: marksheet.grade,
            rank: marksheet.rank,
            status: marksheet.status
          });
          this.loadExaminations(marksheet.academic_year_id);
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show("Error loading marksheet", "error");
      }
    });
  }
  onSubmit() {
    if (this.marksheetForm.invalid) {
      this.toastService.show("Please fill all required fields", "error");
      return;
    }
    this.isSaving = true;
    const formData = new FormData();
    const formValue = this.marksheetForm.value;
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] !== null && formValue[key] !== void 0) {
        formData.append(key, formValue[key]);
      }
    });
    const fileInput = document.getElementById("marksheet_file");
    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append("marksheet_file", fileInput.files[0]);
    }
    if (this.isEditMode && this.marksheetId) {
      formData.append("marksheet_id", this.marksheetId.toString());
      this.marksheetService.updateMarksheet(this.marksheetId, formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Marksheet updated successfully", "success");
            this.router.navigate(["/app/marksheets"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error updating marksheet", "error");
        }
      });
    } else {
      this.marksheetService.createMarksheet(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.show("Marksheet created successfully", "success");
            this.router.navigate(["/app/marksheets"]);
          }
        },
        error: () => {
          this.isSaving = false;
          this.toastService.show("Error creating marksheet", "error");
        }
      });
    }
  }
  sendToWhatsApp() {
    if (!this.marksheetId) {
      this.toastService.show("Please save the marksheet first", "warning");
      return;
    }
    if (this.marksheetForm.get("status")?.value !== "published") {
      this.toastService.show("Please publish the marksheet before sending", "warning");
      return;
    }
    this.isSaving = true;
    this.marksheetService.sendMarksheetToWhatsApp(this.marksheetId).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.toastService.show("Marksheet sent to parent via WhatsApp", "success");
          this.marksheetForm.patchValue({ status: "sent" });
        } else {
          this.toastService.show(response.message || "Failed to send marksheet", "error");
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show("Error sending marksheet to WhatsApp", "error");
      }
    });
  }
  notifyParent() {
    if (!this.marksheetId) {
      this.toastService.show("Please save the marksheet first", "warning");
      return;
    }
    this.isSaving = true;
    this.marksheetService.notifyParent(this.marksheetId).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.toastService.show("Parent notified successfully", "success");
        } else {
          this.toastService.show(response.message || "Failed to notify parent", "error");
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show("Error notifying parent", "error");
      }
    });
  }
  static \u0275fac = function MarksheetCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarksheetCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MarksheetService), \u0275\u0275directiveInject(ExaminationService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarksheetCreateComponent, selectors: [["app-marksheet-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 13, consts: [[1, "marksheet-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-row"], [1, "form-group"], [1, "required"], ["formControlName", "examination_id", 1, "form-control", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "student_id", 1, "form-control"], ["type", "number", "formControlName", "total_marks", "step", "0.01", 1, "form-control"], ["type", "number", "formControlName", "obtained_marks", "step", "0.01", 1, "form-control"], ["type", "number", "formControlName", "percentage", "step", "0.01", 1, "form-control"], ["type", "text", "formControlName", "grade", "maxlength", "10", 1, "form-control"], ["type", "number", "formControlName", "rank", 1, "form-control"], ["type", "file", "id", "marksheet_file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control"], [1, "form-text"], ["formControlName", "status", 1, "form-control"], ["value", "draft"], ["value", "published"], ["value", "sent"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-save", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info", 3, "disabled", "click", 4, "ngIf"], [1, "bi", "bi-save"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "bi", "bi-whatsapp"], ["type", "button", 1, "btn", "btn-info", 3, "click", "disabled"], [1, "bi", "bi-bell"]], template: function MarksheetCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function MarksheetCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/marksheets"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back to Marksheets ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function MarksheetCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "h3");
      \u0275\u0275text(14, "Basic Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "label");
      \u0275\u0275text(18, "Examination ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "select", 12);
      \u0275\u0275listener("change", function MarksheetCreateComponent_Template_select_change_21_listener() {
        return ctx.onExaminationChange();
      });
      \u0275\u0275elementStart(22, "option", 13);
      \u0275\u0275text(23, "Select Examination");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, MarksheetCreateComponent_option_24_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 10)(26, "label");
      \u0275\u0275text(27, "Student ");
      \u0275\u0275elementStart(28, "span", 11);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "select", 15)(31, "option", 13);
      \u0275\u0275text(32, "Select Student");
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, MarksheetCreateComponent_option_33_Template, 2, 4, "option", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 8)(35, "h3");
      \u0275\u0275text(36, "Marks Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "label");
      \u0275\u0275text(40, "Total Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 10)(43, "label");
      \u0275\u0275text(44, "Obtained Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 10)(47, "label");
      \u0275\u0275text(48, "Percentage");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 10)(51, "label");
      \u0275\u0275text(52, "Grade");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 10)(55, "label");
      \u0275\u0275text(56, "Rank");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 8)(59, "h3");
      \u0275\u0275text(60, "File Upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 10)(62, "label");
      \u0275\u0275text(63, "Marksheet File (PDF/Image)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 21);
      \u0275\u0275elementStart(65, "small", 22);
      \u0275\u0275text(66, "Upload marksheet PDF or image file");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 8)(68, "h3");
      \u0275\u0275text(69, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 10)(71, "label");
      \u0275\u0275text(72, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "select", 23)(74, "option", 24);
      \u0275\u0275text(75, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "option", 25);
      \u0275\u0275text(77, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "option", 26);
      \u0275\u0275text(79, "Sent");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "div", 27)(81, "button", 28);
      \u0275\u0275listener("click", function MarksheetCreateComponent_Template_button_click_81_listener() {
        return ctx.router.navigate(["/app/marksheets"]);
      });
      \u0275\u0275text(82, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "button", 29);
      \u0275\u0275template(84, MarksheetCreateComponent_i_84_Template, 1, 0, "i", 30)(85, MarksheetCreateComponent_span_85_Template, 2, 0, "span", 31)(86, MarksheetCreateComponent_span_86_Template, 2, 1, "span", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, MarksheetCreateComponent_button_87_Template, 3, 1, "button", 32)(88, MarksheetCreateComponent_button_88_Template, 3, 1, "button", 33);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_11_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.isEditMode ? "Edit" : "Create", " Marksheet");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update marksheet details" : "Create a new marksheet for student");
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.marksheetForm);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.examinations);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.students);
      \u0275\u0275advance(50);
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode && ctx.marksheetId && ((tmp_11_0 = ctx.marksheetForm.get("status")) == null ? null : tmp_11_0.value) === "published");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditMode && ctx.marksheetId);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n.marksheet-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  margin: 0 0 8px 0;\n  color: var(--text-primary);\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px 0;\n  color: var(--text-primary);\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 8px;\n  color: var(--text-primary);\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: red;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[type=file][_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 4px;\n}\n.marksheet-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n/*# sourceMappingURL=marksheet-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarksheetCreateComponent, { className: "MarksheetCreateComponent", filePath: "src\\app\\modules\\marksheets\\marksheet-create\\marksheet-create.component.ts", lineNumber: 18 });
})();
export {
  MarksheetCreateComponent
};
//# sourceMappingURL=chunk-IX22IR3C.js.map
