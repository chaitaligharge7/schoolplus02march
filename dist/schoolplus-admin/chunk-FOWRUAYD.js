import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/visitor.service.ts
var VisitorService = class _VisitorService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getVisitors(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/visitors/list.php`, { params: httpParams });
  }
  createVisitor(data) {
    return this.http.post(`${this.apiUrl}/visitors/list.php`, data);
  }
  deleteVisitor(visitorId) {
    return this.http.request("DELETE", `${this.apiUrl}/visitors/delete.php`, {
      body: { visitor_id: visitorId }
    });
  }
  getVisitorCategories() {
    return this.http.get(`${this.apiUrl}/visitors/categories.php`);
  }
  // visitor.service.ts
  createVisitorCategory(payload) {
    return this.http.post(`${this.apiUrl}/visitors/categories.php`, payload);
  }
  updateCategory(payload) {
    if (!payload.category_id) {
      throw new Error("category_id is required for update");
    }
    return this.http.request("PUT", `${this.apiUrl}/visitors/categories.php`, {
      body: payload
    });
  }
  // DELETE: delete a category
  deleteCategory(categoryId) {
    return this.http.request("DELETE", `${this.apiUrl}/visitors/categories.php`, {
      body: { category_id: categoryId }
    });
  }
  static \u0275fac = function VisitorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorService, factory: _VisitorService.\u0275fac, providedIn: "root" });
};

export {
  VisitorService
};
//# sourceMappingURL=chunk-FOWRUAYD.js.map
