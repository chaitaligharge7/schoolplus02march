import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamTypeService {
  constructor(private http: HttpClient) {}

  getExamTypes(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/exam_types/list.php`, { params: httpParams });
  }

  getExamType(examTypeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/exam_types/get.php`, {
      params: { exam_type_id: examTypeId }
    });
  }

  createExamType(examTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/exam_types/create.php`, examTypeData);
  }

  updateExamType(examTypeId: number, examTypeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/exam_types/update.php`, {
      exam_type_id: examTypeId,
      ...examTypeData
    });
  }

  deleteExamType(examTypeId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/exam_types/delete.php`, {
      exam_type_id: examTypeId
    });
  }
}

