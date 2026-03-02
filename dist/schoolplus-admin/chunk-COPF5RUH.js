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

// src/app/shared/services/examination.service.ts
var ExaminationService = class _ExaminationService {
  http;
  constructor(http) {
    this.http = http;
  }
  getExaminations(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/examinations/list.php`, { params: httpParams });
  }
  getExamination(examinationId) {
    return this.http.get(`${environment.apiUrl}/examinations/get.php`, {
      params: { examination_id: examinationId }
    });
  }
  createExamination(examinationData) {
    return this.http.post(`${environment.apiUrl}/examinations/create.php`, examinationData);
  }
  updateExamination(examinationId, examinationData) {
    return this.http.post(`${environment.apiUrl}/examinations/update.php`, __spreadValues({
      examination_id: examinationId
    }, examinationData));
  }
  deleteExamination(examinationId) {
    return this.http.post(`${environment.apiUrl}/examinations/delete.php`, {
      examination_id: examinationId
    });
  }
  enterResults(examinationId, results) {
    return this.http.post(`${environment.apiUrl}/examinations/enter-results.php`, {
      examination_id: examinationId,
      results
    });
  }
  static \u0275fac = function ExaminationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExaminationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExaminationService, factory: _ExaminationService.\u0275fac, providedIn: "root" });
};

export {
  ExaminationService
};
//# sourceMappingURL=chunk-COPF5RUH.js.map
