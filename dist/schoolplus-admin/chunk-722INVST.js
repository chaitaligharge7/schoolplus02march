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
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/daily-report-edit/daily-report-edit.component.ts
function DailyReportEditComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function DailyReportEditComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function DailyReportEditComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "label");
    \u0275\u0275text(4, "Report Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function DailyReportEditComponent_form_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.report_date, $event) || (ctx_r1.model.report_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "label");
    \u0275\u0275text(8, "Shift");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function DailyReportEditComponent_form_7_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.shift, $event) || (ctx_r1.model.shift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 12);
    \u0275\u0275text(11, "Morning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 13);
    \u0275\u0275text(13, "Afternoon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 14);
    \u0275\u0275text(15, "Night");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 9)(17, "label");
    \u0275\u0275text(18, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function DailyReportEditComponent_form_7_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.summary, $event) || (ctx_r1.model.summary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 9)(21, "label");
    \u0275\u0275text(22, "Incidents (if any)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 16);
    \u0275\u0275twoWayListener("ngModelChange", function DailyReportEditComponent_form_7_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.incidents, $event) || (ctx_r1.model.incidents = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
    \u0275\u0275listener("click", function DailyReportEditComponent_form_7_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(26, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 19);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.report_date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.shift);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.summary);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.incidents);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading ? "Saving..." : "Update");
  }
}
var DailyReportEditComponent = class _DailyReportEditComponent {
  sg;
  toast;
  router;
  route;
  model = {
    report_id: 0,
    report_date: "",
    shift: "morning",
    summary: "",
    incidents: ""
  };
  loading = false;
  loadingData = true;
  constructor(sg, toast, router, route) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.sg.getDailyReport(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === "success" && res.data?.report) {
            const r = res.data.report;
            this.model = {
              report_id: r.report_id,
              report_date: r.report_date ? r.report_date.slice(0, 10) : "",
              shift: r.shift || "morning",
              summary: r.summary || "",
              incidents: r.incidents || ""
            };
          }
        },
        error: () => {
          this.loadingData = false;
          this.toast.show("Error loading report", "error");
          this.router.navigate(["/app/security-guard/daily-report/list"]);
        }
      });
    } else {
      this.loadingData = false;
      this.router.navigate(["/app/security-guard/daily-report/list"]);
    }
  }
  save() {
    this.loading = true;
    this.sg.updateDailyReport(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Report updated", "success");
          this.router.navigate(["/app/security-guard/daily-report/list"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error updating report", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/daily-report/list"]);
  }
  static \u0275fac = function DailyReportEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DailyReportEditComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DailyReportEditComponent, selectors: [["app-daily-report-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading-state", 4, "ngIf"], ["class", "form-card", 3, "ngSubmit", 4, "ngIf"], [1, "loading-state"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "date", "name", "report_date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "shift", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "morning"], ["value", "afternoon"], ["value", "night"], ["name", "summary", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "incidents", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function DailyReportEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Edit Daily Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Update security shift report");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, DailyReportEditComponent_div_6_Template, 2, 0, "div", 4)(7, DailyReportEditComponent_form_7_Template, 29, 6, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && ctx.model.report_id);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=daily-report-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DailyReportEditComponent, { className: "DailyReportEditComponent", filePath: "src\\app\\modules\\security-guard\\daily-report-edit\\daily-report-edit.component.ts", lineNumber: 15 });
})();
export {
  DailyReportEditComponent
};
//# sourceMappingURL=chunk-722INVST.js.map
