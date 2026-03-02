import {
  ClassworkService
} from "./chunk-EFMPRXWF.js";
import {
  MarksheetService
} from "./chunk-55M5MP7M.js";
import {
  HomeworkService
} from "./chunk-CXLGIVTG.js";
import {
  ReportService
} from "./chunk-O6NZD2M7.js";
import {
  DetailSliderComponent
} from "./chunk-TBLIHU44.js";
import {
  AttendanceService
} from "./chunk-CPUKNHE4.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import {
  SearchSelectComponent
} from "./chunk-P7OLLKRL.js";
import "./chunk-6W4TS6AE.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DC2DSRDW.js";
import {
  FeeService
} from "./chunk-2IBHENQH.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/students/student-detail-slider/student-detail-slider.component.ts
function StudentDetailSliderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Adm. ", ctx_r0.student.admission_number, "");
  }
}
function StudentDetailSliderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.student.class_name, "", (ctx_r0.student == null ? null : ctx_r0.student.section_name) ? " - " + ctx_r0.student.section_name : "", "");
  }
}
function StudentDetailSliderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StudentDetailSliderComponent_button_11_Template_button_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setTab(tab_r3.id));
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeTab === tab_r3.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tab_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3.label);
  }
}
function StudentDetailSliderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 21);
    \u0275\u0275text(2, "Date range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDetailSliderComponent_div_19_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateRange.start, $event) || (ctx_r0.dateRange.start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDetailSliderComponent_div_19_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDateRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5, "to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function StudentDetailSliderComponent_div_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateRange.end, $event) || (ctx_r0.dateRange.end = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function StudentDetailSliderComponent_div_19_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDateRangeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function StudentDetailSliderComponent_div_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadAttendance());
    });
    \u0275\u0275element(8, "i", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateRange.start);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateRange.end);
  }
}
function StudentDetailSliderComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "span", 28);
    \u0275\u0275text(3, " Loading...");
    \u0275\u0275elementEnd()();
  }
}
function StudentDetailSliderComponent_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32);
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275text(8, "Admission No.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 37);
    \u0275\u0275element(11, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 36);
    \u0275\u0275text(16, "Parent / Mobile");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 31)(18, "div", 39);
    \u0275\u0275element(19, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 34)(21, "div", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 36);
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 31)(26, "div", 41);
    \u0275\u0275element(27, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 34)(29, "div", 35);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 36);
    \u0275\u0275text(33, "Address");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.profileData.admission_number || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.parent_phone || ctx_r0.profileData.mobile || "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.parent_email || ctx_r0.profileData.email || "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.profileData.address ? \u0275\u0275pipeBind3(31, 4, ctx_r0.profileData.address, 0, 30) + (ctx_r0.profileData.address.length > 30 ? "..." : "") : "N/A");
  }
}
function StudentDetailSliderComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, StudentDetailSliderComponent_div_21_div_1_Template, 34, 8, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.profileData);
  }
}
function StudentDetailSliderComponent_div_22_table_30_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 51);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.fee_type_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.due_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 9, f_r5.fee_amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(10, 12, f_r5.paid_amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", f_r5.payment_status === "paid")("badge-warning", f_r5.payment_status !== "paid");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.payment_status);
  }
}
function StudentDetailSliderComponent_div_22_table_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Fee Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, StudentDetailSliderComponent_div_22_table_30_tr_14_Template, 14, 15, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r0.feesData);
  }
}
function StudentDetailSliderComponent_div_22_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No fee records.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275text(10, "Total Fees");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 31)(12, "div", 37);
    \u0275\u0275element(13, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34)(15, "div", 35);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 36);
    \u0275\u0275text(19, "Paid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 31)(21, "div", 41);
    \u0275\u0275element(22, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 34)(24, "div", 35);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 36);
    \u0275\u0275text(28, "Pending");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 46);
    \u0275\u0275template(30, StudentDetailSliderComponent_div_22_table_30_Template, 15, 1, "table", 47)(31, StudentDetailSliderComponent_div_22_p_31_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(8, 5, ctx_r0.feesSummary.total, "1.2-2"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(17, 8, ctx_r0.feesSummary.paid, "1.2-2"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(26, 11, ctx_r0.feesSummary.pending, "1.2-2"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.feesData.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.feesData.length === 0 && !ctx_r0.loading);
  }
}
function StudentDetailSliderComponent_div_23_table_27_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.attendance_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.attendance_type_name || a_r6.attendance_type_code);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", a_r6.is_present == 1)("badge-danger", a_r6.is_present != 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.is_present == 1 ? "Present" : "Absent");
  }
}
function StudentDetailSliderComponent_div_23_table_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, StudentDetailSliderComponent_div_23_table_27_tr_10_Template, 8, 7, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.attendanceData);
  }
}
function StudentDetailSliderComponent_div_23_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No attendance in selected range.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 30)(2, "div", 31)(3, "div", 37);
    \u0275\u0275element(4, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36);
    \u0275\u0275text(9, "Present");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 31)(11, "div", 41);
    \u0275\u0275element(12, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 34)(14, "div", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36);
    \u0275\u0275text(17, "Absent");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 31)(19, "div", 32);
    \u0275\u0275element(20, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 34)(22, "div", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 36);
    \u0275\u0275text(25, "Total Records");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 46);
    \u0275\u0275template(27, StudentDetailSliderComponent_div_23_table_27_Template, 11, 1, "table", 47)(28, StudentDetailSliderComponent_div_23_p_28_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.attendanceSummary.present);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.attendanceSummary.absent);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.attendanceSummary.total);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.attendanceData.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendanceData.length === 0 && !ctx_r0.loading);
  }
}
function StudentDetailSliderComponent_div_24_table_2_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r7.examination_name || m_r7.exam_name || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r7.class_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r7.status || "\u2014");
  }
}
function StudentDetailSliderComponent_div_24_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Examination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, StudentDetailSliderComponent_div_24_table_2_tr_10_Template, 8, 3, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.marksheetData);
  }
}
function StudentDetailSliderComponent_div_24_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No marksheets.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 46);
    \u0275\u0275template(2, StudentDetailSliderComponent_div_24_table_2_Template, 11, 1, "table", 47)(3, StudentDetailSliderComponent_div_24_p_3_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.marksheetData.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.marksheetData.length === 0 && !ctx_r0.loading);
  }
}
function StudentDetailSliderComponent_div_25_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7, "Overall");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.performanceData.overall_performance.percentage || "\u2014", "%");
  }
}
function StudentDetailSliderComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, StudentDetailSliderComponent_div_25_div_1_div_1_Template, 8, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.performanceData.overall_performance);
  }
}
function StudentDetailSliderComponent_div_25_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No performance data. Select academic year if required.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, StudentDetailSliderComponent_div_25_div_1_Template, 2, 1, "div", 29)(2, StudentDetailSliderComponent_div_25_p_2_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.performanceData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.performanceData && !ctx_r0.loading);
  }
}
function StudentDetailSliderComponent_div_26_table_2_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r8.homework_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r8.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r8.due_date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r8.status || "\u2014");
  }
}
function StudentDetailSliderComponent_div_26_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, StudentDetailSliderComponent_div_26_table_2_tr_12_Template, 10, 4, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.homeworkData);
  }
}
function StudentDetailSliderComponent_div_26_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No homework for this class.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 46);
    \u0275\u0275template(2, StudentDetailSliderComponent_div_26_table_2_Template, 13, 1, "table", 47)(3, StudentDetailSliderComponent_div_26_p_3_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.homeworkData.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.homeworkData.length === 0 && !ctx_r0.loading);
  }
}
function StudentDetailSliderComponent_div_27_table_2_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.classwork_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.assigned_date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r9.due_date);
  }
}
function StudentDetailSliderComponent_div_27_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 49)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Assigned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Due");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "tbody");
    \u0275\u0275template(12, StudentDetailSliderComponent_div_27_table_2_tr_12_Template, 9, 4, "tr", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.classworkData);
  }
}
function StudentDetailSliderComponent_div_27_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No classwork for this class.");
    \u0275\u0275elementEnd();
  }
}
function StudentDetailSliderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 46);
    \u0275\u0275template(2, StudentDetailSliderComponent_div_27_table_2_Template, 13, 1, "table", 47)(3, StudentDetailSliderComponent_div_27_p_3_Template, 2, 0, "p", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.classworkData.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.classworkData.length === 0 && !ctx_r0.loading);
  }
}
var StudentDetailSliderComponent = class _StudentDetailSliderComponent {
  studentService;
  feeService;
  attendanceService;
  marksheetService;
  homeworkService;
  classworkService;
  reportService;
  toast;
  visible = false;
  student = null;
  close = new EventEmitter();
  tabs = [
    { id: "profile", label: "Profile", icon: "bi-person" },
    { id: "fees", label: "Fees Statement", icon: "bi-wallet2" },
    { id: "attendance", label: "Attendance", icon: "bi-calendar-check" },
    { id: "marksheet", label: "Marksheet", icon: "bi-journal-text" },
    { id: "performance", label: "Performance Report", icon: "bi-graph-up" },
    { id: "homework", label: "Homework Status", icon: "bi-journal-bookmark" },
    { id: "classwork", label: "Classwork Status", icon: "bi-pencil-square" }
  ];
  activeTab = "profile";
  loading = false;
  profileData = null;
  feesData = [];
  attendanceData = [];
  marksheetData = [];
  performanceData = null;
  homeworkData = [];
  classworkData = [];
  dateRange = { start: "", end: "" };
  constructor(studentService, feeService, attendanceService, marksheetService, homeworkService, classworkService, reportService, toast) {
    this.studentService = studentService;
    this.feeService = feeService;
    this.attendanceService = attendanceService;
    this.marksheetService = marksheetService;
    this.homeworkService = homeworkService;
    this.classworkService = classworkService;
    this.reportService = reportService;
    this.toast = toast;
    const now = /* @__PURE__ */ new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.dateRange.start = firstDay.toISOString().slice(0, 10);
    this.dateRange.end = lastDay.toISOString().slice(0, 10);
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes["student"] && this.student && this.visible) {
      this.activeTab = "profile";
      this.loadProfile();
    }
    if (changes["visible"] && this.visible && this.student) {
      this.activeTab = "profile";
      this.loadProfile();
    }
  }
  onClose() {
    this.close.emit();
  }
  setTab(tab) {
    this.activeTab = tab;
    if (!this.student)
      return;
    switch (tab) {
      case "profile":
        this.loadProfile();
        break;
      case "fees":
        this.loadFees();
        break;
      case "attendance":
        this.loadAttendance();
        break;
      case "marksheet":
        this.loadMarksheet();
        break;
      case "performance":
        this.loadPerformance();
        break;
      case "homework":
        this.loadHomework();
        break;
      case "classwork":
        this.loadClasswork();
        break;
    }
  }
  loadProfile() {
    if (!this.student?.student_id)
      return;
    this.loading = true;
    this.studentService.getStudent(this.student.student_id).subscribe({
      next: (res) => {
        this.loading = false;
        this.profileData = res.status === "success" && res.data?.student ? res.data.student : this.student;
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading profile", "error");
      }
    });
  }
  loadFees() {
    if (!this.student?.student_id)
      return;
    this.loading = true;
    this.feeService.getFees({ student_id: this.student.student_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.feesData = res.status === "success" && res.data?.fees ? res.data.fees : [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading fees", "error");
      }
    });
  }
  loadAttendance() {
    if (!this.student?.student_id)
      return;
    this.loading = true;
    this.attendanceService.getAttendanceByStudent(this.student.student_id, this.dateRange.start, this.dateRange.end).subscribe({
      next: (res) => {
        this.loading = false;
        const data = res.status === "success" && res.data;
        this.attendanceData = Array.isArray(data?.attendance) ? data.attendance : data?.records ? data.records : [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading attendance", "error");
      }
    });
  }
  loadMarksheet() {
    if (!this.student?.student_id)
      return;
    this.loading = true;
    const params = { limit: 100 };
    if (this.student.class_id)
      params.class_id = this.student.class_id;
    this.marksheetService.getMarksheets(params).subscribe({
      next: (res) => {
        this.loading = false;
        const list = res.status === "success" && res.data?.marksheets ? res.data.marksheets : [];
        this.marksheetData = list.filter((m) => m.student_id == this.student.student_id);
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading marksheets", "error");
      }
    });
  }
  loadPerformance() {
    if (!this.student?.student_id)
      return;
    this.loading = true;
    this.reportService.getStudentPerformanceReport({
      student_id: this.student.student_id,
      academic_year_id: this.student.academic_year_id || ""
    }).subscribe({
      next: (res) => {
        this.loading = false;
        this.performanceData = res.status === "success" && res.data ? res.data : null;
      },
      error: () => {
        this.loading = false;
        this.performanceData = null;
        this.toast.show("Error loading performance", "error");
      }
    });
  }
  loadHomework() {
    if (!this.student?.class_id) {
      this.homeworkData = [];
      return;
    }
    this.loading = true;
    this.homeworkService.getHomeworks({ class_id: this.student.class_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.homeworkData = res.status === "success" && res.data?.homeworks ? res.data.homeworks : [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading homework", "error");
      }
    });
  }
  loadClasswork() {
    if (!this.student?.class_id) {
      this.classworkData = [];
      return;
    }
    this.loading = true;
    this.classworkService.getClasswork({ class_id: this.student.class_id, limit: 100 }).subscribe({
      next: (res) => {
        this.loading = false;
        this.classworkData = res.status === "success" && res.data?.classwork ? res.data.classwork : [];
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error loading classwork", "error");
      }
    });
  }
  onDateRangeChange() {
    if (this.activeTab === "attendance")
      this.loadAttendance();
  }
  get feesSummary() {
    const total = this.feesData.reduce((s, f) => s + (Number(f.fee_amount) || 0), 0);
    const paid = this.feesData.reduce((s, f) => s + (Number(f.paid_amount) || 0), 0);
    return { total, paid, pending: total - paid };
  }
  get attendanceSummary() {
    const total = this.attendanceData.length;
    const present = this.attendanceData.filter((a) => a.is_present == 1 || a.attendance_type_code === "P").length;
    return { total, present, absent: total - present };
  }
  static \u0275fac = function StudentDetailSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentDetailSliderComponent)(\u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(FeeService), \u0275\u0275directiveInject(AttendanceService), \u0275\u0275directiveInject(MarksheetService), \u0275\u0275directiveInject(HomeworkService), \u0275\u0275directiveInject(ClassworkService), \u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentDetailSliderComponent, selectors: [["app-student-detail-slider"]], inputs: { visible: "visible", student: "student" }, outputs: { close: "close" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 28, vars: 18, consts: [[3, "close", "visible", "title", "subtitle", "profileName", "profileSubtext"], [1, "slider-body"], [1, "slider-sidebar"], [1, "profile-card"], [1, "profile-avatar"], [1, "bi", "bi-person-circle"], [1, "profile-name"], ["class", "profile-meta", 4, "ngIf"], [1, "slider-nav"], ["type", "button", "class", "slider-nav-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "slider-content"], [1, "content-header"], [1, "content-header-text"], [1, "content-title"], [1, "content-subtitle"], ["class", "content-header-actions", 4, "ngIf"], ["class", "content-area", 4, "ngIf"], [1, "profile-meta"], ["type", "button", 1, "slider-nav-btn", 3, "click"], [1, "bi", 3, "ngClass"], [1, "content-header-actions"], [1, "date-label"], ["type", "date", 1, "date-input", 3, "ngModelChange", "change", "ngModel"], [1, "date-sep"], ["type", "button", "title", "Refresh", 1, "btn-refresh", 3, "click"], [1, "bi", "bi-arrow-clockwise"], [1, "content-area"], [1, "content-loading"], [1, "spinner"], ["class", "kpi-grid", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "kpi-primary"], [1, "bi", "bi-person-vcard"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "kpi-success"], [1, "bi", "bi-telephone"], [1, "kpi-icon", "kpi-info"], [1, "bi", "bi-envelope"], [1, "kpi-icon", "kpi-warning"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-currency-rupee"], [1, "bi", "bi-check-circle"], [1, "bi", "bi-hourglass-split"], [1, "data-table-wrap"], ["class", "data-table", 4, "ngIf"], ["class", "empty-msg", 4, "ngIf"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge"], [1, "empty-msg"], [1, "bi", "bi-calendar-check"], [1, "bi", "bi-calendar-x"], [1, "bi", "bi-calendar3"], [1, "badge", "badge-info"], ["class", "kpi-card", 4, "ngIf"], [1, "bi", "bi-graph-up"]], template: function StudentDetailSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-detail-slider", 0);
      \u0275\u0275listener("close", function StudentDetailSliderComponent_Template_app_detail_slider_close_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, StudentDetailSliderComponent_div_8_Template, 2, 1, "div", 7)(9, StudentDetailSliderComponent_div_9_Template, 2, 2, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nav", 8);
      \u0275\u0275template(11, StudentDetailSliderComponent_button_11_Template, 4, 4, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "main", 10)(13, "header", 11)(14, "div", 12)(15, "h2", 13);
      \u0275\u0275text(16, "Student Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18, "Complete student performance and analytics");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, StudentDetailSliderComponent_div_19_Template, 9, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, StudentDetailSliderComponent_div_20_Template, 4, 0, "div", 16)(21, StudentDetailSliderComponent_div_21_Template, 2, 1, "div", 16)(22, StudentDetailSliderComponent_div_22_Template, 32, 14, "div", 16)(23, StudentDetailSliderComponent_div_23_Template, 29, 5, "div", 16)(24, StudentDetailSliderComponent_div_24_Template, 4, 2, "div", 16)(25, StudentDetailSliderComponent_div_25_Template, 3, 2, "div", 16)(26, StudentDetailSliderComponent_div_26_Template, 4, 2, "div", 16)(27, StudentDetailSliderComponent_div_27_Template, 4, 2, "div", 16);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("visible", ctx.visible)("title", "Student Summary")("subtitle", "Complete student performance and analytics")("profileName", (ctx.student == null ? null : ctx.student.full_name) || "")("profileSubtext", (ctx.student == null ? null : ctx.student.admission_number) || (ctx.student == null ? null : ctx.student.class_name) ? (ctx.student == null ? null : ctx.student.class_name) + ((ctx.student == null ? null : ctx.student.section_name) ? " - " + ctx.student.section_name : "") : "");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate((ctx.student == null ? null : ctx.student.full_name) || "\u2014");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.student == null ? null : ctx.student.admission_number);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.student == null ? null : ctx.student.class_name);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.activeTab === "attendance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "profile");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "fees");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "attendance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "marksheet");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "performance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "homework");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.activeTab === "classwork");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DecimalPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DetailSliderComponent], styles: ["\n\n.slider-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n}\n.slider-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: var(--bg-secondary);\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 0;\n}\n.profile-card[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1.25rem;\n  margin: 0 0.75rem 1rem;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  text-align: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 0.5rem;\n  border-radius: 50%;\n  background: var(--primary-gradient);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n}\n.profile-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--font-size-base);\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-tertiary);\n}\n.slider-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0 0.5rem;\n}\n.slider-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 0.75rem;\n  border: none;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.slider-nav-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n}\n.slider-nav-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--primary-lighter);\n  color: var(--primary-dark);\n}\n.slider-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.slider-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  padding: 1rem 1.25rem;\n}\n.content-header[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n  margin: -1rem -1.25rem 1rem;\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.content-header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.content-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.content-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-right: 0.25rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.5rem;\n  border-radius: var(--radius-sm);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-size: 0.85rem;\n}\n.date-sep[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.content-area[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.content-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 2rem;\n  color: var(--text-tertiary);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: 1rem;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border: 1px solid var(--border-color);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md), 0 4px 12px rgba(37, 99, 235, 0.08);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  color: #fff;\n  flex-shrink: 0;\n}\n.kpi-icon.kpi-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n}\n.kpi-icon.kpi-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n}\n.kpi-icon.kpi-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n}\n.kpi-icon.kpi-info[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n}\n.kpi-body[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--text-primary);\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-tertiary);\n  margin-top: 0.2rem;\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--font-size-sm);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-color);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  color: var(--text-primary);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-lighter);\n  color: var(--success-color);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--warning-lighter);\n  color: var(--warning-color);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--info-lighter);\n  color: var(--info-color);\n}\n.badge.badge-danger[_ngcontent-%COMP%] {\n  background: var(--error-lighter);\n  color: var(--error-color);\n}\n.empty-msg[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  color: var(--text-tertiary);\n  font-size: var(--font-size-sm);\n}\n/*# sourceMappingURL=student-detail-slider.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentDetailSliderComponent, { className: "StudentDetailSliderComponent", filePath: "src\\app\\modules\\students\\student-detail-slider\\student-detail-slider.component.ts", lineNumber: 23 });
})();

