import {
  BranchService
} from "./chunk-SCDJ76GZ.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/branches/branch-create/branch-create.component.ts
function BranchCreateComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_div_42_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.is_active, $event) || (ctx_r1.model.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 20);
    \u0275\u0275text(5, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 20);
    \u0275\u0275text(7, "Inactive");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.is_active);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", 0);
  }
}
var BranchCreateComponent = class _BranchCreateComponent {
  branchService;
  toastService;
  router;
  route;
  model = { branch_name: "", branch_code: "", address: "", city: "", state: "", pincode: "", phone: "", email: "", is_active: 1 };
  loading = false;
  editId = null;
  constructor(branchService, toastService, router, route) {
    this.branchService = branchService;
    this.toastService = toastService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.editId = +idParam;
      this.branchService.getBranch(this.editId).subscribe({
        next: (res) => {
          if (res.status === "success" && res.data?.branch) {
            this.model = __spreadValues({}, res.data.branch);
          }
        }
      });
    }
  }
  save() {
    if (!this.model.branch_name?.trim()) {
      this.toastService.show("Branch name is required", "error");
      return;
    }
    this.loading = true;
    const payload = this.editId ? __spreadProps(__spreadValues({}, this.model), { branch_id: this.editId }) : this.model;
    const obs = this.editId ? this.branchService.updateBranch(payload) : this.branchService.createBranch(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toastService.show(this.editId ? "Branch updated" : "Branch created", "success");
          this.router.navigate(["/app/branches/list"]);
        } else {
          this.toastService.show(res.message || "Error", "error");
        }
      },
      error: () => {
        this.loading = false;
        this.toastService.show("Error saving branch", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/branches/list"]);
  }
  static \u0275fac = function BranchCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchCreateComponent)(\u0275\u0275directiveInject(BranchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BranchCreateComponent, selectors: [["app-branch-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 13, consts: [[1, "branch-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "branch_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "branch_code", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "address", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "state", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "pincode", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["name", "is_active", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"]], template: function BranchCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function BranchCreateComponent_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "label");
      \u0275\u0275text(10, "Branch Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.branch_name, $event) || (ctx.model.branch_name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Branch Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.branch_code, $event) || (ctx.model.branch_code = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 6)(17, "label");
      \u0275\u0275text(18, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "textarea", 9);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_textarea_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.address, $event) || (ctx.model.address = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 5)(21, "div", 6)(22, "label");
      \u0275\u0275text(23, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.city, $event) || (ctx.model.city = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 6)(26, "label");
      \u0275\u0275text(27, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.state, $event) || (ctx.model.state = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 6)(30, "label");
      \u0275\u0275text(31, "Pincode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.pincode, $event) || (ctx.model.pincode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 5)(34, "div", 6)(35, "label");
      \u0275\u0275text(36, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 6)(39, "label");
      \u0275\u0275text(40, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function BranchCreateComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.email, $event) || (ctx.model.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(42, BranchCreateComponent_div_42_Template, 8, 3, "div", 15);
      \u0275\u0275elementStart(43, "div", 16)(44, "button", 17);
      \u0275\u0275listener("click", function BranchCreateComponent_Template_button_click_44_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(45, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 18);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.editId ? "Edit Branch" : "Add Branch");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId ? "Update branch details" : "Create a new school branch");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.branch_name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.branch_code);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.address);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.city);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.state);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.pincode);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.phone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editId);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.loading ? "Saving..." : "Save");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.branch-create-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-md);\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 500;\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-md);\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n}\n.branch-create-container[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-lg);\n}\n/*# sourceMappingURL=branch-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BranchCreateComponent, { className: "BranchCreateComponent", filePath: "src\\app\\modules\\branches\\branch-create\\branch-create.component.ts", lineNumber: 15 });
})();
export {
  BranchCreateComponent
};
//# sourceMappingURL=chunk-TATA3CZ7.js.map
