import {
  SecurityGuardService
} from "./chunk-XWWR65CX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/daily-report-create/daily-report-create.component.ts
var DailyReportCreateComponent = class _DailyReportCreateComponent {
  sg;
  toast;
  router;
  model = {
    report_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
    shift: "morning",
    summary: "",
    incidents: ""
  };
  loading = false;
  constructor(sg, toast, router) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
  }
  save() {
    this.loading = true;
    this.sg.createDailyReport(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Report saved successfully", "success");
          this.router.navigate(["/app/security-guard/daily-report/list"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error saving report", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/daily-report/list"]);
  }
  static \u0275fac = function DailyReportCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyReportCreateComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyReportCreateComponent, selectors: [["app-daily-report-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "report_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "shift", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "morning"], ["value", "afternoon"], ["value", "night"], ["name", "summary", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "incidents", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function DailyReportCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Add Daily Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Submit security shift report");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function DailyReportCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label");
      \u0275\u0275text(10, "Report Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function DailyReportCreateComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.report_date, $event) || (ctx.model.report_date = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Shift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DailyReportCreateComponent_Template_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.shift, $event) || (ctx.model.shift = $event);
        return $event;
      });
      \u0275\u0275elementStart(16, "option", 9);
      \u0275\u0275text(17, "Morning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "option", 10);
      \u0275\u0275text(19, "Afternoon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 11);
      \u0275\u0275text(21, "Night");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "label");
      \u0275\u0275text(24, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "textarea", 12);
      \u0275\u0275twoWayListener("ngModelChange", function DailyReportCreateComponent_Template_textarea_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.summary, $event) || (ctx.model.summary = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 6)(27, "label");
      \u0275\u0275text(28, "Incidents (if any)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "textarea", 13);
      \u0275\u0275twoWayListener("ngModelChange", function DailyReportCreateComponent_Template_textarea_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.incidents, $event) || (ctx.model.incidents = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 14)(31, "button", 15);
      \u0275\u0275listener("click", function DailyReportCreateComponent_Template_button_click_31_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(32, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 16);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.report_date);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.shift);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.summary);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.incidents);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save Report");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=daily-report-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyReportCreateComponent, { className: "DailyReportCreateComponent", filePath: "src\\app\\modules\\security-guard\\daily-report-create\\daily-report-create.component.ts", lineNumber: 15 });
})();
export {
  DailyReportCreateComponent
};
//# sourceMappingURL=chunk-RNDL7BBA.js.map
