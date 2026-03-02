import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/syllabus.service.ts
var SyllabusService = class _SyllabusService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getSyllabus(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/syllabus/list.php`, { params: httpParams });
  }
  getSyllabusById(id) {
    return this.http.get(`${this.apiUrl}/syllabus/get.php?id=${id}`);
  }
  createSyllabus(data) {
    return this.http.post(`${this.apiUrl}/syllabus/create.php`, data);
  }
  updateSyllabus(id, data) {
    return this.http.post(`${this.apiUrl}/syllabus/update.php`, data);
  }
  deleteSyllabus(id) {
    return this.http.post(`${this.apiUrl}/syllabus/delete.php`, { id });
  }
  updateCompletion(data) {
    return this.http.post(`${this.apiUrl}/syllabus/update-completion.php`, data);
  }
  getCompletionReport(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/syllabus/completion-report.php`, { params: httpParams });
  }
  exportCompletionReport(reportData) {
    return this.http.post(`${this.apiUrl}/syllabus/export-completion-report.php`, { report_data: reportData });
  }
  static \u0275fac = function SyllabusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SyllabusService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SyllabusService, factory: _SyllabusService.\u0275fac, providedIn: "root" });
};

export {
  SyllabusService
};
//# sourceMappingURL=chunk-QT36LC3Q.js.map
