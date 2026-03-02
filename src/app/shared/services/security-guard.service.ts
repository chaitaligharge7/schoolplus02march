import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SecurityGuardService {
  private apiUrl = environment.apiUrl;
  private base = `${this.apiUrl}/security-guard`;

  constructor(private http: HttpClient) {}

  getInquiries(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.base}/inquiry-list.php`, { params: p });
  }
  getInquiry(inquiryId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/inquiry-get.php`, { params: { inquiry_id: inquiryId } });
  }
  createInquiry(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/inquiry-create.php`, data);
  }
  updateInquiry(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/inquiry-update.php`, data);
  }
  deleteInquiry(inquiryId: number): Observable<any> {
    return this.http.post<any>(`${this.base}/inquiry-delete.php`, { inquiry_id: inquiryId });
  }
  forwardInquiry(data: { inquiry_id: number; forwarded_to_user_id?: number }): Observable<any> {
    return this.http.post<any>(`${this.base}/inquiry-forward.php`, data);
  }
  getInquiryAlerts(): Observable<any> {
    return this.http.get<any>(`${this.base}/inquiry-alerts.php`);
  }

  getGatePasses(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.base}/gate-pass-list.php`, { params: p });
  }
  getGatePass(gatePassId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/gate-pass-get.php`, { params: { gate_pass_id: gatePassId } });
  }
  createGatePass(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/gate-pass-create.php`, data);
  }
  updateGatePass(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/gate-pass-update.php`, data);
  }
  deleteGatePass(gatePassId: number): Observable<any> {
    return this.http.post<any>(`${this.base}/gate-pass-delete.php`, { gate_pass_id: gatePassId });
  }

  getDailyReports(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.base}/daily-report-list.php`, { params: p });
  }
  getDailyReport(reportId: number): Observable<any> {
    return this.http.get<any>(`${this.base}/daily-report-get.php`, { params: { report_id: reportId } });
  }
  createDailyReport(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/daily-report-create.php`, data);
  }
  updateDailyReport(data: any): Observable<any> {
    return this.http.post<any>(`${this.base}/daily-report-update.php`, data);
  }
  deleteDailyReport(reportId: number): Observable<any> {
    return this.http.post<any>(`${this.base}/daily-report-delete.php`, { report_id: reportId });
  }
}
