import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/classwork.service.ts
var ClassworkService = class _ClassworkService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getClasswork(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/classwork/list.php`, { params: httpParams });
  }
  createClasswork(data) {
    return this.http.post(`${this.apiUrl}/classwork/create.php`, data);
  }
  updateClasswork(data) {
    return this.http.post(`${this.apiUrl}/classwork/update.php`, data);
  }
  deleteClasswork(data) {
    return this.http.post(`${this.apiUrl}/classwork/delete.php`, data);
  }
  getSubmissions(classworkId) {
    return this.http.get(`${this.apiUrl}/classwork/submissions.php`, {
      params: { classwork_id: classworkId }
    });
  }
  submitClasswork(data) {
    return this.http.post(`${this.apiUrl}/classwork/submissions.php`, data);
  }
  provideFeedback(submissionId, feedback, marks) {
    return this.http.post(`${this.apiUrl}/classwork/submissions.php`, {
      action: "feedback",
      submission_id: submissionId,
      feedback,
      marks
    });
  }
  static \u0275fac = function ClassworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassworkService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClassworkService, factory: _ClassworkService.\u0275fac, providedIn: "root" });
};

export {
  ClassworkService
};
//# sourceMappingURL=chunk-EFMPRXWF.js.map
