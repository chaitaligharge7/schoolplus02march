import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  StaffAllotmentService
} from "./chunk-N7UKIPCT.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/staff-allotment/staff-allotment-create/staff-allotment-create.component.ts
function StaffAllotmentCreateComponent_div_6_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r3 = ctx.$implicit;
    \u0275\u0275property("value", staff_r3.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", staff_r3.first_name, " ", staff_r3.last_name, " (", staff_r3.employee_id, ") ");
  }
}
function StaffAllotmentCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Staff member is required ");
    \u0275\u0275elementEnd();
  }
}
function StaffAllotmentCreateComponent_div_6_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function StaffAllotmentCreateComponent_div_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Class is required ");
    \u0275\u0275elementEnd();
  }
}
function StaffAllotmentCreateComponent_div_6_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function StaffAllotmentCreateComponent_div_6_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Subject is required ");
    \u0275\u0275elementEnd();
  }
}
function StaffAllotmentCreateComponent_div_6_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Allotment date is required ");
    \u0275\u0275elementEnd();
  }
}
function StaffAllotmentCreateComponent_div_6_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function StaffAllotmentCreateComponent_div_6_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Allotment");
  }
}
function StaffAllotmentCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function StaffAllotmentCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Allotment Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Staff Member ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Staff Member");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StaffAllotmentCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StaffAllotmentCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Class ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 13);
    \u0275\u0275text(23, "Select Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StaffAllotmentCreateComponent_div_6_option_24_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, StaffAllotmentCreateComponent_div_6_div_25_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10)(27, "label");
    \u0275\u0275text(28, "Subject ");
    \u0275\u0275elementStart(29, "span", 11);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "select", 17)(32, "option", 13);
    \u0275\u0275text(33, "Select Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, StaffAllotmentCreateComponent_div_6_option_34_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, StaffAllotmentCreateComponent_div_6_div_35_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10)(37, "label");
    \u0275\u0275text(38, "Allotment Date ");
    \u0275\u0275elementStart(39, "span", 11);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 18);
    \u0275\u0275template(42, StaffAllotmentCreateComponent_div_6_div_42_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 10)(44, "label");
    \u0275\u0275text(45, "Status ");
    \u0275\u0275elementStart(46, "span", 11);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 19)(49, "option", 20);
    \u0275\u0275text(50, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 21);
    \u0275\u0275text(52, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 10)(54, "label");
    \u0275\u0275text(55, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "textarea", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 23)(58, "button", 24);
    \u0275\u0275listener("click", function StaffAllotmentCreateComponent_div_6_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(59, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 25);
    \u0275\u0275template(61, StaffAllotmentCreateComponent_div_6_span_61_Template, 2, 0, "span", 26)(62, StaffAllotmentCreateComponent_div_6_span_62_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.allotmentForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.allotmentForm.get("teacher_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.allotmentForm.get("teacher_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.staffMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.allotmentForm.get("teacher_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.allotmentForm.get("teacher_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.allotmentForm.get("class_id")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.allotmentForm.get("class_id")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.allotmentForm.get("class_id")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.allotmentForm.get("class_id")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.allotmentForm.get("subject_id")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.allotmentForm.get("subject_id")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.subjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.allotmentForm.get("subject_id")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.allotmentForm.get("subject_id")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r1.allotmentForm.get("allotment_date")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.allotmentForm.get("allotment_date")) == null ? null : tmp_14_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.allotmentForm.get("allotment_date")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r1.allotmentForm.get("allotment_date")) == null ? null : tmp_15_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.allotmentForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function StaffAllotmentCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementEnd();
  }
}
var StaffAllotmentCreateComponent = class _StaffAllotmentCreateComponent {
  fb;
  route;
  router;
  staffAllotmentService;
  teacherService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  allotmentForm;
  isEditMode = false;
  allotmentId = null;
  isLoading = false;
  isSaving = false;
  staffMembers = [];
  academicYears = [];
  classes = [];
  subjects = [];
  constructor(fb, route, router, staffAllotmentService, teacherService, academicYearService, classService, subjectService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.staffAllotmentService = staffAllotmentService;
    this.teacherService = teacherService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.allotmentForm = this.fb.group({
      teacher_id: [null, Validators.required],
      academic_year_id: [null, Validators.required],
      class_id: [null, Validators.required],
      subject_id: [null, Validators.required],
      allotment_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      status: ["active", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.allotmentId = +params["id"];
        this.loadAllotment();
      }
    });
    this.loadStaffMembers();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
  }
  loadStaffMembers() {
    this.teacherService.getTeachers({}).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.staffMembers = response.data.teachers || [];
        }
      }
    });
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.allotmentForm.patchValue({ academic_year_id: id });
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
  loadAllotment() {
    if (!this.allotmentId)
      return;
    this.isLoading = true;
    this.staffAllotmentService.getStaffAllotments({ allotment_id: this.allotmentId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.allotments?.length > 0) {
          const allotment = response.data.allotments[0];
          this.allotmentForm.patchValue({
            teacher_id: allotment.teacher_id,
            academic_year_id: allotment.academic_year_id,
            class_id: allotment.class_id,
            subject_id: allotment.subject_id,
            allotment_date: allotment.allotment_date,
            status: allotment.status,
            remarks: allotment.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load staff allotment details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.allotmentForm.invalid) {
      this.allotmentForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.allotmentForm.value;
    if (this.isEditMode && this.allotmentId) {
      formData.allotment_id = this.allotmentId;
    }
    this.staffAllotmentService.createStaffAllotment(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Staff allotment ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/staff-allotment"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} allotment`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} allotment`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/staff-allotment"]);
  }
  static \u0275fac = function StaffAllotmentCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffAllotmentCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StaffAllotmentService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffAllotmentCreateComponent, selectors: [["app-staff-allotment-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "staff-allotment-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "teacher_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "class_id", 1, "form-control"], ["formControlName", "subject_id", 1, "form-control"], ["type", "date", "formControlName", "allotment_date", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function StaffAllotmentCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, StaffAllotmentCreateComponent_div_6_Template, 63, 23, "div", 4)(7, StaffAllotmentCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Staff Allotment" : "Create Staff Allotment");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update staff assignment" : "Assign staff to class and subject");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.staff-allotment-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.staff-allotment-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=staff-allotment-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffAllotmentCreateComponent, { className: "StaffAllotmentCreateComponent", filePath: "src\\app\\modules\\staff-allotment\\staff-allotment-create\\staff-allotment-create.component.ts", lineNumber: 19 });
})();
export {
  StaffAllotmentCreateComponent
};
//# sourceMappingURL=chunk-K3HGIEGF.js.map
