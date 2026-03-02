import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentParticipationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getParticipations(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/student-participation/list.php`, { params: httpParams });
  }

  createParticipation(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/student-participation/list.php`, data);
  }
}

