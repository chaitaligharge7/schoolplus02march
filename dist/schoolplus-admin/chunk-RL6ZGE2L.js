import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/cms.service.ts
var CmsService = class _CmsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getPages(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/cms/list.php`, { params: p });
  }
  getPage(pageId) {
    return this.http.get(`${this.apiUrl}/cms/get.php`, { params: { page_id: pageId } });
  }
  getPageBySlug(slug) {
    return this.http.get(`${this.apiUrl}/cms/get.php`, { params: { slug } });
  }
  createPage(data) {
    return this.http.post(`${this.apiUrl}/cms/create.php`, data);
  }
  updatePage(data) {
    return this.http.post(`${this.apiUrl}/cms/update.php`, data);
  }
  deletePage(pageId) {
    return this.http.post(`${this.apiUrl}/cms/delete.php`, { page_id: pageId });
  }
  static \u0275fac = function CmsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CmsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CmsService, factory: _CmsService.\u0275fac, providedIn: "root" });
};

export {
  CmsService
};
//# sourceMappingURL=chunk-RL6ZGE2L.js.map
