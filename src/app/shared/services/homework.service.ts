import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  constructor(private http: HttpClient) {}

  getHomeworks(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/homework/list.php`, { params: httpParams });
  }

  getHomework(homeworkId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/homework/get.php`, {
      params: { homework_id: homeworkId }
    });
  }

  createHomework(homeworkData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/homework/create.php`, homeworkData);
  }

  updateHomework(homeworkId: number, homeworkData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/homework/update.php`, {
      homework_id: homeworkId,
      ...homeworkData
    });
  }

  deleteHomework(homeworkId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/homework/delete.php`, {
      homework_id: homeworkId
    });
  }
}

