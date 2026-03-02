import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/remedial.service.ts
var RemedialService = class _RemedialService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getBatches(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/remedial/list.php`, { params: httpParams });
  }
  createBatch(data) {
    return this.http.post(`${this.apiUrl}/remedial/list.php`, data);
  }
  getBatchStudents(batchId) {
    return this.http.get(`${this.apiUrl}/remedial/students.php`, {
      params: { batch_id: batchId }
    });
  }
  addStudent(data) {
    return this.http.post(`${this.apiUrl}/remedial/students.php`, data);
  }
  removeStudent(remedialStudentId) {
    return this.http.delete(`${this.apiUrl}/remedial/students.php`, {
      body: { remedial_student_id: remedialStudentId }
    });
  }
  updateBatch(data) {
    return this.http.put(`${this.apiUrl}/remedial/update.php`, data);
  }
  deleteBatch(batchId) {
    return this.http.delete(`${this.apiUrl}/remedial/delete.php`, {
      body: { batch_id: batchId }
    });
  }
  static \u0275fac = function RemedialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RemedialService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemedialService, factory: _RemedialService.\u0275fac, providedIn: "root" });
};

export {
  RemedialService
};
//# sourceMappingURL=chunk-LRRU4FDA.js.map
