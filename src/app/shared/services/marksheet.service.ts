import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarksheetService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMarksheets(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/marksheets/list.php`, { params: httpParams });
  }

  getMarksheet(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/marksheets/get.php?id=${id}`);
  }

  createMarksheet(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marksheets/create.php`, data);
  }

  updateMarksheet(id: number, data: any): Observable<any> {
    if (data instanceof FormData) {
      data.append('marksheet_id', id.toString());
      return this.http.post<any>(`${this.apiUrl}/marksheets/update.php`, data);
    }
    return this.http.post<any>(`${this.apiUrl}/marksheets/update.php`, { ...data, marksheet_id: id });
  }

  deleteMarksheet(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marksheets/delete.php`, { id });
  }

  sendWhatsApp(marksheetIds: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marksheets/send-whatsapp.php`, { marksheet_ids: marksheetIds });
  }

  sendMarksheetToWhatsApp(marksheetId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marksheets/send-whatsapp.php`, { marksheet_id: marksheetId });
  }

  notifyParent(marksheetId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/marksheets/notify-parent.php`, { marksheet_id: marksheetId });
  }
}

