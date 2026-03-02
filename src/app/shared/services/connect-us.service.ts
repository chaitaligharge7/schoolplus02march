import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectUsService {
  constructor(private http: HttpClient) {}

  getConnectUs(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/connect-us/get.php`);
  }

  getConnectUsList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/connect-us/list.php`);
  }

  createConnectUs(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/connect-us/create.php`, data);
  }

  updateConnectUs(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/connect-us/update.php`, data);
  }
}

