import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusDocumentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBusDocuments(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/bus-documents/list.php`, { params: httpParams });
  }

  createBusDocument(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/bus-documents/list.php`, data);
  }
}

