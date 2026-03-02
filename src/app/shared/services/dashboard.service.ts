import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/dashboard/statistics.php`);
  }

  getRecentActivities(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/dashboard/recent-activities.php`);
  }

  getAttendanceChart(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/dashboard/attendance-chart.php`);
  }
}

