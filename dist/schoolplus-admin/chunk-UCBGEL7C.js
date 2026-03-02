import {
  MessScheduleService
} from "./chunk-UMGB5Z47.js";
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
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/mess-schedules/mess-schedule-create/mess-schedule-create.component.ts
function MessScheduleCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Schedule name is required ");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Start date is required ");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " End date is required ");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Schedule type is required ");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, " Week start date is required ");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_62_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MessScheduleCreateComponent_div_6_div_62_div_1_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const i_r4 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeMeal(i_r4));
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MessScheduleCreateComponent_div_6_div_62_div_1_button_4_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Meal Type ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "select", 37)(12, "option", 38);
    \u0275\u0275text(13, "Breakfast");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 39);
    \u0275\u0275text(15, "Lunch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 40);
    \u0275\u0275text(17, "Dinner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 41);
    \u0275\u0275text(19, "Snacks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 10)(21, "label");
    \u0275\u0275text(22, "Meal Date ");
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 10)(27, "label");
    \u0275\u0275text(28, "Menu Items");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 10)(31, "label");
    \u0275\u0275text(32, "Meal Time ");
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10)(37, "label");
    \u0275\u0275text(38, "Days ");
    \u0275\u0275elementStart(39, "span", 11);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const meal_r5 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", meal_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Meal ", i_r4 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.meals.length > 1);
  }
}
function MessScheduleCreateComponent_div_6_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, MessScheduleCreateComponent_div_6_div_62_div_1_Template, 42, 3, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.meals.controls);
  }
}
function MessScheduleCreateComponent_div_6_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "p");
    \u0275\u0275text(2, 'No meals added. Click "Add Meal" to add meals to this schedule.');
    \u0275\u0275elementEnd()();
  }
}
function MessScheduleCreateComponent_div_6_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function MessScheduleCreateComponent_div_6_span_69_Template(rf, ctx) {
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
function MessScheduleCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function MessScheduleCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Schedule Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Schedule Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, MessScheduleCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Start Date ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275template(19, MessScheduleCreateComponent_div_6_div_19_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10)(21, "label");
    \u0275\u0275text(22, "End Date ");
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 15);
    \u0275\u0275template(26, MessScheduleCreateComponent_div_6_div_26_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Schedule Type ");
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "select", 16)(33, "option", 17);
    \u0275\u0275text(34, "Regular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 18);
    \u0275\u0275text(36, "Special");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, MessScheduleCreateComponent_div_6_div_37_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 10)(39, "label");
    \u0275\u0275text(40, "Week Start Date ");
    \u0275\u0275elementStart(41, "span", 11);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "input", 14);
    \u0275\u0275template(44, MessScheduleCreateComponent_div_6_div_44_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 10)(46, "label");
    \u0275\u0275text(47, "Status ");
    \u0275\u0275elementStart(48, "span", 11);
    \u0275\u0275text(49, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "select", 19)(51, "option", 20);
    \u0275\u0275text(52, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 21);
    \u0275\u0275text(54, "Inactive");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 8)(56, "div", 22)(57, "h3");
    \u0275\u0275text(58, "Meals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 23);
    \u0275\u0275listener("click", function MessScheduleCreateComponent_div_6_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addMeal());
    });
    \u0275\u0275element(60, "i", 24);
    \u0275\u0275text(61, " Add Meal ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(62, MessScheduleCreateComponent_div_6_div_62_Template, 2, 1, "div", 25)(63, MessScheduleCreateComponent_div_6_div_63_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 27)(65, "button", 28);
    \u0275\u0275listener("click", function MessScheduleCreateComponent_div_6_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(66, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 29);
    \u0275\u0275template(68, MessScheduleCreateComponent_div_6_span_68_Template, 2, 0, "span", 30)(69, MessScheduleCreateComponent_div_6_span_69_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.scheduleForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.scheduleForm.get("schedule_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.scheduleForm.get("schedule_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.scheduleForm.get("schedule_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.scheduleForm.get("schedule_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.scheduleForm.get("start_date")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.scheduleForm.get("start_date")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.scheduleForm.get("start_date")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.scheduleForm.get("start_date")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.scheduleForm.get("end_date")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.scheduleForm.get("end_date")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.scheduleForm.get("end_date")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.scheduleForm.get("end_date")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.scheduleForm.get("schedule_type")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.scheduleForm.get("schedule_type")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r1.scheduleForm.get("week_start_date")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.scheduleForm.get("week_start_date")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.scheduleForm.get("week_start_date")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.scheduleForm.get("week_start_date")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.meals.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.meals.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.scheduleForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function MessScheduleCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 50);
    \u0275\u0275elementEnd();
  }
}
var MessScheduleCreateComponent = class _MessScheduleCreateComponent {
  fb;
  route;
  router;
  messScheduleService;
  toastService;
  academicYearService;
  scheduleForm;
  isEditMode = false;
  scheduleId = null;
  isLoading = false;
  isSaving = false;
  academicYears = [];
  constructor(fb, route, router, messScheduleService, toastService, academicYearService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.messScheduleService = messScheduleService;
    this.toastService = toastService;
    this.academicYearService = academicYearService;
    this.scheduleForm = this.fb.group({
      schedule_name: ["", Validators.required],
      week_start_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      week_end_date: ["", Validators.required],
      status: ["active", Validators.required],
      academic_year_id: ["", Validators.required],
      schedule_type: ["", Validators.required],
      meals: this.fb.array([])
    });
  }
  get meals() {
    return this.scheduleForm.get("meals");
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.scheduleId = +params["id"];
        this.loadSchedule();
      } else {
        this.addMeal();
      }
    });
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null && !this.isEditMode) {
          this.scheduleForm.patchValue({ academic_year_id: id });
        }
      }
    });
  }
  addMeal() {
    const mealForm = this.fb.group({
      meal_type: ["breakfast", Validators.required],
      meal_time: ["", Validators.required],
      meal_days: ["", Validators.required],
      meal_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      menu_items: [""]
    });
    this.meals.push(mealForm);
  }
  removeMeal(index) {
    this.meals.removeAt(index);
  }
  loadSchedule() {
    if (!this.scheduleId)
      return;
    this.isLoading = true;
    this.messScheduleService.getSchedules({ schedule_id: this.scheduleId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.schedules?.length > 0) {
          const schedule = response.data.schedules[0];
          this.scheduleForm.patchValue({
            schedule_name: schedule.schedule_name,
            week_start_date: schedule.week_start_date,
            week_end_date: schedule.week_end_date,
            status: schedule.status,
            academic_year_id: schedule.academic_year_id,
            schedule_type: schedule.schedule_type
          });
          this.meals.clear();
          if (schedule.meals && schedule.meals.length > 0) {
            schedule.meals.forEach((meal) => {
              this.meals.push(this.fb.group({
                meal_type: [meal.meal_type, Validators.required],
                meal_time: [meal.meal_time, Validators.required],
                meal_days: [
                  Array.isArray(meal.meal_days) ? meal.meal_days.join(", ") : meal.meal_days || "",
                  Validators.required
                ],
                meal_date: [
                  meal.meal_date,
                  Validators.required
                ],
                menu_items: [
                  Array.isArray(meal.menu_items) ? meal.menu_items.join(", ") : meal.menu_items || ""
                ]
              }));
            });
          } else {
            this.addMeal();
          }
        } else {
          this.toastService.warning("Schedule not found");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load schedule details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.scheduleForm.invalid || this.meals.length === 0) {
      this.scheduleForm.markAllAsTouched();
      if (this.meals.length === 0) {
        this.toastService.warning("Please add at least one meal");
      }
      return;
    }
    this.isSaving = true;
    const formData = __spreadProps(__spreadValues({}, this.scheduleForm.value), {
      meals: this.meals.controls.map((mealControl) => {
        const m = mealControl.value;
        return {
          meal_type: m.meal_type,
          meal_time: m.meal_time,
          meal_days: m.meal_days,
          meal_date: m.meal_date,
          schedule_id: this.scheduleId || null,
          menu_items: m.menu_items.split(",").map((i) => i.trim())
        };
      })
    });
    if (this.isEditMode && this.scheduleId) {
      formData.schedule_id = this.scheduleId;
      this.messScheduleService.updateSchedule(this.scheduleId, formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Mess schedule updated successfully");
            this.router.navigate(["/app/mess-schedules"]);
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
      this.messScheduleService.createSchedule(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Mess schedule created successfully");
            this.router.navigate(["/app/mess-schedules"]);
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
    this.router.navigate(["/app/mess-schedules"]);
  }
  static \u0275fac = function MessScheduleCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessScheduleCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessScheduleService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AcademicYearService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessScheduleCreateComponent, selectors: [["app-mess-schedule-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "mess-schedule-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "schedule_name", "placeholder", "e.g., Summer Schedule 2024", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "formControlName", "week_start_date", 1, "form-control"], ["type", "date", "formControlName", "week_end_date", 1, "form-control"], ["formControlName", "schedule_type", 1, "form-control"], ["value", "regular"], ["value", "special"], ["formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], [1, "section-header"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "bi", "bi-plus-circle"], ["class", "meals-list", 4, "ngIf"], ["class", "empty-meals", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "meals-list"], ["class", "meal-item", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "meal-item", 3, "formGroup"], [1, "meal-header"], ["type", "button", "class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], ["formControlName", "meal_type", 1, "form-control"], ["value", "breakfast"], ["value", "lunch"], ["value", "dinner"], ["value", "snacks"], ["type", "date", "formControlName", "meal_date", 1, "form-control"], ["type", "text", "formControlName", "menu_items", "placeholder", "e.g., Rice, Dal, Sabji (comma separated)", 1, "form-control"], ["type", "time", "formControlName", "meal_time", 1, "form-control"], ["type", "text", "formControlName", "meal_days", "placeholder", "e.g., Monday, Wednesday, Friday", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "empty-meals"], [1, "loading-spinner"], [1, "spinner"]], template: function MessScheduleCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, MessScheduleCreateComponent_div_6_Template, 70, 20, "div", 4)(7, MessScheduleCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Mess Schedule" : "Create Mess Schedule");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update schedule details" : "Create a new mess schedule");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.mess-schedule-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meal-item[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meal-item[_ngcontent-%COMP%]   .meal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .meal-item[_ngcontent-%COMP%]   .meal-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .meals-list[_ngcontent-%COMP%]   .empty-meals[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.mess-schedule-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=mess-schedule-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessScheduleCreateComponent, { className: "MessScheduleCreateComponent", filePath: "src\\app\\modules\\mess-schedules\\mess-schedule-create\\mess-schedule-create.component.ts", lineNumber: 16 });
})();
export {
  MessScheduleCreateComponent
};
//# sourceMappingURL=chunk-UCBGEL7C.js.map
