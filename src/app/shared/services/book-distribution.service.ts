import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookDistributionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDistributions(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/book-distribution/list.php`, { params: httpParams });
  }

   deleteDistribution(distributionId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/book-distribution/delete.php?id=${distributionId}`);
  }
  createDistribution(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book-distribution/list.php`, data);
  }
 updateDistribution(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book-distribution/update.php`, data);
  }
  returnBook(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book-distribution/return.php`, data);
  }

  getStock(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/book-distribution/stock.php`, { params: httpParams });
  }

  updateStock(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book-distribution/stock.php`, data);
  }
}

