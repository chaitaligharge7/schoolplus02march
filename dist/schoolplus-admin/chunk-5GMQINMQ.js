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

// src/app/shared/services/unit-test-marks.service.ts
var UnitTestMarksService = class _UnitTestMarksService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getUnitTestMarks(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/unit-test-marks/list.php`, { params: httpParams });
  }
  createUnitTestMarks(data) {
    return this.http.post(`${this.apiUrl}/unit-test-marks/list.php`, data);
  }
  updateUnitTestMarks(testId, data) {
    return this.http.put(`${this.apiUrl}/unit-test-marks/update.php`, __spreadValues({
      test_id: testId
    }, data));
  }
  getUnitTestReport(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/unit-test-marks/report.php`, { params: httpParams });
  }
  static \u0275fac = function UnitTestMarksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnitTestMarksService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UnitTestMarksService, factory: _UnitTestMarksService.\u0275fac, providedIn: "root" });
};

export {
  UnitTestMarksService
};
//# sourceMappingURL=chunk-5GMQINMQ.js.map
