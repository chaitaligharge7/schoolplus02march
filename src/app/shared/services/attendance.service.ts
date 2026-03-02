import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  getAttendanceTypes(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/attendance/types.php`, { params: httpParams });
  }

  getAttendanceByStudent(studentId: number, startDate: string, endDate: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, {
      params: {
        student_id: studentId.toString(),
        start_date: startDate,
        end_date: endDate
      }
    });
  }

  getAttendanceByClassSection(classId: number, sectionId: number, date: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, {
      params: {
        class_id: classId.toString(),
        section_id: sectionId.toString(),
        date: date
      }
    });
  }

  markAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/attendance/mark-attendance.php`, attendanceData);
  }

  getAttendance(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/attendance/get-attendance.php`, { params: httpParams });
  }

  getAttendanceType(attendanceTypeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/attendance/attendance-types-get.php`, {
      params: { attendance_type_id: attendanceTypeId }
    });
  }

  createAttendanceType(attendanceTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-create.php`, attendanceTypeData);
  }

  updateAttendanceType(attendanceTypeId: number, attendanceTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-update.php`, {
      attendance_type_id: attendanceTypeId,
      ...attendanceTypeData
    });
  }

  deleteAttendanceType(attendanceTypeId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/attendance/attendance-types-delete.php`, {
      attendance_type_id: attendanceTypeId
    });
  }
}

