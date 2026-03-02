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

// src/app/shared/services/student.service.ts
var StudentService = class _StudentService {
  http;
  constructor(http) {
    this.http = http;
  }
  getStudents(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/students/list.php`, { params: httpParams });
  }
  getStudent(studentId) {
    return this.http.get(`${environment.apiUrl}/students/get.php`, {
      params: { student_id: studentId }
    });
  }
  createStudent(studentData) {
    return this.http.post(`${environment.apiUrl}/students/create.php`, studentData);
  }
  updateStudent(studentId, studentData) {
    return this.http.post(`${environment.apiUrl}/students/update.php`, __spreadValues({
      student_id: studentId
    }, studentData));
  }
  deleteStudent(studentId) {
    return this.http.post(`${environment.apiUrl}/students/delete.php`, {
      student_id: studentId
    });
  }
  static \u0275fac = function StudentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StudentService, factory: _StudentService.\u0275fac, providedIn: "root" });
};

export {
  StudentService
};
//# sourceMappingURL=chunk-YLBONAI4.js.map
