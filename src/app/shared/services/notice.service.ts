import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  constructor(private http: HttpClient) {}

  getNotices(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/notices/list.php`, { params: httpParams });
  }

  getNotice(noticeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/notices/get.php`, {
      params: { notice_id: noticeId }
    });
  }

  createNotice(noticeData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/notices/create.php`, noticeData);
  }

  updateNotice(noticeId: number, noticeData: FormData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/notices/update.php`, noticeData);
  }

  deleteNotice(noticeId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/notices/delete.php`, {
      notice_id: noticeId
    });
  }
}

