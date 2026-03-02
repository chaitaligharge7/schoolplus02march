import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DoubtHandlingService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getDoubts(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/doubt-handling/list.php`, { params: p });
  }
  getDoubt(doubtId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/doubt-handling/get.php`, { params: { doubt_id: doubtId } });
  }
  createDoubt(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/doubt-handling/create.php`, data);
  }
  updateDoubt(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/doubt-handling/update.php`, data);
  }
  deleteDoubt(doubtId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/doubt-handling/delete.php`,{doubt_id: doubtId });
  }
}
