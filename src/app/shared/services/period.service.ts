import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  constructor(private http: HttpClient) {}

  getPeriods(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== '' && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/periods/list.php`, { params: httpParams });
  }

  getPeriod(periodId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/timetable/period-get.php`, {
      params: { period_id: periodId }
    });
  }

  createPeriod(periodData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/period-create.php`, periodData);
  }

  updatePeriod(periodId: number, periodData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/period-update.php`, {
      period_id: periodId,
      ...periodData
    });
  }

  deletePeriod(periodId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/timetable/period-delete.php`, {
      period_id: periodId
    });
  }
}
