import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getChartData(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/charts/data.php`, { params: httpParams });
  }

  exportChart(chartData: any, format: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/charts/export.php`, {
      chart_data: chartData,
      format: format
    });
  }
}

