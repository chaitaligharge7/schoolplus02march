import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/enquiry.service.ts
var EnquiryService = class _EnquiryService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getEnquiries(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/enquiries/list.php`, { params: httpParams });
  }
  getEnquiry(id) {
    return this.http.get(`${this.apiUrl}/enquiries/get.php?id=${id}`);
  }
  createEnquiry(data) {
    return this.http.post(`${this.apiUrl}/enquiries/create.php`, data);
  }
  /** Public form submission (no auth). Backend should create enquiry and notify receptionist. */
  createPublicEnquiry(data) {
    return this.http.post(`${this.apiUrl}/enquiries/public-create.php`, data);
  }
  updateEnquiry(id, data) {
    return this.http.post(`${this.apiUrl}/enquiries/update.php`, __spreadProps(__spreadValues({}, data), { enquiry_id: id }));
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
    return this.http.get(`${this.apiUrl}/enquiries/reports.php`, { params: httpParams });
  }
  /** Assign counsellor to enquiry (allot lead). Sends notification to counsellor. */
  assignCounsellor(enquiryId, counselorId) {
    return this.http.post(`${this.apiUrl}/enquiries/assign-counsellor.php`, {
      enquiry_id: enquiryId,
      counselor_id: counselorId
    });
  }
  static \u0275fac = function EnquiryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnquiryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EnquiryService, factory: _EnquiryService.\u0275fac, providedIn: "root" });
};

export {
  EnquiryService
};
//# sourceMappingURL=chunk-LNSIZNL3.js.map
