import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getDepartments(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/departments/list.php`, { params: httpParams });
  }

  getDepartment(departmentId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/departments/get.php`, {
      params: { department_id: departmentId }
    });
  }

  createDepartment(departmentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/departments/create.php`, departmentData);
  }

  updateDepartment(departmentId: number, departmentData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/departments/update.php`, {
      department_id: departmentId,
      ...departmentData
    });
  }

  deleteDepartment(departmentId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/departments/delete.php`, {
      department_id: departmentId
    });
  }
}
