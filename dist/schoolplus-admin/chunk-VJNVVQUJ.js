import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/doubt-handling.service.ts
var DoubtHandlingService = class _DoubtHandlingService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getDoubts(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/doubt-handling/list.php`, { params: p });
  }
  getDoubt(doubtId) {
    return this.http.get(`${this.apiUrl}/doubt-handling/get.php`, { params: { doubt_id: doubtId } });
  }
  createDoubt(data) {
    return this.http.post(`${this.apiUrl}/doubt-handling/create.php`, data);
  }
  updateDoubt(data) {
    return this.http.post(`${this.apiUrl}/doubt-handling/update.php`, data);
  }
  deleteDoubt(doubtId) {
    return this.http.post(`${this.apiUrl}/doubt-handling/delete.php`, { doubt_id: doubtId });
  }
  static \u0275fac = function DoubtHandlingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoubtHandlingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DoubtHandlingService, factory: _DoubtHandlingService.\u0275fac, providedIn: "root" });
};

export {
  DoubtHandlingService
};
//# sourceMappingURL=chunk-VJNVVQUJ.js.map
