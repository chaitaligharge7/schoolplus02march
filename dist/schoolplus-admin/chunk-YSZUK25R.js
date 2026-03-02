import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/support-feedback.service.ts
var SupportFeedbackService = class _SupportFeedbackService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getTickets(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/support-feedback/list.php`, { params: p });
  }
  getTicket(ticketId) {
    return this.http.get(`${this.apiUrl}/support-feedback/get.php`, { params: { ticket_id: ticketId } });
  }
  createTicket(data) {
    return this.http.post(`${this.apiUrl}/support-feedback/create.php`, data);
  }
  updateTicket(data) {
    return this.http.post(`${this.apiUrl}/support-feedback/update.php`, data);
  }
  static \u0275fac = function SupportFeedbackService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupportFeedbackService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupportFeedbackService, factory: _SupportFeedbackService.\u0275fac, providedIn: "root" });
};

export {
  SupportFeedbackService
};
//# sourceMappingURL=chunk-YSZUK25R.js.map
