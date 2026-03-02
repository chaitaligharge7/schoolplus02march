import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/sms.service.ts
var SmsService = class _SmsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getSmsList(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/sms/list.php`, { params: httpParams });
  }
  sendSms(data) {
    return this.http.post(`${this.apiUrl}/sms/send.php`, data);
  }
  static \u0275fac = function SmsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmsService, factory: _SmsService.\u0275fac, providedIn: "root" });
};

export {
  SmsService
};
//# sourceMappingURL=chunk-QSGU2ZCA.js.map
