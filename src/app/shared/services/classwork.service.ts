import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassworkService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClasswork(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/classwork/list.php`, { params: httpParams });
  }

  createClasswork(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/classwork/create.php`, data);
  }

  updateClasswork(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/classwork/update.php`, data);
  }

  deleteClasswork(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/classwork/delete.php`, data);
  }
  
  getSubmissions(classworkId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/classwork/submissions.php`, {
      params: { classwork_id: classworkId }
    });
  }

  submitClasswork(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/classwork/submissions.php`, data);
  }

  provideFeedback(submissionId: number, feedback: string, marks?: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/classwork/submissions.php`, {
      action: 'feedback',
      submission_id: submissionId,
      feedback: feedback,
      marks: marks
    });
  }
}

