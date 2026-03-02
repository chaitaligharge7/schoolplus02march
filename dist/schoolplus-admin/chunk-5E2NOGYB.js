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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/security-guard/inquiry-edit/inquiry-edit.component.ts
function InquiryEditComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Inquiry #", ctx_r0.model.inquiry_id, "");
  }
}
function InquiryEditComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function InquiryEditComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function InquiryEditComponent_form_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "label");
    \u0275\u0275text(4, "Visitor Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.visitor_name, $event) || (ctx_r0.model.visitor_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.visitor_phone, $event) || (ctx_r0.model.visitor_phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "label");
    \u0275\u0275text(13, "ID Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.visitor_id_type, $event) || (ctx_r0.model.visitor_id_type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "label");
    \u0275\u0275text(17, "ID Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.visitor_id_number, $event) || (ctx_r0.model.visitor_id_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 10)(20, "label");
    \u0275\u0275text(21, "Purpose of Visit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "textarea", 15);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.purpose, $event) || (ctx_r0.model.purpose = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "label");
    \u0275\u0275text(26, "Person to Meet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.person_to_meet, $event) || (ctx_r0.model.person_to_meet = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 10)(29, "label");
    \u0275\u0275text(30, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.department, $event) || (ctx_r0.model.department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 9)(33, "div", 10)(34, "label");
    \u0275\u0275text(35, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 18);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.status, $event) || (ctx_r0.model.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 19);
    \u0275\u0275text(38, "Registered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 20);
    \u0275\u0275text(40, "Forwarded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 21);
    \u0275\u0275text(42, "Resolved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 22);
    \u0275\u0275text(44, "Cancelled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 23)(46, "label");
    \u0275\u0275text(47, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "textarea", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InquiryEditComponent_form_6_Template_textarea_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.model.notes, $event) || (ctx_r0.model.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 25)(50, "button", 26);
    \u0275\u0275listener("click", function InquiryEditComponent_form_6_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(51, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 27);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.visitor_name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.visitor_phone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.visitor_id_type);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.visitor_id_number);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.person_to_meet);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.department);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.status);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.model.notes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loading ? "Saving..." : "Update");
  }
}
var InquiryEditComponent = class _InquiryEditComponent {
  sg;
  toast;
  router;
  route;
  model = {
    inquiry_id: 0,
    visitor_name: "",
    visitor_phone: "",
    visitor_id_type: "",
    visitor_id_number: "",
    purpose: "",
    person_to_meet: "",
    department: "",
    status: "registered",
    notes: ""
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
      this.sg.getInquiry(+id).subscribe({
        next: (res) => {
          this.loadingData = false;
          if (res.status === "success" && res.data?.inquiry) {
            const i = res.data.inquiry;
            this.model = {
              inquiry_id: i.inquiry_id,
              visitor_name: i.visitor_name || "",
              visitor_phone: i.visitor_phone || "",
              visitor_id_type: i.visitor_id_type || "",
              visitor_id_number: i.visitor_id_number || "",
              purpose: i.purpose || "",
              person_to_meet: i.person_to_meet || "",
              department: i.department || "",
              status: i.status || "registered",
              notes: i.notes || ""
            };
          }
        },
        error: () => {
          this.loadingData = false;
          this.toast.show("Error loading inquiry", "error");
          this.router.navigate(["/app/security-guard/inquiry/list"]);
        }
      });
    } else {
      this.loadingData = false;
      this.router.navigate(["/app/security-guard/inquiry/list"]);
    }
  }
  save() {
    if (!this.model.visitor_name?.trim()) {
      this.toast.show("Visitor name is required", "error");
      return;
    }
    this.loading = true;
    this.sg.updateInquiry(this.model).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "success") {
          this.toast.show("Inquiry updated", "success");
          this.router.navigate(["/app/security-guard/inquiry/list"]);
        } else
          this.toast.show(res.message || "Error", "error");
      },
      error: () => {
        this.loading = false;
        this.toast.show("Error updating inquiry", "error");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/security-guard/inquiry/list"]);
  }
  static \u0275fac = function InquiryEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InquiryEditComponent)(\u0275\u0275directiveInject(SecurityGuardService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InquiryEditComponent, selectors: [["app-inquiry-edit"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-subtitle", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "form-card", 3, "ngSubmit", 4, "ngIf"], [1, "page-subtitle"], [1, "loading-state"], [1, "form-card", 3, "ngSubmit"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "visitor_name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_phone", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_id_type", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "visitor_id_number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "purpose", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "person_to_meet", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "department", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "status", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "registered"], ["value", "forwarded"], ["value", "resolved"], ["value", "cancelled"], [1, "form-group", "flex-grow"], ["name", "notes", "rows", "2", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function InquiryEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Edit Inquiry");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, InquiryEditComponent_p_4_Template, 2, 1, "p", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InquiryEditComponent_div_5_Template, 2, 0, "div", 4)(6, InquiryEditComponent_form_6_Template, 54, 11, "form", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.model.inquiry_id);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingData && ctx.model.inquiry_id);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.form-group.flex-grow[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=inquiry-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InquiryEditComponent, { className: "InquiryEditComponent", filePath: "src\\app\\modules\\security-guard\\inquiry-edit\\inquiry-edit.component.ts", lineNumber: 15 });
})();
export {
  InquiryEditComponent
};
//# sourceMappingURL=chunk-5E2NOGYB.js.map
