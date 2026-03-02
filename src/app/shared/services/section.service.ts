import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  constructor(private http: HttpClient) {}

  getSections(classId?: number, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (classId) {
      httpParams = httpParams.set('class_id', classId.toString());
    }
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${environment.apiUrl}/sections/list.php`, { params: httpParams });
  }

  getSection(sectionId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/sections/get.php`, {
      params: { section_id: sectionId }
    });
  }

  createSection(sectionData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/sections/create.php`, sectionData);
  }

  updateSection(sectionId: number, sectionData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/sections/update.php`, {
      section_id: sectionId,
      ...sectionData
    });
  }

  deleteSection(sectionId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/sections/delete.php`, {
      section_id: sectionId
    });
  }
}
