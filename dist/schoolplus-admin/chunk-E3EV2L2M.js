import {
  CurrencyFormatPipe
} from "./chunk-FU4SC7MH.js";
import {
  ReportService
} from "./chunk-O6NZD2M7.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
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
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/reports/reports.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function ReportsComponent_div_93_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Weekly Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of weekly activities and statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52);
    \u0275\u0275text(15, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "div", 50);
    \u0275\u0275element(20, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51)(22, "div", 52);
    \u0275\u0275text(23, "Avg Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 49)(27, "div", 50);
    \u0275\u0275element(28, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 51)(30, "div", 52);
    \u0275\u0275text(31, "Total Homework");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 53);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 49)(35, "div", 50);
    \u0275\u0275element(36, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 51)(38, "div", 52);
    \u0275\u0275text(39, "Total Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 53);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate((ctx_r1.weeklyReport.summary == null ? null : ctx_r1.weeklyReport.summary.total_students) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.weeklyReport.summary == null ? null : ctx_r1.weeklyReport.summary.avg_attendance_percentage) || 0, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.weeklyReport.summary == null ? null : ctx_r1.weeklyReport.summary.total_homework) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.weeklyReport.summary == null ? null : ctx_r1.weeklyReport.summary.total_events) || 0);
  }
}
function ReportsComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Weekly Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate comprehensive weekly summary and statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select date range for weekly report generation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_93_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateWeeklyReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Week Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 40);
    \u0275\u0275elementStart(23, "p", 41);
    \u0275\u0275text(24, "Select the start date of the week");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 39);
    \u0275\u0275text(27, "Week End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 42);
    \u0275\u0275elementStart(29, "p", 41);
    \u0275\u0275text(30, "Select the end date of the week");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 43)(32, "button", 44);
    \u0275\u0275element(33, "i", 45);
    \u0275\u0275text(34, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(35, ReportsComponent_div_93_div_35_Template, 42, 4, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.weeklyForm);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.weeklyReport);
  }
}
function ReportsComponent_div_94_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", m_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMonthName(m_r4), " ");
  }
}
function ReportsComponent_div_94_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Monthly Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of monthly performance and statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 63)(10, "button", 64);
    \u0275\u0275listener("click", function ReportsComponent_div_94_div_36_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printReport("monthly-report-print", "Monthly Report"));
    });
    \u0275\u0275element(11, "i", 65);
    \u0275\u0275text(12, " Print ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 66)(14, "h2", 67);
    \u0275\u0275text(15, "Monthly Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 68);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 48)(20, "div", 49)(21, "div", 50);
    \u0275\u0275element(22, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51)(24, "div", 52);
    \u0275\u0275text(25, "Total Fee Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 53);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currencyFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 49)(30, "div", 50);
    \u0275\u0275element(31, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 51)(33, "div", 52);
    \u0275\u0275text(34, "Avg Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 53);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 49)(38, "div", 50);
    \u0275\u0275element(39, "i", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 51)(41, "div", 52);
    \u0275\u0275text(42, "Total Examinations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 53);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate3("", ctx_r1.getMonthName(ctx_r1.monthlyForm == null ? null : ctx_r1.monthlyForm.value == null ? null : ctx_r1.monthlyForm.value.month), " ", ctx_r1.monthlyForm == null ? null : ctx_r1.monthlyForm.value == null ? null : ctx_r1.monthlyForm.value.year, " \xB7 Generated on ", \u0275\u0275pipeBind2(18, 6, ctx_r1.today, "dd MMM yyyy"), "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 9, ctx_r1.monthlyReport.summary == null ? null : ctx_r1.monthlyReport.summary.total_fee_collected));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx_r1.monthlyReport.summary == null ? null : ctx_r1.monthlyReport.summary.avg_attendance_percentage) || 0, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.monthlyReport.summary == null ? null : ctx_r1.monthlyReport.summary.total_examinations) || 0);
  }
}
function ReportsComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Monthly Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate comprehensive monthly performance overview");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select month and year for report generation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_94_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateMonthlyReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 56);
    \u0275\u0275template(23, ReportsComponent_div_94_option_23_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 41);
    \u0275\u0275text(25, "Select the month for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 38)(27, "label", 39);
    \u0275\u0275text(28, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 58);
    \u0275\u0275elementStart(30, "p", 41);
    \u0275\u0275text(31, "Enter the year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 43)(33, "button", 44);
    \u0275\u0275element(34, "i", 45);
    \u0275\u0275text(35, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(36, ReportsComponent_div_94_div_36_Template, 45, 11, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.monthlyForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.monthlyReport);
  }
}
function ReportsComponent_div_95_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "dateFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9, "Overview of daily activities");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 48)(11, "div", 49)(12, "div", 50);
    \u0275\u0275element(13, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 51)(15, "div", 52);
    \u0275\u0275text(16, "Total Activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 53);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 49)(20, "div", 50);
    \u0275\u0275element(21, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 51)(23, "div", 52);
    \u0275\u0275text(24, "Attendance %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 53);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 49)(28, "div", 50);
    \u0275\u0275element(29, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 51)(31, "div", 52);
    \u0275\u0275text(32, "Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 53);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Daily Summary - ", \u0275\u0275pipeBind1(7, 4, ctx_r1.dailyForm.value.report_date), "");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r1.dailyReport.summary == null ? null : ctx_r1.dailyReport.summary.total_activities) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.dailyReport.summary == null ? null : ctx_r1.dailyReport.summary.attendance_percentage) || 0, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.dailyReport.summary == null ? null : ctx_r1.dailyReport.summary.total_events) || 0);
  }
}
function ReportsComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Daily Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate daily activities and events report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select date and report type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_95_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateDailyReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Report Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 70);
    \u0275\u0275elementStart(23, "p", 41);
    \u0275\u0275text(24, "Select the date for daily report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 39);
    \u0275\u0275text(27, "Report Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 71)(29, "option", 72);
    \u0275\u0275text(30, "Daily Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 73);
    \u0275\u0275text(32, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 74);
    \u0275\u0275text(34, "Activities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Choose the type of daily report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 43)(38, "button", 44);
    \u0275\u0275element(39, "i", 45);
    \u0275\u0275text(40, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, ReportsComponent_div_95_div_41_Template, 35, 6, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.dailyForm);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.dailyReport);
  }
}
function ReportsComponent_div_96_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r8 = ctx.$implicit;
    \u0275\u0275property("value", year_r8.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r8.academic_year_name, " ");
  }
}
function ReportsComponent_div_96_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r9 = ctx.$implicit;
    \u0275\u0275property("value", cls_r9.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r9.class_name, " ");
  }
}
function ReportsComponent_div_96_div_41_tr_24_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subject_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subject_r10.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subject_r10.total_students);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, subject_r10.avg_obtained_marks, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 8, subject_r10.avg_percentage, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", subject_r10.pass_percentage, "%");
  }
}
function ReportsComponent_div_96_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Subject-wise Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Detailed performance analysis by subject");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 79)(10, "table", 80)(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Avg Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Avg Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Pass %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, ReportsComponent_div_96_div_41_tr_24_Template, 13, 11, "tr", 81);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.subjectWiseReport.subject_wise_performance);
  }
}
function ReportsComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Subject-wise Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate performance report by subject");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select academic year and class for subject-wise analysis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_96_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateSubjectWiseReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 76)(23, "option", 60);
    \u0275\u0275text(24, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ReportsComponent_div_96_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 41);
    \u0275\u0275text(27, "Select the academic year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "label", 39);
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 77)(32, "option", 60);
    \u0275\u0275text(33, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ReportsComponent_div_96_option_34_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 43)(38, "button", 44);
    \u0275\u0275element(39, "i", 45);
    \u0275\u0275text(40, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, ReportsComponent_div_96_div_41_Template, 25, 1, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.subjectWiseForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.subjectWiseReport);
  }
}
function ReportsComponent_div_97_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r12 = ctx.$implicit;
    \u0275\u0275property("value", cls_r12.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r12.class_name, " ");
  }
}
function ReportsComponent_div_97_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 62)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Attendance Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of attendance statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 63)(10, "button", 64);
    \u0275\u0275listener("click", function ReportsComponent_div_97_div_44_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printReport("attendance-report-print", "Attendance Report"));
    });
    \u0275\u0275element(11, "i", 65);
    \u0275\u0275text(12, " Print ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 66)(14, "h2", 67);
    \u0275\u0275text(15, "Attendance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 68);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 48)(20, "div", 49)(21, "div", 50);
    \u0275\u0275element(22, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51)(24, "div", 52);
    \u0275\u0275text(25, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 53);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 49)(29, "div", 50);
    \u0275\u0275element(30, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 51)(32, "div", 52);
    \u0275\u0275text(33, "Attendance %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 53);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 49)(37, "div", 50);
    \u0275\u0275element(38, "i", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 51)(40, "div", 52);
    \u0275\u0275text(41, "Total Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 53);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 49)(45, "div", 50);
    \u0275\u0275element(46, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 51)(48, "div", 52);
    \u0275\u0275text(49, "Total Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 53);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("Generated on ", \u0275\u0275pipeBind2(18, 5, ctx_r1.today, "dd MMM yyyy"), "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r1.attendanceReport.summary == null ? null : ctx_r1.attendanceReport.summary.total_students) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.attendanceReport.summary == null ? null : ctx_r1.attendanceReport.summary.attendance_percentage) || 0, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.attendanceReport.summary == null ? null : ctx_r1.attendanceReport.summary.total_present) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.attendanceReport.summary == null ? null : ctx_r1.attendanceReport.summary.total_absent) || 0);
  }
}
function ReportsComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Attendance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate comprehensive attendance tracking report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select date range and filters for attendance report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_97_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateAttendanceReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 82);
    \u0275\u0275elementStart(23, "p", 41);
    \u0275\u0275text(24, "Select the start date for attendance tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 39);
    \u0275\u0275text(27, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 83);
    \u0275\u0275elementStart(29, "p", 41);
    \u0275\u0275text(30, "Select the end date for attendance tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 38)(32, "label", 39);
    \u0275\u0275text(33, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 77)(35, "option", 60);
    \u0275\u0275text(36, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ReportsComponent_div_97_option_37_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 41);
    \u0275\u0275text(39, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 43)(41, "button", 44);
    \u0275\u0275element(42, "i", 45);
    \u0275\u0275text(43, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, ReportsComponent_div_97_div_44_Template, 52, 8, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.attendanceForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.attendanceReport);
  }
}
function ReportsComponent_div_98_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r15 = ctx.$implicit;
    \u0275\u0275property("value", cls_r15.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r15.class_name, " ");
  }
}
function ReportsComponent_div_98_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 62)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Fee Collection Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of fee collection statistics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 63)(10, "button", 64);
    \u0275\u0275listener("click", function ReportsComponent_div_98_div_44_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printReport("fee-report-print", "Fee Report"));
    });
    \u0275\u0275element(11, "i", 65);
    \u0275\u0275text(12, " Print ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 66)(14, "h2", 67);
    \u0275\u0275text(15, "Fee Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 68);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 48)(20, "div", 49)(21, "div", 50);
    \u0275\u0275element(22, "i", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 51)(24, "div", 52);
    \u0275\u0275text(25, "Total Collected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 53);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currencyFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 49)(30, "div", 50);
    \u0275\u0275element(31, "i", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 51)(33, "div", 52);
    \u0275\u0275text(34, "Total Payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 53);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 49)(38, "div", 50);
    \u0275\u0275element(39, "i", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 51)(41, "div", 52);
    \u0275\u0275text(42, "Pending Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 53);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currencyFormat");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("Generated on ", \u0275\u0275pipeBind2(18, 4, ctx_r1.today, "dd MMM yyyy"), "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 7, ctx_r1.feeReport.summary == null ? null : ctx_r1.feeReport.summary.total_collected));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r1.feeReport.summary == null ? null : ctx_r1.feeReport.summary.total_payments) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 9, ctx_r1.feeReport.pending_fees == null ? null : ctx_r1.feeReport.pending_fees.total_pending_amount));
  }
}
function ReportsComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Fee Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate fee collection and pending reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select date range and filters for fee report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_98_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateFeeReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 82);
    \u0275\u0275elementStart(23, "p", 41);
    \u0275\u0275text(24, "Select the start date for fee collection period");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 39);
    \u0275\u0275text(27, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 83);
    \u0275\u0275elementStart(29, "p", 41);
    \u0275\u0275text(30, "Select the end date for fee collection period");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 38)(32, "label", 39);
    \u0275\u0275text(33, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 77)(35, "option", 60);
    \u0275\u0275text(36, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ReportsComponent_div_98_option_37_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 41);
    \u0275\u0275text(39, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 43)(41, "button", 44);
    \u0275\u0275element(42, "i", 45);
    \u0275\u0275text(43, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, ReportsComponent_div_98_div_44_Template, 46, 11, "div", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.feeForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.feeReport);
  }
}
function ReportsComponent_div_99_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r18 = ctx.$implicit;
    \u0275\u0275property("value", year_r18.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r18.academic_year_name, " ");
  }
}
function ReportsComponent_div_99_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r19 = ctx.$implicit;
    \u0275\u0275property("value", cls_r19.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r19.class_name, " ");
  }
}
function ReportsComponent_div_99_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Student Performance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of student performance statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52);
    \u0275\u0275text(15, "Overall Average");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "div", 50);
    \u0275\u0275element(20, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51)(22, "div", 52);
    \u0275\u0275text(23, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", (ctx_r1.studentPerformanceReport.overall_performance == null ? null : ctx_r1.studentPerformanceReport.overall_performance.average_percentage) || 0, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.studentPerformanceReport.overall_performance == null ? null : ctx_r1.studentPerformanceReport.overall_performance.total_students) || 0);
  }
}
function ReportsComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Performance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate student performance analysis report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select filters for performance analysis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_99_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateStudentPerformanceReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 76)(23, "option", 60);
    \u0275\u0275text(24, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ReportsComponent_div_99_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 41);
    \u0275\u0275text(27, "Select the academic year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "label", 39);
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 77)(32, "option", 60);
    \u0275\u0275text(33, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ReportsComponent_div_99_option_34_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "label", 39);
    \u0275\u0275text(39, "Report Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 94)(41, "option", 95);
    \u0275\u0275text(42, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 96);
    \u0275\u0275text(44, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 97);
    \u0275\u0275text(46, "Term");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 98);
    \u0275\u0275text(48, "Yearly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "p", 41);
    \u0275\u0275text(50, "Select the period for performance analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 43)(52, "button", 44);
    \u0275\u0275element(53, "i", 45);
    \u0275\u0275text(54, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(55, ReportsComponent_div_99_div_55_Template, 26, 2, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.studentPerformanceForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.studentPerformanceReport);
  }
}
function ReportsComponent_div_100_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r21 = ctx.$implicit;
    \u0275\u0275property("value", year_r21.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r21.academic_year_name, " ");
  }
}
function ReportsComponent_div_100_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r22 = ctx.$implicit;
    \u0275\u0275property("value", cls_r22.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r22.class_name, " ");
  }
}
function ReportsComponent_div_100_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Classwork Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of classwork statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52);
    \u0275\u0275text(15, "Total Assignments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "div", 50);
    \u0275\u0275element(20, "i", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51)(22, "div", 52);
    \u0275\u0275text(23, "Completion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate((ctx_r1.classworkReport.completion_stats == null ? null : ctx_r1.classworkReport.completion_stats.total_assignments) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", (ctx_r1.classworkReport.completion_stats == null ? null : ctx_r1.classworkReport.completion_stats.completion_rate) || 0, "%");
  }
}
function ReportsComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Classwork Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate classwork assignments tracking report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select filters for classwork report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_100_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateClassworkReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 76)(23, "option", 60);
    \u0275\u0275text(24, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ReportsComponent_div_100_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 41);
    \u0275\u0275text(27, "Select the academic year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "label", 39);
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 77)(32, "option", 60);
    \u0275\u0275text(33, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ReportsComponent_div_100_option_34_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "label", 39);
    \u0275\u0275text(39, "Report Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 94)(41, "option", 95);
    \u0275\u0275text(42, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 96);
    \u0275\u0275text(44, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p", 41);
    \u0275\u0275text(46, "Select the period for classwork analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 43)(48, "button", 44);
    \u0275\u0275element(49, "i", 45);
    \u0275\u0275text(50, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(51, ReportsComponent_div_100_div_51_Template, 26, 2, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.classworkForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.classworkReport);
  }
}
function ReportsComponent_div_101_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r24 = ctx.$implicit;
    \u0275\u0275property("value", year_r24.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r24.academic_year_name, " ");
  }
}
function ReportsComponent_div_101_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r25 = ctx.$implicit;
    \u0275\u0275property("value", cls_r25.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r25.class_name, " ");
  }
}
function ReportsComponent_div_101_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "HW/CW Analysis Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of homework and classwork statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52);
    \u0275\u0275text(15, "Total HW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "div", 50);
    \u0275\u0275element(20, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51)(22, "div", 52);
    \u0275\u0275text(23, "Total CW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate((ctx_r1.hwCwAnalysisReport.analysis_data == null ? null : ctx_r1.hwCwAnalysisReport.analysis_data.total_homework) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.hwCwAnalysisReport.analysis_data == null ? null : ctx_r1.hwCwAnalysisReport.analysis_data.total_classwork) || 0);
  }
}
function ReportsComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "HW/CW Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate homework and classwork analysis report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select filters for HW/CW analysis");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_101_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateHwCwAnalysisReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 76)(23, "option", 60);
    \u0275\u0275text(24, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ReportsComponent_div_101_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 41);
    \u0275\u0275text(27, "Select the academic year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "label", 39);
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 77)(32, "option", 60);
    \u0275\u0275text(33, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ReportsComponent_div_101_option_34_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "label", 39);
    \u0275\u0275text(39, "Analysis Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 100)(41, "option", 101);
    \u0275\u0275text(42, "By Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 102);
    \u0275\u0275text(44, "By Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 103);
    \u0275\u0275text(46, "Comparative");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "p", 41);
    \u0275\u0275text(48, "Select the type of analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 43)(50, "button", 44);
    \u0275\u0275element(51, "i", 45);
    \u0275\u0275text(52, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(53, ReportsComponent_div_101_div_53_Template, 26, 2, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.hwCwAnalysisForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(16);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.hwCwAnalysisReport);
  }
}
function ReportsComponent_div_102_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r27 = ctx.$implicit;
    \u0275\u0275property("value", year_r27.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r27.academic_year_name, " ");
  }
}
function ReportsComponent_div_102_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r28 = ctx.$implicit;
    \u0275\u0275property("value", cls_r28.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r28.class_name, " ");
  }
}
function ReportsComponent_div_102_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 35);
    \u0275\u0275text(6, "Coordinator CW/HW Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8, "Overview of coordinator tracking statistics");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 48)(10, "div", 49)(11, "div", 50);
    \u0275\u0275element(12, "i", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "div", 52);
    \u0275\u0275text(15, "Tracking Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate((ctx_r1.coordinatorCwHwReport.tracking_data == null ? null : ctx_r1.coordinatorCwHwReport.tracking_data.status) || "N/A");
  }
}
function ReportsComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2", 29);
    \u0275\u0275text(6, "Coordinator Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8, "Generate coordinator tracking report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "div", 33);
    \u0275\u0275element(12, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 35);
    \u0275\u0275text(15, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 36);
    \u0275\u0275text(17, "Select filters for coordinator report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "form", 37);
    \u0275\u0275listener("ngSubmit", function ReportsComponent_div_102_Template_form_ngSubmit_18_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateCoordinatorCwHwReport());
    });
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 39);
    \u0275\u0275text(21, "Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 76)(23, "option", 60);
    \u0275\u0275text(24, "Select Academic Year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ReportsComponent_div_102_option_25_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 41);
    \u0275\u0275text(27, "Select the academic year for the report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 38)(29, "label", 39);
    \u0275\u0275text(30, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 77)(32, "option", 60);
    \u0275\u0275text(33, "All Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ReportsComponent_div_102_option_34_Template, 2, 2, "option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 41);
    \u0275\u0275text(36, "Select class or leave as 'All Classes'");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 38)(38, "label", 39);
    \u0275\u0275text(39, "Report Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 94)(41, "option", 95);
    \u0275\u0275text(42, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 96);
    \u0275\u0275text(44, "Monthly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p", 41);
    \u0275\u0275text(46, "Select the period for coordinator analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 43)(48, "button", 44);
    \u0275\u0275element(49, "i", 45);
    \u0275\u0275text(50, " Generate Report ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(51, ReportsComponent_div_102_div_51_Template, 18, 1, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("formGroup", ctx_r1.coordinatorCwHwForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.academicYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.classes);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.coordinatorCwHwReport);
  }
}
var ReportsComponent = class _ReportsComponent {
  fb;
  reportService;
  academicYearService;
  classService;
  toastService;
  activeTab = "weekly";
  academicYears = [];
  classes = [];
  isLoading = false;
  weeklyReport = null;
  monthlyReport = null;
  dailyReport = null;
  subjectWiseReport = null;
  studentPerformanceReport = null;
  classworkReport = null;
  hwCwAnalysisReport = null;
  coordinatorCwHwReport = null;
  attendanceReport = null;
  feeReport = null;
  today = /* @__PURE__ */ new Date();
  weeklyForm;
  monthlyForm;
  dailyForm;
  subjectWiseForm;
  studentPerformanceForm;
  classworkForm;
  hwCwAnalysisForm;
  coordinatorCwHwForm;
  attendanceForm;
  feeForm;
  constructor(fb, reportService, academicYearService, classService, toastService) {
    this.fb = fb;
    this.reportService = reportService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.weeklyForm = this.fb.group({
      week_start: [null],
      week_end: [null]
    });
    this.monthlyForm = this.fb.group({
      month: [(/* @__PURE__ */ new Date()).getMonth() + 1],
      year: [(/* @__PURE__ */ new Date()).getFullYear()]
    });
    this.subjectWiseForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      subject_id: [null]
    });
    this.attendanceForm = this.fb.group({
      start_date: [null],
      end_date: [null],
      class_id: [null],
      section_id: [null]
    });
    this.feeForm = this.fb.group({
      start_date: [null],
      end_date: [null],
      class_id: [null],
      fee_group_id: [null]
    });
    this.dailyForm = this.fb.group({
      report_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0]],
      report_type: ["summary"]
    });
    this.studentPerformanceForm = this.fb.group({
      academic_year_id: [null],
      student_id: [null],
      class_id: [null],
      section_id: [null],
      report_period: ["monthly"]
    });
    this.classworkForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      section_id: [null],
      subject_id: [null],
      teacher_id: [null],
      report_period: ["monthly"]
    });
    this.hwCwAnalysisForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      section_id: [null],
      analysis_type: ["by_subject"]
    });
    this.coordinatorCwHwForm = this.fb.group({
      academic_year_id: [null],
      coordinator_id: [null],
      class_id: [null],
      report_period: ["monthly"]
    });
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.setDefaultDates();
  }
  setDefaultDates() {
    const today = /* @__PURE__ */ new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (today.getDay() + 6) % 7);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    this.weeklyForm.patchValue({
      week_start: monday.toISOString().split("T")[0],
      week_end: sunday.toISOString().split("T")[0]
    });
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.attendanceForm.patchValue({
      start_date: firstDay.toISOString().split("T")[0],
      end_date: lastDay.toISOString().split("T")[0]
    });
    this.feeForm.patchValue({
      start_date: firstDay.toISOString().split("T")[0],
      end_date: lastDay.toISOString().split("T")[0]
    });
  }
  loadAcademicYears() {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
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
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  generateWeeklyReport() {
    this.isLoading = true;
    this.reportService.getWeeklyReport(this.weeklyForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.weeklyReport = response.data;
          this.toastService.success("Weekly report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate weekly report");
        this.isLoading = false;
      }
    });
  }
  generateMonthlyReport() {
    this.isLoading = true;
    this.reportService.getMonthlyReport(this.monthlyForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.monthlyReport = response.data;
          this.toastService.success("Monthly report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate monthly report");
        this.isLoading = false;
      }
    });
  }
  generateSubjectWiseReport() {
    if (!this.subjectWiseForm.value.academic_year_id) {
      this.toastService.warning("Please select academic year");
      return;
    }
    this.isLoading = true;
    this.reportService.getSubjectWiseReport(this.subjectWiseForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.subjectWiseReport = response.data;
          this.toastService.success("Subject-wise report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate subject-wise report");
        this.isLoading = false;
      }
    });
  }
  generateAttendanceReport() {
    this.isLoading = true;
    this.reportService.getAttendanceReport(this.attendanceForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.attendanceReport = response.data;
          this.toastService.success("Attendance report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate attendance report");
        this.isLoading = false;
      }
    });
  }
  generateFeeReport() {
    this.isLoading = true;
    this.reportService.getFeeReport(this.feeForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.feeReport = response.data;
          this.toastService.success("Fee report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate fee report");
        this.isLoading = false;
      }
    });
  }
  getMonthName(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[month - 1] || "";
  }
  printReport(elementId, title) {
    const el = document.getElementById(elementId);
    if (!el)
      return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      this.toastService.error("Please allow popups to print");
      return;
    }
    const styles = `
      body { font-family: 'Segoe UI', system-ui, sans-serif; margin: 20px; color: #1f2937; }
      .no-print { display: none !important; }
      .print-only { display: block !important; }
      .report-print-header { text-align: center; border-bottom: 2px solid #1f2937; padding-bottom: 10px; margin-bottom: 16px; }
      .report-print-title { font-size: 18pt; margin: 0 0 4px 0; font-weight: 700; }
      .report-print-date { font-size: 10pt; color: #6b7280; margin: 0; }
      .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-top: 16px; }
      .summary-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; break-inside: avoid; }
      .summary-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
      .summary-value { font-size: 20px; font-weight: 700; color: #1f2937; }
      .summary-icon { display: none; }
      @page { size: A4; margin: 15mm; }
    `;
    printWindow.document.write(`
      <!DOCTYPE html><html><head><title>${title}</title><style>${styles}</style></head><body>
      ${el.innerHTML}
      </body></html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 300);
  }
  generateDailyReport() {
    this.isLoading = true;
    this.reportService.getDailyReport(this.dailyForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.dailyReport = response.data;
          this.toastService.success("Daily report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate daily report");
        this.isLoading = false;
      }
    });
  }
  generateStudentPerformanceReport() {
    if (!this.studentPerformanceForm.value.academic_year_id) {
      this.toastService.warning("Please select academic year");
      return;
    }
    this.isLoading = true;
    this.reportService.getStudentPerformanceReport(this.studentPerformanceForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.studentPerformanceReport = response.data;
          this.toastService.success("Student performance report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate student performance report");
        this.isLoading = false;
      }
    });
  }
  generateClassworkReport() {
    if (!this.classworkForm.value.academic_year_id) {
      this.toastService.warning("Please select academic year");
      return;
    }
    this.isLoading = true;
    this.reportService.getClassworkReport(this.classworkForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.classworkReport = response.data;
          this.toastService.success("Classwork report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate classwork report");
        this.isLoading = false;
      }
    });
  }
  generateHwCwAnalysisReport() {
    if (!this.hwCwAnalysisForm.value.academic_year_id) {
      this.toastService.warning("Please select academic year");
      return;
    }
    this.isLoading = true;
    this.reportService.getHwCwAnalysisReport(this.hwCwAnalysisForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.hwCwAnalysisReport = response.data;
          this.toastService.success("HW/CW analysis report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate HW/CW analysis report");
        this.isLoading = false;
      }
    });
  }
  generateCoordinatorCwHwReport() {
    if (!this.coordinatorCwHwForm.value.academic_year_id) {
      this.toastService.warning("Please select academic year");
      return;
    }
    this.isLoading = true;
    this.reportService.getCoordinatorCwHwReport(this.coordinatorCwHwForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.coordinatorCwHwReport = response.data;
          this.toastService.success("Coordinator CW/HW report generated successfully");
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to generate coordinator CW/HW report");
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 30, consts: [[1, "reports-container"], [1, "page-header"], [1, "header-content"], [1, "header-icon"], [1, "bi", "bi-graph-up-arrow"], [1, "page-title"], [1, "page-subtitle"], [1, "reports-layout"], [1, "sidebar-tabs"], [1, "tab-item", 3, "click"], [1, "tab-icon"], [1, "bi", "bi-calendar-week"], [1, "tab-content"], [1, "tab-title"], [1, "tab-subtitle"], [1, "bi", "bi-calendar-month"], [1, "bi", "bi-calendar-day"], [1, "bi", "bi-book"], [1, "bi", "bi-person-check"], [1, "bi", "bi-cash-stack"], [1, "bi", "bi-trophy"], [1, "bi", "bi-journal-text"], [1, "bi", "bi-bar-chart"], [1, "bi", "bi-people"], [1, "content-area"], ["class", "report-section", 4, "ngIf"], [1, "report-section"], [1, "section-header"], [1, "section-icon"], [1, "section-title"], [1, "section-subtitle"], [1, "settings-card"], [1, "card-header"], [1, "card-header-icon"], [1, "bi", "bi-funnel"], [1, "card-title"], [1, "card-subtitle"], [1, "settings-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], ["type", "date", "formControlName", "week_start", 1, "form-input"], [1, "form-info"], ["type", "date", "formControlName", "week_end", 1, "form-input"], [1, "form-actions"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "bi", "bi-file-earmark-text"], ["class", "settings-card", 4, "ngIf"], [1, "bi", "bi-graph-up"], [1, "summary-grid"], [1, "summary-card"], [1, "summary-icon"], [1, "summary-content"], [1, "summary-label"], [1, "summary-value"], [1, "bi", "bi-check-circle"], [1, "bi", "bi-calendar-event"], ["formControlName", "month", 1, "form-input"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "year", 1, "form-input"], ["class", "settings-card report-print-card print-document", "id", "monthly-report-print", 4, "ngIf"], [3, "value"], ["id", "monthly-report-print", 1, "settings-card", "report-print-card", "print-document"], [1, "card-header", "no-print"], [1, "card-header-actions"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "bi", "bi-printer"], [1, "report-print-header", "print-only"], [1, "report-print-title"], [1, "report-print-date"], [1, "bi", "bi-clipboard-check"], ["type", "date", "formControlName", "report_date", 1, "form-input"], ["formControlName", "report_type", 1, "form-input"], ["value", "summary"], ["value", "attendance"], ["value", "activities"], [1, "bi", "bi-activity"], ["formControlName", "academic_year_id", 1, "form-input"], ["formControlName", "class_id", 1, "form-input"], [1, "bi", "bi-table"], [1, "table-container"], [1, "data-table"], [4, "ngFor", "ngForOf"], ["type", "date", "formControlName", "start_date", 1, "form-input"], ["type", "date", "formControlName", "end_date", 1, "form-input"], ["class", "settings-card report-print-card print-document", "id", "attendance-report-print", 4, "ngIf"], ["id", "attendance-report-print", 1, "settings-card", "report-print-card", "print-document"], [1, "bi", "bi-percent"], [1, "bi", "bi-check-circle-fill"], [1, "bi", "bi-x-circle-fill"], ["class", "settings-card report-print-card print-document", "id", "fee-report-print", 4, "ngIf"], ["id", "fee-report-print", 1, "settings-card", "report-print-card", "print-document"], [1, "bi", "bi-cash-coin"], [1, "bi", "bi-receipt"], [1, "bi", "bi-hourglass-split"], ["formControlName", "report_period", 1, "form-input"], ["value", "weekly"], ["value", "monthly"], ["value", "term"], ["value", "yearly"], [1, "bi", "bi-journal-check"], ["formControlName", "analysis_type", 1, "form-input"], ["value", "by_subject"], ["value", "by_teacher"], ["value", "comparative"], [1, "bi", "bi-info-circle"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h1", 5);
      \u0275\u0275text(7, "Reports & Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Generate and export comprehensive reports for your school");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_12_listener() {
        return ctx.setActiveTab("weekly");
      });
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
      \u0275\u0275text(17, "Weekly Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275text(19, "Weekly summary and statistics");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_20_listener() {
        return ctx.setActiveTab("monthly");
      });
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "div", 13);
      \u0275\u0275text(25, "Monthly Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14);
      \u0275\u0275text(27, "Monthly performance overview");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_28_listener() {
        return ctx.setActiveTab("daily");
      });
      \u0275\u0275elementStart(29, "div", 10);
      \u0275\u0275element(30, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
      \u0275\u0275text(33, "Daily Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14);
      \u0275\u0275text(35, "Daily activities and events");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_36_listener() {
        return ctx.setActiveTab("subject-wise");
      });
      \u0275\u0275elementStart(37, "div", 10);
      \u0275\u0275element(38, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 12)(40, "div", 13);
      \u0275\u0275text(41, "Subject-wise Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 14);
      \u0275\u0275text(43, "Performance by subject");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_44_listener() {
        return ctx.setActiveTab("attendance");
      });
      \u0275\u0275elementStart(45, "div", 10);
      \u0275\u0275element(46, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 12)(48, "div", 13);
      \u0275\u0275text(49, "Attendance Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 14);
      \u0275\u0275text(51, "Student attendance tracking");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_52_listener() {
        return ctx.setActiveTab("fee");
      });
      \u0275\u0275elementStart(53, "div", 10);
      \u0275\u0275element(54, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 12)(56, "div", 13);
      \u0275\u0275text(57, "Fee Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 14);
      \u0275\u0275text(59, "Fee collection and pending");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_60_listener() {
        return ctx.setActiveTab("performance");
      });
      \u0275\u0275elementStart(61, "div", 10);
      \u0275\u0275element(62, "i", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 12)(64, "div", 13);
      \u0275\u0275text(65, "Performance Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 14);
      \u0275\u0275text(67, "Student performance analysis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_68_listener() {
        return ctx.setActiveTab("classwork");
      });
      \u0275\u0275elementStart(69, "div", 10);
      \u0275\u0275element(70, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 12)(72, "div", 13);
      \u0275\u0275text(73, "Classwork Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 14);
      \u0275\u0275text(75, "Classwork assignments tracking");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_76_listener() {
        return ctx.setActiveTab("hw-cw-analysis");
      });
      \u0275\u0275elementStart(77, "div", 10);
      \u0275\u0275element(78, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 12)(80, "div", 13);
      \u0275\u0275text(81, "HW/CW Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 14);
      \u0275\u0275text(83, "Homework and classwork analysis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_div_click_84_listener() {
        return ctx.setActiveTab("coordinator");
      });
      \u0275\u0275elementStart(85, "div", 10);
      \u0275\u0275element(86, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 12)(88, "div", 13);
      \u0275\u0275text(89, "Coordinator Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 14);
      \u0275\u0275text(91, "Coordinator tracking report");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(92, "div", 24);
      \u0275\u0275template(93, ReportsComponent_div_93_Template, 36, 3, "div", 25)(94, ReportsComponent_div_94_Template, 37, 5, "div", 25)(95, ReportsComponent_div_95_Template, 42, 3, "div", 25)(96, ReportsComponent_div_96_Template, 42, 7, "div", 25)(97, ReportsComponent_div_97_Template, 45, 5, "div", 25)(98, ReportsComponent_div_98_Template, 45, 5, "div", 25)(99, ReportsComponent_div_99_Template, 56, 7, "div", 25)(100, ReportsComponent_div_100_Template, 52, 7, "div", 25)(101, ReportsComponent_div_101_Template, 54, 7, "div", 25)(102, ReportsComponent_div_102_Template, 52, 7, "div", 25);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.activeTab === "weekly");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "monthly");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "daily");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "subject-wise");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "attendance");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "fee");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "performance");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "classwork");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "hw-cw-analysis");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "coordinator");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.activeTab === "weekly");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "monthly");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "daily");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "subject-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "attendance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "fee");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "performance");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "classwork");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "hw-cw-analysis");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "coordinator");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DateFormatPipe, CurrencyFormatPipe], styles: ['\n\n.reports-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--bg-secondary);\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .reports-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary-gradient);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);\n  transform: perspective(1000px) rotateY(-2deg);\n  transition: transform 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]:hover {\n  transform: perspective(1000px) rotateY(0deg) scale(1.05);\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 4px 0;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.reports-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n  font-size: 14px;\n}\n.reports-container[_ngcontent-%COMP%]   .reports-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .reports-container[_ngcontent-%COMP%]   .reports-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%] {\n  width: 320px;\n  background: var(--bg-primary);\n  border-radius: 20px;\n  padding: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);\n  position: sticky;\n  top: 24px;\n  max-height: calc(100vh - 120px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    top: 0;\n    max-height: none;\n  }\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px;\n  margin-bottom: 12px;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  background: transparent;\n  border: 2px solid transparent;\n  position: relative;\n  overflow: hidden;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05) 0%,\n      rgba(37, 99, 235, 0.02) 100%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.05);\n  transform: translateX(4px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15), 0 2px 4px rgba(37, 99, 235, 0.1);\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]:hover   .tab-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotateY(5deg);\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  border-color: var(--primary-color);\n  box-shadow:\n    0 8px 24px rgba(37, 99, 235, 0.3),\n    0 4px 8px rgba(37, 99, 235, 0.2),\n    inset 0 1px 0 rgba(255, 255, 255, 0.2);\n  transform: translateX(8px) perspective(1000px) rotateY(-2deg);\n  color: #fff;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]::before {\n  opacity: 0;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  transform: scale(1.15) rotateY(5deg);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3);\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%], \n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-subtitle[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item.active[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  background: var(--primary-lighter);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary-color);\n  font-size: 22px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  transform: perspective(1000px) rotateY(-2deg);\n  position: relative;\n  z-index: 1;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n  transition: color 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .sidebar-tabs[_ngcontent-%COMP%]   .tab-item[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .tab-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  transition: color 0.3s ease;\n  line-height: 1.4;\n}\n.reports-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.reports-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%]   .report-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.reports-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary-gradient);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 28px;\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3), 0 4px 8px rgba(37, 99, 235, 0.2);\n  transform: perspective(1000px) rotateY(-3deg);\n  transition: transform 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-icon[_ngcontent-%COMP%]:hover {\n  transform: perspective(1000px) rotateY(0deg) scale(1.05);\n}\n.reports-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin: 0 0 4px 0;\n}\n.reports-container[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n  font-size: 14px;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: 20px;\n  padding: 32px;\n  margin-bottom: 24px;\n  box-shadow:\n    0 10px 30px rgba(0, 0, 0, 0.08),\n    0 1px 3px rgba(0, 0, 0, 0.05),\n    inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  transform: perspective(1000px);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 16px 40px rgba(37, 99, 235, 0.15),\n    0 4px 8px rgba(37, 99, 235, 0.1),\n    inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  transform: perspective(1000px) translateY(-4px) rotateX(2deg);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  .reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 20px;\n  border-bottom: 2px solid var(--border-color);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-lighter);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary-color);\n  font-size: 22px;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5);\n  transform: perspective(1000px) rotateY(-2deg);\n  transition: transform 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-icon[_ngcontent-%COMP%]:hover {\n  transform: perspective(1000px) rotateY(0deg) scale(1.1);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--primary-color);\n  margin: 0 0 4px 0;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0;\n  font-size: 13px;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 12px;\n  font-size: 14px;\n  color: var(--text-primary);\n  background: var(--bg-primary);\n  transition: all 0.3s ease;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow:\n    0 0 0 4px rgba(37, 99, 235, 0.1),\n    inset 0 2px 4px rgba(0, 0, 0, 0.02),\n    0 1px 2px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  margin-top: 6px;\n  margin-bottom: 0;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 2px solid var(--border-color);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3), 0 2px 4px rgba(37, 99, 235, 0.2);\n  transform: perspective(1000px);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: perspective(1000px) translateY(-2px) scale(1.02);\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4), 0 4px 8px rgba(37, 99, 235, 0.3);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: perspective(1000px) translateY(0) scale(0.98);\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.reports-container[_ngcontent-%COMP%]   .settings-card[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-top: 24px;\n}\n@media (max-width: 768px) {\n  .reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05) 0%,\n      rgba(37, 99, 235, 0.02) 100%);\n  border: 2px solid rgba(37, 99, 235, 0.1);\n  border-radius: 16px;\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) perspective(1000px) rotateX(2deg);\n  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.2), 0 4px 8px rgba(37, 99, 235, 0.15);\n  border-color: var(--primary-color);\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.05;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]:hover   .summary-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotateY(5deg);\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  min-width: 56px;\n  background: var(--primary-gradient);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n  transform: perspective(1000px) rotateY(-3deg);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  z-index: 1;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-content[_ngcontent-%COMP%]   .summary-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n.reports-container[_ngcontent-%COMP%]   .summary-grid[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%]   .summary-content[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--primary-color);\n  line-height: 1.2;\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid var(--border-color);\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: var(--bg-primary);\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  font-weight: 600;\n  color: var(--primary-color);\n  font-size: 14px;\n  border-bottom: 2px solid var(--primary-color);\n  position: relative;\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-color);\n  transition: all 0.2s ease;\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.03);\n  transform: scale(1.01);\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.reports-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.sidebar-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--primary-color);\n  border-radius: 3px;\n}\n.sidebar-tabs[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--primary-dark);\n}\n/*# sourceMappingURL=reports.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src\\app\\modules\\reports\\reports.component.ts", lineNumber: 18 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-E3EV2L2M.js.map
