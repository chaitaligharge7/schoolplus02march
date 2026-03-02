import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getVisitors(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/visitors/list.php`, { params: httpParams });
  }

  createVisitor(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/visitors/list.php`, data);
  }
   deleteVisitor(visitorId: number): Observable<any> {
    // Use DELETE method with JSON body
    return this.http.request<any>('DELETE', `${this.apiUrl}/visitors/delete.php`, {
      body: { visitor_id: visitorId }
    });
  }

  getVisitorCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/visitors/categories.php`);
  }
   // visitor.service.ts
createVisitorCategory(payload: { 
  category_name: string; 
  description?: string; 
  category_status?: string 
}): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/visitors/categories.php`, payload);
  }
  updateCategory(payload: {
    category_id: number;       // required for update
    category_name: string;
    description?: string;
    category_status?: number;  // 1 = active, 0 = inactive
  }): Observable<any> {
    if (!payload.category_id) {
      throw new Error('category_id is required for update');
    }

    return this.http.request<any>('PUT', `${this.apiUrl}/visitors/categories.php`, {
      body: payload
    });
  }

  // DELETE: delete a category
  deleteCategory(categoryId: number): Observable<any> {
    return this.http.request<any>('DELETE', `${this.apiUrl}/visitors/categories.php`, {
      body: { category_id: categoryId }
    });
  }

}

