import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CounselorService {
  private apiUrl = environment.apiUrl;
  private base = `${this.apiUrl}/counselor`;

  constructor(private http: HttpClient) {}

  getLeads(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.base}/leads-list.php`, { params: p });
  }
  getLead(enquiryId?: number, leadId?: number): Observable<any> {
    const params: any = {};
    if (enquiryId) params.enquiry_id = enquiryId;
    if (leadId) params.lead_id = leadId;
    return this.http.get<any>(`${this.base}/lead-get.php`, { params });
  }
  updateLead(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/lead-update.php`, data);
  }
  deleteLead(enquiryId?: number, leadId?: number): Observable<any> {
    const body: any = {};
    if (enquiryId) body.enquiry_id = enquiryId;
    if (leadId) body.lead_id = leadId;
    return this.http.post<any>(`${this.base}/lead-delete.php`, body);
  }
  transferLead(data: { enquiry_id: number; transferred_to_counselor_id: number }): Observable<any> {
    return this.http.post<any>(`${this.base}/lead-transfer.php`, data);
  }
  requestCampusTour(data: { enquiry_id?: number; lead_id?: number }): Observable<any> {
    return this.http.post<any>(`${this.base}/campus-tour-request.php`, data);
  }
  getFacilitySummary(): Observable<any> {
    return this.http.get<any>(`${this.base}/facility-summary.php`);
  }
}
