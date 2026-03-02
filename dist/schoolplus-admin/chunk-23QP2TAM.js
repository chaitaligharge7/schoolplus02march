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

// src/app/shared/services/class.service.ts
var ClassService = class _ClassService {
  http;
  constructor(http) {
    this.http = http;
  }
  getClasses(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/classes/list.php`, { params: httpParams });
  }
  getSections(classId) {
    return this.http.get(`${environment.apiUrl}/sections/list.php`, {
      params: { class_id: classId }
    });
  }
  getClassSubjects(classId) {
    return this.http.get(`${environment.apiUrl}/subjects/list.php`, {
      params: { class_id: classId }
    });
  }
  getClass(classId) {
    return this.http.get(`${environment.apiUrl}/classes/get.php`, {
      params: { class_id: classId }
    });
  }
  createClass(classData) {
    return this.http.post(`${environment.apiUrl}/classes/create.php`, classData);
  }
  updateClass(classId, classData) {
    return this.http.post(`${environment.apiUrl}/classes/update.php`, __spreadValues({
      class_id: classId
    }, classData));
  }
  deleteClass(classId) {
    return this.http.post(`${environment.apiUrl}/classes/delete.php`, {
      class_id: classId
    });
  }
  static \u0275fac = function ClassService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClassService, factory: _ClassService.\u0275fac, providedIn: "root" });
};

export {
  ClassService
};
//# sourceMappingURL=chunk-23QP2TAM.js.map
