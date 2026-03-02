import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/uniform-fine.service.ts
var UniformFineService = class _UniformFineService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getUniformFines(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/uniform-fines/list.php`, { params: httpParams });
  }
  updateUniformFine(data) {
    return this.http.post(`${this.apiUrl}/uniform-fines/update.php`, data);
  }
  deleteUniformFine(fineId) {
    return this.http.post(`${this.apiUrl}/uniform-fines/delete.php`, { fine_id: fineId });
  }
  createUniformFine(data) {
    return this.http.post(`${this.apiUrl}/uniform-fines/list.php`, data);
  }
  static \u0275fac = function UniformFineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformFineService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UniformFineService, factory: _UniformFineService.\u0275fac, providedIn: "root" });
};

export {
  UniformFineService
};
//# sourceMappingURL=chunk-DJD7FSNA.js.map
