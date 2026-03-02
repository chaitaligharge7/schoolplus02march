import {
  StudentParticipationService
} from "./chunk-XHH2JBRZ.js";
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

// src/app/modules/student-participation/participation-create/participation-create.component.ts
function ParticipationCreateComponent_div_6_option_14_Template(rf, ctx) {
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
function ParticipationCreateComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Student selection is required ");
    \u0275\u0275elementEnd();
  }
}
function ParticipationCreateComponent_div_6_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Activity name is required ");
    \u0275\u0275elementEnd();
  }
}
function ParticipationCreateComponent_div_6_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Activity date is required ");
    \u0275\u0275elementEnd();
  }
}
function ParticipationCreateComponent_div_6_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ParticipationCreateComponent_div_6_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Participation");
  }
}
function ParticipationCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function ParticipationCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Participation Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Student ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 12)(12, "option", 13);
    \u0275\u0275text(13, "Select Student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ParticipationCreateComponent_div_6_option_14_Template, 2, 4, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ParticipationCreateComponent_div_6_div_15_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10)(17, "label");
    \u0275\u0275text(18, "Activity Type ");
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 16)(22, "option", 17);
    \u0275\u0275text(23, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Cultural");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 19);
    \u0275\u0275text(27, "Academic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 20);
    \u0275\u0275text(29, "Social");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 21);
    \u0275\u0275text(31, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 10)(33, "label");
    \u0275\u0275text(34, "Activity Name ");
    \u0275\u0275elementStart(35, "span", 11);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 22);
    \u0275\u0275template(38, ParticipationCreateComponent_div_6_div_38_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 10)(40, "label");
    \u0275\u0275text(41, "Activity Date ");
    \u0275\u0275elementStart(42, "span", 11);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "input", 23);
    \u0275\u0275template(45, ParticipationCreateComponent_div_6_div_45_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 10)(47, "label");
    \u0275\u0275text(48, "Achievement");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 10)(51, "label");
    \u0275\u0275text(52, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 10)(55, "label");
    \u0275\u0275text(56, "Status ");
    \u0275\u0275elementStart(57, "span", 11);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 26)(60, "option", 27);
    \u0275\u0275text(61, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 28);
    \u0275\u0275text(63, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 10)(65, "label");
    \u0275\u0275text(66, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "textarea", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 30)(69, "button", 31);
    \u0275\u0275listener("click", function ParticipationCreateComponent_div_6_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(70, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 32);
    \u0275\u0275template(72, ParticipationCreateComponent_div_6_span_72_Template, 2, 0, "span", 33)(73, ParticipationCreateComponent_div_6_span_73_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.participationForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.participationForm.get("student_id")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.participationForm.get("student_id")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.students);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.participationForm.get("student_id")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.participationForm.get("student_id")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(22);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.participationForm.get("event_name")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.participationForm.get("event_name")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.participationForm.get("event_name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.participationForm.get("event_name")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.participationForm.get("event_date")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.participationForm.get("event_date")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.participationForm.get("event_date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.participationForm.get("event_date")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.participationForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function ParticipationCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementEnd();
  }
}
var ParticipationCreateComponent = class _ParticipationCreateComponent {
  fb;
  route;
  router;
  participationService;
  studentService;
  academicYearService;
  toastService;
  participationForm;
  isEditMode = false;
  participationId = null;
  isLoading = false;
  isSaving = false;
  students = [];
  academicYears = [];
  constructor(fb, route, router, participationService, studentService, academicYearService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.participationService = participationService;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.toastService = toastService;
    this.participationForm = this.fb.group({
      academic_year_id: [null, Validators.required],
      student_id: [null, Validators.required],
      participation_type: ["sports", Validators.required],
      event_name: ["", Validators.required],
      event_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      achievement: [""],
      position: [""],
      status: ["active", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.participationId = +params["id"];
        this.loadParticipation();
      }
    });
    this.loadStudents();
    this.loadAcademicYears();
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
          this.participationForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }
  loadParticipation() {
    if (!this.participationId)
      return;
    this.isLoading = true;
    this.participationService.getParticipations({ participation_id: this.participationId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.participations?.length > 0) {
          const participation = response.data.participations[0];
          this.participationForm.patchValue({
            academic_year_id: participation.academic_year_id,
            student_id: participation.student_id,
            participation_type: participation.activity_type,
            event_name: participation.activity_name,
            event_date: participation.activity_date,
            achievement: participation.achievement,
            position: participation.position,
            status: participation.status,
            remarks: participation.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load participation details");
        this.isLoading = false;
      }
    });
  }
  // onSubmit(): void {
  //   if (this.participationForm.invalid) {
  //     this.participationForm.markAllAsTouched();
  //     return;
  //   }
  //   this.isSaving = true;
  //   const formData = this.participationForm.value;
  //   if (this.isEditMode && this.participationId) {
  //     formData.participation_id = this.participationId;
  //   }
  //   this.participationService.createParticipation(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success') {
  //         this.toastService.success(`Participation record ${this.isEditMode ? 'updated' : 'created'} successfully`);
  //         this.router.navigate(['/app/student-participation']);
  //       } else {
  //         this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} participation`);
  //       this.isSaving = false;
  //     }
  //   });
  // }
  onSubmit() {
    if (this.participationForm.invalid) {
      this.participationForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formValue = this.participationForm.value;
    const formData = {
      academic_year_id: formValue.academic_year_id,
      student_id: formValue.student_id,
      participation_type: formValue.participation_type,
      event_name: formValue.event_name,
      event_date: formValue.event_date,
      achievement: formValue.achievement,
      points: 0,
      // default value
      remarks: formValue.remarks,
      participation_level: "class_level",
      participation_id: this.isEditMode ? this.participationId : void 0
    };
    if (this.isEditMode && this.participationId) {
      formData.participation_id = this.participationId;
    }
    this.participationService.createParticipation(formData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Participation record ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/student-participation"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} participation`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} participation`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/student-participation"]);
  }
  static \u0275fac = function ParticipationCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParticipationCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StudentParticipationService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParticipationCreateComponent, selectors: [["app-participation-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "participation-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["formControlName", "student_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "activity_type", 1, "form-control"], ["value", "sports"], ["value", "cultural"], ["value", "academic"], ["value", "social"], ["value", "other"], ["type", "text", "formControlName", "event_name", "placeholder", "Enter activity name", 1, "form-control"], ["type", "date", "formControlName", "event_date", 1, "form-control"], ["type", "text", "formControlName", "achievement", "placeholder", "e.g., First Place, Best Performer", 1, "form-control"], ["type", "text", "formControlName", "position", "placeholder", "e.g., 1st, 2nd, 3rd", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "completed"], ["formControlName", "remarks", "rows", "3", "placeholder", "Enter any additional remarks", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function ParticipationCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ParticipationCreateComponent_div_6_Template, 74, 16, "div", 4)(7, ParticipationCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Participation" : "Add Student Participation");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update participation details" : "Record student participation in activities");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.participation-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.participation-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.participation-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.participation-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=participation-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParticipationCreateComponent, { className: "ParticipationCreateComponent", filePath: "src\\app\\modules\\student-participation\\participation-create\\participation-create.component.ts", lineNumber: 17 });
})();
export {
  ParticipationCreateComponent
};
//# sourceMappingURL=chunk-2KCZHGAY.js.map
