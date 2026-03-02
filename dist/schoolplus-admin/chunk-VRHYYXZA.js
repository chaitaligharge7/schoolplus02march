import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/admission.service.ts
var AdmissionService = class _AdmissionService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getAdmissions(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/admissions/list.php`, { params: httpParams });
  }
  getAdmission(id) {
    return this.http.get(`${this.apiUrl}/admissions/get.php?id=${id}`);
  }
  createAdmission(data) {
    return this.http.post(`${this.apiUrl}/admissions/create.php`, data);
  }
  updateAdmission(id, data) {
    return this.http.post(`${this.apiUrl}/admissions/update.php`, __spreadValues({ admission_id: id }, data));
  }
  deleteAdmission(id) {
    return this.http.post(`${this.apiUrl}/admissions/delete.php`, { admission_id: id });
  }
  approveAdmission(id, action) {
    return this.http.post(`${this.apiUrl}/admissions/approve.php`, {
      admission_id: id,
      action
    });
  }
  /** Accountant: admission tickets (alias). */
  getAdmissionTickets(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/accountant/admission-tickets-list.php`, { params: p });
  }
  recordAdmissionPayment(data) {
    return this.http.post(`${this.apiUrl}/accountant/record-admission-payment.php`, data);
  }
  getReports(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/admissions/reports.php`, { params: httpParams });
  }
  static \u0275fac = function AdmissionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdmissionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdmissionService, factory: _AdmissionService.\u0275fac, providedIn: "root" });
};

export {
  AdmissionService
};
//# sourceMappingURL=chunk-VRHYYXZA.js.map
