import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLeaves(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] != null && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/leave-management/list.php`, { params: httpParams });
  }

  getLeave(leaveId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/leave-management/get.php`, {
      params: { leave_id: leaveId }
    });
  }

  createLeave(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/leave-management/create.php`, data);
  }

  updateLeave(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/leave-management/update.php`, data);
  }

  deleteLeave(leaveId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/leave-management/delete.php`, { leave_id: leaveId });
  }
}
