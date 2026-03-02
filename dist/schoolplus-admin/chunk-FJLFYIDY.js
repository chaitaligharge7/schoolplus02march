import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/transport.service.ts
var TransportService = class _TransportService {
  http;
  constructor(http) {
    this.http = http;
  }
  getRoutes(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/transport/routes.php`, { params: httpParams });
  }
  getRoute(routeId) {
    return this.http.get(`${environment.apiUrl}/transport/get.php`, {
      params: { route_id: routeId }
    });
  }
  createRoute(routeData) {
    return this.http.post(`${environment.apiUrl}/transport/create.php`, routeData);
  }
  updateRoute(routeId, routeData) {
    return this.http.post(`${environment.apiUrl}/transport/update.php`, __spreadValues({
      route_id: routeId
    }, routeData));
  }
  deleteRoute(routeId) {
    return this.http.post(`${environment.apiUrl}/transport/delete.php`, {
      route_id: routeId
    });
  }
  static \u0275fac = function TransportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransportService, factory: _TransportService.\u0275fac, providedIn: "root" });
};

export {
  TransportService
};
//# sourceMappingURL=chunk-FJLFYIDY.js.map
