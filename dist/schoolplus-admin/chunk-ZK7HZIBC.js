import {
  StaffAllotmentService
} from "./chunk-N7UKIPCT.js";
import {
  TimetableService
} from "./chunk-X7JXERET.js";
import {
  TeacherService
} from "./chunk-T553C5NZ.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  Router,
  RouterLink,
  RouterModule
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/timetable/timetable-list/timetable-list.component.ts
var _c0 = () => ({ standalone: true });
function TimetableListComponent_div_14_div_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "Loading allotments...");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_30_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " Select class (and section) to load subjects and teachers. ");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_30_table_5_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "input", 47);
    \u0275\u0275listener("input", function TimetableListComponent_div_14_div_30_table_5_tr_12_Template_input_input_6_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.updateGeneratorWeeklyCount(row_r3, $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableListComponent_div_14_div_30_table_5_tr_12_Template_input_ngModelChange_8_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(row_r3.is_lab, $event) || (row_r3.is_lab = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.teacher_name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r3.weekly_count);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r3.is_lab);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
function TimetableListComponent_div_14_div_30_table_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 45)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Weekly classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Lab");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, TimetableListComponent_div_14_div_30_table_5_tr_12_Template, 9, 6, "tr", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r3.generatorSubjectRows);
  }
}
function TimetableListComponent_div_14_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "h4");
    \u0275\u0275text(2, "Subject weekly load (from staff allotments)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TimetableListComponent_div_14_div_30_div_3_Template, 2, 0, "div", 40)(4, TimetableListComponent_div_14_div_30_div_4_Template, 2, 0, "div", 41)(5, TimetableListComponent_div_14_div_30_table_5_Template, 13, 1, "table", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.generatorAllotmentsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.generatorAllotmentsLoading && ctx_r3.generatorSubjectRows.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.generatorAllotmentsLoading && ctx_r3.generatorSubjectRows.length > 0);
  }
}
function TimetableListComponent_div_14_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Generate Timetable");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Generating...");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.generatorError, " ");
  }
}
function TimetableListComponent_div_14_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " Timetable saved successfully. View it above by selecting the same class/section. ");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_37_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r6);
  }
}
function TimetableListComponent_div_14_div_37_tr_11_td_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const day_r7 = \u0275\u0275nextContext().$implicit;
    const period_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r3.getGeneratedSlot(period_r8.period_id, day_r7)) == null ? null : tmp_7_0.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = ctx_r3.getGeneratedSlot(period_r8.period_id, day_r7)) == null ? null : tmp_8_0.teacher_name);
  }
}
function TimetableListComponent_div_14_div_37_tr_11_td_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_37_tr_11_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275template(1, TimetableListComponent_div_14_div_37_tr_11_td_7_div_1_Template, 5, 2, "div", 61)(2, TimetableListComponent_div_14_div_37_tr_11_td_7_div_2_Template, 2, 0, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const period_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getGeneratedSlot(period_r8.period_id, day_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getGeneratedSlot(period_r8.period_id, day_r7));
  }
}
function TimetableListComponent_div_14_div_37_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "div", 56)(3, "div", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TimetableListComponent_div_14_div_37_tr_11_td_7_Template, 3, 2, "td", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(period_r8.period_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", period_r8.start_time, " - ", period_r8.end_time, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.daysOfWeek);
  }
}
function TimetableListComponent_div_14_div_37_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save generated timetable");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_37_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_14_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "h4");
    \u0275\u0275text(2, "Preview \u2013 Save to apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "table", 53)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TimetableListComponent_div_14_div_37_th_9_Template, 2, 1, "th", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, TimetableListComponent_div_14_div_37_tr_11_Template, 8, 4, "tr", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 54);
    \u0275\u0275listener("click", function TimetableListComponent_div_14_div_37_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveGenerated());
    });
    \u0275\u0275template(13, TimetableListComponent_div_14_div_37_span_13_Template, 2, 0, "span", 35)(14, TimetableListComponent_div_14_div_37_span_14_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.daysOfWeek);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.periods);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isSavingGenerated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isSavingGenerated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isSavingGenerated);
  }
}
function TimetableListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 20);
    \u0275\u0275element(2, "i", 6);
    \u0275\u0275text(3, " Automatic Timetable Generator ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5, "Set conditions and generate a timetable by subject weekly load and teacher limits.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 22)(7, "div", 23)(8, "div", 13)(9, "label");
    \u0275\u0275text(10, "Class ");
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "app-search-select", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 13)(15, "label");
    \u0275\u0275text(16, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-search-select", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27)(19, "label", 28);
    \u0275\u0275element(20, "input", 29);
    \u0275\u0275text(21, " Use staff allotments (subject & teacher from current year) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "label");
    \u0275\u0275text(24, "Max periods per day (per teacher)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 13)(27, "label");
    \u0275\u0275text(28, "Max periods per week (per teacher)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, TimetableListComponent_div_14_div_30_Template, 6, 3, "div", 32);
    \u0275\u0275elementStart(31, "div", 33)(32, "button", 34);
    \u0275\u0275listener("click", function TimetableListComponent_div_14_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.runGenerator());
    });
    \u0275\u0275template(33, TimetableListComponent_div_14_span_33_Template, 2, 0, "span", 35)(34, TimetableListComponent_div_14_span_34_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, TimetableListComponent_div_14_div_35_Template, 2, 1, "div", 36)(36, TimetableListComponent_div_14_div_36_Template, 2, 0, "div", 37)(37, TimetableListComponent_div_14_div_37_Template, 15, 5, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.generatorForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("options", ctx_r3.classOptions);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r3.sectionOptions)("disabled", !((tmp_4_0 = ctx_r3.generatorForm.get("class_id")) == null ? null : tmp_4_0.value));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r3.generatorForm.get("use_allotments")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isGenerating || !((tmp_6_0 = ctx_r3.generatorForm.get("class_id")) == null ? null : tmp_6_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isGenerating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.generatorError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.generatorSaved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.generatedSlots.length > 0 && !ctx_r3.generatorSaved);
  }
}
function TimetableListComponent_div_26_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r9);
  }
}
function TimetableListComponent_div_26_tr_9_td_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r10 = \u0275\u0275nextContext().$implicit;
    const period_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getSubjectForPeriod(period_r11.period_id, day_r10).subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getSubjectForPeriod(period_r11.period_id, day_r10).teacher_name);
  }
}
function TimetableListComponent_div_26_tr_9_td_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function TimetableListComponent_div_26_tr_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275template(1, TimetableListComponent_div_26_tr_9_td_7_div_1_Template, 5, 2, "div", 61)(2, TimetableListComponent_div_26_tr_9_td_7_div_2_Template, 2, 0, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const period_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.getSubjectForPeriod(period_r11.period_id, day_r10));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.getSubjectForPeriod(period_r11.period_id, day_r10));
  }
}
function TimetableListComponent_div_26_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55)(2, "div", 56)(3, "div", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TimetableListComponent_div_26_tr_9_td_7_Template, 3, 2, "td", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(period_r11.period_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", period_r11.start_time, " - ", period_r11.end_time, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.daysOfWeek);
  }
}
function TimetableListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 52)(2, "table", 53)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TimetableListComponent_div_26_th_7_Template, 2, 1, "th", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275template(9, TimetableListComponent_div_26_tr_9_Template, 8, 4, "tr", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.daysOfWeek);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.periods);
  }
}
function TimetableListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading timetable...");
    \u0275\u0275elementEnd()();
  }
}
function TimetableListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Select class to view timetable");
    \u0275\u0275elementEnd()();
  }
}
var TimetableListComponent = class _TimetableListComponent {
  fb;
  timetableService;
  classService;
  staffAllotmentService;
  academicYearService;
  timetables = [];
  classes = [];
  sections = [];
  periods = [];
  isLoading = false;
  filterForm;
  selectedClass = null;
  selectedSection = null;
  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Auto-generator state
  showGenerator = false;
  generatorForm;
  generatorSubjectRows = [];
  generatorAllotmentsLoading = false;
  generatedSlots = [];
  generatorError = null;
  isGenerating = false;
  isSavingGenerated = false;
  generatorSaved = false;
  get classOptions() {
    const select = [{ value: null, label: "Select Class" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...select, ...list];
  }
  get sectionOptions() {
    const all = [{ value: null, label: "All Sections" }];
    const list = (this.sections || []).map((s) => ({ value: s.section_id, label: s.section_name || "" }));
    return [...all, ...list];
  }
  constructor(fb, timetableService, classService, staffAllotmentService, academicYearService) {
    this.fb = fb;
    this.timetableService = timetableService;
    this.classService = classService;
    this.staffAllotmentService = staffAllotmentService;
    this.academicYearService = academicYearService;
    this.filterForm = this.fb.group({
      class_id: [null],
      section_id: [null]
    });
    this.generatorForm = this.fb.group({
      class_id: [null],
      section_id: [null],
      use_allotments: [true],
      max_per_day: [6, []],
      max_per_week: [36, []]
    });
  }
  ngOnInit() {
    this.loadClasses();
    this.loadPeriods();
    this.filterForm.get("class_id")?.valueChanges.subscribe((classId) => {
      this.filterForm.patchValue({ section_id: null }, { emitEvent: false });
      this.sections = [];
      if (classId) {
        this.loadSections(classId);
        this.loadTimetable(classId);
      } else {
        this.timetables = [];
      }
    });
    this.filterForm.get("section_id")?.valueChanges.subscribe((sectionId) => {
      const classId = this.filterForm.get("class_id")?.value;
      if (classId) {
        this.loadTimetable(classId, sectionId || void 0);
      }
    });
    this.generatorForm.get("class_id")?.valueChanges.subscribe(() => {
      this.generatorForm.patchValue({ section_id: null }, { emitEvent: false });
      this.generatorSubjectRows = [];
      this.generatedSlots = [];
      this.generatorError = null;
      if (this.generatorForm.get("use_allotments")?.value) {
        this.loadGeneratorAllotments();
      }
    });
    this.generatorForm.get("section_id")?.valueChanges.subscribe(() => {
      this.generatedSlots = [];
      this.generatorError = null;
      if (this.generatorForm.get("use_allotments")?.value) {
        this.loadGeneratorAllotments();
      }
    });
    this.generatorForm.get("use_allotments")?.valueChanges.subscribe((use) => {
      if (use) {
        this.loadGeneratorAllotments();
      } else {
        this.generatorSubjectRows = [];
      }
      this.generatedSlots = [];
      this.generatorError = null;
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
  loadSections(classId) {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.sections = response.data.sections || [];
        } else {
          this.sections = [];
        }
      },
      error: () => {
        this.sections = [];
      }
    });
  }
  loadPeriods() {
    this.timetableService.getPeriods().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.periods = response.data.periods || [];
        }
      }
    });
  }
  loadTimetable(classId, sectionId) {
    this.isLoading = true;
    const params = { class_id: classId };
    if (sectionId) {
      params.section_id = sectionId;
    }
    this.timetableService.getTimetable(params).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.timetables = response.data.timetable || [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading timetable:", error);
        this.isLoading = false;
      }
    });
  }
  getSubjectForPeriod(periodId, day) {
    const tt = this.timetables.find((t) => t.period_id === periodId && t.day_of_week === day);
    if (tt && (tt.teacher_first_name != null || tt.teacher_last_name != null)) {
      return __spreadProps(__spreadValues({}, tt), { teacher_name: [tt.teacher_first_name, tt.teacher_last_name].filter(Boolean).join(" ") });
    }
    return tt;
  }
  toggleGenerator() {
    this.showGenerator = !this.showGenerator;
    if (this.showGenerator) {
      this.generatedSlots = [];
      this.generatorError = null;
      this.generatorSaved = false;
    }
  }
  loadGeneratorAllotments() {
    const classId = this.generatorForm.get("class_id")?.value;
    if (!classId) {
      this.generatorSubjectRows = [];
      return;
    }
    this.generatorAllotmentsLoading = true;
    const params = { class_id: classId };
    const sectionId = this.generatorForm.get("section_id")?.value;
    if (sectionId) {
      params.section_id = sectionId;
    }
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (academicYearId) => {
        if (academicYearId != null) {
          params.academic_year_id = academicYearId;
        }
        this.staffAllotmentService.getStaffAllotments(params).subscribe({
          next: (res) => {
            this.generatorAllotmentsLoading = false;
            let allotments = res?.data?.allotments ?? res?.allotments ?? [];
            if (sectionId != null) {
              allotments = allotments.filter((a) => a.section_id == null || a.section_id === sectionId);
            }
            this.generatorSubjectRows = allotments.map((a) => ({
              subject_id: a.subject_id,
              subject_name: a.subject_name || "",
              teacher_id: a.teacher_id,
              teacher_name: a.staff_name || "",
              weekly_count: a.periods_per_week ? +a.periods_per_week : 5,
              is_lab: false
            }));
          },
          error: () => {
            this.generatorAllotmentsLoading = false;
            this.generatorSubjectRows = [];
          }
        });
      },
      error: () => {
        this.generatorAllotmentsLoading = false;
        this.generatorSubjectRows = [];
      }
    });
  }
  runGenerator() {
    const classId = this.generatorForm.get("class_id")?.value;
    const maxPerDay = Math.max(1, +this.generatorForm.get("max_per_day")?.value || 6);
    const maxPerWeek = Math.max(1, +this.generatorForm.get("max_per_week")?.value || 36);
    this.generatorError = null;
    this.generatedSlots = [];
    if (!classId) {
      this.generatorError = "Please select a class.";
      return;
    }
    if (this.periods.length === 0) {
      this.generatorError = "No periods defined. Please add periods first.";
      return;
    }
    if (this.generatorSubjectRows.length === 0) {
      this.generatorError = "No subjects/teachers loaded. Use staff allotments for this class (and section) or add rows.";
      return;
    }
    const days = this.daysOfWeek;
    const periodsSorted = [...this.periods].sort((a, b) => (a.period_order ?? 0) - (b.period_order ?? 0));
    const slotGrid = {};
    const teacherDaily = {};
    const teacherWeekly = {};
    const subjectAssignments = this.generatorSubjectRows.filter((r) => r.weekly_count > 0).map((r) => __spreadValues({}, r)).sort((a, b) => b.weekly_count - a.weekly_count);
    for (const sa of subjectAssignments) {
      let placed = 0;
      for (let i = 0; i < sa.weekly_count; i++) {
        let placedThis = false;
        for (const day of days) {
          if ((teacherWeekly[sa.teacher_id] ?? 0) >= maxPerWeek)
            break;
          if ((teacherDaily[sa.teacher_id]?.[day] ?? 0) >= maxPerDay)
            continue;
          for (const period of periodsSorted) {
            const key = `${day}_${period.period_id}`;
            if (slotGrid[key])
              continue;
            slotGrid[key] = {
              day_of_week: day,
              period_id: period.period_id,
              subject_id: sa.subject_id,
              teacher_id: sa.teacher_id,
              subject_name: sa.subject_name,
              teacher_name: sa.teacher_name
            };
            if (!teacherDaily[sa.teacher_id])
              teacherDaily[sa.teacher_id] = {};
            teacherDaily[sa.teacher_id][day] = (teacherDaily[sa.teacher_id][day] ?? 0) + 1;
            teacherWeekly[sa.teacher_id] = (teacherWeekly[sa.teacher_id] ?? 0) + 1;
            placedThis = true;
            placed++;
            break;
          }
          if (placedThis)
            break;
        }
        if (!placedThis) {
          this.generatorError = `Could not place all periods. Stuck at subject "${sa.subject_name}" (need ${sa.weekly_count} per week). Try increasing max periods per day/week or reduce weekly counts.`;
          this.generatedSlots = Object.values(slotGrid);
          return;
        }
      }
    }
    this.generatedSlots = Object.values(slotGrid);
  }
  getGeneratedSlot(periodId, day) {
    return this.generatedSlots.find((s) => s.period_id === periodId && s.day_of_week === day);
  }
  saveGenerated() {
    const classId = this.generatorForm.get("class_id")?.value;
    const sectionId = this.generatorForm.get("section_id")?.value;
    if (!classId || this.generatedSlots.length === 0)
      return;
    this.isSavingGenerated = true;
    this.generatorSaved = false;
    const payload = {
      class_id: classId,
      section_id: sectionId || null,
      entries: this.generatedSlots.map((s) => ({
        subject_id: s.subject_id,
        teacher_id: s.teacher_id,
        period_id: s.period_id,
        day_of_week: s.day_of_week,
        room_number: ""
      }))
    };
    this.timetableService.bulkCreateTimetable(payload).subscribe({
      next: (response) => {
        this.isSavingGenerated = false;
        if (response.status === "success") {
          this.generatorSaved = true;
          this.generatedSlots = [];
          const classIdFilter = this.filterForm.get("class_id")?.value;
          if (classIdFilter === classId) {
            this.loadTimetable(classId, sectionId || void 0);
          }
        } else {
          this.generatorError = response.message || "Failed to save timetable.";
        }
      },
      error: (err) => {
        this.isSavingGenerated = false;
        this.generatorError = err?.error?.message || "Failed to save timetable.";
      }
    });
  }
  updateGeneratorWeeklyCount(row, value) {
    row.weekly_count = Math.max(0, Math.min(12, value));
  }
  static \u0275fac = function TimetableListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimetableListComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TimetableService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(StaffAllotmentService), \u0275\u0275directiveInject(AcademicYearService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimetableListComponent, selectors: [["app-timetable-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 9, consts: [[1, "timetable-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-magic"], ["routerLink", "/app/timetable/create", 1, "btn", "btn-primary"], [1, "bi", "bi-plus-circle"], ["class", "generator-card", 4, "ngIf"], [1, "filters-card"], [1, "filters-form", 3, "formGroup"], [1, "filters-grid"], [1, "form-group"], ["formControlName", "class_id", "placeholder", "Search or select class", 3, "options"], ["formControlName", "section_id", "placeholder", "Search or select section", 3, "options", "disabled"], ["class", "table-card", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state-card", 4, "ngIf"], [1, "generator-card"], [1, "generator-title"], [1, "generator-desc"], [1, "generator-form", 3, "formGroup"], [1, "generator-options"], [1, "required"], ["formControlName", "class_id", "placeholder", "Select class for timetable", 3, "options"], ["formControlName", "section_id", "placeholder", "All sections", 3, "options", "disabled"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "use_allotments"], ["type", "number", "formControlName", "max_per_day", "min", "1", "max", "10", 1, "form-control"], ["type", "number", "formControlName", "max_per_week", "min", "1", "max", "50", 1, "form-control"], ["class", "subject-rows-section", 4, "ngIf"], [1, "generator-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], ["class", "generator-error", 4, "ngIf"], ["class", "generator-success", 4, "ngIf"], ["class", "generator-preview", 4, "ngIf"], [1, "subject-rows-section"], ["class", "generator-loading", 4, "ngIf"], ["class", "generator-empty", 4, "ngIf"], ["class", "subject-rows-table", 4, "ngIf"], [1, "generator-loading"], [1, "generator-empty"], [1, "subject-rows-table"], [4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "12", 1, "form-control", "input-sm", 3, "input", "value"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "generator-error"], [1, "generator-success"], [1, "generator-preview"], [1, "table-responsive"], [1, "timetable-table"], ["type", "button", 1, "btn", "btn-primary", "save-generated-btn", 3, "click", "disabled"], [1, "period-cell"], [1, "period-info"], [1, "period-name"], [1, "period-time"], ["class", "subject-cell", 4, "ngFor", "ngForOf"], [1, "subject-cell"], ["class", "subject-info", 4, "ngIf"], ["class", "empty-cell", 4, "ngIf"], [1, "subject-info"], [1, "subject-name"], [1, "teacher-name"], [1, "empty-cell"], [1, "table-card"], [1, "loading-container"], [1, "spinner"], [1, "empty-state-card"], [1, "bi", "bi-calendar-x"]], template: function TimetableListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Class Timetable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage class schedules and periods");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function TimetableListComponent_Template_button_click_8_listener() {
        return ctx.toggleGenerator();
      });
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13, " Create Timetable ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(14, TimetableListComponent_div_14_Template, 38, 11, "div", 9);
      \u0275\u0275elementStart(15, "div", 10)(16, "form", 11)(17, "div", 12)(18, "div", 13)(19, "label");
      \u0275\u0275text(20, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "app-search-select", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "label");
      \u0275\u0275text(24, "Section");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "app-search-select", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(26, TimetableListComponent_div_26_Template, 10, 2, "div", 16)(27, TimetableListComponent_div_27_Template, 4, 0, "div", 17)(28, TimetableListComponent_div_28_Template, 4, 0, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_5_0;
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.showGenerator ? "Hide" : "Auto Generate", " Timetable ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showGenerator);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.classOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.sectionOptions)("disabled", !((tmp_5_0 = ctx.filterForm.get("class_id")) == null ? null : tmp_5_0.value));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.periods.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.periods.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, RouterModule, RouterLink, SearchSelectComponent], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.timetable-container[_ngcontent-%COMP%] {\n  padding: 0;\n  max-width: 1800px;\n  margin: 0 auto;\n}\n.timetable-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--font-size-sm);\n}\n.timetable-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.timetable-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  padding: var(--spacing-md);\n  text-align: center;\n}\n.timetable-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.timetable-table[_ngcontent-%COMP%]   .period-cell[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  font-weight: 500;\n  min-width: 120px;\n}\n.timetable-table[_ngcontent-%COMP%]   .period-info[_ngcontent-%COMP%]   .period-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n}\n.timetable-table[_ngcontent-%COMP%]   .period-info[_ngcontent-%COMP%]   .period-time[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n}\n.timetable-table[_ngcontent-%COMP%]   .subject-cell[_ngcontent-%COMP%] {\n  min-width: 150px;\n  vertical-align: middle;\n}\n.timetable-table[_ngcontent-%COMP%]   .subject-info[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm);\n  background: var(--primary-lighter);\n  border-radius: var(--radius-sm);\n}\n.timetable-table[_ngcontent-%COMP%]   .subject-info[_ngcontent-%COMP%]   .subject-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--primary-color);\n  margin-bottom: var(--spacing-xs);\n}\n.timetable-table[_ngcontent-%COMP%]   .subject-info[_ngcontent-%COMP%]   .teacher-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-secondary);\n}\n.timetable-table[_ngcontent-%COMP%]   .empty-cell[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-style: italic;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.generator-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  padding: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.generator-title[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-xs);\n  font-size: 1.1rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.generator-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  margin: 0 0 var(--spacing-md);\n}\n.generator-form[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.generator-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  cursor: pointer;\n  font-weight: normal;\n}\n.subject-rows-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.subject-rows-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm);\n  font-size: var(--font-size-sm);\n}\n.generator-loading[_ngcontent-%COMP%], \n.generator-empty[_ngcontent-%COMP%] {\n  color: var(--text-tertiary);\n  font-size: var(--font-size-sm);\n  padding: var(--spacing-sm) 0;\n}\n.subject-rows-table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  border-collapse: collapse;\n  font-size: var(--font-size-sm);\n}\n.subject-rows-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.subject-rows-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  padding: var(--spacing-sm) var(--spacing-md);\n  text-align: left;\n}\n.subject-rows-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-tertiary);\n  font-weight: 600;\n}\n.subject-rows-table[_ngcontent-%COMP%]   .input-sm[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: var(--spacing-xs) var(--spacing-sm);\n}\n.generator-actions[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.generator-error[_ngcontent-%COMP%] {\n  color: var(--danger-color, #c00);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-sm);\n}\n.generator-success[_ngcontent-%COMP%] {\n  color: var(--success-color, #0a0);\n  font-size: var(--font-size-sm);\n  margin-bottom: var(--spacing-sm);\n}\n.generator-preview[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n  padding-top: var(--spacing-lg);\n  border-top: 1px solid var(--border-color);\n}\n.generator-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-md);\n}\n.generator-preview[_ngcontent-%COMP%]   .save-generated-btn[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n/*# sourceMappingURL=timetable-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimetableListComponent, { className: "TimetableListComponent", filePath: "src\\app\\modules\\timetable\\timetable-list\\timetable-list.component.ts", lineNumber: 36 });
})();

