import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/lab.service.ts
var LabService = class _LabService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getLabItems(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/lab/items.php`, { params: httpParams });
  }
  getLabPracticals(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/lab/practicals.php`, { params: httpParams });
  }
  createLabItem(data) {
    return this.http.post(`${this.apiUrl}/lab/items.php`, data);
  }
  createLabPractical(data) {
    return this.http.post(`${this.apiUrl}/lab/practicals.php`, data);
  }
  updateLabItem(data) {
    return this.http.put(`${this.apiUrl}/lab/update.php`, data);
  }
  static \u0275fac = function LabService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LabService, factory: _LabService.\u0275fac, providedIn: "root" });
};

export {
  LabService
};
//# sourceMappingURL=chunk-WP5BGVND.js.map
