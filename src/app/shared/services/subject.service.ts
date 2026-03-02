import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getSubjects(classId?: number, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (classId) {
      httpParams = httpParams.set('class_id', classId.toString());
    }
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/subjects/list.php`, { params: httpParams });
  }

  getSubject(subjectId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/subjects/get.php`, {
      params: { subject_id: subjectId }
    });
  }

  createSubject(subjectData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/subjects/create.php`, subjectData);
  }

  updateSubject(subjectId: number, subjectData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/subjects/update.php`, {
      subject_id: subjectId,
      ...subjectData
    });
  }

  deleteSubject(subjectId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/subjects/delete.php`, {
      subject_id: subjectId
    });
  }
}
