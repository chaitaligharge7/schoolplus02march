import {
  AuthService,
  LoadingComponent
} from "./chunk-OPEAQM6R.js";
import {
  auto_default
} from "./chunk-C6SGBWSX.js";
import {
  MenuService
} from "./chunk-KDSPKK2G.js";
import {
  DateFormatPipe
} from "./chunk-FN4NGQWM.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  NoopAnimationPlayer,
  sequence,
  style,
  ɵPRE_STYLE
} from "./chunk-6W4TS6AE.js";
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
  BrowserModule,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-GXY6YLNG.js";
import {
  ANIMATION_MODULE_TYPE,
  CommonModule,
  DOCUMENT,
  DatePipe,
  HttpClient,
  Inject,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  Subject,
  catchError,
  environment,
  filter,
  inject,
  performanceMarkFeature,
  provideHttpClient,
  setClassMetadata,
  takeUntil,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-VTJ43J7W.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/components/toast/toast.component.ts
function ToastComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ToastComponent_div_1_Template_button_click_5_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeToast(toast_r2.id));
    });
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("toast-success", toast_r2.type === "success")("toast-error", toast_r2.type === "error")("toast-warning", toast_r2.type === "warning")("toast-info", toast_r2.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getIconClass(toast_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService;
  toasts = [];
  destroy$ = new Subject();
  constructor(toastService) {
    this.toastService = toastService;
  }
  ngOnInit() {
    this.toastService.getToasts().pipe(takeUntil(this.destroy$)).subscribe((toasts) => {
      this.toasts = toasts;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  removeToast(id) {
    this.toastService.remove(id);
  }
  getIconClass(type) {
    switch (type) {
      case "success":
        return "bi-check-circle-fill";
      case "error":
        return "bi-x-circle-fill";
      case "warning":
        return "bi-exclamation-triangle-fill";
      case "info":
        return "bi-info-circle-fill";
      default:
        return "bi-info-circle-fill";
    }
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "toast-container"], ["class", "toast", 3, "toast-success", "toast-error", "toast-warning", "toast-info", 4, "ngFor", "ngForOf"], [1, "toast"], [1, "toast-icon"], [1, "toast-message"], [1, "toast-close", 3, "click"], [1, "bi", "bi-x"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ToastComponent_div_1_Template, 7, 11, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.toasts);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  max-width: 400px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: var(--bg-primary);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  border-left: 4px solid;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  min-width: 300px;\n}\n.toast.toast-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success-color);\n  background:\n    linear-gradient(\n      to right,\n      #d1fae5 0%,\n      var(--bg-primary) 5%);\n}\n.toast.toast-error[_ngcontent-%COMP%] {\n  border-left-color: var(--error-color);\n  background:\n    linear-gradient(\n      to right,\n      #fee2e2 0%,\n      var(--bg-primary) 5%);\n}\n.toast.toast-warning[_ngcontent-%COMP%] {\n  border-left-color: var(--warning-color);\n  background:\n    linear-gradient(\n      to right,\n      #fef3c7 0%,\n      var(--bg-primary) 5%);\n}\n.toast.toast-info[_ngcontent-%COMP%] {\n  border-left-color: var(--info-color);\n  background:\n    linear-gradient(\n      to right,\n      #dbeafe 0%,\n      var(--bg-primary) 5%);\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.toast-success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--success-color);\n}\n.toast-error[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.toast-warning[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--warning-color);\n}\n.toast-info[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--info-color);\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-tertiary);\n  cursor: pointer;\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  background: var(--bg-secondary);\n  color: var(--text-primary);\n}\n.toast-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 768px) {\n  .toast-container[_ngcontent-%COMP%] {\n    left: 20px;\n    right: 20px;\n    max-width: none;\n  }\n  .toast[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src\\app\\shared\\components\\toast\\toast.component.ts", lineNumber: 20 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "SchoolPlus Management System";
  ngOnInit() {
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-toast")(1, "router-outlet");
    }
  }, dependencies: [RouterOutlet, CommonModule, ToastComponent], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 13 });
})();

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static {
    this.\u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationDriver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoopAnimationDriver,
      factory: _NoopAnimationDriver.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static {
    this.NOOP = new NoopAnimationDriver();
  }
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = /* @__PURE__ */ new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = /* @__PURE__ */ new Map();
    this._currentKeyframe = /* @__PURE__ */ new Map();
    this._keyframes = /* @__PURE__ */ new Map();
    this._styleSummary = /* @__PURE__ */ new Map();
    this._localTimelineStyles = /* @__PURE__ */ new Map();
    this._pendingStyles = /* @__PURE__ */ new Map();
    this._backFill = /* @__PURE__ */ new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = /* @__PURE__ */ new Map();
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = /* @__PURE__ */ new Map();
    this._playersById = /* @__PURE__ */ new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = /* @__PURE__ */ new Map();
    this._queue = [];
    this._elementListeners = /* @__PURE__ */ new Map();
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.players = [];
    this.newHostElements = /* @__PURE__ */ new Map();
    this.playersByElement = /* @__PURE__ */ new Map();
    this.playersByQueriedElement = /* @__PURE__ */ new Map();
    this.statesByElement = /* @__PURE__ */ new Map();
    this.disabledNodes = /* @__PURE__ */ new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = /* @__PURE__ */ new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = (element, context) => {
    };
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {};
    this.onRemovalComplete = (element, context) => {
    };
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  static {
    this.initialStylesByElement = /* @__PURE__ */ new WeakMap();
  }
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = /* @__PURE__ */ new Map();
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
    this.\u0275type = 0;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// src/app/shared/auth/login/login.component.ts
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, LoginComponent_div_22_span_1_Template, 2, 0, "span", 19)(2, LoginComponent_div_22_span_2_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2, " Signing in... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  loginForm;
  isLoading = false;
  errorMessage = "";
  passwordVisible = false;
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["/app/dashboard"]);
    }
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    const { username, password } = this.loginForm.value;
    const deviceToken = v4_default();
    this.authService.signIn(username, password, deviceToken).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log("Login response:", response);
        if (response.status === "success") {
          console.log("Login successful, navigating to dashboard...");
          this.router.navigate(["/app/dashboard"]).then((success) => {
            console.log("Navigation successful:", success);
          }).catch((err) => {
            console.error("Navigation error:", err);
          });
        } else {
          this.errorMessage = response.message || "Login failed. Please try again.";
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || "An error occurred. Please try again.";
        console.error("Login error:", error);
      }
    });
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 17, consts: [[1, "login-container"], [1, "login-card"], [1, "login-header"], [1, "logo-container"], ["src", "assets/images/logo.png", "alt", "SchoolPlus", 1, "logo"], [1, "login-title"], [1, "login-subtitle"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter your username", "autocomplete", "username", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password", 1, "form-label"], [1, "password-input-wrapper"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 1, "form-control", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "bi"], ["class", "error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-login", 3, "disabled"], [4, "ngIf"], [1, "login-footer"], [1, "footer-text"], ["href", "#", 1, "forgot-password-link"], [1, "invalid-feedback"], [1, "error-message"], [1, "bi", "bi-exclamation-circle"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "SchoolPlus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "School Management System");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 10);
      \u0275\u0275template(14, LoginComponent_div_14_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "label", 12);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementStart(20, "button", 15);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, LoginComponent_div_22_Template, 3, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, LoginComponent_div_23_Template, 3, 1, "div", 17);
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275template(25, LoginComponent_span_25_Template, 2, 0, "span", 19)(26, LoginComponent_span_26_Template, 3, 0, "span", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 20)(28, "p", 21)(29, "a", 22);
      \u0275\u0275text(30, "Forgot Password?");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_8_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("username")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched));
      \u0275\u0275property("type", ctx.passwordVisible ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.passwordVisible ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-eye", !ctx.passwordVisible)("bi-eye-slash", ctx.passwordVisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.loginForm.get("password")) == null ? null : tmp_8_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading || ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color) 0%,\n      var(--secondary-color) 100%);\n  padding: var(--spacing-md);\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 450px;\n  padding: var(--spacing-2xl);\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--spacing-2xl);\n}\n.logo-container[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: contain;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  margin: 0;\n}\n.login-form[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-sm);\n  font-weight: 500;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  font-size: var(--font-size-base);\n  line-height: 1.5;\n  color: var(--text-primary);\n  background-color: var(--bg-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-tertiary);\n}\n.password-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-tertiary);\n  cursor: pointer;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.password-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n  color: var(--error-color);\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  border: 1px solid var(--error-color);\n  color: var(--error-color);\n  padding: var(--spacing-md);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-lg);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.btn-login[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem;\n  font-size: var(--font-size-base);\n  font-weight: 600;\n  margin-top: var(--spacing-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n.btn-login[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-login[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--spacing-xl);\n}\n.footer-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n}\n.forgot-password-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-password-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n  .login-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\shared\\auth\\login\\login.component.ts", lineNumber: 15 });
})();

// src/app/shared/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http;
  constructor(http) {
    this.http = http;
  }
  getStatistics() {
    return this.http.get(`${environment.apiUrl}/dashboard/statistics.php`);
  }
  getRecentActivities() {
    return this.http.get(`${environment.apiUrl}/dashboard/recent-activities.php`);
  }
  getAttendanceChart() {
    return this.http.get(`${environment.apiUrl}/dashboard/attendance-chart.php`);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};

