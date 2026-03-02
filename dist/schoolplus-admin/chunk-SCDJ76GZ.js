import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/branch.service.ts
var BranchService = class _BranchService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getBranches(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] != null && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/branches/list.php`, { params: httpParams });
  }
  getBranch(branchId) {
    return this.http.get(`${this.apiUrl}/branches/get.php`, {
      params: { branch_id: branchId }
    });
  }
  createBranch(data) {
    return this.http.post(`${this.apiUrl}/branches/create.php`, data);
  }
  updateBranch(data) {
    return this.http.post(`${this.apiUrl}/branches/update.php`, data);
  }
  deleteBranch(branchId) {
    return this.http.post(`${this.apiUrl}/branches/delete.php`, { branch_id: branchId });
  }
  static \u0275fac = function BranchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BranchService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BranchService, factory: _BranchService.\u0275fac, providedIn: "root" });
};

export {
  BranchService
};
//# sourceMappingURL=chunk-SCDJ76GZ.js.map
