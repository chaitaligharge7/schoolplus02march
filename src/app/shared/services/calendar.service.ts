import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/calendar/events.php`, { params: httpParams });
  }

  getEvent(eventId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/calendar/get.php`, {
      params: { event_id: eventId }
    });
  }

  createEvent(eventData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/calendar/create.php`, eventData);
  }

  updateEvent(eventId: number, eventData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/calendar/update.php`, {
      event_id: eventId,
      ...eventData
    });
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/calendar/delete.php`, {
      event_id: eventId
    });
  }
}

