import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDocuments(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/documents/list.php`, { params: httpParams });
  }

  generateBonafide(studentId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/generate-bonafide.php`, { student_id: studentId });
  }

  generateLeaving(studentId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/generate-leaving.php`, { student_id: studentId });
  }

  getHalfDayPermissions(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/documents/half-day-permission.php`, { params: httpParams });
  }

  createHalfDayPermission(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/half-day-permission.php`, data);
  }

  approveHalfDayPermission(permissionId: number, action: 'approve' | 'reject'): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/half-day-permission.php`, {
      action: 'approve',
      permission_id: permissionId,
      approval_action: action
    });
  }
    deleteDocument(documentId: number): Observable<any> {
  return this.http.delete<any>(
    `${this.apiUrl}/documents/delete.php`,
    {
      body: { document_id: documentId }
    }
  );
}

  uploadDocument(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/generate-bonafide.php`, data);
  }
   updateDocument(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/documents/update.php`, formData);
  }

  getDownloadUrl(filePath: string): string {
    if (!filePath) return '';
    if (filePath.startsWith('http')) return filePath;
    return `${this.apiUrl}/download.php?file=${encodeURIComponent(filePath)}`;
  }
}

