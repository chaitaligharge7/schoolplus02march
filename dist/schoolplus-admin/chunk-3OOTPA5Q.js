import {
  WaterTdsService
} from "./chunk-EHM7ZY6F.js";
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
  RequiredValidator,
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

// src/app/modules/water-tds/water-tds-create/water-tds-create.component.ts
function WaterTdsCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Location is required ");
    \u0275\u0275elementEnd();
  }
}
function WaterTdsCreateComponent_div_6_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " TDS value is required and must be a positive number ");
    \u0275\u0275elementEnd();
  }
}
function WaterTdsCreateComponent_div_6_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1, " Reading date is required ");
    \u0275\u0275elementEnd();
  }
}
function WaterTdsCreateComponent_div_6_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function WaterTdsCreateComponent_div_6_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Save", " Reading");
  }
}
function WaterTdsCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function WaterTdsCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Reading Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Location ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, WaterTdsCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label", 14);
    \u0275\u0275text(15, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "label", 16);
    \u0275\u0275text(19, "Measurement Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10)(22, "label");
    \u0275\u0275text(23, "TDS Value (ppm) ");
    \u0275\u0275elementStart(24, "span", 11);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "input", 18);
    \u0275\u0275elementStart(27, "small", 19);
    \u0275\u0275text(28, " Normal: \u2264500 ppm | High: 501-1000 ppm | Critical: >1000 ppm ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, WaterTdsCreateComponent_div_6_div_29_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 10)(31, "label");
    \u0275\u0275text(32, "Reading Date ");
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 20);
    \u0275\u0275template(36, WaterTdsCreateComponent_div_6_div_36_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10)(38, "label");
    \u0275\u0275text(39, "Status ");
    \u0275\u0275elementStart(40, "span", 11);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "select", 21)(43, "option", 22);
    \u0275\u0275text(44, "Normal (\u2264500 ppm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 23);
    \u0275\u0275text(46, "High (501-1000 ppm)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 24);
    \u0275\u0275text(48, "Critical (>1000 ppm)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "small", 19);
    \u0275\u0275text(50, "Status will be auto-calculated based on TDS value if not manually set");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 10)(52, "label");
    \u0275\u0275text(53, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "textarea", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 26)(56, "button", 27);
    \u0275\u0275listener("click", function WaterTdsCreateComponent_div_6_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(57, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 28);
    \u0275\u0275template(59, WaterTdsCreateComponent_div_6_span_59_Template, 2, 0, "span", 29)(60, WaterTdsCreateComponent_div_6_span_60_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.readingForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.readingForm.get("location")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.readingForm.get("location")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.readingForm.get("location")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.readingForm.get("location")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(14);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.readingForm.get("tds_value")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.readingForm.get("tds_value")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.readingForm.get("tds_value")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.readingForm.get("tds_value")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.readingForm.get("reading_date")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.readingForm.get("reading_date")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.readingForm.get("reading_date")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.readingForm.get("reading_date")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.readingForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function WaterTdsCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementEnd();
  }
}
var WaterTdsCreateComponent = class _WaterTdsCreateComponent {
  fb;
  route;
  router;
  waterTdsService;
  toastService;
  readingForm;
  isEditMode = false;
  readingId = null;
  isLoading = false;
  isSaving = false;
  constructor(fb, route, router, waterTdsService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.waterTdsService = waterTdsService;
    this.toastService = toastService;
    this.readingForm = this.fb.group({
      student_id: [null, Validators.required],
      // NEW
      measurement_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      // renamed
      location: ["", Validators.required],
      tds_value: [null, [Validators.required, Validators.min(0)]],
      reading_date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      status: ["normal", Validators.required],
      remarks: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.readingId = +params["id"];
        this.loadReading();
      }
    });
  }
  loadReading() {
    if (!this.readingId)
      return;
    this.isLoading = true;
    this.waterTdsService.getWaterTdsReadings({ reading_id: this.readingId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.tds?.length > 0) {
          const reading = response.data.tds[0];
          this.readingForm.patchValue({
            student_id: reading.student_id ?? null,
            location: reading.location,
            tds_value: reading.tds_value,
            reading_date: reading.measurement_date,
            status: reading.status || "normal",
            remarks: reading.remarks
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load reading details");
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    if (this.readingForm.invalid) {
      this.readingForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.readingForm.value;
    const tdsValue = formData.tds_value;
    if (!formData.status || formData.status === "normal") {
      if (tdsValue <= 500) {
        formData.status = "normal";
      } else if (tdsValue <= 1e3) {
        formData.status = "high";
      } else {
        formData.status = "critical";
      }
    }
    if (this.isEditMode && this.readingId) {
      this.waterTdsService.updateWaterTdsReading(this.readingId, formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Water TDS reading updated successfully");
            this.router.navigate(["/app/water-tds"]);
          } else {
            this.toastService.error(response.message || "Failed to update reading");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update reading");
          this.isSaving = false;
        }
      });
    } else {
      this.waterTdsService.createWaterTdsReading(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("Water TDS reading created successfully");
            this.router.navigate(["/app/water-tds"]);
          } else {
            this.toastService.error(response.message || "Failed to create reading");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create reading");
          this.isSaving = false;
        }
      });
    }
  }
  cancel() {
    this.router.navigate(["/app/water-tds"]);
  }
  static \u0275fac = function WaterTdsCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaterTdsCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(WaterTdsService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WaterTdsCreateComponent, selectors: [["app-water-tds-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "water-tds-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "location", "placeholder", "e.g., Main Building, Block A, etc.", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "student_id"], ["type", "number", "id", "student_id", "formControlName", "student_id", "required", "", 1, "form-control"], ["for", "measurement_date"], ["type", "date", "id", "measurement_date", "formControlName", "measurement_date", "required", "", 1, "form-control"], ["type", "number", "formControlName", "tds_value", "min", "0", "step", "0.01", "placeholder", "Enter TDS value", 1, "form-control"], [1, "form-text", "text-muted"], ["type", "date", "formControlName", "reading_date", 1, "form-control"], ["formControlName", "status", 1, "form-control"], ["value", "normal"], ["value", "high"], ["value", "critical"], ["formControlName", "remarks", "rows", "4", "placeholder", "Enter any additional remarks or observations", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "loading-spinner"], [1, "spinner"]], template: function WaterTdsCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, WaterTdsCreateComponent_div_6_Template, 61, 14, "div", 4)(7, WaterTdsCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit Water TDS Reading" : "Add Water TDS Reading");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update reading details" : "Record a new water TDS reading");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.water-tds-create-container[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.water-tds-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=water-tds-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WaterTdsCreateComponent, { className: "WaterTdsCreateComponent", filePath: "src\\app\\modules\\water-tds\\water-tds-create\\water-tds-create.component.ts", lineNumber: 15 });
})();
export {
  WaterTdsCreateComponent
};
//# sourceMappingURL=chunk-3OOTPA5Q.js.map
