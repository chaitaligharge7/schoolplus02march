import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniformDistributionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getDistributions(params?: any): Observable<any> {
  let httpParams = new HttpParams()
    .set('t', new Date().getTime().toString()); 

  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
  }

  return this.http.get<any>(
    `${this.apiUrl}/uniform-distribution/list.php`,
    { params: httpParams }
  );
}

  createDistribution(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/uniform-distribution/list.php`, data);
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
    return this.http.get<any>(`${this.apiUrl}/uniform-distribution/stock.php`, { params: httpParams });
  }
  getDistributionById(id: number) {
  return this.http.get<{ status: string, data: any }>(`/api/uniform-distributions/${id}`);
}

  updateStock(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/uniform-distribution/stock.php`, data);
  }


  returnUniform(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/uniform-distribution/return.php`, data);
  }
  
  updateDistribution(distributionId: number, data: any): Observable<any> {
  if (!distributionId) {
    throw new Error('Distribution ID is required to update');
  }
  const payload = { distribution_id: distributionId, ...data };
  return this.http.post<any>(`${this.apiUrl}/uniform-distribution/update.php`, payload);
}

  deleteDistribution(distributionId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/uniform-distribution/delete.php`, { distribution_id: distributionId });
  }
}

