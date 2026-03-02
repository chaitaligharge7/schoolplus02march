import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLabItems(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/lab/items.php`, { params: httpParams });
  }

  getLabPracticals(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/lab/practicals.php`, { params: httpParams });
  }

  createLabItem(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/lab/items.php`, data);
  }

  createLabPractical(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/lab/practicals.php`, data);
  }



  updateLabItem(data: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/lab/update.php`, data);
}

}