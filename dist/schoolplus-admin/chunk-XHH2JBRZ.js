import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/student-participation.service.ts
var StudentParticipationService = class _StudentParticipationService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getParticipations(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/student-participation/list.php`, { params: httpParams });
  }
  createParticipation(data) {
    return this.http.post(`${this.apiUrl}/student-participation/list.php`, data);
  }
  static \u0275fac = function StudentParticipationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentParticipationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentParticipationService, factory: _StudentParticipationService.\u0275fac, providedIn: "root" });
};

export {
  StudentParticipationService
};
//# sourceMappingURL=chunk-XHH2JBRZ.js.map
