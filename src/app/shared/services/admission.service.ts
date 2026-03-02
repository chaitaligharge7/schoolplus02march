import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAdmissions(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/admissions/list.php`, { params: httpParams });
  }

  getAdmission(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admissions/get.php?id=${id}`);
  }

  createAdmission(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admissions/create.php`, data);
  }

  updateAdmission(id: number, data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/admissions/update.php`, { admission_id: id, ...data });
}
  deleteAdmission(id: number): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/admissions/delete.php`, { admission_id: id });
}

  approveAdmission(id: number, action: 'approve' | 'reject'): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admissions/approve.php`, {
      admission_id: id,
      action: action
    });
  }

  /** Accountant: admission tickets (alias). */
  getAdmissionTickets(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/accountant/admission-tickets-list.php`, { params: p });
  }

  recordAdmissionPayment(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/accountant/record-admission-payment.php`, data);
  }

  getReports(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/admissions/reports.php`, { params: httpParams });
  }
}

