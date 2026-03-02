import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupportFeedbackService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getTickets(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/support-feedback/list.php`, { params: p });
  }
  getTicket(ticketId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/support-feedback/get.php`, { params: { ticket_id: ticketId } });
  }
  createTicket(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/support-feedback/create.php`, data);
  }
  updateTicket(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/support-feedback/update.php`, data);
  }
}
