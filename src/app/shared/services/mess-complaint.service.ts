import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessComplaintService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMessComplaints(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/mess-complaints/list.php`, { params: httpParams });
  }

  createMessComplaint(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mess-complaints/list.php`, data);
  }
    
  updateMessComplaint(complaintId: number, data: any): Observable<any> {
    const payload = { complaint_id: complaintId, ...data };
    return this.http.put<any>(`${this.apiUrl}/mess-complaints/update.php`, payload);
  }

  deleteMessComplaint(complaintId: number): Observable<any> {
    const payload = { complaint_id: complaintId };
    return this.http.request<any>('DELETE', `${this.apiUrl}/mess-complaints/delete.php`, { body: payload });
  }

  resolveComplaint(complaintId: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mess-complaints/resolve.php`, {
      complaint_id: complaintId,
      ...data
    });
  }
}

