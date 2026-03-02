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

// src/app/shared/services/homework.service.ts
var HomeworkService = class _HomeworkService {
  http;
  constructor(http) {
    this.http = http;
  }
  getHomeworks(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/homework/list.php`, { params: httpParams });
  }
  getHomework(homeworkId) {
    return this.http.get(`${environment.apiUrl}/homework/get.php`, {
      params: { homework_id: homeworkId }
    });
  }
  createHomework(homeworkData) {
    return this.http.post(`${environment.apiUrl}/homework/create.php`, homeworkData);
  }
  updateHomework(homeworkId, homeworkData) {
    return this.http.post(`${environment.apiUrl}/homework/update.php`, __spreadValues({
      homework_id: homeworkId
    }, homeworkData));
  }
  deleteHomework(homeworkId) {
    return this.http.post(`${environment.apiUrl}/homework/delete.php`, {
      homework_id: homeworkId
    });
  }
  static \u0275fac = function HomeworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeworkService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeworkService, factory: _HomeworkService.\u0275fac, providedIn: "root" });
};

export {
  HomeworkService
};
//# sourceMappingURL=chunk-CXLGIVTG.js.map