// src/app/modules/students/student-list/student-list.component.ts
function StudentListComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label");
    \u0275\u0275text(2, "Section:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-search-select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function StudentListComponent_div_10_div_6_Template_app_search_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.sectionId, $event) || (ctx_r1.sectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function StudentListComponent_div_10_div_6_Template_app_search_select_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSectionChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r1.sectionOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sectionId);
  }
}
function StudentListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "label");
    \u0275\u0275text(4, "Class:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-search-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function StudentListComponent_div_10_Template_app_search_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.classId, $event) || (ctx_r1.classId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function StudentListComponent_div_10_Template_app_search_select_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClassChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, StudentListComponent_div_10_div_6_Template, 4, 2, "div", 15);
    \u0275\u0275elementStart(7, "div", 13)(8, "label");
    \u0275\u0275text(9, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-search-select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function StudentListComponent_div_10_Template_app_search_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.status, $event) || (ctx_r1.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function StudentListComponent_div_10_Template_app_search_select_valueChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatusChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("expanded", ctx_r1.showFilters);
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r1.classOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.classId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sections.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.status);
  }
}
var StudentListComponent = class _StudentListComponent {
  studentService;
  classService;
  dialogService;
  toastService;
  exportService;
  router;
  route;
  students = [];
  loading = false;
  selectedRowId;
  sliderStudent = null;
  sliderVisible = false;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "admission_number",
      label: "Admission No.",
      sortable: true,
      width: "120px"
    },
    {
      key: "roll_number",
      label: "Roll No.",
      sortable: true,
      width: "100px",
      format: (value) => value || "-"
    },
    {
      key: "full_name",
      label: "Name",
      sortable: true,
      format: (value, row) => {
        let html = `<strong>${value || ""}</strong>`;
        if (row && row.email) {
          html += `<br><small style="color: var(--text-secondary);">${row.email}</small>`;
        }
        return html;
      }
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true
    },
    {
      key: "section_name",
      label: "Section",
      sortable: true
    },
    {
      key: "mobile",
      label: "Mobile",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "student_status",
      label: "Status",
      sortable: true,
      format: (value) => {
        const badgeClass = value === "Active" ? "badge-success" : value === "Inactive" ? "badge-warning" : value === "Transferred" ? "badge-info" : "badge-danger";
        return `<span class="badge ${badgeClass}">${value}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "admission_number";
  sortDirection = "asc";
  startDate;
  endDate;
  classId;
  sectionId;
  status = "all";
  showFilters = false;
  classes = [];
  sections = [];
  get classOptions() {
    const all = [{ value: void 0, label: "All Classes" }];
    return all.concat(this.classes.map((c) => ({ value: c.class_id, label: c.class_name })));
  }
  get sectionOptions() {
    const all = [{ value: void 0, label: "All Sections" }];
    return all.concat(this.sections.map((s) => ({ value: s.section_id, label: s.section_name })));
  }
  get statusOptions() {
    return [
      { value: "all", label: "All" },
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
      { value: "Transferred", label: "Transferred" },
      { value: "Graduated", label: "Graduated" }
    ];
  }
  constructor(studentService, classService, dialogService, toastService, exportService, router, route) {
    this.studentService = studentService;
    this.classService = classService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.loadClasses();
    this.route.queryParams.subscribe((params) => {
      const classId = params["class_id"];
      const sectionId = params["section_id"];
      if (classId != null && classId !== "")
        this.classId = Number(classId);
      if (sectionId != null && sectionId !== "")
        this.sectionId = Number(sectionId);
      if (classId != null || sectionId != null)
        this.pagination.page = 1;
      this.loadStudents();
    });
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      },
      error: (error) => {
        console.error("Error loading classes:", error);
      }
    });
  }
  loadStudents() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
    };
    if (this.searchTerm) {
      params.search = this.searchTerm;
    }
    if (this.startDate) {
      params.start_date = this.startDate;
    }
    if (this.endDate) {
      params.end_date = this.endDate;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.sectionId) {
      params.section_id = this.sectionId;
    }
    if (this.status && this.status !== "all") {
      params.status = this.status;
    }
    this.studentService.getStudents(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.students = response.data.students || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        console.error("Error loading students:", error);
        this.toastService.show("Error loading students", "error");
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadStudents();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadStudents();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadStudents();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadStudents();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadStudents();
  }
  onRowSelect(row) {
    this.selectedRowId = row.student_id;
    this.sliderStudent = row;
    this.sliderVisible = true;
  }
  onRefresh() {
    this.loadStudents();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/students/edit", row.student_id]);
  }
  onView(row) {
    this.sliderStudent = row;
    this.sliderVisible = true;
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Deactivate Student",
      message: `Are you sure you want to deactivate "${row.full_name}"?`,
      confirmText: "Deactivate",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.studentService.deleteStudent(row.student_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Student deactivated successfully", "success");
              this.loadStudents();
            }
          },
          error: () => {
            this.toastService.show("Error deactivating student", "error");
          }
        });
      }
    });
  }
  onExportClick(event) {
    const exportData = this.students.map((student) => ({
      "Admission No.": student.admission_number,
      "Roll No.": student.roll_number || "-",
      "Name": student.full_name,
      "Class": student.class_name,
      "Section": student.section_name,
      "Mobile": student.mobile || "-",
      "Email": student.email || "-",
      "Status": student.student_status
    }));
    const headers = this.columns.filter((col) => col.key !== "actions").map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `students-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `students-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.sectionId = void 0;
    this.sections = [];
    if (classId) {
      this.classService.getSections(classId).subscribe({
        next: (response) => {
          if (response.status === "success" && response.data) {
            this.sections = response.data.sections || [];
          }
        },
        error: (error) => {
          console.error("Error loading sections:", error);
        }
      });
    }
    this.pagination.page = 1;
    this.loadStudents();
  }
  onSectionChange(sectionId) {
    this.sectionId = sectionId || void 0;
    this.pagination.page = 1;
    this.loadStudents();
  }
  onStatusChange(status) {
    this.status = status;
    this.pagination.page = 1;
    this.loadStudents();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function StudentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentListComponent)(\u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentListComponent, selectors: [["app-student-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 15, consts: [[1, "student-list-container"], [1, "page-header"], [1, "header-content"], [1, "header-icon"], [1, "bi", "bi-people"], [1, "header-text"], [1, "page-title"], [1, "page-subtitle"], ["class", "filters-panel", 3, "expanded", 4, "ngIf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton"], [3, "close", "visible", "student"], [1, "filters-panel"], [1, "filters-row"], [1, "filter-item"], ["placeholder", "All Classes", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["class", "filter-item", 4, "ngIf"], ["placeholder", "All", 3, "ngModelChange", "valueChange", "options", "ngModel"], ["placeholder", "All Sections", 3, "ngModelChange", "valueChange", "options", "ngModel"]], template: function StudentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, "Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Manage student records and information");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(10, StudentListComponent_div_10_Template, 11, 7, "div", 8);
      \u0275\u0275elementStart(11, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function StudentListComponent_Template_app_enhanced_table_pageChange_11_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function StudentListComponent_Template_app_enhanced_table_pageSizeChange_11_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function StudentListComponent_Template_app_enhanced_table_searchChange_11_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function StudentListComponent_Template_app_enhanced_table_sortChange_11_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function StudentListComponent_Template_app_enhanced_table_dateFilterChange_11_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function StudentListComponent_Template_app_enhanced_table_rowSelect_11_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function StudentListComponent_Template_app_enhanced_table_refresh_11_listener() {
        return ctx.onRefresh();
      })("addClick", function StudentListComponent_Template_app_enhanced_table_addClick_11_listener() {
        return ctx.onAdd();
      })("editClick", function StudentListComponent_Template_app_enhanced_table_editClick_11_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function StudentListComponent_Template_app_enhanced_table_deleteClick_11_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function StudentListComponent_Template_app_enhanced_table_viewClick_11_listener($event) {
        return ctx.onView($event);
      })("exportClick", function StudentListComponent_Template_app_enhanced_table_exportClick_11_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function StudentListComponent_Template_app_enhanced_table_filterToggle_11_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "app-student-detail-slider", 10);
      \u0275\u0275listener("close", function StudentListComponent_Template_app_student_detail_slider_close_12_listener() {
        return ctx.sliderVisible = false;
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.classes.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.students)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "student_id")("addRoute", "/app/students/add")("addLabel", "Add New Student")("searchPlaceholder", "Search by name, admission number, mobile...")("enableExport", true)("enableDateFilter", true)("showViewButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("visible", ctx.sliderVisible)("student", ctx.sliderStudent);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent, StudentDetailSliderComponent, SearchSelectComponent], styles: ["\n\n.student-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .student-list-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n.student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.student-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.student-list-container[_ngcontent-%COMP%]   .filters-panel[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-xl);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-4xl);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  margin: 0;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n}\n.filters-form[_ngcontent-%COMP%]   .filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--spacing-md);\n  align-items: end;\n}\n.filters-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n.filters-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 0.875rem;\n  font-size: var(--font-size-base);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast);\n}\n.filters-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.filters-form[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  color: #fff;\n  font-size: var(--font-size-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  color: var(--text-primary);\n  font-size: var(--font-size-base);\n}\n.student-info[_ngcontent-%COMP%]   .student-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n}\n.student-info[_ngcontent-%COMP%]   .student-email[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-tertiary);\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: var(--radius-full);\n  font-size: var(--font-size-xs);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: var(--success-color);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: var(--warning-color);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: var(--info-color);\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  text-decoration: none;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  border-color: var(--info-color);\n  color: var(--info-color);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: #d1fae5;\n  border-color: var(--success-color);\n  color: var(--success-color);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: var(--error-color);\n  color: var(--error-color);\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl);\n  text-align: center;\n  color: var(--text-tertiary);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: var(--spacing-md);\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-base);\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-lg);\n  border-top: 1px solid var(--border-color);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n}\n.pagination-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.page-numbers[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n  font-size: var(--font-size-sm);\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-md);\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n@media (max-width: 768px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-sm) !important;\n  }\n  .filters-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    width: 100%;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n    background: var(--bg-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n    position: relative;\n    padding-left: 50%;\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    position: absolute;\n    left: var(--spacing-sm);\n    width: 45%;\n    text-align: left;\n    font-weight: 600;\n    color: var(--text-primary);\n    font-size: var(--font-size-xs);\n    text-transform: uppercase;\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n    margin-top: var(--spacing-sm);\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: var(--spacing-md);\n  }\n  .pagination-container[_ngcontent-%COMP%]   .pagination-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-lg);\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--spacing-xs);\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=student-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentListComponent, { className: "StudentListComponent", filePath: "src\\app\\modules\\students\\student-list\\student-list.component.ts", lineNumber: 21 });
})();

// src/app/modules/students/student-add/student-add.component.ts
function StudentAddComponent_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function StudentAddComponent_div_10_button_3_Template_button_click_0_listener() {
      const s_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSection(s_r4.id));
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeSection === s_r4.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.label);
  }
}
function StudentAddComponent_div_10_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Save Changes" : "Create Student");
  }
}
function StudentAddComponent_div_10_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 50);
    \u0275\u0275text(2, " Saving...");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Admission number is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "First name is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Last name is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Gender is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Date of birth is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Class is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Section is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Admission date is required");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_div_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, "Please enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function StudentAddComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function StudentAddComponent_div_10_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275template(3, StudentAddComponent_div_10_button_3_Template, 4, 5, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "h2", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275template(9, StudentAddComponent_div_10_span_9_Template, 2, 1, "span", 16)(10, StudentAddComponent_div_10_span_10_Template, 3, 0, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18)(13, "div", 19)(14, "div", 20)(15, "div", 21)(16, "label");
    \u0275\u0275text(17, "Admission Number ");
    \u0275\u0275elementStart(18, "span", 22);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 23);
    \u0275\u0275template(21, StudentAddComponent_div_10_div_21_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 21)(23, "label");
    \u0275\u0275text(24, "First Name ");
    \u0275\u0275elementStart(25, "span", 22);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 25);
    \u0275\u0275template(28, StudentAddComponent_div_10_div_28_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21)(30, "label");
    \u0275\u0275text(31, "Middle Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 21)(34, "label");
    \u0275\u0275text(35, "Last Name ");
    \u0275\u0275elementStart(36, "span", 22);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(38, "input", 27);
    \u0275\u0275template(39, StudentAddComponent_div_10_div_39_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 21)(41, "label");
    \u0275\u0275text(42, "Gender ");
    \u0275\u0275elementStart(43, "span", 22);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "app-search-select", 28);
    \u0275\u0275template(46, StudentAddComponent_div_10_div_46_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 21)(48, "label");
    \u0275\u0275text(49, "Date of Birth ");
    \u0275\u0275elementStart(50, "span", 22);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(52, "input", 29);
    \u0275\u0275template(53, StudentAddComponent_div_10_div_53_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 21)(55, "label");
    \u0275\u0275text(56, "Blood Group");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "app-search-select", 30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 18)(59, "div", 19)(60, "div", 20)(61, "div", 21)(62, "label");
    \u0275\u0275text(63, "Class ");
    \u0275\u0275elementStart(64, "span", 22);
    \u0275\u0275text(65, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(66, "app-search-select", 31);
    \u0275\u0275template(67, StudentAddComponent_div_10_div_67_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 21)(69, "label");
    \u0275\u0275text(70, "Section ");
    \u0275\u0275elementStart(71, "span", 22);
    \u0275\u0275text(72, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(73, "app-search-select", 32);
    \u0275\u0275template(74, StudentAddComponent_div_10_div_74_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 21)(76, "label");
    \u0275\u0275text(77, "Roll Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 21)(80, "label");
    \u0275\u0275text(81, "Admission Date ");
    \u0275\u0275elementStart(82, "span", 22);
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(84, "input", 34);
    \u0275\u0275template(85, StudentAddComponent_div_10_div_85_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 18)(87, "div", 19)(88, "h4", 35);
    \u0275\u0275text(89, "Contact details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 20)(91, "div", 21)(92, "label");
    \u0275\u0275text(93, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 21)(96, "label");
    \u0275\u0275text(97, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 37);
    \u0275\u0275template(99, StudentAddComponent_div_10_div_99_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "h4", 35);
    \u0275\u0275text(101, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 20)(103, "div", 38)(104, "label");
    \u0275\u0275text(105, "Street / Area");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "textarea", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 21)(108, "label");
    \u0275\u0275text(109, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 21)(112, "label");
    \u0275\u0275text(113, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 21)(116, "label");
    \u0275\u0275text(117, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "input", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 21)(120, "label");
    \u0275\u0275text(121, "Pin Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(122, "input", 43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(123, "div", 18)(124, "div", 19)(125, "div", 20)(126, "div", 21)(127, "label");
    \u0275\u0275text(128, "Parent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(129, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 21)(131, "label");
    \u0275\u0275text(132, "Relation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "app-search-select", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 21)(135, "label");
    \u0275\u0275text(136, "Parent Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(137, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 21)(139, "label");
    \u0275\u0275text(140, "Parent Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(141, "input", 47);
    \u0275\u0275template(142, StudentAddComponent_div_10_div_142_Template, 2, 0, "div", 24);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_35_0;
    let tmp_36_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.studentForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.studentSections);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getActiveSectionLabel());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeSection === "personal");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.studentForm.get("admission_number")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.studentForm.get("admission_number")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.studentForm.get("admission_number")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.studentForm.get("admission_number")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r1.studentForm.get("first_name")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.studentForm.get("first_name")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.studentForm.get("first_name")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r1.studentForm.get("first_name")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.studentForm.get("last_name")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.studentForm.get("last_name")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.studentForm.get("last_name")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.studentForm.get("last_name")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = ctx_r1.studentForm.get("gender")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.studentForm.get("gender")) == null ? null : tmp_14_0.touched));
    \u0275\u0275property("options", ctx_r1.genderOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r1.studentForm.get("gender")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.studentForm.get("gender")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r1.studentForm.get("date_of_birth")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.studentForm.get("date_of_birth")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = ctx_r1.studentForm.get("date_of_birth")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r1.studentForm.get("date_of_birth")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.bloodGroupOptions);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeSection === "academic");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_21_0 = ctx_r1.studentForm.get("class_id")) == null ? null : tmp_21_0.invalid) && ((tmp_21_0 = ctx_r1.studentForm.get("class_id")) == null ? null : tmp_21_0.touched));
    \u0275\u0275property("options", ctx_r1.classOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_23_0 = ctx_r1.studentForm.get("class_id")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r1.studentForm.get("class_id")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_24_0 = ctx_r1.studentForm.get("section_id")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r1.studentForm.get("section_id")) == null ? null : tmp_24_0.touched));
    \u0275\u0275property("options", ctx_r1.sectionOptions)("disabled", !((tmp_26_0 = ctx_r1.studentForm.get("class_id")) == null ? null : tmp_26_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_27_0 = ctx_r1.studentForm.get("section_id")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx_r1.studentForm.get("section_id")) == null ? null : tmp_27_0.touched));
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_28_0 = ctx_r1.studentForm.get("admission_date")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r1.studentForm.get("admission_date")) == null ? null : tmp_28_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_29_0 = ctx_r1.studentForm.get("admission_date")) == null ? null : tmp_29_0.invalid) && ((tmp_29_0 = ctx_r1.studentForm.get("admission_date")) == null ? null : tmp_29_0.touched));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeSection === "contact");
    \u0275\u0275advance(12);
    \u0275\u0275classProp("is-invalid", ((tmp_31_0 = ctx_r1.studentForm.get("email")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx_r1.studentForm.get("email")) == null ? null : tmp_31_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_32_0 = ctx_r1.studentForm.get("email")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx_r1.studentForm.get("email")) == null ? null : tmp_32_0.touched));
    \u0275\u0275advance(24);
    \u0275\u0275classProp("active", ctx_r1.activeSection === "parent");
    \u0275\u0275advance(10);
    \u0275\u0275property("options", ctx_r1.parentRelationOptions);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", ((tmp_35_0 = ctx_r1.studentForm.get("parent_email")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx_r1.studentForm.get("parent_email")) == null ? null : tmp_35_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_36_0 = ctx_r1.studentForm.get("parent_email")) == null ? null : tmp_36_0.invalid) && ((tmp_36_0 = ctx_r1.studentForm.get("parent_email")) == null ? null : tmp_36_0.touched));
  }
}
function StudentAddComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "div", 53);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading student data...");
    \u0275\u0275elementEnd()();
  }
}
var StudentAddComponent = class _StudentAddComponent {
  fb;
  studentService;
  academicYearService;
  classService;
  router;
  route;
  studentForm;
  isEditMode = false;
  studentId = null;
  isLoading = false;
  isSaving = false;
  classes = [];
  sections = [];
  academicYears = [];
  genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" }
  ];
  bloodGroupOptions = [
    { value: "", label: "Select Blood Group" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" }
  ];
  get classOptions() {
    const all = [{ value: null, label: "Select Class" }];
    const list = (this.classes || []).map((c) => ({ value: c.class_id, label: c.class_name || "" }));
    return [...all, ...list];
  }
  get sectionOptions() {
    const all = [{ value: null, label: "Select Section" }];
    const list = (this.sections || []).map((s) => ({ value: s.section_id, label: s.section_name || "" }));
    return [...all, ...list];
  }
  get academicYearOptions() {
    const all = [{ value: null, label: "Select Academic Year" }];
    const list = (this.academicYears || []).map((y) => ({ value: y.academic_year_id, label: y.academic_year_name || "" }));
    return [...all, ...list];
  }
  parentRelationOptions = [
    { value: "Father", label: "Father" },
    { value: "Mother", label: "Mother" },
    { value: "Guardian", label: "Guardian" },
    { value: "Other", label: "Other" }
  ];
  activeSection = "personal";
  studentSections = [
    { id: "personal", label: "Personal Information", icon: "bi-person" },
    { id: "academic", label: "Academic Information", icon: "bi-journal-bookmark" },
    { id: "contact", label: "Contact & Address", icon: "bi-telephone" },
    { id: "parent", label: "Parent / Guardian", icon: "bi-people" }
  ];
  constructor(fb, studentService, academicYearService, classService, router, route) {
    this.fb = fb;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.router = router;
    this.route = route;
    this.studentForm = this.fb.group({
      admission_number: ["", Validators.required],
      first_name: ["", Validators.required],
      middle_name: [""],
      last_name: ["", Validators.required],
      gender: ["", Validators.required],
      date_of_birth: ["", Validators.required],
      class_id: [null, Validators.required],
      section_id: [null, Validators.required],
      roll_number: [""],
      blood_group: [""],
      mobile: [""],
      email: ["", [Validators.email]],
      address: [""],
      city: [""],
      state: [""],
      country: [""],
      pincode: [""],
      academic_year_id: [null, Validators.required],
      parent_name: [""],
      parent_mobile: [""],
      parent_email: ["", [Validators.email]],
      parent_relation: ["Father"],
      admission_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required]
    });
  }
  selectSection(id) {
    this.activeSection = id;
  }
  getActiveSectionLabel() {
    return this.studentSections.find((s) => s.id === this.activeSection)?.label || "Section";
  }
  ngOnInit() {
    this.loadClasses();
    this.loadAcademicYears();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.studentId = parseInt(params["id"]);
        this.loadStudent();
      }
    });
    this.studentForm.get("class_id")?.valueChanges.subscribe((classId) => {
      if (classId) {
        this.loadSections(classId);
      } else {
        this.sections = [];
      }
    });
  }
  loadAcademicYears() {
    this.academicYearService.getCurrentAcademicYearId().subscribe({
      next: (id) => {
        if (id != null) {
          this.studentForm.patchValue({ academic_year_id: id });
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
  // loadStudent(): void {
  //   if (!this.studentId) return;
  //   this.isLoading = true;
  //   this.studentService.getStudent(this.studentId).subscribe({
  //     next: (response) => {
  //       if (response.status === 'success' && response.data) {
  //         const student = response.data.student;
  //         const parent = response.data.parents?.[0];
  //         this.studentForm.patchValue({
  //           admission_number: student.admission_number,
  //           first_name: student.first_name,
  //           middle_name: student.middle_name || '',
  //           last_name: student.last_name,
  //           gender: student.gender,
  //           date_of_birth: student.date_of_birth,
  //           class_id: student.class_id,
  //           section_id: student.section_id,
  //           academic_year_id:student.academic_year_id,
  //           roll_number: student.roll_number || '',
  //           blood_group: student.blood_group || '',
  //           mobile: student.mobile || '',
  //           email: student.email || '',
  //           address: student.address || '',
  //           parent_name: parent?.parent_name || '',
  //           parent_mobile: parent?.parent_mobile || '',
  //           parent_email: parent?.parent_email || '',
  //           parent_relation: parent?.relation || 'Father',
  //           admission_date: student.admission_date
  //         });
  //         if (student.class_id) {
  //           this.loadSections(student.class_id);
  //         }
  //       }
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error loading student:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }
  loadStudent() {
    if (!this.studentId)
      return;
    this.isLoading = true;
    this.studentService.getStudent(this.studentId).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const student = response.data.student;
          let parentName = "";
          let parentMobile = "";
          let parentEmail = "";
          let parentRelation = "Father";
          if (student.father_name || student.father_mobile || student.father_email) {
            parentName = student.father_name || "";
            parentMobile = student.father_mobile || "";
            parentEmail = student.father_email || "";
            parentRelation = "Father";
          } else if (student.mother_name || student.mother_mobile || student.mother_email) {
            parentName = student.mother_name || "";
            parentMobile = student.mother_mobile || "";
            parentEmail = student.mother_email || "";
            parentRelation = "Mother";
          } else if (student.guardian_name || student.guardian_mobile || student.guardian_email) {
            parentName = student.guardian_name || "";
            parentMobile = student.guardian_mobile || "";
            parentEmail = student.guardian_email || "";
            parentRelation = "Guardian";
          }
          this.studentForm.patchValue({
            admission_number: student.admission_number,
            first_name: student.first_name,
            middle_name: student.middle_name || "",
            last_name: student.last_name,
            gender: student.gender,
            date_of_birth: student.date_of_birth,
            class_id: student.class_id,
            section_id: student.section_id,
            // leave section handling as-is
            academic_year_id: student.academic_year_id,
            roll_number: student.roll_number || "",
            blood_group: student.blood_group || "",
            mobile: student.mobile || "",
            email: student.email || "",
            address: student.address || "",
            city: student.city || "",
            state: student.state || "",
            country: student.country || "",
            pincode: student.pincode || "",
            parent_name: parentName,
            parent_mobile: parentMobile,
            parent_email: parentEmail,
            parent_relation: parentRelation,
            admission_date: student.admission_date
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading student:", error);
        this.isLoading = false;
      }
    });
  }
  // loadStudent(): void {
  //   if (!this.studentId) return;
  //   this.isLoading = true;
  //   console.log('Loading student with ID:', this.studentId);
  //   this.studentService.getStudent(this.studentId).subscribe({
  //     next: (response) => {
  //       console.log('Student response:', response);
  //       if (response.status === 'success' && response.data) {
  //         const student = response.data.student;
  //         const parent = response.data.parents?.[0] || {
  //           parent_name: student.father_name || '',
  //           parent_mobile: student.father_mobile || '',
  //           parent_email: student.father_email || '',
  //           relation: 'Father'
  //         };
  //         console.log('Student data:', student);
  //         console.log('Parent data fallback:', parent);
  //         // patch form except section_id
  //         this.studentForm.patchValue({
  //           admission_number: student.admission_number,
  //           first_name: student.first_name,
  //           middle_name: student.middle_name || '',
  //           last_name: student.last_name,
  //           gender: student.gender,
  //           date_of_birth: student.date_of_birth,
  //           class_id: student.class_id,
  //           academic_year_id: student.academic_year_id,
  //           roll_number: student.roll_number || '',
  //           blood_group: student.blood_group || '',
  //           mobile: student.mobile || '',
  //           email: student.email || '',
  //           address: student.address || '',
  //           parent_name: parent.parent_name,
  //           parent_mobile: parent.parent_mobile,
  //           parent_email: parent.parent_email,
  //           parent_relation: parent.relation,
  //           admission_date: student.admission_date
  //         });
  //         if (student.class_id) {
  //           console.log('Loading sections for class_id:', student.class_id);
  //           this.classService.getSections(student.class_id).subscribe({
  //             next: (secResp) => {
  //               console.log('Sections response:', secResp);
  //               if (secResp.status === 'success' && secResp.data) {
  //                 this.sections = secResp.data.sections || [];
  //                 console.log('Sections loaded:', this.sections);
  //                 // patch section_id after sections are loaded
  //                 this.studentForm.patchValue({ section_id: student.section_id });
  //                 console.log('Form after setting section_id:', this.studentForm.value);
  //               }
  //             },
  //             error: (err) => console.error('Error loading sections:', err)
  //           });
  //         }
  //       }
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.error('Error loading student:', error);
  //       this.isLoading = false;
  //     }
  //   });
  // }
  sectionByControl = {
    admission_number: "personal",
    first_name: "personal",
    middle_name: "personal",
    last_name: "personal",
    gender: "personal",
    date_of_birth: "personal",
    blood_group: "personal",
    class_id: "academic",
    section_id: "academic",
    roll_number: "academic",
    admission_date: "academic",
    academic_year_id: "academic",
    mobile: "contact",
    email: "contact",
    address: "contact",
    city: "contact",
    state: "contact",
    country: "contact",
    pincode: "contact",
    parent_name: "parent",
    parent_relation: "parent",
    parent_mobile: "parent",
    parent_email: "parent"
  };
  onSubmit() {
    if (this.studentForm.invalid) {
      this.markFormGroupTouched(this.studentForm);
      const firstInvalid = Object.keys(this.studentForm.controls).find((key) => this.studentForm.get(key)?.invalid && this.studentForm.get(key)?.touched);
      if (firstInvalid && this.sectionByControl[firstInvalid]) {
        this.activeSection = this.sectionByControl[firstInvalid];
      }
      return;
    }
    this.isSaving = true;
    const formValue = __spreadValues({}, this.studentForm.value);
    const relation = formValue.parent_relation || "Father";
    if (relation === "Father") {
      formValue.father_name = formValue.parent_name;
      formValue.father_mobile = formValue.parent_mobile;
      formValue.father_email = formValue.parent_email;
    } else if (relation === "Mother") {
      formValue.mother_name = formValue.parent_name;
      formValue.mother_mobile = formValue.parent_mobile;
      formValue.mother_email = formValue.parent_email;
    } else if (relation === "Guardian") {
      formValue.guardian_name = formValue.parent_name;
      formValue.guardian_mobile = formValue.parent_mobile;
      formValue.guardian_email = formValue.parent_email;
    }
    delete formValue.parent_name;
    delete formValue.parent_mobile;
    delete formValue.parent_email;
    delete formValue.parent_relation;
    if (this.isEditMode && this.studentId) {
      this.studentService.updateStudent(this.studentId, formValue).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            alert("Student updated successfully!");
            this.router.navigate(["/app/students/list"]);
          } else {
            alert(response.message || "Failed to update student");
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || "An error occurred");
        }
      });
    } else {
      this.studentService.createStudent(formValue).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            alert("Student created successfully!");
            this.router.navigate(["/app/students/list"]);
          } else {
            alert(response.message || "Failed to create student");
          }
        },
        error: (error) => {
          this.isSaving = false;
          alert(error.error?.message || "An error occurred");
        }
      });
    }
  }
  // onSubmit(): void {
  //   if (this.studentForm.invalid) {
  //     this.markFormGroupTouched(this.studentForm);
  //     return;
  //   }
  //   this.isSaving = true;
  //   const formValue = this.studentForm.value;
  //   if (this.isEditMode && this.studentId) {
  //     this.studentService.updateStudent(this.studentId, formValue).subscribe({
  //       next: (response) => {
  //         this.isSaving = false;
  //         if (response.status === 'success') {
  //           alert('Student updated successfully!');
  //           this.router.navigate(['/app/students/list']);
  //         } else {
  //           alert(response.message || 'Failed to update student');
  //         }
  //       },
  //       error: (error) => {
  //         this.isSaving = false;
  //         alert(error.error?.message || 'An error occurred');
  //       }
  //     });
  //   } else {
  //     this.studentService.createStudent(formValue).subscribe({
  //       next: (response) => {
  //         this.isSaving = false;
  //         if (response.status === 'success') {
  //           alert('Student created successfully!');
  //           this.router.navigate(['/app/students/list']);
  //         } else {
  //           alert(response.message || 'Failed to create student');
  //         }
  //       },
  //       error: (error) => {
  //         this.isSaving = false;
  //         alert(error.error?.message || 'An error occurred');
  //       }
  //     });
  //   }
  // }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/students/list"]);
  }
  static \u0275fac = function StudentAddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAddComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentAddComponent, selectors: [["app-student-add"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 4, consts: [[1, "student-add-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-x-circle"], ["class", "split-form-content", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "split-form-content"], [3, "ngSubmit", "formGroup"], [1, "split-form-tabs"], ["type", "button", "class", "split-form-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "split-form-panel"], [1, "split-form-panel-header"], [1, "split-form-panel-title"], ["type", "submit", 1, "btn", "btn-primary", "btn-save", 3, "disabled"], [4, "ngIf"], [1, "split-form-panel-content"], [1, "split-form-section"], [1, "split-form-section-body"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "admission_number", "placeholder", "Enter admission number", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "first_name", "placeholder", "Enter first name", 1, "form-control"], ["type", "text", "formControlName", "middle_name", "placeholder", "Enter middle name", 1, "form-control"], ["type", "text", "formControlName", "last_name", "placeholder", "Enter last name", 1, "form-control"], ["formControlName", "gender", "placeholder", "Search or select gender", 3, "options"], ["type", "date", "formControlName", "date_of_birth", 1, "form-control"], ["formControlName", "blood_group", "placeholder", "Search or select blood group", 3, "options"], ["formControlName", "class_id", "placeholder", "Search or select class", 3, "options"], ["formControlName", "section_id", "placeholder", "Search or select section", 3, "options", "disabled"], ["type", "text", "formControlName", "roll_number", "placeholder", "Enter roll number", 1, "form-control"], ["type", "date", "formControlName", "admission_date", 1, "form-control"], [1, "subsection-title"], ["type", "tel", "formControlName", "mobile", "placeholder", "Enter mobile number", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "form-control"], [1, "form-group", "full-width"], ["formControlName", "address", "rows", "2", "placeholder", "Enter address", 1, "form-control"], ["type", "text", "formControlName", "city", "placeholder", "City", 1, "form-control"], ["type", "text", "formControlName", "state", "placeholder", "State", 1, "form-control"], ["type", "text", "formControlName", "country", "placeholder", "Country", 1, "form-control"], ["type", "text", "formControlName", "pincode", "placeholder", "Pincode", 1, "form-control"], ["type", "text", "formControlName", "parent_name", "placeholder", "Enter parent/guardian name", 1, "form-control"], ["formControlName", "parent_relation", "placeholder", "Search or select relation", 3, "options"], ["type", "tel", "formControlName", "parent_mobile", "placeholder", "Enter parent mobile number", 1, "form-control"], ["type", "email", "formControlName", "parent_email", "placeholder", "Enter parent email address", 1, "form-control"], ["type", "button", 1, "split-form-tab", 3, "click"], [1, "bi"], [1, "spinner-small"], [1, "invalid-feedback"], [1, "loading-container"], [1, "spinner"]], template: function StudentAddComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function StudentAddComponent_Template_button_click_7_listener() {
        return ctx.cancel();
      });
      \u0275\u0275element(8, "i", 5);
      \u0275\u0275text(9, " Cancel ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, StudentAddComponent_div_10_Template, 143, 50, "div", 6)(11, StudentAddComponent_div_11_Template, 4, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Student" : "Add New Student");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update student information" : "Create a new student record");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SearchSelectComponent], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.student-add-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.student-add-container[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .student-add-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .student-add-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=student-add.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentAddComponent, { className: "StudentAddComponent", filePath: "src\\app\\modules\\students\\student-add\\student-add.component.ts", lineNumber: 17 });
})();

// src/app/modules/students/student-view/student-view.component.ts
function StudentViewComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.student.full_name);
  }
}
function StudentViewComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function StudentViewComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEdit());
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " Edit ");
    \u0275\u0275elementEnd();
  }
}
function StudentViewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275text(2, " Loading... ");
    \u0275\u0275elementEnd();
  }
}
function StudentViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "label");
    \u0275\u0275text(6, "Admission No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "label");
    \u0275\u0275text(11, "Roll No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "label");
    \u0275\u0275text(16, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 18)(20, "label");
    \u0275\u0275text(21, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "label");
    \u0275\u0275text(26, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 18)(30, "label");
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 18)(35, "label");
    \u0275\u0275text(36, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 18)(40, "label");
    \u0275\u0275text(41, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 18)(45, "label");
    \u0275\u0275text(46, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.student.admission_number);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.roll_number || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.full_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.class_name || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.section_name || "-");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge-success", ctx_r0.student.student_status === "Active")("badge-warning", ctx_r0.student.student_status === "Inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.student.student_status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.mobile || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.student.date_of_birth ? \u0275\u0275pipeBind2(49, 13, ctx_r0.student.date_of_birth, "mediumDate") : "-");
  }
}
function StudentViewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, "Student not found.");
    \u0275\u0275elementEnd();
  }
}
var StudentViewComponent = class _StudentViewComponent {
  route;
  router;
  studentService;
  student = null;
  parents = [];
  loading = true;
  studentId = null;
  constructor(route, router, studentService) {
    this.route = route;
    this.router = router;
    this.studentService = studentService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.studentId = params["id"] ? parseInt(params["id"]) : null;
      if (this.studentId) {
        this.loadStudent();
      } else {
        this.loading = false;
      }
    });
  }
  loadStudent() {
    if (!this.studentId)
      return;
    this.loading = true;
    this.studentService.getStudent(this.studentId).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.student = response.data.student;
          this.parents = response.data.parents || [];
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onEdit() {
    if (this.studentId) {
      this.router.navigate(["/app/students/edit", this.studentId]);
    }
  }
  static \u0275fac = function StudentViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(StudentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentViewComponent, selectors: [["app-student-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [[1, "student-view-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], [1, "header-actions"], [1, "btn", "btn-outline", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "view-card", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "page-subtitle"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-pencil"], [1, "loading-state"], [1, "spinner"], [1, "view-card"], [1, "detail-grid"], [1, "detail-item"], [1, "badge"], [1, "empty-state"]], template: function StudentViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Student Details");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, StudentViewComponent_p_5_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function StudentViewComponent_Template_button_click_7_listener() {
        return ctx.router.navigate(["/app/students/list"]);
      });
      \u0275\u0275element(8, "i", 6);
      \u0275\u0275text(9, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, StudentViewComponent_button_10_Template, 3, 0, "button", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, StudentViewComponent_div_11_Template, 3, 0, "div", 8)(12, StudentViewComponent_div_12_Template, 50, 16, "div", 9)(13, StudentViewComponent_div_13_Template, 2, 0, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.student);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.student);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.student);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.student);
    }
  }, dependencies: [CommonModule, NgIf, DatePipe], styles: ["\n\n.student-view-container[_ngcontent-%COMP%]   .view-card[_ngcontent-%COMP%] {\n  background: var(--card-bg, #fff);\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.student-view-container[_ngcontent-%COMP%]   .view-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #666;\n  margin-bottom: 0.25rem;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: #fff;\n}\n.student-view-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #333;\n}\n.student-view-container[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%], \n.student-view-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #666;\n}\n/*# sourceMappingURL=student-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentViewComponent, { className: "StudentViewComponent", filePath: "src\\app\\modules\\students\\student-view\\student-view.component.ts", lineNumber: 13 });
})();

// src/app/modules/students/students.routes.ts
var StudentsRoutes = [
  {
    path: "",
    component: StudentListComponent
  },
  {
    path: "list",
    component: StudentListComponent
  },
  {
    path: "add",
    component: StudentAddComponent
  },
  {
    path: "view/:id",
    component: StudentViewComponent
  },
  {
    path: "edit/:id",
    component: StudentAddComponent
  }
];
export {
  StudentsRoutes
};
//# sourceMappingURL=chunk-ZEOYJO7A.js.map
