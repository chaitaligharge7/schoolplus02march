import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/students/list.php`, { params: httpParams });
  }

  getStudent(studentId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/students/get.php`, {
      params: { student_id: studentId }
    });
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/students/create.php`, studentData);
  }

  updateStudent(studentId: number, studentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/students/update.php`, {
      student_id: studentId,
      ...studentData
    });
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/students/delete.php`, {
      student_id: studentId
    });
  }
}

