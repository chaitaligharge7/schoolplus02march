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

// src/app/shared/services/cleaning.service.ts
var CleaningService = class _CleaningService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCleaningSchedules(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/cleaning/list.php`, {
      params: httpParams
    });
  }
  createCleaningSchedule(data) {
    return this.http.post(`${this.apiUrl}/cleaning/list.php`, data);
  }
  completeCleaning(scheduleId, options) {
    return this.http.post(`${this.apiUrl}/cleaning/complete.php`, __spreadValues({ schedule_id: scheduleId }, options));
  }
  getDutyStatus() {
    return this.http.get(`${this.apiUrl}/housekeeping/duty-status.php`);
  }
  dutyLogin() {
    return this.http.post(`${this.apiUrl}/housekeeping/duty-login.php`, {});
  }
  dutyLogout(logId) {
    return this.http.post(`${this.apiUrl}/housekeeping/duty-logout.php`, logId ? { log_id: logId } : {});
  }
  updateCleaningSchedule(data) {
    return this.http.post(`${this.apiUrl}/cleaning/update.php`, data);
  }
  deleteCleaningSchedule(scheduleId) {
    return this.http.delete(`${this.apiUrl}/cleaning/delete.php`, {
      body: { schedule_id: scheduleId }
    });
  }
  static \u0275fac = function CleaningService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CleaningService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CleaningService, factory: _CleaningService.\u0275fac, providedIn: "root" });
};

export {
  CleaningService
};
//# sourceMappingURL=chunk-THBM6DIN.js.map
