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

// src/app/shared/services/inward-request.service.ts
var InwardRequestService = class _InwardRequestService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getInwardRequests(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/inward-requests/list.php`, { params: httpParams });
  }
  getInwardRequest(requestId) {
    return this.http.get(`${this.apiUrl}/inward-requests/get.php`, { params: { request_id: requestId } });
  }
  createInwardRequest(data) {
    return this.http.post(`${this.apiUrl}/inward-requests/list.php`, data);
  }
  resolveRequest(requestId, data) {
    return this.http.post(`${this.apiUrl}/inward-requests/resolve.php`, __spreadValues({
      request_id: requestId
    }, data));
  }
  updateInwardRequest(payload) {
    if (!payload.request_id) {
      throw new Error("request_id is required for update");
    }
    return this.http.request("PUT", `${this.apiUrl}/inward-requests/update.php`, {
      body: payload
    });
  }
  deleteInwardRequest(requestId) {
    if (!requestId) {
      throw new Error("request_id is required for delete");
    }
    return this.http.request("DELETE", `${this.apiUrl}/inward-requests/delete.php`, {
      body: { request_id: requestId }
    });
  }
  static \u0275fac = function InwardRequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InwardRequestService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InwardRequestService, factory: _InwardRequestService.\u0275fac, providedIn: "root" });
};

export {
  InwardRequestService
};
//# sourceMappingURL=chunk-FK5JIMV6.js.map
