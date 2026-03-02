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

// src/app/shared/services/water-tds.service.ts
var WaterTdsService = class _WaterTdsService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getWaterTdsReadings(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/water-tds/list.php`, { params: httpParams });
  }
  updateWaterTdsReading(tdsId, data) {
    return this.http.put(`${this.apiUrl}/water-tds/update.php`, __spreadValues({
      tds_id: tdsId
    }, data));
  }
  deleteWaterTdsReading(tdsId) {
    const payload = { tds_id: tdsId };
    return this.http.request("DELETE", `${this.apiUrl}/water-tds/delete.php`, { body: payload });
  }
  createWaterTdsReading(data) {
    return this.http.post(`${this.apiUrl}/water-tds/list.php`, data);
  }
  static \u0275fac = function WaterTdsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaterTdsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WaterTdsService, factory: _WaterTdsService.\u0275fac, providedIn: "root" });
};

export {
  WaterTdsService
};
//# sourceMappingURL=chunk-EHM7ZY6F.js.map
