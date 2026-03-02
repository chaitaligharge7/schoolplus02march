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
  RequiredValidator,
  ɵNgNoValidate
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

// src/app/modules/security-guard/gate-pass-create/gate-pass-create.component.ts
var GatePassCreateComponent = class _GatePassCreateComponent {
  sg;
  toast;
  router;
  model = {
    visitor_name: "",
    purpose: "",
    valid_from: "",
    valid_until: ""
  };
  loading = false;
  constructor(sg, toast, router) {
    this.sg = sg;
    this.toast = toast;
    this.router = router;
    const now = /* @__PURE__ */ new Date();
    this.model.valid_from = now.toISOString().slice(0, 16);
    const end = new Date(now.getTime() + 4 * 60 * 60 * 1e3);
    this.model.valid_until = end.toISOString().slice(0, 16);
  }
  save() {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show("Visitor name is required", "error");
      return;
    }
    this.loading = true;
    this.sg.createGatePass(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Gate pass issued successfully", "success");
          this.router.navigate(["/app/security-guard/gate-pass/list"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error issuing gate pass", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/gate-pass/list"]);
  }
  static \u0275fac = function GatePassCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GatePassCreateComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GatePassCreateComponent, selectors: [["app-gate-pass-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 6, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], [1, "form-group"], ["type", "text", "name", "visitor_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "purpose", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "datetime-local", "name", "valid_from", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "datetime-local", "name", "valid_until", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function GatePassCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Issue Gate Pass");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Create a new gate pass for visitor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function GatePassCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Visitor Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function GatePassCreateComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.visitor_name, $event) || (ctx.model.visitor_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5)(12, "label");
      \u0275\u0275text(13, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function GatePassCreateComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.purpose, $event) || (ctx.model.purpose = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Valid From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function GatePassCreateComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.valid_from, $event) || (ctx.model.valid_from = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5)(21, "label");
      \u0275\u0275text(22, "Valid Until");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function GatePassCreateComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.valid_until, $event) || (ctx.model.valid_until = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 11)(25, "button", 12);
      \u0275\u0275listener("click", function GatePassCreateComponent_Template_button_click_25_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(26, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 13);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.visitor_name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.purpose);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.valid_from);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.valid_until);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Issue Pass");
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=gate-pass-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GatePassCreateComponent, { className: "GatePassCreateComponent", filePath: "src\\app\\modules\\security-guard\\gate-pass-create\\gate-pass-create.component.ts", lineNumber: 15 });
})();
export {
  GatePassCreateComponent
};
//# sourceMappingURL=chunk-62P5GM45.js.map
