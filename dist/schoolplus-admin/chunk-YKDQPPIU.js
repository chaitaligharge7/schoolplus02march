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

// src/app/shared/services/subject.service.ts
var SubjectService = class _SubjectService {
  http;
  constructor(http) {
    this.http = http;
  }
  getSubjects(classId, params) {
    let httpParams = new HttpParams();
    if (classId) {
      httpParams = httpParams.set("class_id", classId.toString());
    }
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/subjects/list.php`, { params: httpParams });
  }
  getSubject(subjectId) {
    return this.http.get(`${environment.apiUrl}/subjects/get.php`, {
      params: { subject_id: subjectId }
    });
  }
  createSubject(subjectData) {
    return this.http.post(`${environment.apiUrl}/subjects/create.php`, subjectData);
  }
  updateSubject(subjectId, subjectData) {
    return this.http.post(`${environment.apiUrl}/subjects/update.php`, __spreadValues({
      subject_id: subjectId
    }, subjectData));
  }
  deleteSubject(subjectId) {
    return this.http.post(`${environment.apiUrl}/subjects/delete.php`, {
      subject_id: subjectId
    });
  }
  static \u0275fac = function SubjectService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubjectService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubjectService, factory: _SubjectService.\u0275fac, providedIn: "root" });
};

export {
  SubjectService
};
//# sourceMappingURL=chunk-YKDQPPIU.js.map
