import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/receptionist.service.ts
var ReceptionistService = class _ReceptionistService {
  http;
  apiUrl = environment.apiUrl;
  base = `${this.apiUrl}/receptionist`;
  constructor(http) {
    this.http = http;
  }
  getDashboardStats() {
    return this.http.get(`${this.base}/dashboard.php`);
  }
  getInquiry(inquiryId) {
    return this.http.get(`${this.base}/inquiry-get.php`, { params: { inquiry_id: inquiryId } });
  }
  getInquiries(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.base}/inquiries-list.php`, { params: p });
  }
  markPicked(inquiryId) {
    return this.http.post(`${this.base}/inquiry-mark-picked.php`, { inquiry_id: inquiryId });
  }
  convertToLead(data) {
    return this.http.post(`${this.base}/convert-to-lead.php`, data);
  }
  getCounselors() {
    return this.http.get(`${this.base}/counselors-list.php`);
  }
  static \u0275fac = function ReceptionistService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReceptionistService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReceptionistService, factory: _ReceptionistService.\u0275fac, providedIn: "root" });
};

export {
  ReceptionistService
};
//# sourceMappingURL=chunk-5XKVDBLM.js.map
