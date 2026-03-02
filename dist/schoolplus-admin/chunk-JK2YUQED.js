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

// src/app/shared/services/exam-type.service.ts
var ExamTypeService = class _ExamTypeService {
  http;
  constructor(http) {
    this.http = http;
  }
  getExamTypes(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/exam_types/list.php`, { params: httpParams });
  }
  getExamType(examTypeId) {
    return this.http.get(`${environment.apiUrl}/exam_types/get.php`, {
      params: { exam_type_id: examTypeId }
    });
  }
  createExamType(examTypeData) {
    return this.http.post(`${environment.apiUrl}/exam_types/create.php`, examTypeData);
  }
  updateExamType(examTypeId, examTypeData) {
    return this.http.post(`${environment.apiUrl}/exam_types/update.php`, __spreadValues({
      exam_type_id: examTypeId
    }, examTypeData));
  }
  deleteExamType(examTypeId) {
    return this.http.post(`${environment.apiUrl}/exam_types/delete.php`, {
      exam_type_id: examTypeId
    });
  }
  static \u0275fac = function ExamTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExamTypeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExamTypeService, factory: _ExamTypeService.\u0275fac, providedIn: "root" });
};

export {
  ExamTypeService
};
//# sourceMappingURL=chunk-JK2YUQED.js.map
