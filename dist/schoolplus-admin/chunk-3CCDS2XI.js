import {
  CctvService
} from "./chunk-FTRO2KCS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
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
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/modules/cctv/cctv-create/cctv-create.component.ts
function CctvCreateComponent_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Camera name is required ");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " camera_location is required ");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Valid IP address is required (e.g., 192.168.1.100) ");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, " Valid port number is required (1-65535) ");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_small_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, " Leave blank to keep current password ");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Saving...");
    \u0275\u0275elementEnd();
  }
}
function CctvCreateComponent_div_6_span_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.isEditMode ? "Update" : "Add", " Camera");
  }
}
function CctvCreateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 7);
    \u0275\u0275listener("ngSubmit", function CctvCreateComponent_div_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 8)(3, "h3");
    \u0275\u0275text(4, "Camera Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "label");
    \u0275\u0275text(8, "Camera Name ");
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "input", 12);
    \u0275\u0275template(12, CctvCreateComponent_div_6_div_12_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Location ");
    \u0275\u0275elementStart(16, "span", 11);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 14);
    \u0275\u0275template(19, CctvCreateComponent_div_6_div_19_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10)(21, "label");
    \u0275\u0275text(22, "IP Address ");
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 15);
    \u0275\u0275template(26, CctvCreateComponent_div_6_div_26_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10)(28, "label");
    \u0275\u0275text(29, "Port ");
    \u0275\u0275elementStart(30, "span", 11);
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "input", 16);
    \u0275\u0275template(33, CctvCreateComponent_div_6_div_33_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 10)(35, "label");
    \u0275\u0275text(36, "Camera Type ");
    \u0275\u0275elementStart(37, "span", 11);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "select", 17)(40, "option", 18);
    \u0275\u0275text(41, "Dome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 19);
    \u0275\u0275text(43, "Bullet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 20);
    \u0275\u0275text(45, "PTZ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 21);
    \u0275\u0275text(47, "IP Camera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 22);
    \u0275\u0275text(49, "Analog");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 10)(51, "label");
    \u0275\u0275text(52, "Status ");
    \u0275\u0275elementStart(53, "span", 11);
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "select", 23)(56, "option", 24);
    \u0275\u0275text(57, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 25);
    \u0275\u0275text(59, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 26);
    \u0275\u0275text(61, "Under Maintenance");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "div", 8)(63, "h3");
    \u0275\u0275text(64, "Connection Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 9)(66, "div", 10)(67, "label");
    \u0275\u0275text(68, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 10)(71, "label");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 28);
    \u0275\u0275template(74, CctvCreateComponent_div_6_small_74_Template, 2, 0, "small", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 10)(76, "button", 30);
    \u0275\u0275listener("click", function CctvCreateComponent_div_6_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.testConnection());
    });
    \u0275\u0275text(77, " Test Connection ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 8)(79, "h3");
    \u0275\u0275text(80, "Additional Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 10)(82, "label");
    \u0275\u0275text(83, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "textarea", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 32)(86, "button", 33);
    \u0275\u0275listener("click", function CctvCreateComponent_div_6_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(87, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 34);
    \u0275\u0275template(89, CctvCreateComponent_div_6_span_89_Template, 2, 0, "span", 35)(90, CctvCreateComponent_div_6_span_90_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.cctvForm);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r1.cctvForm.get("camera_name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.cctvForm.get("camera_name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.cctvForm.get("camera_name")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.cctvForm.get("camera_name")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r1.cctvForm.get("camera_location")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.cctvForm.get("camera_location")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.cctvForm.get("camera_location")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.cctvForm.get("camera_location")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_6_0 = ctx_r1.cctvForm.get("camera_ip")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.cctvForm.get("camera_ip")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.cctvForm.get("camera_ip")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.cctvForm.get("camera_ip")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.cctvForm.get("port")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.cctvForm.get("port")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.cctvForm.get("port")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.cctvForm.get("port")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(39);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "New Password" : "Password");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.isEditMode ? "Leave blank to keep current password" : "Camera password (optional)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.cctvForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSaving);
  }
}
function CctvCreateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
var CctvCreateComponent = class _CctvCreateComponent {
  fb;
  route;
  router;
  cctvService;
  toastService;
  cctvForm;
  isEditMode = false;
  cctvId = null;
  isLoading = false;
  isSaving = false;
  constructor(fb, route, router, cctvService, toastService) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.cctvService = cctvService;
    this.toastService = toastService;
    this.cctvForm = this.fb.group({
      camera_name: ["", Validators.required],
      camera_location: ["", Validators.required],
      camera_ip: [
        "",
        [Validators.required, Validators.pattern(/^(\d{1,3}\.){3}\d{1,3}$/)]
      ],
      port: [
        80,
        [Validators.required, Validators.min(1), Validators.max(65535)]
      ],
      username: [""],
      password: [""],
      camera_type: ["dome", Validators.required],
      camera_status: ["active", Validators.required],
      description: [""]
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.isEditMode = true;
        this.cctvId = +params["id"];
        this.loadCctv();
      }
    });
  }
  loadCctv() {
    if (!this.cctvId)
      return;
    this.isLoading = true;
    this.cctvService.getCctvList({ cctv_id: this.cctvId }).subscribe({
      next: (response) => {
        if (response.status === "success" && response.data?.cameras?.length > 0) {
          const camera = response.data.cameras.find((cam) => cam.camera_id == this.cctvId);
          this.cctvForm.patchValue({
            camera_name: camera.camera_name,
            camera_location: camera.camera_location,
            camera_ip: camera.camera_ip,
            port: camera.port,
            username: camera.username || "",
            password: "",
            // Don't load password for security
            camera_type: camera.camera_type,
            camera_status: camera.camera_status,
            description: camera.description || ""
          });
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.error("Failed to load CCTV camera details");
        this.isLoading = false;
      }
    });
  }
  // onSubmit(): void {
  //   if (this.cctvForm.invalid) {
  //     this.cctvForm.markAllAsTouched();
  //     return;
  //   }
  //   this.isSaving = true;
  //   const formData = { ...this.cctvForm.value };
  //   // Don't send empty password on edit if not changed
  //   if (this.isEditMode && !formData.password) {
  //     delete formData.password;
  //   }
  //   if (this.isEditMode && this.cctvId) {
  //     formData.cctv_id = this.cctvId;
  //   }
  //   this.cctvService.createCctv(formData).subscribe({
  //     next: (response) => {
  //       if (response.status === "success") {
  //         this.toastService.success(
  //           `CCTV camera ${this.isEditMode ? "updated" : "created"} successfully`,
  //         );
  //         this.router.navigate(["/app/cctv"]);
  //       } else {
  //         this.toastService.error(
  //           response.message ||
  //             `Failed to ${this.isEditMode ? "update" : "create"} camera`,
  //         );
  //       }
  //       this.isSaving = false;
  //     },
  //     error: () => {
  //       this.toastService.error(
  //         `Failed to ${this.isEditMode ? "update" : "create"} camera`,
  //       );
  //       this.isSaving = false;
  //     },
  //   });
  // }
  onSubmit() {
    if (this.cctvForm.invalid) {
      this.cctvForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    const formData = __spreadValues({}, this.cctvForm.value);
    if (this.isEditMode && !formData.password) {
      delete formData.password;
    }
    if (this.isEditMode && this.cctvId) {
      formData.camera_id = this.cctvId;
      this.cctvService.updateCctv(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("CCTV camera updated successfully");
            this.router.navigate(["/app/cctv"]);
          } else {
            this.toastService.error(response.message || "Failed to update camera");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to update camera");
          this.isSaving = false;
        }
      });
    } else {
      this.cctvService.createCctv(formData).subscribe({
        next: (response) => {
          if (response.status === "success") {
            this.toastService.success("CCTV camera created successfully");
            this.router.navigate(["/app/cctv"]);
          } else {
            this.toastService.error(response.message || "Failed to create camera");
          }
          this.isSaving = false;
        },
        error: () => {
          this.toastService.error("Failed to create camera");
          this.isSaving = false;
        }
      });
    }
  }
  testConnection() {
    if (!this.cctvForm.get("camera_ip")?.value || !this.cctvForm.get("port")?.value) {
      this.toastService.warning("Please enter IP address and port first");
      return;
    }
    const formData = {
      camera_ip: this.cctvForm.get("camera_ip")?.value,
      port: this.cctvForm.get("port")?.value,
      username: this.cctvForm.get("username")?.value,
      password: this.cctvForm.get("password")?.value
    };
    if (!this.cctvId) {
      this.toastService.warning("Please save camera first");
      return;
    }
    this.cctvService.checkCctvStatus(this.cctvId).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.toastService.success("Connection test successful");
        } else {
          this.toastService.error("Connection test failed");
        }
      },
      error: () => {
        this.toastService.error("Connection test failed");
      }
    });
  }
  cancel() {
    this.router.navigate(["/app/cctv"]);
  }
  static \u0275fac = function CctvCreateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CctvCreateComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CctvService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CctvCreateComponent, selectors: [["app-cctv-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[1, "cctv-create-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "form-card", 4, "ngIf"], ["class", "loading-spinner", 4, "ngIf"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], [1, "required"], ["type", "text", "formControlName", "camera_name", "placeholder", "e.g., Main Entrance Camera", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "camera_location", "placeholder", "e.g., Main Entrance, Parking Lot", 1, "form-control"], ["type", "text", "formControlName", "camera_ip", "placeholder", "192.168.1.100", 1, "form-control"], ["type", "number", "formControlName", "port", "min", "1", "max", "65535", 1, "form-control"], ["formControlName", "camera_type", 1, "form-control"], ["value", "dome"], ["value", "bullet"], ["value", "ptz"], ["value", "ip"], ["value", "analog"], ["formControlName", "camera_status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["value", "maintenance"], ["type", "text", "formControlName", "username", "placeholder", "Camera username (optional)", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["class", "form-text text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["formControlName", "description", "rows", "3", "placeholder", "Enter any additional notes about this camera", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "invalid-feedback"], [1, "form-text", "text-muted"], [1, "loading-spinner"], [1, "spinner"]], template: function CctvCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, CctvCreateComponent_div_6_Template, 91, 20, "div", 4)(7, CctvCreateComponent_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Edit CCTV Camera" : "Add CCTV Camera");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Update camera details" : "Add a new CCTV camera to the system");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName], styles: ["\n\n.cctv-create-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0 0 8px 0;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin: 0;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #e9ecef;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n@media (max-width: 768px) {\n  .cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #495057;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6c757d;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e9ecef;\n}\n.cctv-create-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n/*# sourceMappingURL=cctv-create.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CctvCreateComponent, { className: "CctvCreateComponent", filePath: "src\\app\\modules\\cctv\\cctv-create\\cctv-create.component.ts", lineNumber: 20 });
})();
export {
  CctvCreateComponent
};
//# sourceMappingURL=chunk-3CCDS2XI.js.map
