import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdCardService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIdCards(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/id-cards/list.php`, { params: httpParams });
  }
  getIdCardById(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/id-cards/list.php?id=${id}` );
}


  getStudents(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/students/list.php`);
}

getStaff(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/teachers/list.php`);
}

getVisitors(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/visitors/list.php`);
}
updateIdCard(data: any): Observable<any> {
  return this.http.post<any>( `${this.apiUrl}/id-cards/update.php`,data );
}


deleteIdCard(cardId: number): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/id-cards/delete.php`, { card_id: cardId });
}


  createIdCard(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/id-cards/list.php`, data);
  }

  generateIdCards(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/id-cards/generate.php`, data);
  }
}

