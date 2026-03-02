import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  constructor(private http: HttpClient) {}

  getDesignations(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/designations/list.php`, { params: httpParams });
  }

  getDesignation(designationId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/designations/get.php`, {
      params: { designation_id: designationId }
    });
  }

  createDesignation(designationData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/designations/create.php`, designationData);
  }

  updateDesignation(designationId: number, designationData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/designations/update.php`, {
      designation_id: designationId,
      ...designationData
    });
  }

  deleteDesignation(designationId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/designations/delete.php`, {
      designation_id: designationId
    });
  }
}
