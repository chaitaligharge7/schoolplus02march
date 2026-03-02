import {
  RemedialService
} from "./chunk-LRRU4FDA.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
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
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/remedial/remedial-create/remedial-create.component.ts
function RemedialCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Batch name is required ");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", t_r3.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3.full_name || t_r3.first_name + " " + t_r3.last_name, " ");
  }
}
function RemedialCreateComponent_div_6_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
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
function RemedialCreateComponent_div_6_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Class is required ");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
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
function RemedialCreateComponent_div_6_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Subject is required ");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Schedule time is required ");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, " Start date is required ");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_span_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function RemedialCreateComponent_div_6_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Batch");
  }
}
function RemedialCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function RemedialCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Batch Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, RemedialCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 14)(17, "option", 15);
    \u0275\u0275text(18, "Select Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RemedialCreateComponent_div_6_option_19_Template, 2, 2, "option", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label");
    \u0275\u0275text(22, "Class ");
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 17)(26, "option", 18);
    \u0275\u0275text(27, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, RemedialCreateComponent_div_6_option_28_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, RemedialCreateComponent_div_6_div_29_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 10)(31, "label");
    \u0275\u0275text(32, "Subject ");
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "select", 20)(36, "option", 18);
    \u0275\u0275text(37, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, RemedialCreateComponent_div_6_option_38_Template, 2, 2, "option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, RemedialCreateComponent_div_6_div_39_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 8)(41, "h3");
    \u0275\u0275text(42, "Schedule Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 9)(44, "div", 10)(45, "label");
    \u0275\u0275text(46, "Schedule Time ");
    \u0275\u0275elementStart(47, "span", 11);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "input", 21);
    \u0275\u0275template(50, RemedialCreateComponent_div_6_div_50_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 10)(52, "label");
    \u0275\u0275text(53, "Schedule Days");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 10)(56, "label");
    \u0275\u0275text(57, "Start Date ");
    \u0275\u0275elementStart(58, "span", 11);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(60, "input", 23);
    \u0275\u0275template(61, RemedialCreateComponent_div_6_div_61_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 10)(63, "label");
    \u0275\u0275text(64, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 8)(67, "h3");
    \u0275\u0275text(68, "Additional Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 9)(70, "div", 10)(71, "label");
    \u0275\u0275text(72, "Max Students");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 10)(75, "label");
    \u0275\u0275text(76, "Status ");
    \u0275\u0275elementStart(77, "span", 11);
    \u0275\u0275text(78, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "select", 26)(80, "option", 27);
    \u0275\u0275text(81, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "option", 28);
    \u0275\u0275text(83, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "option", 29);
    \u0275\u0275text(85, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 10)(87, "label");
    \u0275\u0275text(88, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "textarea", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 31)(91, "button", 32);
    \u0275\u0275listener("click", function RemedialCreateComponent_div_6_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(92, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 33);
    \u0275\u0275template(94, RemedialCreateComponent_div_6_span_94_Template, 2, 0, "span", 34)(95, RemedialCreateComponent_div_6_span_95_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.batchForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.batchForm.get("batch_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.batchForm.get("batch_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.batchForm.get("batch_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.batchForm.get("batch_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.teachers);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.batchForm.get("class_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.batchForm.get("class_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.batchForm.get("class_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.batchForm.get("class_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.batchForm.get("subject_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.batchForm.get("subject_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.batchForm.get("subject_id")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.batchForm.get("subject_id")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r1.batchForm.get("schedule_time")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.batchForm.get("schedule_time")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.batchForm.get("schedule_time")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.batchForm.get("schedule_time")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r1.batchForm.get("start_date")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.batchForm.get("start_date")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r1.batchForm.get("start_date")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.batchForm.get("start_date")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(18);
    \u0275\u0275classProp("is-invalid", ((tmp_18_0 = ctx_r1.batchForm.get("status")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r1.batchForm.get("status")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.batchForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function RemedialCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementEnd();
  }
}
var RemedialCreateComponent = class _RemedialCreateComponent {
  fb;
  route;
  router;
  remedialService;
  academicYearService;
  teacherService;
  classService;
  subjectService;
  toastService;
  batchForm;
  isEditMode = false;
  batchId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  classes = [];
  subjects = [];
  teachers = [];
  constructor(fb, route, router, remedialService, academicYearService, teacherService, classService, subjectService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.remedialService = remedialService;
    this.academicYearService = academicYearService;
    this.teacherService = teacherService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.batchForm = this.fb.group({
      batch_name: ["", Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      schedule_time: ["", Validators.required],
      schedule_days: [""],
      teacher_id: [null],
      max_students: [null],
      start_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      end_date: [""],
      status: ["active", Validators.required],
      description: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.batchId = +params["id"];
        this.loadBatch();
      }
    });
    this.teacherService.getTeachers(200).subscribe((r) => {
      if (r.status === "success" && r.data?.teachers) {
        this.teachers = r.data.teachers;
      }
    });
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.batchForm.patchValue({ academic_year_id: id });
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
  loadBatch() {
    if (!this.batchId)
      return;
    this.isLoading = true;
    this.remedialService.getBatches({ batch_id: this.batchId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.batches?.length > 0) {
          const batch = response.data.batches.find((b) => b.batch_id === this.batchId);
          if (!batch) {
            console.warn("Batch with ID", this.batchId, "not found in response");
            this.isLoading = false;
            return;
          }
          this.batchForm.patchValue({
            batch_name: batch.batch_name,
            academic_year_id: batch.academic_year_id,
            class_id: batch.class_id,
            subject_id: batch.subject_id,
            schedule_time: batch.schedule_time,
            schedule_days: batch.schedule_days,
            teacher_id: batch.teacher_id,
            max_students: batch.max_students,
            start_date: batch.start_date,
            end_date: batch.end_date,
            status: batch.status,
            description: batch.description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load batch details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.batchForm.invalid) {
      this.batchForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.batchForm.value;
    if (this.isEditMode && this.batchId) {
      this.remedialService.updateBatch(__spreadProps(__spreadValues({}, formData), {
        batch_id: this.batchId
      })).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Remedial batch updated successfully");
            this.router.navigate(["/app/remedial"]);
          } else {
            this.toastService.error(response.message || "Failed to update batch");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update batch");
          this.isSaving = false;
        }
      });
    } else {
      formData.schedule_days = Array.isArray(formData.schedule_days) ? formData.schedule_days : [formData.schedule_days];
      this.remedialService.createBatch(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Remedial batch created successfully");
            this.router.navigate(["/app/remedial"]);
          } else {
            this.toastService.error(response.message || "Failed to create batch");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create batch");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/remedial"]);
  }
  static \u0275fac = function RemedialCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RemedialCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RemedialService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemedialCreateComponent, selectors: [["app-remedial-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "remedial-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "batch_name", "placeholder", "Enter batch name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "teacher_id", "required", "", 1, "form-control"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["formControlName", "class_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "subject_id", 1, "form-control"], ["type", "time", "formControlName", "schedule_time", 1, "form-control"], ["type", "text", "formControlName", "schedule_days", "placeholder", "e.g., Monday, Wednesday, Friday", 1, "form-control"], ["type", "date", "formControlName", "start_date", 1, "form-control"], ["type", "date", "formControlName", "end_date", 1, "form-control"], ["type", "number", "formControlName", "max_students", "min", "1", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["value", "completed"], ["formControlName", "description", "rows", "4", "placeholder", "Enter batch description", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function RemedialCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RemedialCreateComponent_div_6_Template, 96, 28, "div", 4)(7, RemedialCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Remedial Batch" : "Create Remedial Batch");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update batch details" : "Create a new remedial batch");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.remedial-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.remedial-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=remedial-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemedialCreateComponent, { className: "RemedialCreateComponent", filePath: "src\\app\\modules\\remedial\\remedial-create\\remedial-create.component.ts", lineNumber: 19 });
})();
export {
  RemedialCreateComponent
};
//# sourceMappingURL=chunk-KL6XVHME.js.map
