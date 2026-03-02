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

// src/app/shared/services/mess-complaint.service.ts
var MessComplaintService = class _MessComplaintService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMessComplaints(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/mess-complaints/list.php`, { params: httpParams });
  }
  createMessComplaint(data) {
    return this.http.post(`${this.apiUrl}/mess-complaints/list.php`, data);
  }
  updateMessComplaint(complaintId, data) {
    const payload = __spreadValues({ complaint_id: complaintId }, data);
    return this.http.put(`${this.apiUrl}/mess-complaints/update.php`, payload);
  }
  deleteMessComplaint(complaintId) {
    const payload = { complaint_id: complaintId };
    return this.http.request("DELETE", `${this.apiUrl}/mess-complaints/delete.php`, { body: payload });
  }
  resolveComplaint(complaintId, data) {
    return this.http.post(`${this.apiUrl}/mess-complaints/resolve.php`, __spreadValues({
      complaint_id: complaintId
    }, data));
  }
  static \u0275fac = function MessComplaintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessComplaintService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessComplaintService, factory: _MessComplaintService.\u0275fac, providedIn: "root" });
};

export {
  MessComplaintService
};
//# sourceMappingURL=chunk-SDFRYBU3.js.map