// src/app/modules/timetable/timetable-create/timetable-create.component.ts
function TimetableCreateComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function TimetableCreateComponent_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function TimetableCreateComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
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
function TimetableCreateComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r4 = ctx.$implicit;
    \u0275\u0275property("value", teacher_r4.teacher_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", teacher_r4.full_name, " ");
  }
}
function TimetableCreateComponent_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r5 = ctx.$implicit;
    \u0275\u0275property("value", period_r5.period_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", period_r5.period_name, " (", period_r5.start_time, " - ", period_r5.end_time, ") ");
  }
}
function TimetableCreateComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275property("value", day_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r6, " ");
  }
}
function TimetableCreateComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Entry");
    \u0275\u0275elementEnd();
  }
}
function TimetableCreateComponent_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 23);
    \u0275\u0275text(2, " Saving... ");
    \u0275\u0275elementEnd();
  }
}
var TimetableCreateComponent = class _TimetableCreateComponent {
  fb;
  timetableService;
  classService;
  teacherService;
  router;
  timetableForm;
  isSaving = false;
  periods = [];
  classes = [];
  sections = [];
  subjects = [];
  teachers = [];
  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor(fb, timetableService, classService, teacherService, router) {
    this.fb = fb;
    this.timetableService = timetableService;
    this.classService = classService;
    this.teacherService = teacherService;
    this.router = router;
    this.timetableForm = this.fb.group({
      class_id: [null, Validators.required],
      section_id: [null],
      subject_id: [null, Validators.required],
      teacher_id: [null, Validators.required],
      period_id: [null, Validators.required],
      day_of_week: ["Monday", Validators.required],
      room_number: [""]
    });
  }
  ngOnInit() {
    this.loadPeriods();
    this.loadClasses();
    this.loadTeachers();
    this.timetableForm.get("class_id")?.valueChanges.subscribe((classId) => {
      if (classId) {
        this.loadSections(classId);
        this.loadSubjects(classId);
      } else {
        this.sections = [];
        this.subjects = [];
      }
    });
  }
  loadPeriods() {
    this.timetableService.getPeriods().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.periods = response.data.periods || [];
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
  loadSections(classId) {
    this.classService.getSections(classId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.sections = response.data.sections || [];
        }
      }
    });
  }
  loadSubjects(classId) {
    this.classService.getClassSubjects(classId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }
  loadTeachers() {
    this.teacherService.getTeachers({ limit: 1e3 }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.teachers = response.data.teachers || [];
        }
      }
    });
  }
  onSubmit() {
    if (this.timetableForm.invalid) {
      return;
    }
    this.isSaving = true;
    const formData = this.timetableForm.value;
    this.timetableService.createTimetable(formData).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === "success") {
          this.router.navigate(["/app/timetable"]);
        }
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
  static \u0275fac = function TimetableCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimetableCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TimetableService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(TeacherService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimetableCreateComponent, selectors: [["app-timetable-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 65, vars: 15, consts: [[1, "timetable-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["formControlName", "class_id", "required", "", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "section_id", 1, "form-control"], ["formControlName", "subject_id", "required", "", 1, "form-control"], ["formControlName", "teacher_id", "required", "", 1, "form-control"], ["formControlName", "period_id", "required", "", 1, "form-control"], ["formControlName", "day_of_week", "required", "", 1, "form-control"], ["type", "text", "formControlName", "room_number", "placeholder", "Enter room number (optional)", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "spinner-small"]], template: function TimetableCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Create Timetable Entry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Add a new period to class timetable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function TimetableCreateComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/timetable"]);
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Back ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "form", 7);
      \u0275\u0275listener("ngSubmit", function TimetableCreateComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "label");
      \u0275\u0275text(15, "Class *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 10)(17, "option", 11);
      \u0275\u0275text(18, "Select Class");
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, TimetableCreateComponent_option_19_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 9)(21, "label");
      \u0275\u0275text(22, "Section");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 13)(24, "option", 11);
      \u0275\u0275text(25, "All Sections");
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, TimetableCreateComponent_option_26_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 8)(28, "div", 9)(29, "label");
      \u0275\u0275text(30, "Subject *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "select", 14)(32, "option", 11);
      \u0275\u0275text(33, "Select Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, TimetableCreateComponent_option_34_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 9)(36, "label");
      \u0275\u0275text(37, "Teacher *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 15)(39, "option", 11);
      \u0275\u0275text(40, "Select Teacher");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, TimetableCreateComponent_option_41_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 8)(43, "div", 9)(44, "label");
      \u0275\u0275text(45, "Period *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 16)(47, "option", 11);
      \u0275\u0275text(48, "Select Period");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, TimetableCreateComponent_option_49_Template, 2, 4, "option", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 9)(51, "label");
      \u0275\u0275text(52, "Day of Week *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "select", 17);
      \u0275\u0275template(54, TimetableCreateComponent_option_54_Template, 2, 2, "option", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 9)(56, "label");
      \u0275\u0275text(57, "Room Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 19)(60, "button", 20);
      \u0275\u0275listener("click", function TimetableCreateComponent_Template_button_click_60_listener() {
        return ctx.router.navigate(["/app/timetable"]);
      });
      \u0275\u0275text(61, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 21);
      \u0275\u0275template(63, TimetableCreateComponent_span_63_Template, 2, 0, "span", 22)(64, TimetableCreateComponent_span_64_Template, 3, 0, "span", 22);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.timetableForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.sections);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.teachers);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.periods);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.daysOfWeek);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isSaving || ctx.timetableForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.timetable-create-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-lg);\n}\n/*# sourceMappingURL=timetable-create.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimetableCreateComponent, { className: "TimetableCreateComponent", filePath: "src\\app\\modules\\timetable\\timetable-create\\timetable-create.component.ts", lineNumber: 16 });
})();

// src/app/modules/timetable/timetable.routes.ts
var TimetableRoutes = [
  {
    path: "",
    component: TimetableListComponent
  },
  {
    path: "list",
    component: TimetableListComponent
  },
  {
    path: "create",
    component: TimetableCreateComponent
  }
];
export {
  TimetableRoutes
};
//# sourceMappingURL=chunk-ZK7HZIBC.js.map
