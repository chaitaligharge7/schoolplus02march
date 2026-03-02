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

// src/app/shared/services/teacher.service.ts
var TeacherService = class _TeacherService {
  http;
  constructor(http) {
    this.http = http;
  }
  getTeachers(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/teachers/list.php`, { params: httpParams });
  }
  getTeacher(teacherId) {
    return this.http.get(`${environment.apiUrl}/teachers/get.php`, {
      params: { teacher_id: teacherId }
    });
  }
  createTeacher(teacherData) {
    return this.http.post(`${environment.apiUrl}/teachers/create.php`, teacherData);
  }
  updateTeacher(teacherId, teacherData) {
    return this.http.post(`${environment.apiUrl}/teachers/update.php`, __spreadValues({
      teacher_id: teacherId
    }, teacherData));
  }
  deleteTeacher(teacherId) {
    return this.http.post(`${environment.apiUrl}/teachers/delete.php`, {
      teacher_id: teacherId
    });
  }
  static \u0275fac = function TeacherService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeacherService, factory: _TeacherService.\u0275fac, providedIn: "root" });
};

export {
  TeacherService
};
//# sourceMappingURL=chunk-T553C5NZ.js.map
