import {
  BookDistributionService
} from "./chunk-EMLEAQUW.js";
import {
  LibraryService
} from "./chunk-BZFO7QWI.js";
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
import "./chunk-TXDUYLVM.js";

// src/app/modules/book-distribution/book-distribution-create/book-distribution-create.component.ts
function BookDistributionCreateComponent_div_6_option_14_Template(rf, ctx) {
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
function BookDistributionCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function BookDistributionCreateComponent_div_6_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r4 = ctx.$implicit;
    \u0275\u0275property("value", book_r4.book_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", book_r4.book_title, " - ", book_r4.author, " (", book_r4.isbn, ") ");
  }
}
function BookDistributionCreateComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Book selection is required ");
    \u0275\u0275elementEnd();
  }
}
function BookDistributionCreateComponent_div_6_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Distribution date is required ");
    \u0275\u0275elementEnd();
  }
}
function BookDistributionCreateComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Due date is required ");
    \u0275\u0275elementEnd();
  }
}
function BookDistributionCreateComponent_div_6_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function BookDistributionCreateComponent_div_6_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Issue", " Book");
  }
}
function BookDistributionCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function BookDistributionCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Distribution Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BookDistributionCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, BookDistributionCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Book ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 13);
    \u0275\u0275text(23, "Select Book");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, BookDistributionCreateComponent_div_6_option_24_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, BookDistributionCreateComponent_div_6_div_25_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10)(27, "label");
    \u0275\u0275text(28, "Distribution Date ");
    \u0275\u0275elementStart(29, "span", 11);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 17);
    \u0275\u0275template(32, BookDistributionCreateComponent_div_6_div_32_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 10)(34, "label");
    \u0275\u0275text(35, "Due Date ");
    \u0275\u0275elementStart(36, "span", 11);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "input", 18);
    \u0275\u0275template(39, BookDistributionCreateComponent_div_6_div_39_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Status ");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "select", 19)(46, "option", 20);
    \u0275\u0275text(47, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 21);
    \u0275\u0275text(49, "Returned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 22);
    \u0275\u0275text(51, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 23);
    \u0275\u0275text(53, " not Returned");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 10)(55, "label");
    \u0275\u0275text(56, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "textarea", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 25)(59, "button", 26);
    \u0275\u0275listener("click", function BookDistributionCreateComponent_div_6_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(60, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 27);
    \u0275\u0275template(62, BookDistributionCreateComponent_div_6_span_62_Template, 2, 0, "span", 28)(63, BookDistributionCreateComponent_div_6_span_63_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.distributionForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.distributionForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.distributionForm.get("book_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.distributionForm.get("book_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.books);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.distributionForm.get("book_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.distributionForm.get("book_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.distributionForm.get("distribution_date")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.distributionForm.get("return_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.distributionForm.get("return_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.distributionForm.get("return_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.distributionForm.get("return_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.distributionForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function BookDistributionCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementEnd();
  }
}
var BookDistributionCreateComponent = class _BookDistributionCreateComponent {
  fb;
  route;
  router;
  bookDistributionService;
  academicYearService;
  studentService;
  libraryService;
  toastService;
  distributionForm;
  isEditMode = false;
  distributionId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  books = [];
  academicYears = [];
  constructor(fb, route, router, bookDistributionService, academicYearService, studentService, libraryService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.bookDistributionService = bookDistributionService;
    this.academicYearService = academicYearService;
    this.studentService = studentService;
    this.libraryService = libraryService;
    this.toastService = toastService;
    this.distributionForm = this.fb.group({
      student_id: [null, Validators.required],
      book_id: [null, Validators.required],
      distribution_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      return_date: ["", Validators.required],
      return_status: ["issued", Validators.required],
      remarks: [""],
      academic_year_id: [null, Validators.required]
    });
  }
  ngOnInit() {
    this.loadStudents();
    this.loadBooks();
    this.loadAcademicYears();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.distributionId = +params["id"];
        this.loadDistribution();
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
          this.distributionForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }
  loadBooks() {
    this.libraryService.getBooks({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.books = response.data.books || [];
        }
      }
    });
  }
  loadDistribution() {
    if (!this.distributionId)
      return;
    this.isLoading = true;
    this.bookDistributionService.getDistributions({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.distributions?.length > 0) {
          const distribution = response.data.distributions.find((d) => d.distribution_id == this.distributionId);
          if (distribution) {
            this.distributionForm.patchValue({
              student_id: distribution.student_id,
              book_id: distribution.book_id,
              distribution_date: distribution.distribution_date,
              return_date: distribution.return_date,
              return_status: distribution.return_status,
              remarks: distribution.remarks,
              academic_year_id: distribution.academic_year_id
            });
          } else {
          }
        } else {
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.toastService.error("Failed to load distribution details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.distributionForm.invalid) {
      this.distributionForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.distributionForm.value;
    if (this.isEditMode && this.distributionId) {
      formData.distribution_id = this.distributionId;
      this.bookDistributionService.updateDistribution(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success(`Book distribution updated successfully`);
            this.router.navigate(["/app/book-distribution"]);
          } else {
            this.toastService.error(response.message || `Failed to update distribution`);
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error(`Failed to update distribution`);
          this.isSaving = false;
        }
      });
    } else {
      this.bookDistributionService.createDistribution(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success(`Book distribution created successfully`);
            this.router.navigate(["/app/book-distribution"]);
          } else {
            this.toastService.error(response.message || `Failed to create distribution`);
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error(`Failed to create distribution`);
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/book-distribution"]);
  }
  static \u0275fac = function BookDistributionCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDistributionCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(BookDistributionService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(LibraryService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookDistributionCreateComponent, selectors: [["app-book-distribution-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "book-distribution-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "book_id", 1, "form-control"], ["type", "date", "formControlName", "distribution_date", 1, "form-control"], ["type", "date", "formControlName", "return_date", 1, "form-control"], ["formControlName", "return_status", 1, "form-control"], ["value", "issued"], ["value", "returned"], ["value", "overdue"], ["value", "not_returned"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function BookDistributionCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, BookDistributionCreateComponent_div_6_Template, 64, 21, "div", 4)(7, BookDistributionCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Book Distribution" : "Distribute Book");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update distribution details" : "Issue book to student");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.book-distribution-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.book-distribution-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=book-distribution-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookDistributionCreateComponent, { className: "BookDistributionCreateComponent", filePath: "src\\app\\modules\\book-distribution\\book-distribution-create\\book-distribution-create.component.ts", lineNumber: 18 });
})();
export {
  BookDistributionCreateComponent
};
//# sourceMappingURL=chunk-VHR3433J.js.map
