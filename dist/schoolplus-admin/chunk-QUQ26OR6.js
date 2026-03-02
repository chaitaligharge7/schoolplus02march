import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/leave-management.service.ts
var LeaveManagementService = class _LeaveManagementService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getLeaves(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] != null && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/leave-management/list.php`, { params: httpParams });
  }
  getLeave(leaveId) {
    return this.http.get(`${this.apiUrl}/leave-management/get.php`, {
      params: { leave_id: leaveId }
    });
  }
  createLeave(data) {
    return this.http.post(`${this.apiUrl}/leave-management/create.php`, data);
  }
  updateLeave(data) {
    return this.http.post(`${this.apiUrl}/leave-management/update.php`, data);
  }
  deleteLeave(leaveId) {
    return this.http.post(`${this.apiUrl}/leave-management/delete.php`, { leave_id: leaveId });
  }
  static \u0275fac = function LeaveManagementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveManagementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeaveManagementService, factory: _LeaveManagementService.\u0275fac, providedIn: "root" });
};

export {
  LeaveManagementService
};
//# sourceMappingURL=chunk-QUQ26OR6.js.map
