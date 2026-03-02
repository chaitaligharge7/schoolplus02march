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

// src/app/shared/services/uniform-distribution.service.ts
var UniformDistributionService = class _UniformDistributionService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getDistributions(params) {
    let httpParams = new HttpParams().set("t", (/* @__PURE__ */ new Date()).getTime().toString());
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/uniform-distribution/list.php`, { params: httpParams });
  }
  createDistribution(data) {
    return this.http.post(`${this.apiUrl}/uniform-distribution/list.php`, data);
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
    return this.http.get(`${this.apiUrl}/uniform-distribution/stock.php`, { params: httpParams });
  }
  getDistributionById(id) {
    return this.http.get(`/api/uniform-distributions/${id}`);
  }
  updateStock(data) {
    return this.http.post(`${this.apiUrl}/uniform-distribution/stock.php`, data);
  }
  returnUniform(data) {
    return this.http.post(`${this.apiUrl}/uniform-distribution/return.php`, data);
  }
  updateDistribution(distributionId, data) {
    if (!distributionId) {
      throw new Error("Distribution ID is required to update");
    }
    const payload = __spreadValues({ distribution_id: distributionId }, data);
    return this.http.post(`${this.apiUrl}/uniform-distribution/update.php`, payload);
  }
  deleteDistribution(distributionId) {
    return this.http.post(`${this.apiUrl}/uniform-distribution/delete.php`, { distribution_id: distributionId });
  }
  static \u0275fac = function UniformDistributionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniformDistributionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UniformDistributionService, factory: _UniformDistributionService.\u0275fac, providedIn: "root" });
};

export {
  UniformDistributionService
};
//# sourceMappingURL=chunk-KEVWHRDG.js.map
