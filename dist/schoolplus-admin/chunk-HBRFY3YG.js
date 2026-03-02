import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/promotion.service.ts
var PromotionService = class _PromotionService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getPromotions(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/promotions/list.php`, { params: httpParams });
  }
  createPromotion(data) {
    return this.http.post(`${this.apiUrl}/promotions/create.php`, data);
  }
  static \u0275fac = function PromotionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromotionService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PromotionService, factory: _PromotionService.\u0275fac, providedIn: "root" });
};

export {
  PromotionService
};
//# sourceMappingURL=chunk-HBRFY3YG.js.map
