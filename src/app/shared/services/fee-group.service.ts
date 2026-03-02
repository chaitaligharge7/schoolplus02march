import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeeGroupService {
  constructor(private http: HttpClient) {}

  getFeeGroups(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/fee_groups/list.php`, { params: httpParams });
  }

  getFeeGroup(feeGroupId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/fee_groups/get.php`, {
      params: { fee_group_id: feeGroupId }
    });
  }

  createFeeGroup(feeGroupData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fee_groups/create.php`, feeGroupData);
  }

  updateFeeGroup(feeGroupId: number, feeGroupData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fee_groups/update.php`, {
      fee_group_id: feeGroupId,
      ...feeGroupData
    });
  }

  deleteFeeGroup(feeGroupId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/fee_groups/delete.php`, {
      fee_group_id: feeGroupId
    });
  }
}
