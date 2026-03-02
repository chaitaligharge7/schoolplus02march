import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private http: HttpClient) {}

  getBooks(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/library/list-books.php`, { params: httpParams });
  }

  getBook(bookId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/library/get.php`, {
      params: { book_id: bookId }
    });
  }

  createBook(bookData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/library/create.php`, bookData);
  }

  updateBook(bookId: number, bookData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/library/update.php`, {
      book_id: bookId,
      ...bookData
    });
  }

  deleteBook(bookId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/library/delete.php`, {
      book_id: bookId
    });
  }

  issueBook(issueData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/library/issue.php`, issueData);
  }

  returnBook(returnData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/library/return.php`, returnData);
  }

  getIssuedBooks(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/library/issued.php`, { params: httpParams });
  }
}

