import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  getReport(reportType: string, params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/reports/${reportType}.php`, { params: httpParams });
  }

  exportReport(reportType: string, params: any, format: string = 'pdf'): Observable<Blob> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    httpParams = httpParams.set('format', format);
    return this.http.get(`${environment.apiUrl}/reports/${reportType}.php`, {
      params: httpParams,
      responseType: 'blob'
    });
  }
}

