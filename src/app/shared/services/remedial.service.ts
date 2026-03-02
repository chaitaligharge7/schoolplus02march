import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemedialService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBatches(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/remedial/list.php`, { params: httpParams });
  }

  createBatch(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/remedial/list.php`, data);
  }

  getBatchStudents(batchId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/remedial/students.php`, {
      params: { batch_id: batchId }
    });
  }

  addStudent(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/remedial/students.php`, data);
  }

  removeStudent(remedialStudentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remedial/students.php`, {
      body: { remedial_student_id: remedialStudentId }
    });
  }

  updateBatch(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/remedial/update.php`, data);
  }
  
  deleteBatch(batchId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remedial/delete.php`, {
      body: { batch_id: batchId }
    });
  }

}

