import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/study-progress.service.ts
var StudyProgressService = class _StudyProgressService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getStudyProgress(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/study-progress/list.php`, { params: httpParams });
  }
  createStudyProgress(data) {
    return this.http.post(`${this.apiUrl}/study-progress/list.php`, data);
  }
  updateStudyProgress(progressId, data) {
    data.progress_id = progressId;
    return this.http.post(`${this.apiUrl}/study-progress/update.php`, data);
  }
  deleteStudyProgress(data) {
    return this.http.post(`${this.apiUrl}/study-progress/delete.php`, data);
  }
  getStudyProgressReport(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/study-progress/report.php`, { params: httpParams });
  }
  static \u0275fac = function StudyProgressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudyProgressService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudyProgressService, factory: _StudyProgressService.\u0275fac, providedIn: "root" });
};

export {
  StudyProgressService
};
//# sourceMappingURL=chunk-IAPUA4JQ.js.map
