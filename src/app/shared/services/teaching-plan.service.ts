import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TeachingPlanService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getPlans(params?: any): Observable<any> {
    let p = new HttpParams();
    if (params) Object.keys(params).forEach(k => { if (params[k] != null && params[k] !== '') p = p.set(k, params[k].toString()); });
    return this.http.get<any>(`${this.apiUrl}/teaching-plan/list.php`, { params: p });
  }
  getPlan(planId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teaching-plan/get.php`, { params: { plan_id: planId } });
  }
  createPlan(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teaching-plan/create.php`, data);
  }
  updatePlan(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teaching-plan/update.php`, data);
  }
  deletePlan(planId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teaching-plan/delete.php`, { plan_id: planId });
  }
}
