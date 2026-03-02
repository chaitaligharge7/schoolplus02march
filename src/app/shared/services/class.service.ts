import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient) {}

  getClasses(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/classes/list.php`, { params: httpParams });
  }

  getSections(classId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/sections/list.php`, {
      params: { class_id: classId }
    });
  }

  getClassSubjects(classId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/subjects/list.php`, {
      params: { class_id: classId }
    });
  }

  getClass(classId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/classes/get.php`, {
      params: { class_id: classId }
    });
  }

  createClass(classData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/classes/create.php`, classData);
  }

  updateClass(classId: number, classData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/classes/update.php`, {
      class_id: classId,
      ...classData
    });
  }

  deleteClass(classId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/classes/delete.php`, {
      class_id: classId
    });
  }
}
