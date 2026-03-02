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

// src/app/shared/services/designation.service.ts
var DesignationService = class _DesignationService {
  http;
  constructor(http) {
    this.http = http;
  }
  getDesignations(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/designations/list.php`, { params: httpParams });
  }
  getDesignation(designationId) {
    return this.http.get(`${environment.apiUrl}/designations/get.php`, {
      params: { designation_id: designationId }
    });
  }
  createDesignation(designationData) {
    return this.http.post(`${environment.apiUrl}/designations/create.php`, designationData);
  }
  updateDesignation(designationId, designationData) {
    return this.http.post(`${environment.apiUrl}/designations/update.php`, __spreadValues({
      designation_id: designationId
    }, designationData));
  }
  deleteDesignation(designationId) {
    return this.http.post(`${environment.apiUrl}/designations/delete.php`, {
      designation_id: designationId
    });
  }
  static \u0275fac = function DesignationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DesignationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesignationService, factory: _DesignationService.\u0275fac, providedIn: "root" });
};

export {
  DesignationService
};
//# sourceMappingURL=chunk-YIWD7HKJ.js.map
