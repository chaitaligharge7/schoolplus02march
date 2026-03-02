import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  constructor(private http: HttpClient) {}

  getTimetable(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/timetable/get.php`, { params: httpParams });
  }

  getTimetableByTeacher(teacherId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/timetable/get-by-teacher.php`, {
      params: { teacher_id: teacherId.toString() }
    });
  }

  getPeriods(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/timetable/periods.php`);
  }

  createTimetable(timetableData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/create.php`, timetableData);
  }

  bulkCreateTimetable(payload: { class_id: number; section_id?: number | null; entries: any[] }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/bulk-create.php`, payload);
  }

  updateTimetable(timetableId: number, timetableData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/update.php`, {
      timetable_id: timetableId,
      ...timetableData
    });
  }

  deleteTimetable(timetableId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/delete.php`, {
      timetable_id: timetableId
    });
  }
}

