import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/cctv.service.ts
var CctvService = class _CctvService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCctvList(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/cctv/list.php`, {
      params: httpParams
    });
  }
  createCctv(data) {
    return this.http.post(`${this.apiUrl}/cctv/list.php`, data);
  }
  // checkCctvStatus(cctvId: number): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/cctv/check.php`, { cctv_id: cctvId });
  // }
  checkCctvStatus(cameraId) {
    return this.http.post(`${this.apiUrl}/cctv/check.php`, {
      camera_id: cameraId,
      check_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      check_status: "checked"
    });
  }
  updateCctv(data) {
    return this.http.put(`${this.apiUrl}/cctv/list.php`, data);
  }
  // deleteCctv(cameraId: number): Observable<any> {
  //   const headers = new HttpHeaders({
  //     "Content-Type": "application/json",
  //   });
  //   const body = { camera_id: cameraId };
  //   return this.http.("DELETE", `${this.apiUrl}/cctv/delete.php`, {
  //     body,
  //     headers,
  //   });
  // }
  deleteCctv(cameraId) {
    return this.http.delete(`${this.apiUrl}/cctv/delete.php`, {
      body: { camera_id: cameraId }
    });
  }
  static \u0275fac = function CctvService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CctvService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CctvService, factory: _CctvService.\u0275fac, providedIn: "root" });
};

export {
  CctvService
};
//# sourceMappingURL=chunk-FTRO2KCS.js.map
