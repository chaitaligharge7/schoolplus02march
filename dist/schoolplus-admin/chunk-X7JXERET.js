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

// src/app/shared/services/timetable.service.ts
var TimetableService = class _TimetableService {
  http;
  constructor(http) {
    this.http = http;
  }
  getTimetable(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/timetable/get.php`, { params: httpParams });
  }
  getTimetableByTeacher(teacherId) {
    return this.http.get(`${environment.apiUrl}/timetable/get-by-teacher.php`, {
      params: { teacher_id: teacherId.toString() }
    });
  }
  getPeriods() {
    return this.http.get(`${environment.apiUrl}/timetable/periods.php`);
  }
  createTimetable(timetableData) {
    return this.http.post(`${environment.apiUrl}/timetable/create.php`, timetableData);
  }
  bulkCreateTimetable(payload) {
    return this.http.post(`${environment.apiUrl}/timetable/bulk-create.php`, payload);
  }
  updateTimetable(timetableId, timetableData) {
    return this.http.post(`${environment.apiUrl}/timetable/update.php`, __spreadValues({
      timetable_id: timetableId
    }, timetableData));
  }
  deleteTimetable(timetableId) {
    return this.http.post(`${environment.apiUrl}/timetable/delete.php`, {
      timetable_id: timetableId
    });
  }
  static \u0275fac = function TimetableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimetableService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimetableService, factory: _TimetableService.\u0275fac, providedIn: "root" });
};

export {
  TimetableService
};
//# sourceMappingURL=chunk-X7JXERET.js.map
