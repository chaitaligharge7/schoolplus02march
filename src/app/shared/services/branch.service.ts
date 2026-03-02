import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBranches(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] != null && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/branches/list.php`, { params: httpParams });
  }

  getBranch(branchId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/branches/get.php`, {
      params: { branch_id: branchId }
    });
  }

  createBranch(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/branches/create.php`, data);
  }

  updateBranch(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/branches/update.php`, data);
  }

  deleteBranch(branchId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/branches/delete.php`, { branch_id: branchId });
  }
}
