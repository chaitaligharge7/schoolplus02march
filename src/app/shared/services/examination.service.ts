import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  constructor(private http: HttpClient) {}

  getExaminations(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/examinations/list.php`, { params: httpParams });
  }

  getExamination(examinationId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/examinations/get.php`, {
      params: { examination_id: examinationId }
    });
  }

  createExamination(examinationData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/examinations/create.php`, examinationData);
  }

  updateExamination(examinationId: number, examinationData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/examinations/update.php`, {
      examination_id: examinationId,
      ...examinationData
    });
  }

  deleteExamination(examinationId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/examinations/delete.php`, {
      examination_id: examinationId
    });
  }

  enterResults(examinationId: number, results: any[]): Observable<any> {
    return this.http.post(`${environment.apiUrl}/examinations/enter-results.php`, {
      examination_id: examinationId,
      results: results
    });
  }
}

