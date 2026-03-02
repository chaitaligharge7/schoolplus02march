import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  CommonModule,
  HttpClient,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/services/connect-us.service.ts
var ConnectUsService = class _ConnectUsService {
  http;
  constructor(http) {
    this.http = http;
  }
  getConnectUs() {
    return this.http.get(`${environment.apiUrl}/connect-us/get.php`);
  }
  getConnectUsList() {
    return this.http.get(`${environment.apiUrl}/connect-us/list.php`);
  }
  createConnectUs(data) {
    return this.http.post(`${environment.apiUrl}/connect-us/create.php`, data);
  }
  updateConnectUs(data) {
    return this.http.post(`${environment.apiUrl}/connect-us/update.php`, data);
  }
  static \u0275fac = function ConnectUsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectUsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConnectUsService, factory: _ConnectUsService.\u0275fac, providedIn: "root" });
};

// src/app/modules/connect-us/connect-us.component.ts
function ConnectUsComponent_div_7_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ConnectUsComponent_div_7_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ConnectUsComponent_div_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, ConnectUsComponent_div_7_div_13_span_1_Template, 2, 0, "span", 26)(2, ConnectUsComponent_div_7_div_13_span_2_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function ConnectUsComponent_div_7_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " Phone is required ");
    \u0275\u0275elementEnd();
  }
}
function ConnectUsComponent_div_7_i_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 28);
  }
}
function ConnectUsComponent_div_7_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function ConnectUsComponent_div_7_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Create", " Connect Us");
  }
}
function ConnectUsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function ConnectUsComponent_div_7_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "h3", 10);
    \u0275\u0275text(5, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "label");
    \u0275\u0275text(9, "Email ");
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "input", 14);
    \u0275\u0275template(13, ConnectUsComponent_div_7_div_13_Template, 3, 2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "label");
    \u0275\u0275text(16, "Phone ");
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 16);
    \u0275\u0275template(20, ConnectUsComponent_div_7_div_20_Template, 2, 0, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 9)(22, "h3", 10);
    \u0275\u0275text(23, "Social Media Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "label");
    \u0275\u0275text(27, "Facebook URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 12)(30, "label");
    \u0275\u0275text(31, "Instagram URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 12)(34, "label");
    \u0275\u0275text(35, "Twitter URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 12)(38, "label");
    \u0275\u0275text(39, "LinkedIn URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 12)(42, "label");
    \u0275\u0275text(43, "WhatsApp URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 12)(46, "label");
    \u0275\u0275text(47, "YouTube URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "div", 23)(50, "button", 24);
    \u0275\u0275template(51, ConnectUsComponent_div_7_i_51_Template, 1, 0, "i", 25)(52, ConnectUsComponent_div_7_span_52_Template, 2, 0, "span", 26)(53, ConnectUsComponent_div_7_span_53_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.connectUsForm);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.connectUsForm.get("email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.connectUsForm.get("phone")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.connectUsForm.get("phone")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.connectUsForm.get("phone")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.connectUsForm.get("phone")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(30);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.connectUsForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function ConnectUsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading Connect Us data...");
    \u0275\u0275elementEnd()();
  }
}
var ConnectUsComponent = class _ConnectUsComponent {
  fb;
  connectUsService;
  toastService;
  connectUsForm;
  isSaving = false;
  isLoading = false;
  connectUsData = null;
  isEditMode = false;
  constructor(fb, connectUsService, toastService) {
    this.fb = fb;
    this.connectUsService = connectUsService;
    this.toastService = toastService;
    this.connectUsForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      facebook_url: [""],
      instagram_url: [""],
      twitter_url: [""],
      linkedin_url: [""],
      whatsapp_url: [""],
      youtube_url: [""],
      is_active: [1]
    });
  }
  ngOnInit() {
    this.loadConnectUs();
  }
  loadConnectUs() {
    this.isLoading = true;
    this.connectUsService.getConnectUs().subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === "success" && response.data?.connect_us) {
          this.connectUsData = response.data.connect_us;
          this.isEditMode = true;
          this.connectUsForm.patchValue({
            email: this.connectUsData.email || "",
            phone: this.connectUsData.phone || "",
            facebook_url: this.connectUsData.facebook_url || "",
            instagram_url: this.connectUsData.instagram_url || "",
            twitter_url: this.connectUsData.twitter_url || "",
            linkedin_url: this.connectUsData.linkedin_url || "",
            whatsapp_url: this.connectUsData.whatsapp_url || "",
            youtube_url: this.connectUsData.youtube_url || "",
            is_active: this.connectUsData.is_active ?? 1
          });
        } else {
          this.isEditMode = false;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.toastService.showError("Error loading Connect Us data");
      }
    });
  }
  onSubmit() {
    if (this.connectUsForm.invalid) {
      this.connectUsForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = this.connectUsForm.value;
    if (this.isEditMode && this.connectUsData) {
      formData.connect_us_id = this.connectUsData.connect_us_id;
      this.connectUsService.updateConnectUs(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.showSuccess("Connect Us updated successfully");
            this.loadConnectUs();
          } else {
            this.toastService.showError(response.message || "Error updating Connect Us");
          }
        },
        error: (error) => {
          this.isSaving = false;
          this.toastService.showError("Error updating Connect Us");
        }
      });
    } else {
      this.connectUsService.createConnectUs(formData).subscribe({
        next: (response) => {
          this.isSaving = false;
          if (response.status === "success") {
            this.toastService.showSuccess("Connect Us created successfully");
            this.loadConnectUs();
          } else {
            this.toastService.showError(response.message || "Error creating Connect Us");
          }
        },
        error: (error) => {
          this.isSaving = false;
          this.toastService.showError("Error creating Connect Us");
        }
      });
    }
  }
  static \u0275fac = function ConnectUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConnectUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ConnectUsService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConnectUsComponent, selectors: [["app-connect-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "connect-us-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-sections"], [1, "form-section"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "email", "formControlName", "email", "placeholder", "info@schoolplus.com", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "phone", "placeholder", "+91 98765 43210", 1, "form-control"], ["type", "url", "formControlName", "facebook_url", "placeholder", "https://facebook.com/yourpage", 1, "form-control"], ["type", "url", "formControlName", "instagram_url", "placeholder", "https://instagram.com/yourpage", 1, "form-control"], ["type", "url", "formControlName", "twitter_url", "placeholder", "https://twitter.com/yourpage", 1, "form-control"], ["type", "url", "formControlName", "linkedin_url", "placeholder", "https://linkedin.com/company/yourcompany", 1, "form-control"], ["type", "url", "formControlName", "whatsapp_url", "placeholder", "https://wa.me/919876543210", 1, "form-control"], ["type", "url", "formControlName", "youtube_url", "placeholder", "https://youtube.com/@yourchannel", 1, "form-control"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-save", 4, "ngIf"], [4, "ngIf"], [1, "invalid-feedback"], [1, "bi", "bi-save"], [1, "loading-container"], [1, "spinner"]], template: function ConnectUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Connect Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage contact information and social media links");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, ConnectUsComponent_div_7_Template, 54, 11, "div", 4)(8, ConnectUsComponent_div_8_Template, 4, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.connect-us-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 12px;\n  color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n  margin: 0;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-sections[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.form-sections[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-sections[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: #333;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #f0f0f0;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #555;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .connect-us-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=connect-us.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConnectUsComponent, { className: "ConnectUsComponent", filePath: "src\\app\\modules\\connect-us\\connect-us.component.ts", lineNumber: 14 });
})();

// src/app/modules/connect-us/connect-us.routes.ts
var ConnectUsRoutes = [
  {
    path: "",
    component: ConnectUsComponent
  }
];
export {
  ConnectUsRoutes
};
//# sourceMappingURL=chunk-UHAYU2C4.js.map
