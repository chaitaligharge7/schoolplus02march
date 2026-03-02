import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionPaperService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuestionPapers(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/question-papers/list.php`, { params: httpParams });
  }

  createQuestionPaper(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/question-papers/list.php`, data);
  }
  updateQuestionPaper(paperId: number, data: FormData): Observable<any> {
    data.append('paper_id', paperId.toString()); // ensure the backend knows which paper to update
    return this.http.post<any>(`${this.apiUrl}/question-papers/update.php`, data);
  }

  // Delete a question paper
deleteQuestionPaper(paperId: number): Observable<any> {
  console.log('deleteQuestionPaper called with paperId:', paperId);

  const payload = {
    paper_id: paperId,
    action: 'delete' // optional, backend seems to ignore but can keep
  };

  console.log('Payload being sent:', payload);

  return this.http.post<any>(
    `${this.apiUrl}/question-papers/delete.php`,
    payload
  );
}

}

