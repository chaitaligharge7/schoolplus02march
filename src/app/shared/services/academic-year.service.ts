import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearService {
  constructor(private http: HttpClient) {}

  /** Returns the current academic year id (is_current == 1) or the first year. Use for default in create forms. */
  getCurrentAcademicYearId(): Observable<number | null> {
    return this.getAcademicYears().pipe(
      map((res: any) => {
        const list = res?.data?.academic_years || [];
        const current = list.find((y: any) => y.is_current == 1);
        return current ? current.academic_year_id : (list[0]?.academic_year_id ?? null);
      })
    );
  }

  getAcademicYears(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/academic_years/list.php`, { params: httpParams });
  }

  getAcademicYear(academicYearId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/academic_years/get.php`, {
      params: { academic_year_id: academicYearId }
    });
  }

  createAcademicYear(academicYearData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/academic_years/create.php`, academicYearData);
  }

  updateAcademicYear(academicYearId: number, academicYearData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/academic_years/update.php`, {
      academic_year_id: academicYearId,
      ...academicYearData
    });
  }

  deleteAcademicYear(academicYearId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/academic_years/delete.php`, {
      academic_year_id: academicYearId
    });
  }
}

