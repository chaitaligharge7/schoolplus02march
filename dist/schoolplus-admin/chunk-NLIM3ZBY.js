import {
  SyllabusService
} from "./chunk-QT36LC3Q.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  CheckboxControlValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/syllabus/syllabus-completion-report/syllabus-completion-report.component.ts
function SyllabusCompletionReportComponent_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r1 = ctx.$implicit;
    \u0275\u0275property("value", year_r1.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r1.academic_year_name, " ");
  }
}
function SyllabusCompletionReportComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r2 = ctx.$implicit;
    \u0275\u0275property("value", cls_r2.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r2.class_name, " ");
  }
}
function SyllabusCompletionReportComponent_div_32_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 31);
    \u0275\u0275element(19, "div", 32);
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td")(23, "span", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.class_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.total_chapters || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.completed_chapters || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.in_progress_chapters || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.delayed_chapters || 0);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", item_r5.completion_percentage || 0, "%");
    \u0275\u0275classProp("bg-danger", (item_r5.completion_percentage || 0) < 50)("bg-warning", (item_r5.completion_percentage || 0) >= 50 && (item_r5.completion_percentage || 0) < 80)("bg-success", (item_r5.completion_percentage || 0) >= 80);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r5.completion_percentage || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", item_r5.completion_percentage >= 80)("badge-warning", item_r5.completion_percentage >= 50 && item_r5.completion_percentage < 80)("badge-danger", item_r5.completion_percentage < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.completion_percentage >= 80 ? "On Track" : item_r5.completion_percentage >= 50 ? "At Risk" : "Delayed", " ");
  }
}
function SyllabusCompletionReportComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h3");
    \u0275\u0275text(3, "Syllabus Completion Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function SyllabusCompletionReportComponent_div_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportReport());
    });
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275text(6, " Export ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21)(9, "div", 22);
    \u0275\u0275text(10, "Total Syllabi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 21)(14, "div", 22);
    \u0275\u0275text(15, "Average Completion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "div", 22);
    \u0275\u0275text(20, "Delayed Chapters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 25)(24, "table", 26)(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Total Chapters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "In Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Delayed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Completion %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "tbody");
    \u0275\u0275template(44, SyllabusCompletionReportComponent_div_32_tr_44_Template, 25, 22, "tr", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate((ctx_r3.reportData.summary == null ? null : ctx_r3.reportData.summary.total_syllabi) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", (ctx_r3.reportData.summary == null ? null : ctx_r3.reportData.summary.avg_completion) || 0, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r3.reportData.summary == null ? null : ctx_r3.reportData.summary.delayed_chapters) || 0);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r3.reportData.syllabi);
  }
}
var SyllabusCompletionReportComponent = class _SyllabusCompletionReportComponent {
  fb;
  syllabusService;
  academicYearService;
  classService;
  toastService;
  reportForm;
  isLoading = false;
  reportData = null;
  academicYears = [];
  classes = [];
  constructor(fb, syllabusService, academicYearService, classService, toastService) {
    this.fb = fb;
    this.syllabusService = syllabusService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.toastService = toastService;
    this.reportForm = this.fb.group({
      academic_year_id: [null],
      class_id: [null],
      subject_id: [null],
      show_delayed_only: [false]
    });
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
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
  generateReport() {
    this.isLoading = true;
    this.syllabusService.getCompletionReport(this.reportForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success") {
          this.reportData = response.data;
          this.toastService.success("Completion report generated successfully");
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.error("Failed to generate completion report");
      }
    });
  }
  getStatusColor(status) {
    switch (status) {
      case "completed":
        return "success";
      case "in_progress":
        return "warning";
      case "delayed":
        return "danger";
      default:
        return "secondary";
    }
  }
  exportReport() {
    if (!this.reportData) {
      this.toastService.warning("Please generate a report first");
      return;
    }
    this.syllabusService.exportCompletionReport(this.reportData).subscribe({
      next: (response) => {
        if (response.status === "success") {
          window.open(response.download_url, "_blank");
          this.toastService.success("Report exported successfully");
        }
      },
      error: () => {
        this.toastService.error("Failed to export report");
      }
    });
  }
  static \u0275fac = function SyllabusCompletionReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SyllabusCompletionReportComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SyllabusService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SyllabusCompletionReportComponent, selectors: [["app-syllabus-completion-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [[1, "completion-report-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters-card"], [3, "ngSubmit", "formGroup"], [1, "filters-grid"], [1, "form-group"], ["formControlName", "academic_year_id", 1, "form-control"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "class_id", 1, "form-control"], ["type", "checkbox", "formControlName", "show_delayed_only"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "bi", "bi-search"], ["class", "report-card", 4, "ngIf"], [1, "report-card"], [1, "report-header"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-download"], [1, "summary-section"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value"], [1, "summary-value", "text-danger"], [1, "table-section"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], [1, "badge", "badge-danger"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "badge"]], template: function SyllabusCompletionReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Syllabus Completion Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Track syllabus completion progress and identify delays");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "form", 5);
      \u0275\u0275listener("ngSubmit", function SyllabusCompletionReportComponent_Template_form_ngSubmit_8_listener() {
        return ctx.generateReport();
      });
      \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "Academic Year");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 8)(14, "option", 9);
      \u0275\u0275text(15, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, SyllabusCompletionReportComponent_option_16_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "label");
      \u0275\u0275text(19, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 11)(21, "option", 9);
      \u0275\u0275text(22, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, SyllabusCompletionReportComponent_option_23_Template, 2, 2, "option", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "label");
      \u0275\u0275element(26, "input", 12);
      \u0275\u0275text(27, " Show Delayed Only ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "button", 13);
      \u0275\u0275element(30, "i", 14);
      \u0275\u0275text(31, " Generate Report ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(32, SyllabusCompletionReportComponent_div_32_Template, 45, 4, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.reportForm);
      \u0275\u0275advance(6);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.reportData);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.completion-report-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.filters-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  align-items: end;\n}\n.report-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.summary-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 24px;\n  background: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s;\n}\n.progress-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n  font-weight: bold;\n  color: #333;\n}\n.table-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=syllabus-completion-report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SyllabusCompletionReportComponent, { className: "SyllabusCompletionReportComponent", filePath: "src\\app\\modules\\syllabus\\syllabus-completion-report\\syllabus-completion-report.component.ts", lineNumber: 16 });
})();
export {
  SyllabusCompletionReportComponent
};
//# sourceMappingURL=chunk-NLIM3ZBY.js.map
