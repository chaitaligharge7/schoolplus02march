import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitTestMarksService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUnitTestMarks(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/unit-test-marks/list.php`, { params: httpParams });
  }

  createUnitTestMarks(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/unit-test-marks/list.php`, data);
  }

  updateUnitTestMarks(testId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/unit-test-marks/update.php`, {
      test_id: testId,
      ...data
    });
  }

  getUnitTestReport(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/unit-test-marks/report.php`, { params: httpParams });
  }
}

