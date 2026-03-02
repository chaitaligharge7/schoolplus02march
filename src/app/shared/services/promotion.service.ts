import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPromotions(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/promotions/list.php`, { params: httpParams });
  }

  createPromotion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/promotions/create.php`, data);
  }
}