// src/app/pages/dashboard/dashboard.component.ts
var _c0 = ["attendanceChartRef"];
var _c1 = ["enrollmentChartRef"];
var _c2 = ["feeChartRef"];
function DashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h1", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15)(8, "button", 16);
    \u0275\u0275element(9, "i", 17);
    \u0275\u0275text(10, " Export Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275element(12, "i", 19);
    \u0275\u0275text(13, " View Reports ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.welcomeMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 2, ctx_r0.currentDate, "EEEE, MMMM d, y"));
  }
}
function DashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "h3", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8, "Total Students");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 27)(10, "div", 22);
    \u0275\u0275element(11, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 24)(13, "h3", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 26);
    \u0275\u0275text(16, "Total Teachers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 29)(18, "div", 22);
    \u0275\u0275element(19, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 24)(21, "h3", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 26);
    \u0275\u0275text(24, "Total Classes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 31)(26, "div", 22);
    \u0275\u0275element(27, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 24)(29, "h3", 25);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 26);
    \u0275\u0275text(32, "Today's Attendance");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 33)(34, "div", 22);
    \u0275\u0275element(35, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24)(37, "h3", 25);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 26);
    \u0275\u0275text(40, "Pending Fees");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 35)(42, "div", 22);
    \u0275\u0275element(43, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 24)(45, "h3", 25);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 26);
    \u0275\u0275text(48, "Active Notices");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.statistics.totalStudents || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.statistics.totalTeachers || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.statistics.totalClasses || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.todayAttendancePercent, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.statistics.pendingFees || 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.statistics.active_notices || 0);
  }
}
function DashboardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39)(3, "h3", 40);
    \u0275\u0275text(4, "Attendance Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 41);
    \u0275\u0275text(6, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275element(8, "canvas", null, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "div", 39)(12, "h3", 40);
    \u0275\u0275text(13, "Enrollment by Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 43);
    \u0275\u0275text(15, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 42);
    \u0275\u0275element(17, "canvas", null, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 38)(20, "div", 39)(21, "h3", 40);
    \u0275\u0275text(22, "Fee Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 44);
    \u0275\u0275text(24, "View");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 45);
    \u0275\u0275element(26, "canvas", null, 2);
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_div_4_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r2.route);
    \u0275\u0275attribute("data-color", link_r2.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", link_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r2.title);
  }
}
function DashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "h2", 47);
    \u0275\u0275text(2, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275template(4, DashboardComponent_div_4_a_4_Template, 4, 4, "a", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.quickLinks);
  }
}
function DashboardComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "dateFormat");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bi " + ctx_r0.getActivityIcon(activity_r3.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 4, activity_r3.time, "datetime"));
  }
}
function DashboardComponent_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2, "No recent activities");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_5_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "span", 70);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "dateFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71)(6, "h4", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 3, event_r4.date, "short"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.description);
  }
}
function DashboardComponent_div_5_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2, "No upcoming events");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 39)(3, "h3", 40);
    \u0275\u0275text(4, "Recent Activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 54);
    \u0275\u0275text(6, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56);
    \u0275\u0275template(9, DashboardComponent_div_5_div_9_Template, 9, 7, "div", 57)(10, DashboardComponent_div_5_div_10_Template, 3, 0, "div", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 53)(12, "div", 39)(13, "h3", 40);
    \u0275\u0275text(14, "Upcoming Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 59);
    \u0275\u0275text(16, "View All");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 55)(18, "div", 60);
    \u0275\u0275template(19, DashboardComponent_div_5_div_19_Template, 10, 6, "div", 61)(20, DashboardComponent_div_5_div_20_Template, 3, 0, "div", 58);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.recentActivities);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentActivities.length === 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.upcomingEvents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.upcomingEvents.length === 0);
  }
}
function DashboardComponent_div_6_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notice_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r5.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", notice_r5.summary, " ");
  }
}
function DashboardComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, DashboardComponent_div_6_div_7_div_1_Template, 4, 2, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.recentNotices);
  }
}
function DashboardComponent_div_6_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 83);
    \u0275\u0275text(3, "View notices");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.statistics.active_notices, " active notice(s). ");
  }
}
function DashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    \u0275\u0275element(2, "i", 36);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Important Notices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 76);
    \u0275\u0275text(6, "View all");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DashboardComponent_div_6_div_7_Template, 2, 1, "div", 77)(8, DashboardComponent_div_6_p_8_Template, 4, 1, "p", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.recentNotices.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recentNotices.length === 0 && ctx_r0.statistics.active_notices > 0);
  }
}
function DashboardComponent_app_loading_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 84);
  }
}
var DashboardComponent = class _DashboardComponent {
  authService;
  dashboardService;
  attendanceChartRef;
  enrollmentChartRef;
  feeChartRef;
  currentUser = null;
  statistics = {
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
    totalSubjects: 0,
    todayAttendance: 0,
    pendingFees: 0,
    active_notices: 0
  };
  isLoading = true;
  recentActivities = [];
  upcomingEvents = [];
  recentNotices = [];
  attendanceChart = null;
  enrollmentChart = null;
  feeChart = null;
  welcomeMessage = "";
  currentDate = /* @__PURE__ */ new Date();
  quickLinks = [
    { title: "Students", route: "/app/students/list", icon: "bi-people", color: "primary" },
    { title: "Teachers", route: "/app/teachers/list", icon: "bi-person-badge", color: "success" },
    { title: "Attendance", route: "/app/attendance", icon: "bi-calendar-check", color: "info" },
    { title: "Fees", route: "/app/fees", icon: "bi-cash-stack", color: "warning" },
    { title: "Examinations", route: "/app/examinations", icon: "bi-journal-text", color: "secondary" },
    { title: "Notices", route: "/app/notices", icon: "bi-megaphone", color: "danger" },
    { title: "Admissions", route: "/app/admissions", icon: "bi-person-plus", color: "primary" },
    { title: "Timetable", route: "/app/timetable", icon: "bi-calendar-week", color: "info" },
    { title: "Reports", route: "/app/reports", icon: "bi-graph-up", color: "success" },
    { title: "Library", route: "/app/library", icon: "bi-book", color: "secondary" },
    { title: "Events", route: "/app/events", icon: "bi-calendar-event", color: "warning" },
    { title: "Homework", route: "/app/homework", icon: "bi-journal-bookmark", color: "primary" }
  ];
  constructor(authService, dashboardService) {
    this.authService = authService;
    this.dashboardService = dashboardService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.setWelcomeMessage();
    this.loadDashboardData();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.attendanceChart?.destroy();
    this.enrollmentChart?.destroy();
    this.feeChart?.destroy();
  }
  setWelcomeMessage() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    const name = this.currentUser?.first_name || "Admin";
    if (hour < 12)
      this.welcomeMessage = `Good morning, ${name}`;
    else if (hour < 17)
      this.welcomeMessage = `Good afternoon, ${name}`;
    else
      this.welcomeMessage = `Good evening, ${name}`;
  }
  loadDashboardData() {
    this.isLoading = true;
    this.dashboardService.getStatistics().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          const d = response.data;
          this.statistics = {
            totalStudents: d.totalStudents ?? d.total_students ?? 0,
            totalTeachers: d.totalTeachers ?? d.total_teachers ?? 0,
            totalClasses: d.totalClasses ?? d.total_classes ?? 0,
            totalSubjects: d.totalSubjects ?? d.total_subjects ?? 0,
            todayAttendance: d.todayAttendance ?? d.today_attendance ?? 0,
            pendingFees: d.pendingFees ?? d.pending_fees ?? 0,
            active_notices: d.active_notices ?? d.activeNotices ?? 0
          };
          this.recentActivities = d.recent_activities || d.recentActivities || [];
          this.upcomingEvents = d.upcoming_events || d.upcomingEvents || [];
          this.recentNotices = d.recent_notices || d.recentNotices || [];
        }
        this.addSampleDataIfEmpty();
        this.isLoading = false;
        setTimeout(() => this.buildCharts(), 100);
      },
      error: () => {
        this.addSampleDataIfEmpty();
        this.isLoading = false;
        setTimeout(() => this.buildCharts(), 100);
      }
    });
  }
  addSampleDataIfEmpty() {
    if (this.recentActivities.length === 0) {
      this.recentActivities = [
        { type: "student_created", description: "New student enrolled in Class 5", time: (/* @__PURE__ */ new Date()).toISOString() },
        { type: "attendance_marked", description: "Daily attendance marked for all classes", time: (/* @__PURE__ */ new Date()).toISOString() },
        { type: "fee_paid", description: "Fee payment received - Receipt #1024", time: (/* @__PURE__ */ new Date()).toISOString() },
        { type: "notice_created", description: "New notice: Parent-Teacher meeting scheduled", time: (/* @__PURE__ */ new Date()).toISOString() }
      ];
    }
    if (this.upcomingEvents.length === 0) {
      const d = /* @__PURE__ */ new Date();
      this.upcomingEvents = [
        { title: "Annual Day", description: "School annual day celebration", date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 5).toISOString() },
        { title: "Parent-Teacher Meeting", description: "PTM for all classes", date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 3).toISOString() },
        { title: "Science Exhibition", description: "Inter-class science exhibition", date: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 10).toISOString() }
      ];
    }
    if (this.recentNotices.length === 0 && (this.statistics.active_notices || 0) > 0) {
      this.recentNotices = [
        { title: "Holiday Notice", summary: "School will remain closed on...", created_at: (/* @__PURE__ */ new Date()).toISOString() },
        { title: "Fee Due Date", summary: "Last date for fee submission...", created_at: (/* @__PURE__ */ new Date()).toISOString() }
      ];
    }
  }
  get todayAttendancePercent() {
    const total = this.statistics.totalStudents || 0;
    const present = this.statistics.todayAttendance || 0;
    return total ? Math.round(present / total * 100) : 0;
  }
  buildCharts() {
    this.buildAttendanceChart();
    this.buildEnrollmentChart();
    this.buildFeeChart();
  }
  buildAttendanceChart() {
    if (!this.attendanceChartRef?.nativeElement)
      return;
    this.attendanceChart?.destroy();
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const total = this.statistics.totalStudents || 100;
    const data = labels.map(() => Math.round(total * (0.85 + Math.random() * 0.12)));
    this.attendanceChart = new auto_default(this.attendanceChartRef.nativeElement, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Present",
          data,
          borderColor: "rgb(37, 99, 235)",
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: total }
        }
      }
    });
  }
  buildEnrollmentChart() {
    if (!this.enrollmentChartRef?.nativeElement)
      return;
    this.enrollmentChart?.destroy();
    const total = this.statistics.totalStudents || 200;
    const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8"];
    const data = classes.map((_, i) => Math.round(total / 8 * (0.7 + 0.6 * Math.random())));
    this.enrollmentChart = new auto_default(this.enrollmentChartRef.nativeElement, {
      type: "bar",
      data: {
        labels: classes,
        datasets: [{
          label: "Students",
          data,
          backgroundColor: "rgba(37, 99, 235, 0.7)",
          borderColor: "rgb(37, 99, 235)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  buildFeeChart() {
    if (!this.feeChartRef?.nativeElement)
      return;
    this.feeChart?.destroy();
    const collected = (this.statistics.totalStudents || 0) * 10 - (this.statistics.pendingFees || 0) * 5;
    const pending = (this.statistics.pendingFees || 0) * 5;
    this.feeChart = new auto_default(this.feeChartRef.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Collected", "Pending"],
        datasets: [{
          data: [Math.max(0, collected), Math.max(0, pending)],
          backgroundColor: ["rgba(16, 185, 129, 0.8)", "rgba(239, 68, 68, 0.8)"],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } }
      }
    });
  }
  getActivityIcon(type) {
    const icons = {
      "student_created": "bi-person-plus",
      "teacher_created": "bi-person-badge",
      "attendance_marked": "bi-calendar-check",
      "fee_paid": "bi-cash",
      "notice_created": "bi-megaphone",
      "exam_created": "bi-journal-text"
    };
    return icons[type] || "bi-circle";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DashboardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.attendanceChartRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.enrollmentChartRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.feeChartRef = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 7, consts: [["attendanceChartRef", ""], ["enrollmentChartRef", ""], ["feeChartRef", ""], [1, "dashboard-container"], ["class", "dashboard-welcome", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf"], ["class", "charts-row", 4, "ngIf"], ["class", "dashboard-section", 4, "ngIf"], ["class", "dashboard-grid", 4, "ngIf"], ["class", "notices-strip", 4, "ngIf"], ["message", "Loading dashboard...", 4, "ngIf"], [1, "dashboard-welcome"], [1, "welcome-content"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "welcome-actions"], [1, "btn", "btn-outline", "btn-sm"], [1, "bi", "bi-download"], ["routerLink", "/app/reports", 1, "btn", "btn-primary", "btn-sm"], [1, "bi", "bi-graph-up"], [1, "stats-grid"], ["routerLink", "/app/students/list", 1, "stat-card", "stat-card-primary"], [1, "stat-icon"], [1, "bi", "bi-people"], [1, "stat-content"], [1, "stat-value"], [1, "stat-label"], ["routerLink", "/app/teachers/list", 1, "stat-card", "stat-card-success"], [1, "bi", "bi-person-badge"], ["routerLink", "/app/classes/list", 1, "stat-card", "stat-card-info"], [1, "bi", "bi-journal-text"], ["routerLink", "/app/attendance", 1, "stat-card", "stat-card-warning"], [1, "bi", "bi-calendar-check"], ["routerLink", "/app/fees", 1, "stat-card", "stat-card-danger"], [1, "bi", "bi-exclamation-circle"], ["routerLink", "/app/notices", 1, "stat-card", "stat-card-secondary"], [1, "bi", "bi-megaphone"], [1, "charts-row"], [1, "dashboard-card", "chart-card"], [1, "card-header"], [1, "card-title"], ["routerLink", "/app/attendance", 1, "card-link"], [1, "chart-container"], ["routerLink", "/app/students/list", 1, "card-link"], ["routerLink", "/app/fees", 1, "card-link"], [1, "chart-container", "chart-container-sm"], [1, "dashboard-section"], [1, "section-title"], [1, "quick-actions-grid"], ["class", "quick-action-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "quick-action-card", 3, "routerLink"], [1, "bi", 3, "ngClass"], [1, "dashboard-grid"], [1, "dashboard-card"], ["routerLink", "/app/activity", 1, "card-link"], [1, "card-content"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["routerLink", "/app/events", 1, "card-link"], [1, "event-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-content"], [1, "activity-text"], [1, "activity-time"], [1, "empty-state"], [1, "event-item"], [1, "event-date"], [1, "event-day"], [1, "event-content"], [1, "event-title"], [1, "event-description"], [1, "notices-strip"], [1, "notices-strip-header"], ["routerLink", "/app/notices", 1, "card-link"], ["class", "notices-strip-content", 4, "ngIf"], ["class", "notices-count", 4, "ngIf"], [1, "notices-strip-content"], ["class", "notice-item", 4, "ngFor", "ngForOf"], [1, "notice-item"], [1, "notices-count"], ["routerLink", "/app/notices"], ["message", "Loading dashboard..."]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3);
      \u0275\u0275template(1, DashboardComponent_div_1_Template, 14, 5, "div", 4)(2, DashboardComponent_div_2_Template, 49, 6, "div", 5)(3, DashboardComponent_div_3_Template, 28, 0, "div", 6)(4, DashboardComponent_div_4_Template, 5, 1, "div", 7)(5, DashboardComponent_div_5_Template, 21, 4, "div", 8)(6, DashboardComponent_div_6_Template, 9, 2, "div", 9)(7, DashboardComponent_app_loading_7_Template, 1, 0, "app-loading", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && (ctx.recentNotices.length > 0 || ctx.statistics.active_notices > 0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterModule, RouterLink, LoadingComponent, DateFormatPipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-dark: #1e40af;\n  --primary-light: #3b82f6;\n  --primary-lighter: #dbeafe;\n  --primary-gradient:\n    linear-gradient(\n      135deg,\n      #2563eb 0%,\n      #1e40af 100%);\n  --primary-gradient-light:\n    linear-gradient(\n      135deg,\n      #3b82f6 0%,\n      #2563eb 100%);\n  --secondary-color: #0d9488;\n  --secondary-dark: #0f766e;\n  --secondary-light: #14b8a6;\n  --secondary-lighter: #ccfbf1;\n  --secondary-gradient:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #0f766e 100%);\n  --accent-color: #f59e0b;\n  --accent-dark: #d97706;\n  --accent-light: #fbbf24;\n  --accent-lighter: #fef3c7;\n  --accent-gradient:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n  --success-color: #10b981;\n  --success-lighter: #d1fae5;\n  --success-gradient:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  --error-color: #ef4444;\n  --error-lighter: #fee2e2;\n  --error-gradient:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  --warning-color: #f59e0b;\n  --warning-lighter: #fef3c7;\n  --info-color: #3b82f6;\n  --info-lighter: #dbeafe;\n  --text-primary: #1f2937;\n  --text-secondary: #000000;\n  --text-tertiary: #9ca3af;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --bg-gradient:\n    linear-gradient(\n      135deg,\n      #f9fafb 0%,\n      #ffffff 100%);\n  --border-color: #e5e7eb;\n  --border-gradient:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  --spacing-xs: 0.2rem;\n  --spacing-sm: 0.4rem;\n  --spacing-md: 0.75rem;\n  --spacing-lg: 1rem;\n  --spacing-xl: 1.25rem;\n  --spacing-2xl: 1.75rem;\n  --font-family:\n    "Plus Jakarta Sans",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  --font-size-xs: 0.6875rem;\n  --font-size-sm: 0.8125rem;\n  --font-size-base: 0.875rem;\n  --font-size-lg: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-2xl: 1.25rem;\n  --font-size-3xl: 1.5rem;\n  --radius-sm: 0.375rem;\n  --radius-md: 0.75rem;\n  --radius-lg: 1rem;\n  --radius-xl: 1.25rem;\n  --radius-full: 9999px;\n  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-md:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-lg:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-xl:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 1px rgba(0, 0, 0, 0.05);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-colored: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2);\n  --shadow-colored-lg: 0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 10px 10px -5px rgba(37, 99, 235, 0.2);\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-bounce: 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  --transition-smooth: 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --transform-hover: translateY(-2px) scale(1.02);\n  --transform-active: translateY(0) scale(0.98);\n  --transform-3d: perspective(1000px) rotateX(2deg);\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-family);\n  font-size: var(--font-size-base);\n  line-height: 1.6;\n  color: var(--text-primary);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transition: background var(--transition-slow);\n  position: relative;\n}\nbody[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%], \nh6[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 1.2;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  transition: color var(--transition-base);\n}\nh1.gradient-text[_ngcontent-%COMP%], \nh2.gradient-text[_ngcontent-%COMP%], \nh3.gradient-text[_ngcontent-%COMP%], \nh4.gradient-text[_ngcontent-%COMP%], \nh5.gradient-text[_ngcontent-%COMP%], \nh6.gradient-text[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) var(--spacing-lg);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-md);\n  transform: translateY(0);\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  box-shadow: var(--shadow-colored);\n}\n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-colored-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n  box-shadow: var(--shadow-md);\n  color: #fff !important;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--secondary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  border: 2px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(10px);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--bg-secondary);\n  border-color: var(--primary-color);\n  color: var(--primary-color);\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-md);\n}\n.btn.btn-outline[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: var(--transform-active);\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) var(--spacing-md);\n  font-size: var(--font-size-xs);\n  box-shadow: var(--shadow-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) var(--spacing-xl);\n  font-size: var(--font-size-base);\n  box-shadow: var(--shadow-lg);\n}\n.btn.btn-lg[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-3px) scale(1.02);\n}\na.btn.btn-primary[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\na.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \na.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \nbutton.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%], \n.btn.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  transition: all var(--transition-base);\n  background: var(--bg-secondary);\n  color: var(--text-secondary);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.btn-icon[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-edit[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:hover {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-delete[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:hover {\n  background: var(--info-color);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px) scale(1.05);\n}\n.btn-icon.btn-view[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.35rem 0.6rem;\n  min-height: 2rem;\n  font-size: var(--font-size-base);\n  line-height: 1.4;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-sm);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  transition: all var(--transition-base);\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);\n  border-width: 1px;\n}\n.form-control[_ngcontent-%COMP%]:hover:not(:disabled):not(:focus) {\n  border-color: rgba(37, 99, 235, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);\n}\nselect.form-control[_ngcontent-%COMP%], \n.page-size-select[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.35rem 0.6rem;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  letter-spacing: 0.01em;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  font-size: var(--font-size-xs);\n  font-weight: 700;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.3),\n      transparent);\n  transition: left var(--transition-base);\n}\n.badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.badge[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.badge.badge-success[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);\n}\n.badge.badge-error[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.badge.badge-warning[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.3);\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.3);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.35rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.35);\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 1;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-dropdowns[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%], \n.page-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 140px;\n  max-width: 180px;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  margin-top: var(--spacing-lg);\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-2xl);\n}\n.form-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.form-section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]    > .form-row[_ngcontent-%COMP%]:first-of-type, \n.form-section[_ngcontent-%COMP%]    > .form-grid[_ngcontent-%COMP%]:first-of-type {\n  padding: var(--spacing-xl);\n}\n.form-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.08) 0%,\n      rgba(37, 99, 235, 0.03) 100%);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .section-header-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  color: white;\n  border-radius: var(--radius-md);\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.25);\n}\n.form-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.form-section[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-lg);\n}\n.form-section[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.form-section[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-section[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  font-size: var(--font-size-sm);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n}\n.form-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  margin-top: var(--spacing-xs);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-2xl);\n  padding-top: var(--spacing-xl);\n  border-top: 1px solid var(--border-color);\n}\n.split-form-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-top: var(--spacing-lg);\n}\n.split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  min-width: 0;\n  gap: 0;\n}\n.split-form-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 260px;\n  min-width: 260px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  border-right: 1px solid var(--border-color);\n  padding: var(--spacing-lg) var(--spacing-md);\n  gap: var(--spacing-xs);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.split-form-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: 0.625rem 1rem;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: var(--radius-md);\n  text-align: left;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-fast);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.split-form-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 24px;\n  opacity: 0.9;\n}\n.split-form-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.split-form-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.split-form-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n  opacity: 1;\n}\n.split-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.split-form-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  border-bottom: 1px solid var(--border-color);\n  background: var(--bg-primary);\n  gap: var(--spacing-lg);\n}\n.split-form-panel-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-2xl);\n  overflow-y: auto;\n  min-height: 280px;\n}\n.split-form-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.split-form-section.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.split-form-section-body[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.split-form-section-body[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: var(--spacing-xl);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-sm);\n  font-size: var(--font-size-sm);\n  display: block;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-fast);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  min-height: 2.5rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px var(--primary-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled {\n  background: var(--bg-secondary);\n  cursor: not-allowed;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--error-color);\n  box-shadow: 0 0 0 2px var(--error-lighter);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  padding: 0.75rem 0.875rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--error-color);\n  font-size: var(--font-size-xs);\n  margin-top: var(--spacing-xs);\n  display: block;\n  min-height: 1.25rem;\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: var(--spacing-lg) 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-xs);\n  border-bottom: 1px solid var(--border-color);\n}\n.split-form-panel-content[_ngcontent-%COMP%]   .subsection-title[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.split-form-content[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  padding: 0.625rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.split-form-content[_ngcontent-%COMP%]   .spinner-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@media (max-width: 1024px) {\n  .split-form-content[_ngcontent-%COMP%], \n   .split-form-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .split-form-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: var(--spacing-md);\n    gap: var(--spacing-sm);\n  }\n  .split-form-panel-header[_ngcontent-%COMP%], \n   .split-form-panel-content[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-xl);\n    padding-right: var(--spacing-xl);\n  }\n}\n@media (max-width: 768px) {\n  .split-form-panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .split-form-panel-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 2px 0;\n  color: var(--primary-color);\n  letter-spacing: -0.02em;\n  line-height: 1.25;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: var(--transform-hover);\n  box-shadow: var(--shadow-xl);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.card[_ngcontent-%COMP%]:active {\n  transform: var(--transform-active);\n}\n@media (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-xl);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  position: relative;\n  overflow: hidden;\n}\n.form-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n}\n.filter-panel[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  min-height: 0;\n  transition: max-height 0.25s ease;\n}\n.filter-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  border-width: 0 !important;\n}\n.filter-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  padding: 0;\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  max-height: 0;\n  min-height: 0;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.filters-panel[_ngcontent-%COMP%]:not(.expanded) {\n  padding: 0 !important;\n  margin: 0 !important;\n  margin-bottom: 0 !important;\n  border-width: 0 !important;\n}\n.filters-panel.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: var(--spacing-xl);\n}\n.filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .filters-panel[_ngcontent-%COMP%]   .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  flex: 1;\n  min-width: 180px;\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 2px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  font-size: var(--font-size-base);\n  transition: all var(--transition-base);\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.filters-panel[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n}\n[class$=-list-container][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  text-align: left;\n  font-weight: 600;\n  font-size: var(--font-size-xs);\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: none;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.22rem 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background var(--transition-fast);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--bg-primary);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(37, 99, 235, 0.04);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.08) !important;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg);\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(37, 99, 235, 0.1);\n  border-top-color: var(--primary-color);\n  border-right-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);\n  position: relative;\n}\n.spinner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(37, 99, 235, 0.2);\n  border-top-color: var(--primary-light);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.animate-fade-in-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.animate-slide-in-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInRight var(--transition-base) ease-out;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl);\n  gap: var(--spacing-lg);\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: var(--font-size-base);\n  font-weight: 500;\n  margin-top: var(--spacing-md);\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--text-tertiary);\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInUp var(--transition-slow) ease-out;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  opacity: 0.6;\n  display: inline-block;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  transition: all var(--transition-base);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n.empty-state[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(5deg);\n  opacity: 0.8;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-lg);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 var(--spacing-sm) 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n@media (max-width: 1200px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--spacing-md);\n    margin-bottom: var(--spacing-lg);\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-xs);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n    border-radius: var(--radius-md);\n  }\n  .data-table[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    display: block;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    padding: var(--spacing-sm);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    text-align: right;\n    padding: var(--spacing-xs) var(--spacing-sm);\n    border: none;\n    border-bottom: 1px solid var(--bg-secondary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    float: left;\n    font-weight: 600;\n    color: var(--text-primary);\n  }\n  .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: var(--spacing-md) !important;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: var(--spacing-sm);\n  }\n  .btn[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xs);\n    padding: var(--spacing-xs) var(--spacing-sm);\n  }\n}\n@media print {\n  .no-print[_ngcontent-%COMP%], \n   .sub-nav-3d[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n  body[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #000 !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm 15mm;\n  }\n  .print-document[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    padding: 0 !important;\n    background: #fff !important;\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .print-header[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 2px solid #1f2937;\n    padding-bottom: 8px;\n    margin-bottom: 12px;\n  }\n  .print-title[_ngcontent-%COMP%] {\n    font-size: 18pt;\n    font-weight: 700;\n    margin: 0 0 2px 0;\n    color: #1f2937;\n  }\n  .print-subtitle[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    color: #4b5563;\n    margin: 0;\n  }\n  .print-section[_ngcontent-%COMP%] {\n    margin-bottom: 12pt;\n    break-inside: avoid;\n  }\n  .print-section-title[_ngcontent-%COMP%] {\n    font-size: 11pt;\n    font-weight: 700;\n    color: #1f2937;\n    margin: 0 0 6px 0;\n    padding-bottom: 4px;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  .print-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10pt;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .print-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #d1d5db;\n    padding: 6px 8px;\n    text-align: left;\n  }\n  .print-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f3f4f6 !important;\n    font-weight: 600;\n  }\n  .print-footer[_ngcontent-%COMP%] {\n    margin-top: 14pt;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n    font-size: 9pt;\n    color: #6b7280;\n    text-align: center;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  width: 100% !important;\n  height: 100% !important;\n  pointer-events: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-backdrop[_ngcontent-%COMP%], \n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  min-height: 100%;\n  padding: 1rem;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]   .cdk-overlay-pane[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: auto;\n}\n.app-confirm-dialog-overlay[_ngcontent-%COMP%] {\n  z-index: 10001 !important;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n}\n.dashboard-welcome[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg) var(--spacing-xl);\n  margin-bottom: var(--spacing-xl);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6);\n  border: 1px solid rgba(37, 99, 235, 0.15);\n}\n.dashboard-welcome[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  color: var(--primary-color);\n  margin: 0 0 2px 0;\n}\n.dashboard-welcome[_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.dashboard-welcome[_ngcontent-%COMP%]   .welcome-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n}\n@media (max-width: 1400px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-sm);\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  transition: all var(--transition-base);\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.stat-card.stat-card-primary[_ngcontent-%COMP%]::before {\n  background: var(--primary-gradient);\n}\n.stat-card.stat-card-success[_ngcontent-%COMP%]::before {\n  background: var(--success-gradient);\n}\n.stat-card.stat-card-info[_ngcontent-%COMP%]::before {\n  background: var(--primary-gradient);\n}\n.stat-card.stat-card-warning[_ngcontent-%COMP%]::before {\n  background: var(--accent-gradient);\n}\n.stat-card.stat-card-danger[_ngcontent-%COMP%]::before {\n  background: var(--error-gradient);\n}\n.stat-card.stat-card-secondary[_ngcontent-%COMP%]::before {\n  background: var(--secondary-gradient);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  flex-shrink: 0;\n  color: white;\n}\n.stat-card-primary[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n}\n.stat-card-success[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--success-gradient);\n}\n.stat-card-info[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  opacity: 0.9;\n}\n.stat-card-warning[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--accent-gradient);\n}\n.stat-card-danger[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--error-gradient);\n}\n.stat-card-secondary[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: var(--secondary-gradient);\n}\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px 0;\n  line-height: 1.2;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n@media (max-width: 1200px) {\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .charts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chart-card[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%] {\n  height: 220px;\n  padding: var(--spacing-md);\n  position: relative;\n}\n.chart-card[_ngcontent-%COMP%]   .chart-container.chart-container-sm[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.dashboard-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 var(--spacing-md) 0;\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 2px solid rgba(37, 99, 235, 0.15);\n}\n.quick-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: var(--spacing-md);\n}\n@media (max-width: 1200px) {\n  .quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .quick-actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.quick-action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-lg);\n  background: var(--bg-primary);\n  border-radius: var(--radius-md);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  text-decoration: none;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-base);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.quick-action-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary-color);\n  transition: transform var(--transition-base);\n}\n.quick-action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.quick-action-card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n}\n.quick-action-card[data-color=primary][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.quick-action-card[data-color=success][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--success-color);\n}\n.quick-action-card[data-color=info][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--info-color);\n}\n.quick-action-card[data-color=warning][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--warning-color);\n}\n.quick-action-card[data-color=danger][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.quick-action-card[data-color=secondary][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(37, 99, 235, 0.08);\n  overflow: hidden;\n  transition: all var(--transition-base);\n}\n.dashboard-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-bottom: 1px solid rgba(37, 99, 235, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.04) 0%,\n      transparent 100%);\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-base);\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.card-link[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--primary-color);\n  text-decoration: none;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  max-height: 280px;\n  overflow-y: auto;\n}\n.activity-list[_ngcontent-%COMP%], \n.event-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.activity-item[_ngcontent-%COMP%], \n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-sm);\n  transition: background var(--transition-fast);\n}\n.activity-item[_ngcontent-%COMP%]:hover, \n.event-item[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.05);\n}\n.activity-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--radius-full);\n  background: var(--primary-gradient);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n}\n.activity-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.activity-text[_ngcontent-%COMP%] {\n  margin: 0 0 2px 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-primary);\n}\n.activity-time[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n}\n.event-date[_ngcontent-%COMP%] {\n  width: 48px;\n  flex-shrink: 0;\n  text-align: center;\n}\n.event-day[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.event-title[_ngcontent-%COMP%] {\n  margin: 0 0 2px 0;\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.event-description[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-xs);\n  color: var(--text-secondary);\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n@media (max-width: 768px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.notices-strip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(245, 158, 11, 0.08) 0%,\n      rgba(245, 158, 11, 0.03) 100%);\n  border-radius: var(--radius-md);\n  padding: var(--spacing-md) var(--spacing-lg);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n}\n.notices-strip-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin-bottom: var(--spacing-sm);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.notices-strip-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  font-size: 1.1rem;\n}\n.notices-strip-header[_ngcontent-%COMP%]   .card-link[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.notices-strip-content[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n}\n.notice-item[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) 0;\n  border-bottom: 1px solid rgba(245, 158, 11, 0.1);\n}\n.notice-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notices-count[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--font-size-sm);\n  color: var(--text-secondary);\n}\n.notices-count[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-xl);\n  color: var(--text-tertiary);\n  font-size: var(--font-size-sm);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 17 });
})();

// src/app/shared/guards/auth.guard.ts
var AuthGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
  return false;
};

// src/app/layouts/full/full.component.ts
function FullComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function FullComponent_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isSidebarOpen = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isSidebarOpen);
  }
}
function FullComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function FullComponent_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4, "SchoolPlus");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 26);
    \u0275\u0275elementEnd();
  }
}
function FullComponent_h2_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 27);
    \u0275\u0275text(1, "SchoolPlus");
    \u0275\u0275elementEnd();
  }
}
function FullComponent_li_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.menu_name);
  }
}
function FullComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 28);
    \u0275\u0275listener("click", function FullComponent_li_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isMobileView() && (ctx_r1.isSidebarOpen = false));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275template(3, FullComponent_li_12_span_3_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.isNavItemActive(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.getNavRoute(item_r5))("title", item_r5.menu_name);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + item_r5.menu_icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSidebarOpen || ctx_r1.isMobileView());
  }
}
function FullComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275element(2, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.currentUser.first_name, " ", ctx_r1.currentUser.last_name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentUser.role_name || ctx_r1.currentUser.user_type);
  }
}
function FullComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Logout");
    \u0275\u0275elementEnd();
  }
}
function FullComponent_div_20_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275listener("click", function FullComponent_div_20_a_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMobileView() && (ctx_r1.isSidebarOpen = false));
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.isTabActive(tab_r7));
    \u0275\u0275property("routerLink", tab_r7.menu_route);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getTabIcon(tab_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r7.menu_name);
  }
}
function FullComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275template(2, FullComponent_div_20_a_2_Template, 4, 6, "a", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.currentGroupTabs);
  }
}
var FullComponent = class _FullComponent {
  authService;
  router;
  menuService;
  currentUser = null;
  isSidebarOpen = false;
  // Start closed on mobile
  currentRoute = "";
  menuItems = [];
  expandedMenuItems = {};
  // Fallback static menu items (used if dynamic menus fail)
  // Grouped structure without add/list submenus - main menus are direct links
  staticMenuItems = [
    {
      title: "Dashboard",
      icon: "bi-speedometer2",
      route: "/app/dashboard",
      roles: ["all"]
    },
    {
      title: "Masters",
      icon: "bi-database",
      route: null,
      roles: ["all"],
      children: [
        { title: "Academic Years", route: "/app/academic-years", icon: "bi-calendar-range" },
        { title: "Classes", route: "/app/classes", icon: "bi-journal-text" },
        { title: "Sections", route: "/app/sections", icon: "bi-layers" },
        { title: "Subjects", route: "/app/subjects", icon: "bi-book" },
        { title: "Departments", route: "/app/departments", icon: "bi-diagram-3" },
        { title: "Designations", route: "/app/designations", icon: "bi-award" },
        { title: "Periods", route: "/app/periods", icon: "bi-clock-history" },
        { title: "Fee Groups", route: "/app/fee-groups", icon: "bi-wallet2" },
        { title: "Fee Types", route: "/app/fee-types", icon: "bi-tag" },
        { title: "Exam Types", route: "/app/exam-types", icon: "bi-clipboard-check" },
        { title: "Attendance Types", route: "/app/attendance-types", icon: "bi-calendar-check" },
        { title: "Courses", route: "/app/courses/list", icon: "bi-mortarboard" }
      ]
    },
    {
      title: "Students",
      icon: "bi-people",
      route: null,
      roles: ["all"],
      children: [
        { title: "Students", route: "/app/students/list", icon: "bi-people" },
        { title: "Admission", route: "/app/admissions/list", icon: "bi-person-plus" },
        { title: "Enquiries", route: "/app/enquiries/list", icon: "bi-telephone-inbound" },
        { title: "RTE Students", route: "/app/rte-students/list", icon: "bi-heart" },
        { title: "Promotions", route: "/app/promotions/list", icon: "bi-arrow-up-circle" },
        { title: "Student Participation", route: "/app/student-participation/list", icon: "bi-trophy" }
      ]
    },
    {
      title: "Teachers",
      icon: "bi-person-badge",
      route: null,
      roles: ["all"],
      children: [
        { title: "Teachers", route: "/app/teachers/list", icon: "bi-person-badge" },
        { title: "Profile & Schedule", route: "/app/teacher-profile", icon: "bi-calendar-week" },
        { title: "Doubt Handling", route: "/app/doubt-handling/list", icon: "bi-question-circle" },
        { title: "Teaching Plan", route: "/app/teaching-plan/list", icon: "bi-journal-text" }
      ]
    },
    {
      title: "Attendance",
      icon: "bi-calendar-check",
      route: null,
      roles: ["all"],
      children: [
        { title: "Mark Attendance", route: "/app/attendance/mark", icon: "bi-pencil-square" },
        { title: "View Attendance", route: "/app/attendance/view", icon: "bi-calendar2-week" }
      ]
    },
    {
      title: "Academic",
      icon: "bi-journal-richtext",
      route: null,
      roles: ["all"],
      children: [
        { title: "Marksheets", route: "/app/marksheets/list", icon: "bi-file-earmark-spreadsheet" },
        { title: "Syllabus", route: "/app/syllabus/list", icon: "bi-journal-richtext" },
        { title: "Classwork", route: "/app/classwork/list", icon: "bi-journal-text" },
        { title: "Unit Test Marks", route: "/app/unit-test-marks/list", icon: "bi-clipboard-data" },
        { title: "Question Papers", route: "/app/question-papers/list", icon: "bi-file-earmark-text" },
        { title: "Study Progress", route: "/app/study-progress/list", icon: "bi-graph-up" },
        { title: "Remedial", route: "/app/remedial/list", icon: "bi-arrow-repeat" },
        { title: "Important Notes", route: "/app/important-notes/list", icon: "bi-sticky" },
        { title: "Digital Notes & Resources", route: "/app/digital-notes/list", icon: "bi-folder2-open" },
        { title: "Student Performance", route: "/app/student-performance", icon: "bi-bar-chart-line" }
      ]
    },
    {
      title: "Transactions",
      icon: "bi-arrow-repeat",
      route: null,
      roles: ["all"],
      children: [
        { title: "Examinations", route: "/app/examinations/list", icon: "bi-clipboard-check" },
        { title: "Library", route: "/app/library/list", icon: "bi-book-half" },
        { title: "Homework", route: "/app/homework", icon: "bi-journal-check" },
        { title: "Timetable", route: "/app/timetable/list", icon: "bi-calendar-week" },
        { title: "Academic Calendar", route: "/app/calendar/list", icon: "bi-calendar-event" },
        { title: "Events", route: "/app/events/list", icon: "bi-calendar-event" }
      ]
    },
    {
      title: "Communications",
      icon: "bi-chat-dots",
      route: null,
      roles: ["all"],
      children: [
        { title: "SMS", route: "/app/sms/list", icon: "bi-chat-text" },
        { title: "WhatsApp", route: "/app/whatsapp/list", icon: "bi-whatsapp" }
      ]
    },
    {
      title: "Administration",
      icon: "bi-clipboard-data",
      route: null,
      roles: ["all"],
      children: [
        { title: "Approvals", route: "/app/approvals", icon: "bi-check2-all" },
        { title: "Branch Management", route: "/app/branches/list", icon: "bi-building" },
        { title: "Leave Management", route: "/app/leave-management/list", icon: "bi-calendar-x" },
        { title: "CMS (Content)", route: "/app/cms/list", icon: "bi-file-text" },
        { title: "Support & Feedback", route: "/app/support-feedback/list", icon: "bi-headset" },
        { title: "Documents", route: "/app/documents/list", icon: "bi-folder2" },
        { title: "Visitors", route: "/app/visitors/list", icon: "bi-person-badge" },
        { title: "Complaints", route: "/app/complaints/list", icon: "bi-chat-left-dots" },
        { title: "Inward Requests", route: "/app/inward-requests/list", icon: "bi-inbox" }
      ]
    },
    {
      title: "Student Services",
      icon: "bi-bag-check",
      route: null,
      roles: ["all"],
      children: [
        { title: "Uniform Distribution", route: "/app/uniform-distribution/list", icon: "bi-box-seam" },
        { title: "Book Distribution", route: "/app/book-distribution/list", icon: "bi-book" },
        { title: "ID Cards", route: "/app/id-cards/list", icon: "bi-credit-card" },
        { title: "Uniform Fines", route: "/app/uniform-fines/list", icon: "bi-cash-stack" }
      ]
    },
    {
      title: "Mess & Facilities",
      icon: "bi-cup-straw",
      route: null,
      roles: ["all"],
      children: [
        { title: "Mess Schedules", route: "/app/mess-schedules/list", icon: "bi-calendar-week" },
        { title: "Mess Complaints", route: "/app/mess-complaints/list", icon: "bi-chat-dots" },
        { title: "Water TDS", route: "/app/water-tds/list", icon: "bi-droplet" },
        { title: "Food Calendar", route: "/app/food-calendar/list", icon: "bi-calendar3" }
      ]
    },
    {
      title: "Infrastructure",
      icon: "bi-building-gear",
      route: null,
      roles: ["all"],
      children: [
        { title: "CCTV", route: "/app/cctv/list", icon: "bi-camera-video" },
        { title: "Bus Documents", route: "/app/bus-documents/list", icon: "bi-bus-front" },
        { title: "Cleaning", route: "/app/cleaning/list", icon: "bi-brush" },
        { title: "Staff Allotment", route: "/app/staff-allotment/list", icon: "bi-person-lines-fill" },
        { title: "Lab", route: "/app/lab/list", icon: "bi-eyeglasses" }
      ]
    },
    {
      title: "Activities",
      icon: "bi-emoji-smile",
      route: null,
      roles: ["all"],
      children: [
        { title: "Birthday", route: "/app/birthday/list", icon: "bi-gift" },
        { title: "Charts", route: "/app/charts", icon: "bi-pie-chart" },
        { title: "Committees", route: "/app/committees/list", icon: "bi-people" },
        { title: "Sports & Events", route: "/app/sports/list", icon: "bi-trophy" }
      ]
    },
    {
      title: "Accounts",
      icon: "bi-wallet2",
      route: null,
      roles: ["all"],
      children: [
        { title: "Fees", route: "/app/fees/list", icon: "bi-currency-dollar" },
        { title: "Admission Tickets", route: "/app/fees/admission-tickets", icon: "bi-ticket-perforated" },
        { title: "Receipt Generation", route: "/app/fees/receipts", icon: "bi-receipt" },
        { title: "Fee Defaulters", route: "/app/fees/defaulters", icon: "bi-exclamation-octagon" },
        { title: "Assign Fees", route: "/app/fees/assign", icon: "bi-list-check" },
        { title: "Fee Types", route: "/app/fee-types", icon: "bi-tag" }
      ]
    },
    {
      title: "Inquiry to Admission",
      icon: "bi-funnel",
      route: null,
      roles: ["all"],
      children: [
        { title: "Security Guard \u2013 Inquiries", route: "/app/security-guard/inquiry/list", icon: "bi-shield-check" },
        { title: "Receptionist \u2013 Dashboard", route: "/app/receptionist/dashboard", icon: "bi-reception-4" },
        { title: "Receptionist \u2013 Inquiries", route: "/app/receptionist/inquiries", icon: "bi-telephone" },
        { title: "Counselor \u2013 Leads", route: "/app/counselor/leads", icon: "bi-person-workspace" },
        { title: "Admissions", route: "/app/admissions/list", icon: "bi-person-plus" },
        { title: "Admission Tickets (Accountant)", route: "/app/fees/admission-tickets", icon: "bi-ticket-perforated" }
      ]
    },
    {
      title: "Security Guard",
      icon: "bi-shield-check",
      route: "/app/security-guard/inquiry/list",
      roles: ["all"],
      children: [
        { title: "Inquiry Registration", route: "/app/security-guard/inquiry/list", icon: "bi-clipboard-plus" },
        { title: "Gate Pass Management", route: "/app/security-guard/gate-pass/list", icon: "bi-key" },
        { title: "Daily Reporting", route: "/app/security-guard/daily-report/list", icon: "bi-journal-text" }
      ]
    },
    {
      title: "Counselor",
      icon: "bi-person-workspace",
      route: "/app/counselor/leads",
      roles: ["all"],
      children: [
        { title: "Lead Management", route: "/app/counselor/leads", icon: "bi-diagram-3" }
      ]
    },
    {
      title: "Receptionist",
      icon: "bi-reception-4",
      route: "/app/receptionist/dashboard",
      roles: ["all"],
      children: [
        { title: "Dashboard", route: "/app/receptionist/dashboard", icon: "bi-speedometer2" },
        { title: "Inquiry Management", route: "/app/receptionist/inquiries", icon: "bi-telephone" },
        { title: "Enquiries (Lead Conversion)", route: "/app/enquiries/list", icon: "bi-chat-dots" },
        { title: "Counselor Assignment", route: "/app/counselor/leads", icon: "bi-person-plus" },
        { title: "Visitor Management", route: "/app/visitors/list", icon: "bi-people" },
        { title: "Documentation", route: "/app/documents/list", icon: "bi-folder2" }
      ]
    },
    {
      title: "Transport",
      icon: "bi-bus-front",
      route: "/app/transport/list",
      roles: ["all"]
    },
    {
      title: "Hostel",
      icon: "bi-building",
      route: "/app/hostel/list",
      roles: ["all"]
    },
    {
      title: "Certificates",
      icon: "bi-award",
      route: "/app/certificates/list",
      roles: ["all"]
    },
    {
      title: "Reports",
      icon: "bi-graph-up",
      route: "/app/reports",
      roles: ["all"]
    },
    {
      title: "Notices",
      icon: "bi-megaphone",
      route: "/app/notices/list",
      roles: ["all"]
    },
    {
      title: "Connect Us",
      icon: "bi-link-45deg",
      route: "/app/connect-us",
      roles: ["all"]
    },
    {
      title: "Users",
      icon: "bi-people",
      route: "/app/users",
      roles: ["admin", "super_admin"]
    },
    {
      title: "Settings",
      icon: "bi-gear",
      route: "/app/settings",
      roles: ["all"]
    }
  ];
  constructor(authService, router, menuService) {
    this.authService = authService;
    this.router = router;
    this.menuService = menuService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (window.innerWidth > 1024) {
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        this.isSidebarOpen = true;
      } else {
        this.isSidebarOpen = false;
      }
    });
    this.currentRoute = this.router.url;
    this.loadMenus();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.currentRoute = event.url;
      this.updateExpandedMenu();
      if (this.isMobileView()) {
        this.isSidebarOpen = false;
      }
    });
  }
  loadMenus() {
    this.menuService.menus$.subscribe((menus) => {
      console.log("Loaded menus:", menus);
      if (menus && menus.length > 0) {
        this.menuItems = menus;
        console.log("Using dynamic menus, count:", menus.length);
      } else {
        console.log("No dynamic menus, using static fallback");
        this.menuItems = this.convertStaticToMenuItems();
        console.log("Static menus count:", this.menuItems.length);
      }
    });
  }
  convertStaticToMenuItems() {
    let menuIdCounter = 1;
    return this.staticMenuItems.map((item) => {
      const menuId = menuIdCounter++;
      return {
        menu_id: menuId,
        menu_name: item.title,
        menu_code: item.route ? item.route.replace("/app/", "").replace(/\//g, "_") : item.title.toLowerCase().replace(/\s+/g, "_"),
        menu_icon: item.icon,
        menu_route: item.route,
        parent_menu_id: null,
        menu_order: menuId,
        is_master: 0,
        children: item.children ? item.children.map((child) => {
          const childId = menuIdCounter++;
          return {
            menu_id: childId,
            menu_name: child.title,
            menu_code: child.route ? child.route.replace("/app/", "").replace(/\//g, "_") : child.title.toLowerCase().replace(/\s+/g, "_"),
            menu_icon: child.icon || "bi-circle",
            menu_route: child.route,
            parent_menu_id: menuId,
            menu_order: childId,
            is_master: 0
          };
        }) : []
      };
    });
  }
  updateExpandedMenu() {
    this.expandedMenuItems = {};
    this.menuItems.forEach((item) => {
      if (item.children && item.children.length > 0) {
        const hasActiveChild = item.children.some((child) => this.currentRoute.startsWith(child.menu_route));
        if (hasActiveChild) {
          if (Object.keys(this.expandedMenuItems).length === 0) {
            this.expandedMenuItems[item.menu_id] = true;
          }
        }
      }
    });
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  isMobileView() {
    return window.innerWidth <= 1024;
  }
  logout() {
    this.authService.signOut().subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.error("Logout error:", error);
        this.router.navigate(["/login"]);
      }
    });
  }
  hasPermission(roles) {
    if (roles.includes("all"))
      return true;
    const userType = this.currentUser?.user_type;
    return userType && roles.includes(userType);
  }
  toggleMenu(item) {
    if (item.children && item.children.length > 0) {
      const isCurrentlyExpanded = this.expandedMenuItems[item.menu_id] || false;
      this.expandedMenuItems = {};
      if (!isCurrentlyExpanded) {
        this.expandedMenuItems[item.menu_id] = true;
      }
    }
  }
  isMenuExpanded(item) {
    return this.expandedMenuItems[item.menu_id] || false;
  }
  hasChildren(item) {
    return !!(item.children && item.children.length > 0);
  }
  /** Route for sidebar link: first child if has children, else menu_route */
  getNavRoute(item) {
    if (this.hasChildren(item) && item.children.length > 0) {
      return item.children[0].menu_route || "/app/dashboard";
    }
    return item.menu_route || "/app/dashboard";
  }
  /** Sidebar item is active if current route is in this item's section (matches it or any child by module base) */
  isNavItemActive(item) {
    if (item.menu_route && this.currentRoute.startsWith(item.menu_route))
      return true;
    if (this.hasChildren(item)) {
      const currentBase = this.currentRouteModuleBase;
      return item.children.some((c) => this.getModuleBase(c.menu_route) === currentBase || this.currentRoute === c.menu_route || this.currentRoute.startsWith(c.menu_route + "/"));
    }
    return false;
  }
  /**
   * Module base: for /app/xxx/... or /app/xxx we return /app/xxx so each section (Students, Library, etc.) is unique.
   * This avoids /app/academic-years giving base /app which would match every route.
   */
  getModuleBase(route) {
    const parts = route.replace(/\/$/, "").split("/").filter(Boolean);
    if (parts.length === 0)
      return route;
    if (parts[0] === "app" && parts.length >= 2)
      return "/" + parts.slice(0, 2).join("/");
    if (parts.length <= 1)
      return route;
    return "/" + parts.slice(0, -1).join("/");
  }
  /** Current route's module base e.g. /app/students */
  get currentRouteModuleBase() {
    return this.getModuleBase(this.currentRoute);
  }
  /** Parent menu item whose children include the current route's module (for 3D tabs) */
  get currentGroup() {
    const currentBase = this.currentRouteModuleBase;
    if (!currentBase || currentBase === "/app")
      return null;
    for (const item of this.menuItems) {
      if (item.children && item.children.length > 0) {
        const match = item.children.some((c) => {
          const childBase = this.getModuleBase(c.menu_route);
          return childBase === currentBase || this.currentRoute === c.menu_route || this.currentRoute.startsWith(c.menu_route + "/");
        });
        if (match)
          return item;
      }
    }
    return null;
  }
  /** Tabs to show in 3D sub-nav (children of current group only) */
  get currentGroupTabs() {
    const group = this.currentGroup;
    return group?.children || [];
  }
  get currentGroupName() {
    return this.currentGroup?.menu_name || "";
  }
  /** Only the tab whose route matches the current URL (exact or prefix) is active. */
  isTabActive(tab) {
    const r = (tab.menu_route || "").replace(/\/$/, "");
    const cur = this.currentRoute.replace(/\/$/, "");
    if (cur === r)
      return true;
    if (r && cur.startsWith(r + "/"))
      return true;
    return false;
  }
  /** Icon for 3D tab: use menu_icon if set, else fallback by route (for dynamic menus). */
  getTabIcon(tab) {
    if (tab.menu_icon && tab.menu_icon !== "bi-circle")
      return tab.menu_icon;
    const route = (tab.menu_route || "").toLowerCase();
    const iconByPath = {
      "academic-years": "bi-calendar-range",
      "classes": "bi-journal-text",
      "sections": "bi-layers",
      "subjects": "bi-book",
      "departments": "bi-diagram-3",
      "designations": "bi-award",
      "periods": "bi-clock-history",
      "fee-groups": "bi-wallet2",
      "fee-types": "bi-tag",
      "exam-types": "bi-clipboard-check",
      "attendance-types": "bi-calendar-check",
      "students": "bi-people",
      "admissions": "bi-person-plus",
      "enquiries": "bi-telephone-inbound",
      "teachers": "bi-person-badge",
      "attendance": "bi-calendar-check",
      "marksheets": "bi-file-earmark-spreadsheet",
      "syllabus": "bi-journal-richtext",
      "library": "bi-book-half",
      "examinations": "bi-clipboard-check",
      "timetable": "bi-calendar-week",
      "fees": "bi-currency-dollar",
      "certificates": "bi-award",
      "reports": "bi-graph-up",
      "notices": "bi-megaphone",
      "transport": "bi-bus-front",
      "hostel": "bi-building",
      "security-guard": "bi-shield-check",
      "counselor": "bi-person-workspace",
      "receptionist": "bi-reception-4",
      "sms": "bi-chat-text",
      "whatsapp": "bi-whatsapp"
    };
    for (const [path, icon] of Object.entries(iconByPath)) {
      if (route.includes(path))
        return icon;
    }
    return "bi-grid";
  }
  static \u0275fac = function FullComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FullComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MenuService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullComponent, selectors: [["app-full"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 18, consts: [[1, "full-layout"], ["class", "mobile-overlay", 3, "active", "click", 4, "ngIf"], ["class", "mobile-header", 4, "ngIf"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo-container"], ["src", "assets/images/logo.png", "alt", "SchoolPlus", "onerror", "this.style.display='none'", 1, "logo"], ["class", "logo-text", 4, "ngIf"], [1, "sidebar-toggle", 3, "click"], [1, "bi"], [1, "sidebar-nav"], [1, "nav-menu"], [3, "active", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["class", "user-info", 4, "ngIf"], [1, "btn-logout", 3, "click", "title"], [1, "bi", "bi-box-arrow-right"], [4, "ngIf"], [1, "main-content"], [1, "content-wrapper"], ["class", "sub-nav-3d no-print", 4, "ngIf"], [1, "mobile-overlay", 3, "click"], [1, "mobile-header"], [1, "mobile-menu-toggle", 3, "click"], [1, "bi", "bi-list"], [1, "mobile-logo"], [2, "width", "40px"], [1, "logo-text"], [1, "nav-link", 3, "click", "routerLink", "title"], [1, "user-info"], [1, "user-avatar"], [1, "bi", "bi-person-circle"], [1, "user-details"], [1, "user-name"], [1, "user-role"], [1, "sub-nav-3d", "no-print"], [1, "sub-nav-tabs"], ["class", "sub-nav-tab", 3, "routerLink", "active", "click", 4, "ngFor", "ngForOf"], [1, "sub-nav-tab", 3, "click", "routerLink"]], template: function FullComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, FullComponent_div_1_Template, 1, 2, "div", 1)(2, FullComponent_div_2_Template, 6, 0, "div", 2);
      \u0275\u0275elementStart(3, "aside", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275template(7, FullComponent_h2_7_Template, 2, 0, "h2", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 8);
      \u0275\u0275listener("click", function FullComponent_Template_button_click_8_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "nav", 10)(11, "ul", 11);
      \u0275\u0275template(12, FullComponent_li_12_Template, 4, 7, "li", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13);
      \u0275\u0275template(14, FullComponent_div_14_Template, 8, 3, "div", 14);
      \u0275\u0275elementStart(15, "button", 15);
      \u0275\u0275listener("click", function FullComponent_Template_button_click_15_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(16, "i", 16);
      \u0275\u0275template(17, FullComponent_span_17_Template, 2, 0, "span", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "main", 18)(19, "div", 19);
      \u0275\u0275template(20, FullComponent_div_20_Template, 3, 1, "div", 20);
      \u0275\u0275element(21, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobileView());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isMobileView());
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", !ctx.isSidebarOpen && !ctx.isMobileView())("sidebar-open", ctx.isSidebarOpen && ctx.isMobileView());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isSidebarOpen || ctx.isMobileView());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-chevron-left", ctx.isSidebarOpen)("bi-chevron-right", !ctx.isSidebarOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSidebarOpen || ctx.isMobileView()) && ctx.currentUser);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isSidebarOpen || ctx.isMobileView() ? "Logout" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isSidebarOpen || ctx.isMobileView());
      \u0275\u0275advance();
      \u0275\u0275classProp("main-content-expanded", !ctx.isSidebarOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentGroupTabs.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterOutlet, RouterLink], styles: ['\n\n.full-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-secondary);\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 50%,\n      #f1f5f9 100%);\n  border-right: 1px solid rgba(37, 99, 235, 0.1);\n  display: flex;\n  flex-direction: column;\n  transition: all var(--transition-smooth);\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.08), inset -1px 0 0 rgba(255, 255, 255, 0.5);\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  overflow-y: auto;\n  overflow-x: hidden;\n  backdrop-filter: blur(10px);\n}\n.sidebar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: var(--primary-gradient);\n  opacity: 0.8;\n}\n.sidebar.sidebar-collapsed[_ngcontent-%COMP%] {\n  width: 88px;\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(37, 99, 235, 0.2);\n  border-radius: var(--radius-full);\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(37, 99, 235, 0.4);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) var(--spacing-lg);\n  border-bottom: 2px solid rgba(37, 99, 235, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05) 0%,\n      transparent 100%);\n  position: relative;\n  backdrop-filter: blur(10px);\n}\n.sidebar-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 10%;\n  width: 80%;\n  height: 2px;\n  background: var(--primary-gradient);\n  opacity: 0.5;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  flex: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-md);\n  transition: all var(--transition-base);\n  background: var(--bg-primary);\n  padding: var(--spacing-xs);\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: var(--shadow-lg);\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 800;\n  background: var(--primary-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  letter-spacing: -0.02em;\n  transition: all var(--transition-base);\n}\n.logo-text[_ngcontent-%COMP%]:hover {\n  transform: translateX(2px);\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n  border: 2px solid var(--border-color);\n  color: var(--text-secondary);\n  cursor: pointer;\n  padding: var(--spacing-sm);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-base);\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n.sidebar-toggle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(37, 99, 235, 0.1);\n  transform: translate(-50%, -50%);\n  transition: width var(--transition-base), height var(--transition-base);\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient);\n  color: white;\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-colored);\n  transform: translateY(-2px) scale(1.05);\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.sidebar-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.95);\n}\n.sidebar-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--spacing-md) 0;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  padding: var(--spacing-md) var(--spacing-lg);\n  color: var(--text-secondary);\n  text-decoration: none;\n  transition: all var(--transition-base);\n  border-left: 4px solid transparent;\n  margin: var(--spacing-xs) var(--spacing-sm);\n  border-radius: var(--radius-md);\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(10px);\n}\n.nav-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  background: var(--primary-gradient);\n  opacity: 0.1;\n  transition: width var(--transition-base);\n  z-index: 0;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border-left: 8px solid var(--primary-color);\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  transform: translateY(-50%);\n  opacity: 0;\n  transition: all var(--transition-base);\n}\n.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 28px;\n  text-align: center;\n  transition: all var(--transition-base);\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 28px;\n  border-radius: var(--radius-sm);\n  background: rgba(37, 99, 235, 0.05);\n}\n.nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  white-space: nowrap;\n  position: relative;\n  z-index: 1;\n  letter-spacing: 0.01em;\n  transition: all var(--transition-base);\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  color: var(--primary-color);\n  transform: translateX(8px);\n  box-shadow: var(--shadow-sm);\n  border-left-color: var(--primary-color);\n}\n.nav-link[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  width: 0;\n  height: 0;\n}\n.nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(5deg);\n  background: var(--primary-gradient);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.nav-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  transform: translateX(2px);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: white;\n  border-left-color: var(--primary-dark);\n  font-weight: 700;\n  box-shadow: var(--shadow-colored);\n  transform: translateX(4px);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n  width: 100%;\n  opacity: 0.2;\n  background: rgba(255, 255, 255, 0.2);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  box-shadow: var(--shadow-sm);\n  transform: scale(1.1);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n  box-shadow: var(--shadow-colored-lg);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n.menu-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.875rem;\n  transition: transform var(--transition-fast);\n}\n.menu-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: var(--spacing-sm) 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 100%);\n  border-left: 3px solid var(--primary-color);\n  margin-left: var(--spacing-lg);\n  padding-left: var(--spacing-md);\n  border-radius: 0 var(--radius-md) var(--radius-md) 0;\n  box-shadow: inset 2px 0 4px rgba(37, 99, 235, 0.05);\n}\n.submenu-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--spacing-md) var(--spacing-lg);\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n  border-radius: var(--radius-md);\n  margin: var(--spacing-xs) var(--spacing-sm);\n  position: relative;\n  overflow: hidden;\n}\n.submenu-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--primary-gradient);\n  opacity: 0;\n  transition: opacity var(--transition-base);\n}\n.submenu-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.1) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  transform: translateX(4px);\n  box-shadow: var(--shadow-sm);\n}\n.submenu-link[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.15) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  box-shadow: var(--shadow-sm);\n}\n.nav-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  border-top: 1px solid var(--border-color);\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-md);\n  padding: var(--spacing-md);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.05) 0%,\n      rgba(13, 148, 136, 0.05) 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(37, 99, 235, 0.1);\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-base);\n}\n.user-info[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--primary-gradient);\n  border-radius: var(--radius-full);\n  color: white;\n  box-shadow: var(--shadow-md);\n  transition: all var(--transition-base);\n  position: relative;\n  overflow: hidden;\n}\n.user-avatar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 70%);\n  transform: rotate(45deg);\n  transition: transform var(--transition-slow);\n}\n.user-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(5deg);\n  box-shadow: var(--shadow-lg);\n}\n.user-avatar[_ngcontent-%COMP%]:hover::before {\n  transform: rotate(225deg);\n}\n.user-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  position: relative;\n  z-index: 1;\n}\n.user-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--text-tertiary);\n  text-transform: capitalize;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n  background: var(--error-gradient);\n  color: white;\n  border: none;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all var(--transition-base);\n  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);\n  position: relative;\n  overflow: hidden;\n}\n.btn-logout[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left var(--transition-base);\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #ef4444 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(239, 68, 68, 0.4);\n}\n.btn-logout[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);\n}\n.btn-logout[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: relative;\n  z-index: 1;\n  transition: transform var(--transition-base);\n}\n.btn-logout[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(15deg) scale(1.1);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 100vh;\n  transition: margin-left var(--transition-smooth), width var(--transition-smooth);\n  background: var(--bg-gradient);\n  background-attachment: fixed;\n  padding: 0;\n  margin: 0;\n  position: relative;\n}\n.main-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 50%,\n      rgba(37, 99, 235, 0.03) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 80%,\n      rgba(13, 148, 136, 0.03) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n@media (min-width: 1025px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 320px;\n    width: calc(100vw - 320px);\n  }\n  .main-content.main-content-expanded[_ngcontent-%COMP%] {\n    margin-left: 88px;\n    width: calc(100vw - 88px);\n  }\n}\n@media (max-width: 1024px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    width: 100% !important;\n    padding-top: 60px;\n  }\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) var(--spacing-2xl);\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  animation: fadeInUp var(--transition-slow) ease-out;\n}\n@media (max-width: 768px) {\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: var(--spacing-md) var(--spacing-lg);\n  }\n}\n.sub-nav-3d[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.sub-nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) 0;\n  background: transparent;\n  border: none;\n}\n.sub-nav-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius-md);\n  text-decoration: none;\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  transition: all var(--transition-base);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  background: #fff;\n  color: var(--text-primary);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n}\n.sub-nav-tab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n.sub-nav-tab[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: var(--primary-color);\n  border-color: rgba(37, 99, 235, 0.2);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.sub-nav-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-gradient);\n  color: #fff !important;\n  border-color: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.sub-nav-tab.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.sub-nav-tab.active[_ngcontent-%COMP%]:hover {\n  background: var(--primary-gradient-light);\n  color: #fff !important;\n  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3);\n}\n.mobile-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .mobile-overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 1000;\n    opacity: 0;\n    visibility: hidden;\n    transition: all var(--transition-base);\n  }\n  .mobile-overlay.active[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n    visibility: visible;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: transform var(--transition-base);\n    box-shadow: var(--shadow-lg);\n    width: 320px !important;\n    z-index: 1001;\n  }\n  .sidebar.sidebar-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .sidebar.sidebar-collapsed[_ngcontent-%COMP%] {\n    width: 320px !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .btn-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    width: 100% !important;\n    padding-top: 0;\n  }\n}\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-md) var(--spacing-lg);\n    background: var(--bg-primary);\n    border-bottom: 1px solid var(--border-color);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    backdrop-filter: blur(10px);\n    background: rgba(255, 255, 255, 0.95);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%] {\n    background: var(--bg-secondary);\n    border: 2px solid var(--border-color);\n    color: var(--text-primary);\n    font-size: 1.5rem;\n    cursor: pointer;\n    padding: var(--spacing-sm);\n    border-radius: var(--radius-md);\n    transition: all var(--transition-base);\n    width: 44px;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-sm);\n    position: relative;\n    overflow: hidden;\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]::before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border-radius: 50%;\n    background: rgba(37, 99, 235, 0.1);\n    transform: translate(-50%, -50%);\n    transition: width var(--transition-base), height var(--transition-base);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover {\n    background: var(--primary-gradient);\n    color: white;\n    border-color: var(--primary-color);\n    box-shadow: var(--shadow-colored);\n    transform: scale(1.05);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover::before {\n    width: 100%;\n    height: 100%;\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:active {\n    transform: scale(0.95);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    transition: transform var(--transition-base);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-menu-toggle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n  }\n  .mobile-header[_ngcontent-%COMP%]   .mobile-logo[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n    font-weight: 700;\n    color: var(--primary-color);\n    letter-spacing: -0.5px;\n  }\n}\n/*# sourceMappingURL=full.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullComponent, { className: "FullComponent", filePath: "src\\app\\layouts\\full\\full.component.ts", lineNumber: 15 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "enquiry",
    loadComponent: () => import("./chunk-DXFHOPIX.js").then((m) => m.PublicEnquiryComponent)
  },
  {
    path: "app",
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-2QCOWRLE.js").then((m) => m.SettingsComponent)
      },
      {
        path: "students",
        loadChildren: () => import("./chunk-ZEOYJO7A.js").then((m) => m.StudentsRoutes)
      },
      {
        path: "teachers",
        loadChildren: () => import("./chunk-O6EJYBXN.js").then((m) => m.TeachersRoutes)
      },
      {
        path: "attendance",
        loadChildren: () => import("./chunk-RZCLRANU.js").then((m) => m.AttendanceRoutes)
      },
      {
        path: "examinations",
        loadChildren: () => import("./chunk-VRY7VZLU.js").then((m) => m.ExaminationsRoutes)
      },
      {
        path: "fees",
        loadChildren: () => import("./chunk-PX34ENEU.js").then((m) => m.FeesRoutes)
      },
      {
        path: "notices",
        loadChildren: () => import("./chunk-4SECX7DQ.js").then((m) => m.NoticesRoutes)
      },
      {
        path: "library",
        loadChildren: () => import("./chunk-ZYD5KQNT.js").then((m) => m.LibraryRoutes)
      },
      {
        path: "transport",
        loadChildren: () => import("./chunk-BAKTWS6V.js").then((m) => m.TransportRoutes)
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-E3EV2L2M.js").then((m) => m.ReportsComponent)
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-5ILO2RAH.js").then((m) => m.UsersRoutes)
      },
      {
        path: "timetable",
        loadChildren: () => import("./chunk-ZK7HZIBC.js").then((m) => m.TimetableRoutes)
      },
      {
        path: "homework",
        loadChildren: () => import("./chunk-AJYJ6Z6O.js").then((m) => m.HomeworkRoutes)
      },
      {
        path: "calendar",
        loadChildren: () => import("./chunk-AOPA52AU.js").then((m) => m.CalendarRoutes)
      },
      {
        path: "events",
        loadChildren: () => import("./chunk-NNGVGCGJ.js").then((m) => m.EventsRoutes)
      },
      {
        path: "hostel",
        loadChildren: () => import("./chunk-P2QZYBY4.js").then((m) => m.HostelRoutes)
      },
      {
        path: "certificates",
        loadChildren: () => import("./chunk-VGOFSZ34.js").then((m) => m.CertificatesRoutes)
      },
      {
        path: "academic-years",
        loadChildren: () => import("./chunk-63HVXF3E.js").then((m) => m.ACADEMIC_YEARS_ROUTES)
      },
      {
        path: "classes",
        loadChildren: () => import("./chunk-XLQNFRSN.js").then((m) => m.CLASSES_ROUTES)
      },
      {
        path: "sections",
        loadChildren: () => import("./chunk-RGWFHFDG.js").then((m) => m.SECTIONS_ROUTES)
      },
      {
        path: "subjects",
        loadChildren: () => import("./chunk-3B3LABD7.js").then((m) => m.SUBJECTS_ROUTES)
      },
      {
        path: "departments",
        loadChildren: () => import("./chunk-CQQYLHQS.js").then((m) => m.DEPARTMENTS_ROUTES)
      },
      {
        path: "designations",
        loadChildren: () => import("./chunk-EZLTYJLH.js").then((m) => m.DESIGNATIONS_ROUTES)
      },
      {
        path: "periods",
        loadChildren: () => import("./chunk-MCWR7S32.js").then((m) => m.PERIODS_ROUTES)
      },
      {
        path: "fee-groups",
        loadChildren: () => import("./chunk-7QBSJ2QE.js").then((m) => m.FEE_GROUPS_ROUTES)
      },
      {
        path: "fee-types",
        loadChildren: () => import("./chunk-OTWNAZ3G.js").then((m) => m.FEE_TYPES_ROUTES)
      },
      {
        path: "exam-types",
        loadChildren: () => import("./chunk-LGQNFHMS.js").then((m) => m.EXAM_TYPES_ROUTES)
      },
      {
        path: "attendance-types",
        loadChildren: () => import("./chunk-GNSPM3MM.js").then((m) => m.ATTENDANCE_TYPES_ROUTES)
      },
      {
        path: "marksheets",
        loadChildren: () => import("./chunk-FNT7OXPQ.js").then((m) => m.MARKSHEET_ROUTES)
      },
      {
        path: "syllabus",
        loadChildren: () => import("./chunk-3CEV374W.js").then((m) => m.SYLLABUS_ROUTES)
      },
      {
        path: "enquiries",
        loadChildren: () => import("./chunk-SKLWFRXB.js").then((m) => m.ENQUIRY_ROUTES)
      },
      {
        path: "admissions",
        loadChildren: () => import("./chunk-DUPH2G2H.js").then((m) => m.ADMISSION_ROUTES)
      },
      {
        path: "documents",
        loadChildren: () => import("./chunk-YFD4UFSO.js").then((m) => m.DOCUMENT_ROUTES)
      },
      {
        path: "classwork",
        loadChildren: () => import("./chunk-QXJJMVEY.js").then((m) => m.CLASSWORK_ROUTES)
      },
      {
        path: "sms",
        loadChildren: () => import("./chunk-LCSNWXEN.js").then((m) => m.SMS_ROUTES)
      },
      {
        path: "whatsapp",
        loadChildren: () => import("./chunk-LLXOEKMC.js").then((m) => m.WHATSAPP_ROUTES)
      },
      {
        path: "promotions",
        loadChildren: () => import("./chunk-MJAQQ7K6.js").then((m) => m.PROMOTIONS_ROUTES)
      },
      {
        path: "visitors",
        loadChildren: () => import("./chunk-DWDVBTMW.js").then((m) => m.VISITORS_ROUTES)
      },
      {
        path: "complaints",
        loadChildren: () => import("./chunk-F7L4OGSM.js").then((m) => m.COMPLAINTS_ROUTES)
      },
      {
        path: "unit-test-marks",
        loadChildren: () => import("./chunk-E5JJGXQH.js").then((m) => m.UNIT_TEST_MARKS_ROUTES)
      },
      {
        path: "uniform-distribution",
        loadChildren: () => import("./chunk-7PMBTT5B.js").then((m) => m.UNIFORM_DISTRIBUTION_ROUTES)
      },
      {
        path: "book-distribution",
        loadChildren: () => import("./chunk-7667LF24.js").then((m) => m.BOOK_DISTRIBUTION_ROUTES)
      },
      {
        path: "id-cards",
        loadChildren: () => import("./chunk-HC5BYUES.js").then((m) => m.ID_CARDS_ROUTES)
      },
      {
        path: "rte-students",
        loadChildren: () => import("./chunk-4RTO4625.js").then((m) => m.RTE_STUDENTS_ROUTES)
      },
      {
        path: "mess-schedules",
        loadChildren: () => import("./chunk-RD7HAE3X.js").then((m) => m.MESS_SCHEDULES_ROUTES)
      },
      {
        path: "courses",
        loadChildren: () => import("./chunk-F4GP7CSR.js").then((m) => m.COURSES_ROUTES)
      },
      {
        path: "study-progress",
        loadChildren: () => import("./chunk-L6WDMZPT.js").then((m) => m.STUDY_PROGRESS_ROUTES)
      },
      {
        path: "student-participation",
        loadChildren: () => import("./chunk-JGS3TUPZ.js").then((m) => m.STUDENT_PARTICIPATION_ROUTES)
      },
      {
        path: "committees",
        loadChildren: () => import("./chunk-ZGNHT6JI.js").then((m) => m.COMMITTEES_ROUTES)
      },
      {
        path: "remedial",
        loadChildren: () => import("./chunk-4WBQYTUB.js").then((m) => m.REMEDIAL_ROUTES)
      },
      {
        path: "question-papers",
        loadChildren: () => import("./chunk-YE3KWRZ3.js").then((m) => m.QUESTION_PAPERS_ROUTES)
      },
      {
        path: "important-notes",
        loadChildren: () => import("./chunk-YBMDOL2A.js").then((m) => m.IMPORTANT_NOTES_ROUTES)
      },
      {
        path: "uniform-fines",
        loadChildren: () => import("./chunk-7GNMRD4X.js").then((m) => m.UNIFORM_FINES_ROUTES)
      },
      {
        path: "mess-complaints",
        loadChildren: () => import("./chunk-DO6RDDF4.js").then((m) => m.MESS_COMPLAINTS_ROUTES)
      },
      {
        path: "water-tds",
        loadChildren: () => import("./chunk-3MY6UUEK.js").then((m) => m.WATER_TDS_ROUTES)
      },
      {
        path: "food-calendar",
        loadChildren: () => import("./chunk-FQS5YK56.js").then((m) => m.FOOD_CALENDAR_ROUTES)
      },
      {
        path: "cctv",
        loadChildren: () => import("./chunk-FSEU52BO.js").then((m) => m.CCTV_ROUTES)
      },
      {
        path: "bus-documents",
        loadChildren: () => import("./chunk-4B7RJPI2.js").then((m) => m.BUS_DOCUMENTS_ROUTES)
      },
      {
        path: "cleaning",
        loadChildren: () => import("./chunk-KIHN47D7.js").then((m) => m.CLEANING_ROUTES)
      },
      {
        path: "staff-allotment",
        loadChildren: () => import("./chunk-MJQULVDE.js").then((m) => m.STAFF_ALLOTMENT_ROUTES)
      },
      {
        path: "lab",
        loadChildren: () => import("./chunk-LTS3473Y.js").then((m) => m.LAB_ROUTES)
      },
      {
        path: "inward-requests",
        loadChildren: () => import("./chunk-IRUW7XP4.js").then((m) => m.INWARD_REQUESTS_ROUTES)
      },
      {
        path: "birthday",
        loadChildren: () => import("./chunk-KZ5O3A4H.js").then((m) => m.BIRTHDAY_ROUTES)
      },
      {
        path: "charts",
        loadChildren: () => import("./chunk-UTY6XQWJ.js").then((m) => m.CHARTS_ROUTES)
      },
      {
        path: "connect-us",
        loadChildren: () => import("./chunk-UHAYU2C4.js").then((m) => m.ConnectUsRoutes)
      },
      {
        path: "leave-management",
        loadChildren: () => import("./chunk-RFVVUD36.js").then((m) => m.LEAVE_MANAGEMENT_ROUTES)
      },
      {
        path: "branches",
        loadChildren: () => import("./chunk-LVEIPMZT.js").then((m) => m.BRANCHES_ROUTES)
      },
      {
        path: "doubt-handling",
        loadChildren: () => import("./chunk-L22HJO54.js").then((m) => m.DOUBT_HANDLING_ROUTES)
      },
      {
        path: "teaching-plan",
        loadChildren: () => import("./chunk-QLEKJACA.js").then((m) => m.TEACHING_PLAN_ROUTES)
      },
      {
        path: "digital-notes",
        loadChildren: () => import("./chunk-5PRMIXP3.js").then((m) => m.DIGITAL_NOTES_ROUTES)
      },
      {
        path: "cms",
        loadChildren: () => import("./chunk-ORHTMKYX.js").then((m) => m.CMS_ROUTES)
      },
      {
        path: "support-feedback",
        loadChildren: () => import("./chunk-UAMFTT7J.js").then((m) => m.SUPPORT_FEEDBACK_ROUTES)
      },
      {
        path: "sports",
        loadChildren: () => import("./chunk-YRGWV3D5.js").then((m) => m.SPORTS_ROUTES)
      },
      {
        path: "approvals",
        loadComponent: () => import("./chunk-O6RV72TU.js").then((m) => m.ApprovalsComponent)
      },
      {
        path: "student-performance",
        loadComponent: () => import("./chunk-KGVOEXUZ.js").then((m) => m.StudentPerformanceComponent)
      },
      {
        path: "security-guard",
        loadChildren: () => import("./chunk-FMI73XLN.js").then((m) => m.SECURITY_GUARD_ROUTES)
      },
      {
        path: "counselor",
        loadChildren: () => import("./chunk-S4J6DUVX.js").then((m) => m.COUNSELOR_ROUTES)
      },
      {
        path: "receptionist",
        loadChildren: () => import("./chunk-U2S2WRP2.js").then((m) => m.RECEPTIONIST_ROUTES)
      },
      {
        path: "teacher-profile",
        loadComponent: () => import("./chunk-WNYY2FWZ.js").then((m) => m.TeacherProfileComponent)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

// src/app/shared/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${token}`,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    if (!req.url.includes("/auth/login.php") && !req.url.includes("/auth/verify-token.php")) {
      console.log(`[Auth Interceptor] Adding token to request: ${req.url.substring(0, 50)}...`);
    }
  } else {
    console.warn("[Auth Interceptor] No token found in localStorage");
  }
  return next(req).pipe(catchError((error) => {
    if (error.status === 401) {
      console.error("[Auth Interceptor] 401 Unauthorized - Token may be invalid or expired");
      console.error("[Auth Interceptor] Request URL:", error.url);
      if (!router.url.includes("/login") && !error.url?.includes("/auth/login.php") && !error.url?.includes("/auth/verify-token.php")) {
        authService.clearAuth();
        authService.isLoggedInChange.emit(false);
        router.navigate(["/login"], {
          queryParams: { returnUrl: router.url }
        });
      }
    }
    return throwError(() => error);
  }));
};

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations()
  ]
}).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
