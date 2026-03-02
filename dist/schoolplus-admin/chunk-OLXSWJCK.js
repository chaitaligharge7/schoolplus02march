import {
  LabService
} from "./chunk-WP5BGVND.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/lab/lab-item-create/lab-item-create.component.ts
function LabItemCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Item name is required ");
    \u0275\u0275elementEnd();
  }
}
function LabItemCreateComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Quantity must be at least 1 ");
    \u0275\u0275elementEnd();
  }
}
function LabItemCreateComponent_div_6_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function LabItemCreateComponent_div_6_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Item");
  }
}
function LabItemCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function LabItemCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Item Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Item Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, LabItemCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Category ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 14)(19, "option", 15);
    \u0275\u0275text(20, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 16);
    \u0275\u0275text(22, "Chemical");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 17);
    \u0275\u0275text(24, "Glassware");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 18);
    \u0275\u0275text(26, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Quantity ");
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "input", 19);
    \u0275\u0275template(33, LabItemCreateComponent_div_6_div_33_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 10)(35, "label");
    \u0275\u0275text(36, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 10)(39, "label");
    \u0275\u0275text(40, "Status ");
    \u0275\u0275elementStart(41, "span", 11);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "select", 21)(44, "option", 22);
    \u0275\u0275text(45, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 23);
    \u0275\u0275text(47, "In Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 24);
    \u0275\u0275text(49, "Maintenance");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 10)(51, "label");
    \u0275\u0275text(52, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "textarea", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 26)(55, "button", 27);
    \u0275\u0275listener("click", function LabItemCreateComponent_div_6_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(56, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 28);
    \u0275\u0275template(58, LabItemCreateComponent_div_6_span_58_Template, 2, 0, "span", 29)(59, LabItemCreateComponent_div_6_span_59_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.itemForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.itemForm.get("item_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.itemForm.get("item_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.itemForm.get("item_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.itemForm.get("item_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.itemForm.get("quantity")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.itemForm.get("quantity")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.itemForm.get("quantity")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.itemForm.get("quantity")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(22);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.itemForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function LabItemCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
}
var LabItemCreateComponent = class _LabItemCreateComponent {
  fb;
  route;
  router;
  labService;
  toastService;
  itemForm;
  isEditMode = false;
  itemId = null;
  isLoading = false;
  isSaving = false;
  constructor(fb, route, router, labService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.labService = labService;
    this.toastService = toastService;
    this.itemForm = this.fb.group({
      item_name: ["", Validators.required],
      category: ["equipment", Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      location: [""],
      status: ["available", Validators.required],
      description: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.itemId = +params["id"];
        this.loadItem();
      }
    });
  }
  loadItem() {
    if (!this.itemId)
      return;
    this.isLoading = true;
    this.labService.getLabItems({ item_id: this.itemId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.items?.length > 0) {
          const item = response.data.items[0];
          this.itemForm.patchValue({
            item_name: item.item_name,
            category: item.category,
            quantity: item.quantity,
            location: item.location,
            status: item.status,
            description: item.description
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load lab item details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.itemForm.value;
    if (this.isEditMode && this.itemId) {
      formData.item_id = this.itemId;
    }
    const request$ = this.isEditMode ? this.labService.updateLabItem(formData) : this.labService.createLabItem(formData);
    request$.subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success(`Lab item ${this.isEditMode ? "updated" : "created"} successfully`);
          this.router.navigate(["/app/lab"]);
        } else {
          this.toastService.error(response.message || `Failed to ${this.isEditMode ? "update" : "create"} item`);
        }
        this.isSaving = false;
      },
      error: () => {
        this.toastService.error(`Failed to ${this.isEditMode ? "update" : "create"} item`);
        this.isSaving = false;
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/lab"]);
  }
  static \u0275fac = function LabItemCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabItemCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LabService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabItemCreateComponent, selectors: [["app-lab-item-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "lab-item-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "item_name", "placeholder", "Enter item name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "category", 1, "form-control"], ["value", "equipment"], ["value", "chemical"], ["value", "glassware"], ["value", "other"], ["type", "number", "formControlName", "quantity", "min", "1", 1, "form-control"], ["type", "text", "formControlName", "location", "placeholder", "e.g., Lab A, Storage Room, etc.", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "available"], ["value", "in_use"], ["value", "maintenance"], ["formControlName", "description", "rows", "4", "placeholder", "Enter item description", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function LabItemCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, LabItemCreateComponent_div_6_Template, 60, 11, "div", 4)(7, LabItemCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Lab Item" : "Add Lab Item");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update item details" : "Add a new lab item");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.lab-item-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.lab-item-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=lab-item-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabItemCreateComponent, { className: "LabItemCreateComponent", filePath: "src\\app\\modules\\lab\\lab-item-create\\lab-item-create.component.ts", lineNumber: 15 });
})();
export {
  LabItemCreateComponent
};
//# sourceMappingURL=chunk-OLXSWJCK.js.map
