import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/whatsapp.service.ts
var WhatsAppService = class _WhatsAppService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getWhatsAppList(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/whatsapp/list.php`, { params: httpParams });
  }
  sendWhatsApp(data) {
    return this.http.post(`${this.apiUrl}/whatsapp/send.php`, data);
  }
  static \u0275fac = function WhatsAppService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsAppService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WhatsAppService, factory: _WhatsAppService.\u0275fac, providedIn: "root" });
};

export {
  WhatsAppService
};
//# sourceMappingURL=chunk-3JEMQKSU.js.map
