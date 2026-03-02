import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CmsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getPages(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/cms/list.php`, { params: p });
  }
  getPage(pageId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cms/get.php`, { params: { page_id: pageId } });
  }
  getPageBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cms/get.php`, { params: { slug } });
  }
  createPage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cms/create.php`, data);
  }
  updatePage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cms/update.php`, data);
  }
  deletePage(pageId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cms/delete.php`, { page_id: pageId });
  }
}
