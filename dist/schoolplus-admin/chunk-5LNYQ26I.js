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

// src/app/shared/services/department.service.ts
var DepartmentService = class _DepartmentService {
  http;
  constructor(http) {
    this.http = http;
  }
  getDepartments(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/departments/list.php`, { params: httpParams });
  }
  getDepartment(departmentId) {
    return this.http.get(`${environment.apiUrl}/departments/get.php`, {
      params: { department_id: departmentId }
    });
  }
  createDepartment(departmentData) {
    return this.http.post(`${environment.apiUrl}/departments/create.php`, departmentData);
  }
  updateDepartment(departmentId, departmentData) {
    return this.http.post(`${environment.apiUrl}/departments/update.php`, __spreadValues({
      department_id: departmentId
    }, departmentData));
  }
  deleteDepartment(departmentId) {
    return this.http.post(`${environment.apiUrl}/departments/delete.php`, {
      department_id: departmentId
    });
  }
  static \u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
};

export {
  DepartmentService
};
//# sourceMappingURL=chunk-5LNYQ26I.js.map
