import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudyProgressService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStudyProgress(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/study-progress/list.php`, { params: httpParams });
  }

  createStudyProgress(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/study-progress/list.php`, data);
  }

  updateStudyProgress(progressId: number, data: any): Observable<any> {
    data.progress_id = progressId; 
    return this.http.post<any>(`${this.apiUrl}/study-progress/update.php`, data);
  }

  deleteStudyProgress(data: { progress_id?: number; id?: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/study-progress/delete.php`, data);
  }

  getStudyProgressReport(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/study-progress/report.php`, { params: httpParams });
  }
}

