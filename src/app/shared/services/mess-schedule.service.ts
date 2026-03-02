import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessScheduleService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSchedules(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/mess-schedules/list.php`, { params: httpParams });
  }
  
  updateSchedule(scheduleId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/mess-schedules/update.php`, { schedule_id: scheduleId, ...data });
  }

  deleteSchedule(scheduleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/mess-schedules/delete.php`, { body: { schedule_id: scheduleId } });
  }

  createSchedule(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mess-schedules/list.php`, data);
  }

  getMeals(scheduleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mess-schedules/meals.php`, {
      params: { schedule_id: scheduleId }
    });
  }

  addMeal(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/mess-schedules/meals.php`, data);
  }

  updateMeal(mealId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/mess-schedules/meals.php`, {
      meal_id: mealId,
      ...data
    });
  }

  deleteMeal(mealId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/mess-schedules/meals.php`, {
      body: { meal_id: mealId }
    });
  }
}

