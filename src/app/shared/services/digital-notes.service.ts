import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DigitalNotesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getResources(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/digital-notes/list.php`, { params: p });
  }
  getResource(resourceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/digital-notes/get.php`, { params: { resource_id: resourceId } });
  }
  createResource(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/digital-notes/create.php`, data);
  }
  deleteResource(resourceId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/digital-notes/delete.php`, { resource_id: resourceId });
  }
  updateResource(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/digital-notes/update.php`, payload);
  }
}
