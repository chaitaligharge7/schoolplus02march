import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniformFineService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUniformFines(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/uniform-fines/list.php`, { params: httpParams });
  }
    
  updateUniformFine(data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/uniform-fines/update.php`, data);
  }
  deleteUniformFine(fineId: number): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/uniform-fines/delete.php`, { fine_id: fineId });
  }
  createUniformFine(data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/uniform-fines/list.php`, data);
  }
}

