import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InwardRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInwardRequests(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/inward-requests/list.php`, { params: httpParams });
  }

  getInwardRequest(requestId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/inward-requests/get.php`, { params: { request_id: requestId } });
  }

  createInwardRequest(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inward-requests/list.php`, data);
  }

  resolveRequest(requestId: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/inward-requests/resolve.php`, {
      request_id: requestId,
      ...data
    });
  }
  updateInwardRequest(payload: {
    request_id: number;         // REQUIRED
    subject?: string;
    description?: string;
    priority?: number;
    assigned_to?: number;
    status?: string;
    due_date?: string;
  }): Observable<any> {
    if (!payload.request_id) {
      throw new Error('request_id is required for update');
    }

    return this.http.request<any>('PUT', `${this.apiUrl}/inward-requests/update.php`, {
      body: payload
    });
  }
  deleteInwardRequest(requestId: number): Observable<any> {
    if (!requestId) {
      throw new Error('request_id is required for delete');
    }

    // DELETE can be called with body or query params depending on backend
    // Here, we send it as JSON body
    return this.http.request<any>('DELETE', `${this.apiUrl}/inward-requests/delete.php`, {
      body: { request_id: requestId }
    });
  }
}