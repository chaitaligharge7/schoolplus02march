import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReceptionistService {
  private apiUrl = environment.apiUrl;
  private base = `${this.apiUrl}/receptionist`;

  constructor(private http: HttpClient) {}

  getDashboardStats(): Observable<any> {
    return this.http.get<any>(`${this.base}/dashboard.php`);
  }

  getInquiry(inquiryId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/inquiry-get.php`, { params: { inquiry_id: inquiryId } });
  }
  getInquiries(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.base}/inquiries-list.php`, { params: p });
  }
  markPicked(inquiryId: number): Observable<any> {
    return this.http.post<any>(`${this.base}/inquiry-mark-picked.php`, { inquiry_id: inquiryId });
  }
  convertToLead(data: { inquiry_id: number; counselor_id: number; student_name?: string; parent_name?: string; mobile?: string; email?: string; address?: string; interested_class_id?: number; enquiry_source?: string; remarks?: string }): Observable<any> {
    return this.http.post<any>(`${this.base}/convert-to-lead.php`, data);
  }
  getCounselors(): Observable<any> {
    return this.http.get<any>(`${this.base}/counselors-list.php`);
  }
}
