import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/toast.service.ts
var ToastService = class _ToastService {
  toasts$ = new BehaviorSubject([]);
  toastIdCounter = 0;
  showError;
  showSuccess;
  getToasts() {
    return this.toasts$.asObservable();
  }
  show(message, type = "info", duration = 5e3) {
    const toast = {
      id: ++this.toastIdCounter,
      message,
      type,
      duration
    };
    const currentToasts = this.toasts$.value;
    this.toasts$.next([...currentToasts, toast]);
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, duration);
    }
  }
  success(message, duration) {
    this.show(message, "success", duration);
  }
  error(message, duration) {
    this.show(message, "error", duration || 7e3);
  }
  warning(message, duration) {
    this.show(message, "warning", duration);
  }
  info(message, duration) {
    this.show(message, "info", duration);
  }
  remove(id) {
    const currentToasts = this.toasts$.value;
    this.toasts$.next(currentToasts.filter((toast) => toast.id !== id));
  }
  clear() {
    this.toasts$.next([]);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};

export {
  ToastService
};
//# sourceMappingURL=chunk-FQ6RWLG3.js.map
