import {
  CourseService
} from "./chunk-CSHECG3T.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/courses/course-create/course-create.component.ts
function CourseCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Course name is required ");
    \u0275\u0275elementEnd();
  }
}
function CourseCreateComponent_div_6_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
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
function CourseCreateComponent_div_6_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t1_r4 = ctx.$implicit;
    \u0275\u0275property("value", t1_r4.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t1_r4.first_name, " ", t1_r4.last_name, " ");
  }
}
function CourseCreateComponent_div_6_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " Start date is required ");
    \u0275\u0275elementEnd();
  }
}
function CourseCreateComponent_div_6_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1, " End date is required ");
    \u0275\u0275elementEnd();
  }
}
function CourseCreateComponent_div_6_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function CourseCreateComponent_div_6_span_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Course");
  }
}
function CourseCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function CourseCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Course Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Course Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, CourseCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Course Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "label");
    \u0275\u0275text(19, "Course Type ");
    \u0275\u0275elementStart(20, "span", 11);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "select", 15)(23, "option", 16);
    \u0275\u0275text(24, "Regular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 17);
    \u0275\u0275text(26, "Curricular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 18);
    \u0275\u0275text(28, "Remedial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 19);
    \u0275\u0275text(30, "Special");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 10)(32, "label");
    \u0275\u0275text(33, "Class ");
    \u0275\u0275elementStart(34, "span", 11);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "select", 20)(37, "option", 21);
    \u0275\u0275text(38, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, CourseCreateComponent_div_6_option_39_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 10)(41, "label");
    \u0275\u0275text(42, "Teacher");
    \u0275\u0275elementStart(43, "span", 11);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "select", 23)(46, "option", 21);
    \u0275\u0275text(47, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, CourseCreateComponent_div_6_option_48_Template, 2, 3, "option", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 10)(50, "label");
    \u0275\u0275text(51, "Start Date ");
    \u0275\u0275elementStart(52, "span", 11);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(54, "input", 24);
    \u0275\u0275template(55, CourseCreateComponent_div_6_div_55_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 10)(57, "label");
    \u0275\u0275text(58, "End Date ");
    \u0275\u0275elementStart(59, "span", 11);
    \u0275\u0275text(60, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(61, "input", 25);
    \u0275\u0275template(62, CourseCreateComponent_div_6_div_62_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 10)(64, "label");
    \u0275\u0275text(65, "Max Students");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 10)(68, "label");
    \u0275\u0275text(69, "Fee Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 10)(72, "label");
    \u0275\u0275text(73, "Status ");
    \u0275\u0275elementStart(74, "span", 11);
    \u0275\u0275text(75, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "select", 28)(77, "option", 29);
    \u0275\u0275text(78, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "option", 30);
    \u0275\u0275text(80, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "option", 31);
    \u0275\u0275text(82, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(83, "div", 10)(84, "label");
    \u0275\u0275text(85, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "textarea", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 33)(88, "button", 34);
    \u0275\u0275listener("click", function CourseCreateComponent_div_6_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(89, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 35);
    \u0275\u0275template(91, CourseCreateComponent_div_6_span_91_Template, 2, 0, "span", 36)(92, CourseCreateComponent_div_6_span_92_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.courseForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.courseForm.get("course_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.courseForm.get("course_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.courseForm.get("course_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.courseForm.get("course_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.courseForm.get("class_id")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.courseForm.get("class_id")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_7_0 = ctx_r1.courseForm.get("teacher_id")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.courseForm.get("teacher_id")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.courseForm.get("start_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.courseForm.get("start_date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.courseForm.get("start_date")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.courseForm.get("start_date")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.courseForm.get("end_date")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.courseForm.get("end_date")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.courseForm.get("end_date")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.courseForm.get("end_date")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(26);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.courseForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function CourseCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
var CourseCreateComponent = class _CourseCreateComponent {
  fb;
  route;
  router;
  courseService;
  academicYearService;
  toastService;
  classService;
  tecaherservice;
  courseForm;
  isEditMode = false;
  courseId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  teachers = [];
  constructor(fb, route, router, courseService, academicYearService, toastService, classService, tecaherservice) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.courseService = courseService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.classService = classService;
    this.tecaherservice = tecaherservice;
    this.courseForm = this.fb.group({
      course_name: ["", Validators.required],
      course_code: [""],
      academic_year_id: [null, Validators.required],
      course_type: ["Regular", Validators.required],
      class_id: [null, Validators.required],
      // ✅ ADD THIS
      teacher_id: [null, Validators.required],
      start_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      end_date: ["", Validators.required],
      max_students: [null],
      fee_amount: [null],
      status: ["active", Validators.required],
      course_description: [""]
    });
  }
  ngOnInit() {
    this.loadClasses();
    this.loadTeachers();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.courseId = +params["id"];
        this.loadCourse();
      }
    });
    this.loadAcademicYears();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.courseForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }
  loadCourse() {
    if (!this.courseId)
      return;
    this.isLoading = true;
    this.courseService.getCourses({ course_id: this.courseId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.courses?.length > 0) {
          const course = response.data.courses[0];
          this.courseForm.patchValue({
            course_name: course.course_name,
            course_code: course.course_code,
            academic_year_id: course.academic_year_id,
            course_type: course.course_type,
            class_id: course.class_id,
            teacher_id: course.teacher_id,
            start_date: course.start_date,
            end_date: course.end_date,
            max_students: course.max_students,
            fee_amount: course.fee_amount,
            status: course.status,
            course_description: course.course_description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load course details");
        this.isLoading = false;
      }
    });
  }
  // onSubmit(): void {
  //   if (this.courseForm.invalid) {
  //     this.courseForm.markAllAsTouched();
  //     return;
  //   }
  //   this.isSaving = true;
  //   const formData = this.courseForm.value;
  //   if (this.isEditMode && this.courseId) {
  //     formData.course_id = this.courseId;
  //   }
  //   this.courseService.createCourse(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === "success") {
  //         this.toastService.success(
  //           `Course ${this.isEditMode ? "updated" : "created"} successfully`,
  //         );
  //         this.router.navigate(["/app/courses"]);
  //       } else {
  //         this.toastService.error(
  //           response.message ||
  //             `Failed to ${this.isEditMode ? "update" : "create"} course`,
  //         );
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(
  //         `Failed to ${this.isEditMode ? "update" : "create"} course`,
  //       );
  //       this.isSaving = false;
  //     },
  //   });
  // }
  onSubmit() {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.courseForm.value;
    if (this.isEditMode && this.courseId) {
      formData.course_id = this.courseId;
      this.courseService.updateCourse(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Course updated successfully");
            this.router.navigate(["/app/courses"]);
          } else {
            this.toastService.error(response.message || "Failed to update course");
          }
          this.isSaving = false;
        },
        error: (err) => {
          this.toastService.error(err?.error?.message || err?.message || "Failed to update course");
          this.isSaving = false;
        }
      });
    } else {
      this.courseService.createCourse(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Course created successfully");
            this.router.navigate(["/app/courses"]);
          } else {
            this.toastService.error(response.message || "Failed to create course");
          }
          this.isSaving = false;
        },
        error: (err) => {
          this.toastService.error(err?.error?.message || err?.message || "Failed to create course");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/courses"]);
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
    const params = {};
    this.tecaherservice.getTeachers(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.teachers = response.data?.teachers || [];
        }
      },
      error: (err) => {
        console.error("Failed to load teachers", err);
      }
    });
  }
  static \u0275fac = function CourseCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(TeacherService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseCreateComponent, selectors: [["app-course-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "course-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "course_name", "placeholder", "Enter course name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "course_code", "placeholder", "Enter course code", 1, "form-control"], ["formControlName", "course_type", 1, "form-control"], ["value", "Regular"], ["value", "Curricular"], ["value", "Remedial"], ["value", "Special"], ["formControlName", "class_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "teacher_id", 1, "form-control"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "date", "formControlName", "end_date", 1, "form-control"], ["type", "number", "formControlName", "max_students", "min", "1", 1, "form-control"], ["type", "number", "formControlName", "fee_amount", "min", "0", "step", "0.01", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["value", "completed"], ["formControlName", "course_description", "rows", "4", "placeholder", "Enter course description", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function CourseCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CourseCreateComponent_div_6_Template, 93, 22, "div", 4)(7, CourseCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Course" : "Create Course", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update course details" : "Create a new course", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.course-create-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.course-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.course-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.course-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.course-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.course-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=course-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseCreateComponent, { className: "CourseCreateComponent", filePath: "src\\app\\modules\\courses\\course-create\\course-create.component.ts", lineNumber: 23 });
})();
export {
  CourseCreateComponent
};
//# sourceMappingURL=chunk-QFVCLWKU.js.map
