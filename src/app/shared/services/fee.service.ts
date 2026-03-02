import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  constructor(private http: HttpClient) {}

  getFees(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/fees/list.php`, { params: httpParams });
  }

  getFeeTypes(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/types.php`, { params: httpParams });
  }

  assignFeesToStudents(assignmentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/assign-to-students.php`, assignmentData);
  }

  recordPayment(paymentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/payment.php`, paymentData);
  }

  getFee(feeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/fees/get.php`, {
      params: { student_fee_id: feeId }
    });
  }

  getReceipts(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] != null && params[key] !== '' && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/receipts-list.php`, { params: httpParams });
  }

  processPayment(paymentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/payment.php`, paymentData);
  }

  getFeeType(feeTypeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/fees/fee-types-get.php`, {
      params: { fee_type_id: feeTypeId }
    });
  }

  createFeeType(feeTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-create.php`, feeTypeData);
  }

  updateFeeType(feeTypeId: number, feeTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-update.php`, {
      fee_type_id: feeTypeId,
      ...feeTypeData
    });
  }

  deleteFeeType(feeTypeId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/fee-types-delete.php`, {
      fee_type_id: feeTypeId
    });
  }

  getDefaulters(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fees/defaulters.php`, { params: httpParams });
  }

  /** Send fee outstanding reminder to students (or defaulters). */
  sendFeeReminder(payload: { student_ids?: number[]; defaulters_only?: boolean; title?: string; body?: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fees/send-reminder.php`, payload);
  }

  /** Accountant: list admission tickets (pending payment). */
  getAdmissionTickets(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${environment.apiUrl}/accountant/admission-tickets-list.php`, { params: p });
  }

  /** Accountant: record payment for an admission ticket. */
  recordAdmissionPayment(data: { admission_id: number; paid_amount: number; payment_mode: string; payment_date?: string; transaction_id?: string; remarks?: string; send_whatsapp?: boolean; send_email?: boolean }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/accountant/record-admission-payment.php`, data);
  }
}

