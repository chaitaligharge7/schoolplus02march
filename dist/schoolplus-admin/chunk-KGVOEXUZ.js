import {
  ReportService
} from "./chunk-O6NZD2M7.js";
import {
  StudentService
} from "./chunk-YLBONAI4.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/pages/student-performance/student-performance.component.ts
function StudentPerformanceComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ay_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", (tmp_2_0 = ay_r1.academic_year_id) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ay_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = ay_r1.academic_year_name) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ay_r1.name);
  }
}
function StudentPerformanceComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r2.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.class_name);
  }
}
function StudentPerformanceComponent_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", s_r3.student_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r3.full_name, " (", s_r3.admission_number, ")");
  }
}
function StudentPerformanceComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Loading performance data...");
    \u0275\u0275elementEnd();
  }
}
function StudentPerformanceComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "strong");
    \u0275\u0275text(3, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17)(7, "strong");
    \u0275\u0275text(8, "Average %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "strong");
    \u0275\u0275text(13, "Average Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 17)(17, "strong");
    \u0275\u0275text(18, "Examinations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.overallPerformance.total_students);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.overallPerformance.average_percentage);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.overallPerformance.average_marks);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.overallPerformance.total_examinations);
  }
}
function StudentPerformanceComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "strong");
    \u0275\u0275text(2, "Class average:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.comparativeData.class_average, "% (", ctx_r3.comparativeData.class_total_students, " students) ");
  }
}
function StudentPerformanceComponent_div_34_tr_17_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.subject_name || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.total_students);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.avg_percentage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.avg_marks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.pass_percentage);
  }
}
function StudentPerformanceComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "Subject-wise Performance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 20)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Avg %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Avg Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Pass %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, StudentPerformanceComponent_div_34_tr_17_Template, 11, 5, "tr", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r3.subjectPerformance);
  }
}
function StudentPerformanceComponent_p_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "No performance data. Select Academic Year (required) and click Load.");
    \u0275\u0275elementEnd();
  }
}
var StudentPerformanceComponent = class _StudentPerformanceComponent {
  reportService;
  classService;
  studentService;
  academicYearService;
  toast;
  performanceData = [];
  overallPerformance = null;
  subjectPerformance = [];
  comparativeData = null;
  loading = false;
  academicYearId = null;
  classId = null;
  studentId = null;
  classes = [];
  students = [];
  academicYears = [];
  constructor(reportService, classService, studentService, academicYearService, toast) {
    this.reportService = reportService;
    this.classService = classService;
    this.studentService = studentService;
    this.academicYearService = academicYearService;
    this.toast = toast;
  }
  ngOnInit() {
    this.classService.getClasses({ limit: 200 }).subscribe((r) => {
      if (r.status === "success" && r.data?.classes)
        this.classes = r.data.classes;
    });
    this.academicYearService.getAcademicYears({ limit: 50 }).subscribe((r) => {
      if (r.status === "success" && r.data?.academic_years)
        this.academicYears = r.data.academic_years;
      else if (r.status === "success" && r.data?.list)
        this.academicYears = r.data.list;
      if (this.academicYears.length)
        this.academicYearId = this.academicYears[0].academic_year_id ?? this.academicYears[0].id;
    });
  }
  onClassChange() {
    this.students = [];
    this.studentId = null;
    if (this.classId) {
      this.studentService.getStudents({ class_id: this.classId, limit: 500 }).subscribe((r) => {
        if (r.status === "success" && r.data?.students)
          this.students = r.data.students;
      });
    }
    this.load();
  }
  load() {
    if (!this.academicYearId) {
      this.toast.show("Please select academic year", "warning");
      return;
    }
    this.loading = true;
    const params = { academic_year_id: this.academicYearId };
    if (this.classId)
      params.class_id = this.classId;
    if (this.studentId)
      params.student_id = this.studentId;
    this.reportService.getStudentPerformanceReport(params).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success" && res.data) {
          this.overallPerformance = res.data.overall_performance ?? null;
          this.subjectPerformance = res.data.subject_performance ?? [];
          this.comparativeData = res.data.comparative_data ?? null;
          this.performanceData = this.subjectPerformance;
        } else {
          this.overallPerformance = null;
          this.subjectPerformance = [];
          this.comparativeData = null;
          this.performanceData = [];
        }
      },
      error: () => {
        this.loading = false;
        this.performanceData = [];
        this.subjectPerformance = [];
        this.overallPerformance = null;
        this.toast.show("Error loading performance", "error");
      }
    });
  }
  static \u0275fac = function StudentPerformanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentPerformanceComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(StudentService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentPerformanceComponent, selectors: [["app-student-performance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 15, consts: [[1, "performance-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "filters"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "loading", 4, "ngIf"], ["class", "summary-cards", 4, "ngIf"], ["class", "comparative", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "loading"], [1, "summary-cards"], [1, "card"], [1, "comparative"], [1, "table-wrap"], [1, "data-table"], [4, "ngFor", "ngForOf"], [1, "empty"]], template: function StudentPerformanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Student Performance Tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "View student performance by academic year, class and subject");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Academic Year *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StudentPerformanceComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StudentPerformanceComponent_Template_select_change_10_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "Select Academic Year");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, StudentPerformanceComponent_option_13_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "label");
      \u0275\u0275text(16, "Class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StudentPerformanceComponent_Template_select_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StudentPerformanceComponent_Template_select_change_17_listener() {
        return ctx.onClassChange();
      });
      \u0275\u0275elementStart(18, "option", 7);
      \u0275\u0275text(19, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, StudentPerformanceComponent_option_20_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 5)(22, "label");
      \u0275\u0275text(23, "Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StudentPerformanceComponent_Template_select_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.studentId, $event) || (ctx.studentId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function StudentPerformanceComponent_Template_select_change_24_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(25, "option", 7);
      \u0275\u0275text(26, "All Students");
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, StudentPerformanceComponent_option_27_Template, 2, 3, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 5)(29, "button", 9);
      \u0275\u0275listener("click", function StudentPerformanceComponent_Template_button_click_29_listener() {
        return ctx.load();
      });
      \u0275\u0275text(30, "Load");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(31, StudentPerformanceComponent_div_31_Template, 2, 0, "div", 10)(32, StudentPerformanceComponent_div_32_Template, 21, 4, "div", 11)(33, StudentPerformanceComponent_div_33_Template, 4, 2, "div", 12)(34, StudentPerformanceComponent_div_34_Template, 18, 1, "div", 13)(35, StudentPerformanceComponent_p_35_Template, 2, 0, "p", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.studentId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.students);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.overallPerformance);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.comparativeData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.subjectPerformance.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.overallPerformance && !ctx.subjectPerformance.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule], styles: ["\n\n.performance-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: 6px;\n  min-width: 180px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid var(--border-color);\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  font-weight: 600;\n}\n.loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  color: var(--text-secondary);\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.summary-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n  min-width: 140px;\n}\n.summary-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.summary-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.comparative[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.5rem 0;\n}\n.table-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=student-performance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentPerformanceComponent, { className: "StudentPerformanceComponent", filePath: "src\\app\\pages\\student-performance\\student-performance.component.ts", lineNumber: 18 });
})();
export {
  StudentPerformanceComponent
};
//# sourceMappingURL=chunk-KGVOEXUZ.js.map
