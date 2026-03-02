import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeachers(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/teachers/list.php`, { params: httpParams });
  }

  getTeacher(teacherId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/teachers/get.php`, {
      params: { teacher_id: teacherId }
    });
  }

  createTeacher(teacherData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/teachers/create.php`, teacherData);
  }

  updateTeacher(teacherId: number, teacherData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/teachers/update.php`, {
      teacher_id: teacherId,
      ...teacherData
    });
  }

  deleteTeacher(teacherId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/teachers/delete.php`, {
      teacher_id: teacherId
    });
  }
}

