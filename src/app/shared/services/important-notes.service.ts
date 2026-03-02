import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportantNotesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNotes(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/important-notes/list.php`, { params: httpParams });
  }

  createNote(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/important-notes/list.php`, data);
  }
   updateNote(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/important-notes/update.php`, data);
  }

  // 🔹 DELETE NOTE
  deleteNote(noteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/important-notes/delete.php`, {
      body: { note_id: noteId }
    });
  }
// 🔹 GET SINGLE NOTE (VIEW)
getNote(noteId: number): Observable<any> {
  const params = new HttpParams().set('note_id', noteId.toString());
  return this.http.get<any>(`${this.apiUrl}/important-notes/get.php`, { params });
}

}

