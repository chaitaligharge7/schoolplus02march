import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/staff-allotment.service.ts
var StaffAllotmentService = class _StaffAllotmentService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getStaffAllotments(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/staff-allotment/list.php`, {
      params: httpParams
    });
  }
  createStaffAllotment(data) {
    return this.http.post(`${this.apiUrl}/staff-allotment/list.php`, data);
  }
  deleteAllotment(id) {
    return this.http.delete(`${this.apiUrl}/staff-allotment/delete.php`, {
      body: { allotment_id: id }
    });
  }
  static \u0275fac = function StaffAllotmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StaffAllotmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffAllotmentService, factory: _StaffAllotmentService.\u0275fac, providedIn: "root" });
};

export {
  StaffAllotmentService
};
//# sourceMappingURL=chunk-N7UKIPCT.js.map
