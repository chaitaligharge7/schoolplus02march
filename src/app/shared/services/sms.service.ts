import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSmsList(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/sms/list.php`, { params: httpParams });
  }

  sendSms(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sms/send.php`, data);
  }
}

