import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/rte-student.service.ts
var RteStudentService = class _RteStudentService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getRteStudents(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/rte-students/list.php`, { params: httpParams });
  }
  createRteStudent(data) {
    return this.http.post(`${this.apiUrl}/rte-students/list.php`, data);
  }
  static \u0275fac = function RteStudentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RteStudentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RteStudentService, factory: _RteStudentService.\u0275fac, providedIn: "root" });
};

export {
  RteStudentService
};
//# sourceMappingURL=chunk-XWDKP3DZ.js.map
