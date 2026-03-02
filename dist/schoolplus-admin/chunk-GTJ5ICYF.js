import {
  CleaningService
} from "./chunk-THBM6DIN.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/cleaning/cleaning-create/cleaning-create.component.ts
function CleaningCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " location is required ");
    \u0275\u0275elementEnd();
  }
}
function CleaningCreateComponent_div_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Schedule date is required ");
    \u0275\u0275elementEnd();
  }
}
function CleaningCreateComponent_div_6_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r3 = ctx.$implicit;
    \u0275\u0275property("value", staff_r3.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", staff_r3.first_name, " ", staff_r3.last_name, " ");
  }
}
function CleaningCreateComponent_div_6_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function CleaningCreateComponent_div_6_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Schedule");
  }
}
function CleaningCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function CleaningCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Schedule Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Location ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, CleaningCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Schedule Date ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275template(19, CleaningCreateComponent_div_6_div_19_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10)(21, "label");
    \u0275\u0275text(22, "Assigned To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 15)(24, "option", 16);
    \u0275\u0275text(25, "Select Staff Member");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CleaningCreateComponent_div_6_option_26_Template, 2, 3, "option", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Cleaning Type ");
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 18)(33, "option", 19);
    \u0275\u0275text(34, "washroom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 20);
    \u0275\u0275text(36, "toilet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 21);
    \u0275\u0275text(38, "classroom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 22);
    \u0275\u0275text(40, "watering_plants");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div")(42, "label");
    \u0275\u0275text(43, "Completion Date");
    \u0275\u0275elementStart(44, "span", 11);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(46, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 10)(48, "label");
    \u0275\u0275text(49, "Status ");
    \u0275\u0275elementStart(50, "span", 11);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "select", 24)(53, "option", 25);
    \u0275\u0275text(54, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 26);
    \u0275\u0275text(56, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 10)(58, "label");
    \u0275\u0275text(59, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "textarea", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 28)(62, "button", 29);
    \u0275\u0275listener("click", function CleaningCreateComponent_div_6_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(63, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 30);
    \u0275\u0275template(65, CleaningCreateComponent_div_6_span_65_Template, 2, 0, "span", 31)(66, CleaningCreateComponent_div_6_span_66_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.scheduleForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.scheduleForm.get("location")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.scheduleForm.get("location")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.scheduleForm.get("location")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.scheduleForm.get("location")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.scheduleForm.get("schedule_date")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.scheduleForm.get("schedule_date")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.scheduleForm.get("schedule_date")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.scheduleForm.get("schedule_date")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.staffMembers);
    \u0275\u0275advance(20);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.scheduleForm.get("created_at")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.scheduleForm.get("created_at")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.scheduleForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function CleaningCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementEnd();
  }
}
var CleaningCreateComponent = class _CleaningCreateComponent {
  fb;
  route;
  router;
  cleaningService;
  teacherService;
  toastService;
  scheduleForm;
  isEditMode = false;
  scheduleId = null;
  isLoading = false;
  isSaving = false;
  staffMembers = [];
  constructor(fb, route, router, cleaningService, teacherService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.cleaningService = cleaningService;
    this.teacherService = teacherService;
    this.toastService = toastService;
    this.scheduleForm = this.fb.group({
      location: ["", Validators.required],
      schedule_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      assigned_to: [null],
      cleaning_type: ["", Validators.required],
      // location:['', Validators.required],
      created_at: ["", Validators.required],
      completion_status: ["", Validators.required],
      notes: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.scheduleId = +params["id"];
        this.loadSchedule();
      }
    });
    this.loadStaffMembers();
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
  loadSchedule() {
    if (!this.scheduleId)
      return;
    this.isLoading = true;
    this.cleaningService.getCleaningSchedules({ schedule_id: this.scheduleId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.schedules?.length > 0) {
          const schedule = response.data.schedules[0];
          this.scheduleForm.patchValue({
            area: schedule.area,
            schedule_date: schedule.schedule_date,
            assigned_to: schedule.assigned_to,
            status: schedule.status,
            notes: schedule.notes
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load cleaning schedule details");
        this.isLoading = false;
      }
    });
  }
  // onSubmit(): void {
  //   if (this.scheduleForm.invalid) {
  //     this.scheduleForm.markAllAsTouched();
  //     return;
  //   }
  //   this.isSaving = true;
  //   const formData = this.scheduleForm.value;
  //   if (this.isEditMode && this.scheduleId) {
  //     formData.schedule_id = this.scheduleId;
  //   }
  //   this.cleaningService.createCleaningSchedule(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success') {
  //         this.toastService.success(`Cleaning schedule ${this.isEditMode ? 'updated' : 'created'} successfully`);
  //         this.router.navigate(['/app/cleaning']);
  //       } else {
  //         this.toastService.error(response.message || `Failed to ${this.isEditMode ? 'update' : 'create'} schedule`);
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(`Failed to ${this.isEditMode ? 'update' : 'create'} schedule`);
  //       this.isSaving = false;
  //     }
  //   });
  // }
  onSubmit() {
    if (this.scheduleForm.invalid) {
      this.scheduleForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.scheduleForm.value;
    if (this.isEditMode && this.scheduleId) {
      formData.schedule_id = this.scheduleId;
      this.cleaningService.updateCleaningSchedule(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Cleaning schedule updated successfully");
            this.router.navigate(["/app/cleaning"]);
          } else {
            this.toastService.error(response.message || "Failed to update schedule");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update schedule");
          this.isSaving = false;
        }
      });
    } else {
      this.cleaningService.createCleaningSchedule(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Cleaning schedule created successfully");
            this.router.navigate(["/app/cleaning"]);
          } else {
            this.toastService.error(response.message || "Failed to create schedule");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create schedule");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/cleaning"]);
  }
  static \u0275fac = function CleaningCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CleaningCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CleaningService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CleaningCreateComponent, selectors: [["app-cleaning-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "cleaning-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "location", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "schedule_date", 1, "form-control"], ["formControlName", "assigned_to", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "cleaning_type", 1, "form-control"], ["value", "washroom"], ["value", "toilet"], ["value", "classroom"], ["value", "watering_plants"], ["type", "date", "formControlName", "created_at", 1, "form-control"], ["formControlName", "completion_status", 1, "form-control"], ["value", "pending"], ["value", "completed"], ["formControlName", "notes", "rows", "4", "placeholder", "Enter any additional notes or instructions", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function CleaningCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CleaningCreateComponent_div_6_Template, 67, 15, "div", 4)(7, CleaningCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Cleaning Schedule" : "Create Cleaning Schedule", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update schedule details" : "Create a new cleaning schedule", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.cleaning-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.cleaning-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=cleaning-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CleaningCreateComponent, { className: "CleaningCreateComponent", filePath: "src\\app\\modules\\cleaning\\cleaning-create\\cleaning-create.component.ts", lineNumber: 16 });
})();
export {
  CleaningCreateComponent
};
//# sourceMappingURL=chunk-GTJ5ICYF.js.map
