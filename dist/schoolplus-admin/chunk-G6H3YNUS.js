import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/bus-document.service.ts
var BusDocumentService = class _BusDocumentService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getBusDocuments(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/bus-documents/list.php`, { params: httpParams });
  }
  createBusDocument(data) {
    return this.http.post(`${this.apiUrl}/bus-documents/list.php`, data);
  }
  static \u0275fac = function BusDocumentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BusDocumentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BusDocumentService, factory: _BusDocumentService.\u0275fac, providedIn: "root" });
};

export {
  BusDocumentService
};
//# sourceMappingURL=chunk-G6H3YNUS.js.map
