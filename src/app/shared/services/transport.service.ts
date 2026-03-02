import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  constructor(private http: HttpClient) {}

  getRoutes(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/transport/routes.php`, { params: httpParams });
  }

  getRoute(routeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/transport/get.php`, {
      params: { route_id: routeId }
    });
  }

  createRoute(routeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/transport/create.php`, routeData);
  }

  updateRoute(routeId: number, routeData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/transport/update.php`, {
      route_id: routeId,
      ...routeData
    });
  }

  deleteRoute(routeId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/transport/delete.php`, {
      route_id: routeId
    });
  }
}

