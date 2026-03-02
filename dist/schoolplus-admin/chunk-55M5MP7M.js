import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/marksheet.service.ts
var MarksheetService = class _MarksheetService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMarksheets(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/marksheets/list.php`, { params: httpParams });
  }
  getMarksheet(id) {
    return this.http.get(`${this.apiUrl}/marksheets/get.php?id=${id}`);
  }
  createMarksheet(data) {
    return this.http.post(`${this.apiUrl}/marksheets/create.php`, data);
  }
  updateMarksheet(id, data) {
    if (data instanceof FormData) {
      data.append("marksheet_id", id.toString());
      return this.http.post(`${this.apiUrl}/marksheets/update.php`, data);
    }
    return this.http.post(`${this.apiUrl}/marksheets/update.php`, __spreadProps(__spreadValues({}, data), { marksheet_id: id }));
  }
  deleteMarksheet(id) {
    return this.http.post(`${this.apiUrl}/marksheets/delete.php`, { id });
  }
  sendWhatsApp(marksheetIds) {
    return this.http.post(`${this.apiUrl}/marksheets/send-whatsapp.php`, { marksheet_ids: marksheetIds });
  }
  sendMarksheetToWhatsApp(marksheetId) {
    return this.http.post(`${this.apiUrl}/marksheets/send-whatsapp.php`, { marksheet_id: marksheetId });
  }
  notifyParent(marksheetId) {
    return this.http.post(`${this.apiUrl}/marksheets/notify-parent.php`, { marksheet_id: marksheetId });
  }
  static \u0275fac = function MarksheetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarksheetService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MarksheetService, factory: _MarksheetService.\u0275fac, providedIn: "root" });
};

export {
  MarksheetService
};
//# sourceMappingURL=chunk-55M5MP7M.js.map
