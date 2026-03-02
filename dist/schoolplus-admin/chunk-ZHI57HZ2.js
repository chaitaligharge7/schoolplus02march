import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/teaching-plan.service.ts
var TeachingPlanService = class _TeachingPlanService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getPlans(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/teaching-plan/list.php`, { params: p });
  }
  getPlan(planId) {
    return this.http.get(`${this.apiUrl}/teaching-plan/get.php`, { params: { plan_id: planId } });
  }
  createPlan(data) {
    return this.http.post(`${this.apiUrl}/teaching-plan/create.php`, data);
  }
  updatePlan(data) {
    return this.http.post(`${this.apiUrl}/teaching-plan/update.php`, data);
  }
  deletePlan(planId) {
    return this.http.post(`${this.apiUrl}/teaching-plan/delete.php`, { plan_id: planId });
  }
  static \u0275fac = function TeachingPlanService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachingPlanService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeachingPlanService, factory: _TeachingPlanService.\u0275fac, providedIn: "root" });
};

export {
  TeachingPlanService
};
//# sourceMappingURL=chunk-ZHI57HZ2.js.map
