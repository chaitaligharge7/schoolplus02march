import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCommittees(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/committees/list.php`, { params: httpParams });
  }

  createCommittee(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/committees/list.php`, data);
  }

  getMembers(committeeId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/committees/members.php`, {
      params: { committee_id: committeeId }
    });
  }

  addMember(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/committees/members.php`, data);
  }

  removeMember(memberId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/committees/members.php`, {
      body: { member_id: memberId }
    });
  }
}

