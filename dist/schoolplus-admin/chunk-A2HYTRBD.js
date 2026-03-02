import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/digital-notes.service.ts
var DigitalNotesService = class _DigitalNotesService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getResources(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/digital-notes/list.php`, { params: p });
  }
  getResource(resourceId) {
    return this.http.get(`${this.apiUrl}/digital-notes/get.php`, { params: { resource_id: resourceId } });
  }
  createResource(data) {
    return this.http.post(`${this.apiUrl}/digital-notes/create.php`, data);
  }
  deleteResource(resourceId) {
    return this.http.post(`${this.apiUrl}/digital-notes/delete.php`, { resource_id: resourceId });
  }
  updateResource(payload) {
    return this.http.post(`${this.apiUrl}/digital-notes/update.php`, payload);
  }
  static \u0275fac = function DigitalNotesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DigitalNotesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DigitalNotesService, factory: _DigitalNotesService.\u0275fac, providedIn: "root" });
};

export {
  DigitalNotesService
};
//# sourceMappingURL=chunk-A2HYTRBD.js.map
