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
  RequiredValidator,
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

// src/app/modules/security-guard/gate-pass-edit/gate-pass-edit.component.ts
function GatePassEditComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function GatePassEditComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275listener("ngSubmit", function GatePassEditComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 8)(2, "label");
    \u0275\u0275text(3, "Visitor Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function GatePassEditComponent_form_7_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.visitor_name, $event) || (ctx_r1.model.visitor_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "label");
    \u0275\u0275text(7, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function GatePassEditComponent_form_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.purpose, $event) || (ctx_r1.model.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 8)(11, "label");
    \u0275\u0275text(12, "Valid From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function GatePassEditComponent_form_7_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.valid_from, $event) || (ctx_r1.model.valid_from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "label");
    \u0275\u0275text(16, "Valid Until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function GatePassEditComponent_form_7_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.valid_until, $event) || (ctx_r1.model.valid_until = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 8)(19, "label");
    \u0275\u0275text(20, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function GatePassEditComponent_form_7_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.status, $event) || (ctx_r1.model.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 15);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 16);
    \u0275\u0275text(25, "Used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 17);
    \u0275\u0275text(27, "Expired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 18);
    \u0275\u0275text(29, "Cancelled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
    \u0275\u0275listener("click", function GatePassEditComponent_form_7_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(32, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 21);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.visitor_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.valid_from);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.valid_until);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.status);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading ? "Saving..." : "Update");
  }
}
var GatePassEditComponent = class _GatePassEditComponent {
  sg;
  toast;
  router;
  route;
  model = {
    gate_pass_id: 0,
    visitor_name: "",
    purpose: "",
    valid_from: "",
    valid_until: "",
    status: "active"
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
      this.sg.getGatePass(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === "success" && res.data?.gate_pass) {
            const g = res.data.gate_pass;
            this.model = {
              gate_pass_id: g.gate_pass_id,
              visitor_name: g.visitor_name || "",
              purpose: g.purpose || "",
              valid_from: g.valid_from ? g.valid_from.slice(0, 16) : "",
              valid_until: g.valid_until ? g.valid_until.slice(0, 16) : "",
              status: g.status || "active"
            };
          }
        },
        error: () => {
          this.loadingData = false;
          this.toast.show("Error loading gate pass", "error");
          this.router.navigate(["/app/security-guard/gate-pass/list"]);
        }
      });
    } else {
      this.loadingData = false;
      this.router.navigate(["/app/security-guard/gate-pass/list"]);
    }
  }
  save() {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show("Visitor name is required", "error");
      return;
    }
    this.loading = true;
    this.sg.updateGatePass(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Gate pass updated", "success");
          this.router.navigate(["/app/security-guard/gate-pass/list"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error updating gate pass", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/gate-pass/list"]);
  }
  static \u0275fac = function GatePassEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GatePassEditComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GatePassEditComponent, selectors: [["app-gate-pass-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading-state", 4, "ngIf"], ["class", "form-card", 3, "ngSubmit", 4, "ngIf"], [1, "loading-state"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "visitor_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "purpose", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "datetime-local", "name", "valid_from", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "valid_until", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "active"], ["value", "used"], ["value", "expired"], ["value", "cancelled"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function GatePassEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Edit Gate Pass");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Update gate pass details");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, GatePassEditComponent_div_6_Template, 2, 0, "div", 4)(7, GatePassEditComponent_form_7_Template, 35, 7, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && ctx.model.gate_pass_id);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 1rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=gate-pass-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GatePassEditComponent, { className: "GatePassEditComponent", filePath: "src\\app\\modules\\security-guard\\gate-pass-edit\\gate-pass-edit.component.ts", lineNumber: 15 });
})();
export {
  GatePassEditComponent
};
//# sourceMappingURL=chunk-CAMRVHVX.js.map
