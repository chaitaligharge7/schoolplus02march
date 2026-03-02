import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/security-guard.service.ts
var SecurityGuardService = class _SecurityGuardService {
  http;
  apiUrl = environment.apiUrl;
  base = `${this.apiUrl}/security-guard`;
  constructor(http) {
    this.http = http;
  }
  getInquiries(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.base}/inquiry-list.php`, { params: p });
  }
  getInquiry(inquiryId) {
    return this.http.get(`${this.base}/inquiry-get.php`, { params: { inquiry_id: inquiryId } });
  }
  createInquiry(data) {
    return this.http.post(`${this.base}/inquiry-create.php`, data);
  }
  updateInquiry(data) {
    return this.http.post(`${this.base}/inquiry-update.php`, data);
  }
  deleteInquiry(inquiryId) {
    return this.http.post(`${this.base}/inquiry-delete.php`, { inquiry_id: inquiryId });
  }
  forwardInquiry(data) {
    return this.http.post(`${this.base}/inquiry-forward.php`, data);
  }
  getInquiryAlerts() {
    return this.http.get(`${this.base}/inquiry-alerts.php`);
  }
  getGatePasses(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.base}/gate-pass-list.php`, { params: p });
  }
  getGatePass(gatePassId) {
    return this.http.get(`${this.base}/gate-pass-get.php`, { params: { gate_pass_id: gatePassId } });
  }
  createGatePass(data) {
    return this.http.post(`${this.base}/gate-pass-create.php`, data);
  }
  updateGatePass(data) {
    return this.http.post(`${this.base}/gate-pass-update.php`, data);
  }
  deleteGatePass(gatePassId) {
    return this.http.post(`${this.base}/gate-pass-delete.php`, { gate_pass_id: gatePassId });
  }
  getDailyReports(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.base}/daily-report-list.php`, { params: p });
  }
  getDailyReport(reportId) {
    return this.http.get(`${this.base}/daily-report-get.php`, { params: { report_id: reportId } });
  }
  createDailyReport(data) {
    return this.http.post(`${this.base}/daily-report-create.php`, data);
  }
  updateDailyReport(data) {
    return this.http.post(`${this.base}/daily-report-update.php`, data);
  }
  deleteDailyReport(reportId) {
    return this.http.post(`${this.base}/daily-report-delete.php`, { report_id: reportId });
  }
  static \u0275fac = function SecurityGuardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityGuardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SecurityGuardService, factory: _SecurityGuardService.\u0275fac, providedIn: "root" });
};

export {
  SecurityGuardService
};
//# sourceMappingURL=chunk-XWWR65CX.js.map
