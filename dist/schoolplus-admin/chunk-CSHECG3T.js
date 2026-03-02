import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/course.service.ts
var CourseService = class _CourseService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCourses(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/courses/list.php`, {
      params: httpParams
    });
  }
  createCourse(data) {
    return this.http.post(`${this.apiUrl}/courses/list.php`, data);
  }
  getEnrollments(courseId) {
    return this.http.get(`${this.apiUrl}/courses/enrollments.php`, {
      params: { course_id: courseId }
    });
  }
  enrollStudent(data) {
    return this.http.post(`${this.apiUrl}/courses/enrollments.php`, data);
  }
  withdrawStudent(enrollmentId) {
    return this.http.delete(`${this.apiUrl}/courses/enrollments.php`, {
      body: { enrollment_id: enrollmentId }
    });
  }
  updateCourse(data) {
    return this.http.put(`${this.apiUrl}/courses/update.php`, data);
  }
  deleteCourse(courseId) {
    return this.http.delete(`${this.apiUrl}/courses/delete.php`, {
      body: { course_id: courseId }
    });
  }
  static \u0275fac = function CourseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
};

export {
  CourseService
};
//# sourceMappingURL=chunk-CSHECG3T.js.map
