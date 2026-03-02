import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SportsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getEvents(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/sports/list.php`, { params: p });
  }
  getEvent(eventId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sports/get.php`, { params: { event_id: eventId } });
  }
  createEvent(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sports/create.php`, data);
  }
  updateEvent(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sports/update.php`, data);
  }
  deleteEvent(eventId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sports/delete.php`, { event_id: eventId });
  }
}
