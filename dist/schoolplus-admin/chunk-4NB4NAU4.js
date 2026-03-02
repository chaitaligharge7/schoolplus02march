import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/counselor.service.ts
var CounselorService = class _CounselorService {
  http;
  apiUrl = environment.apiUrl;
  base = `${this.apiUrl}/counselor`;
  constructor(http) {
    this.http = http;
  }
  getLeads(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.base}/leads-list.php`, { params: p });
  }
  getLead(enquiryId, leadId) {
    const params = {};
    if (enquiryId)
      params.enquiry_id = enquiryId;
    if (leadId)
      params.lead_id = leadId;
    return this.http.get(`${this.base}/lead-get.php`, { params });
  }
  updateLead(data) {
    return this.http.post(`${this.base}/lead-update.php`, data);
  }
  deleteLead(enquiryId, leadId) {
    const body = {};
    if (enquiryId)
      body.enquiry_id = enquiryId;
    if (leadId)
      body.lead_id = leadId;
    return this.http.post(`${this.base}/lead-delete.php`, body);
  }
  transferLead(data) {
    return this.http.post(`${this.base}/lead-transfer.php`, data);
  }
  requestCampusTour(data) {
    return this.http.post(`${this.base}/campus-tour-request.php`, data);
  }
  getFacilitySummary() {
    return this.http.get(`${this.base}/facility-summary.php`);
  }
  static \u0275fac = function CounselorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CounselorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CounselorService, factory: _CounselorService.\u0275fac, providedIn: "root" });
};

export {
  CounselorService
};
//# sourceMappingURL=chunk-4NB4NAU4.js.map
