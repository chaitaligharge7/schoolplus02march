import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/book-distribution.service.ts
var BookDistributionService = class _BookDistributionService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getDistributions(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/book-distribution/list.php`, { params: httpParams });
  }
  deleteDistribution(distributionId) {
    return this.http.delete(`${this.apiUrl}/book-distribution/delete.php?id=${distributionId}`);
  }
  createDistribution(data) {
    return this.http.post(`${this.apiUrl}/book-distribution/list.php`, data);
  }
  updateDistribution(data) {
    return this.http.post(`${this.apiUrl}/book-distribution/update.php`, data);
  }
  returnBook(data) {
    return this.http.post(`${this.apiUrl}/book-distribution/return.php`, data);
  }
  getStock(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/book-distribution/stock.php`, { params: httpParams });
  }
  updateStock(data) {
    return this.http.post(`${this.apiUrl}/book-distribution/stock.php`, data);
  }
  static \u0275fac = function BookDistributionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookDistributionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookDistributionService, factory: _BookDistributionService.\u0275fac, providedIn: "root" });
};

export {
  BookDistributionService
};
//# sourceMappingURL=chunk-EMLEAQUW.js.map
