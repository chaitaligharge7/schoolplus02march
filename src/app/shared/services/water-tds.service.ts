import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaterTdsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getWaterTdsReadings(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/water-tds/list.php`, { params: httpParams });
  }

  updateWaterTdsReading(tdsId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/water-tds/update.php`, {
      tds_id: tdsId,
      ...data
    });
  }

  deleteWaterTdsReading(tdsId: number): Observable<any> {
    const payload = { tds_id: tdsId };
    return this.http.request<any>('DELETE', `${this.apiUrl}/water-tds/delete.php`, { body: payload });
  }

  createWaterTdsReading(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/water-tds/list.php`, data);
  }
}

