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

// src/app/shared/services/attendance.service.ts
var AttendanceService = class _AttendanceService {
  http;
  constructor(http) {
    this.http = http;
  }
  getAttendanceTypes(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/attendance/types.php`, { params: httpParams });
  }
  getAttendanceByStudent(studentId, startDate, endDate) {
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, {
      params: {
        student_id: studentId.toString(),
        start_date: startDate,
        end_date: endDate
      }
    });
  }
  getAttendanceByClassSection(classId, sectionId, date) {
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, {
      params: {
        class_id: classId.toString(),
        section_id: sectionId.toString(),
        date
      }
    });
  }
  markAttendance(attendanceData) {
    return this.http.post(`${environment.apiUrl}/attendance/mark-attendance.php`, attendanceData);
  }
  getAttendance(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, { params: httpParams });
  }
  getAttendanceType(attendanceTypeId) {
    return this.http.get(`${environment.apiUrl}/attendance/attendance-types-get.php`, {
      params: { attendance_type_id: attendanceTypeId }
    });
  }
  createAttendanceType(attendanceTypeData) {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-create.php`, attendanceTypeData);
  }
  updateAttendanceType(attendanceTypeId, attendanceTypeData) {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-update.php`, __spreadValues({
      attendance_type_id: attendanceTypeId
    }, attendanceTypeData));
  }
  deleteAttendanceType(attendanceTypeId) {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-delete.php`, {
      attendance_type_id: attendanceTypeId
    });
  }
  static \u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
};

export {
  AttendanceService
};
//# sourceMappingURL=chunk-CPUKNHE4.js.map
