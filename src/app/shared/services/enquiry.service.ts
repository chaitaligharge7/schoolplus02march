import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getEnquiries(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/enquiries/list.php`, { params: httpParams });
  }

  getEnquiry(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/enquiries/get.php?id=${id}`);
  }

  createEnquiry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/enquiries/create.php`, data);
  }

  /** Public form submission (no auth). Backend should create enquiry and notify receptionist. */
  createPublicEnquiry(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/enquiries/public-create.php`, data);
  }

  updateEnquiry(id: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/enquiries/update.php`, { ...data, enquiry_id: id });
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
    return this.http.get<any>(`${this.apiUrl}/enquiries/reports.php`, { params: httpParams });
  }

  /** Assign counsellor to enquiry (allot lead). Sends notification to counsellor. */
  assignCounsellor(enquiryId: number, counselorId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/enquiries/assign-counsellor.php`, {
      enquiry_id: enquiryId,
      counselor_id: counselorId
    });
  }
}

