import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSyllabus(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/syllabus/list.php`, { params: httpParams });
  }

  getSyllabusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/syllabus/get.php?id=${id}`);
  }

  createSyllabus(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/syllabus/create.php`, data);
  }

  updateSyllabus(id: number, data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/syllabus/update.php`, data);
  }

  deleteSyllabus(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/syllabus/delete.php`, { id });
  }

  updateCompletion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/syllabus/update-completion.php`, data);
  }

  getCompletionReport(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/syllabus/completion-report.php`, { params: httpParams });
  }

  exportCompletionReport(reportData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/syllabus/export-completion-report.php`, { report_data: reportData });
  }
}

