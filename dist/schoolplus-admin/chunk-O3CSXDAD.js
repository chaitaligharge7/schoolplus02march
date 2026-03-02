import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/sports.service.ts
var SportsService = class _SportsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getEvents(params) {
    let p = new HttpParams();
    if (params)
      Object.keys(params).forEach((k) => {
        if (params[k] != null && params[k] !== "")
          p = p.set(k, params[k].toString());
      });
    return this.http.get(`${this.apiUrl}/sports/list.php`, { params: p });
  }
  getEvent(eventId) {
    return this.http.get(`${this.apiUrl}/sports/get.php`, { params: { event_id: eventId } });
  }
  createEvent(data) {
    return this.http.post(`${this.apiUrl}/sports/create.php`, data);
  }
  updateEvent(data) {
    return this.http.post(`${this.apiUrl}/sports/update.php`, data);
  }
  deleteEvent(eventId) {
    return this.http.post(`${this.apiUrl}/sports/delete.php`, { event_id: eventId });
  }
  static \u0275fac = function SportsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SportsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SportsService, factory: _SportsService.\u0275fac, providedIn: "root" });
};

export {
  SportsService
};
//# sourceMappingURL=chunk-O3CSXDAD.js.map
