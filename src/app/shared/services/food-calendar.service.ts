import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodCalendarService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFoodCalendar(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/food-calendar/list.php`, { params: httpParams });
  }

  createFoodCalendar(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/food-calendar/list.php`, data);
  }

  updateFoodCalendar(foodId: number, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/food-calendar/update.php`, {
      food_id: foodId,
      ...data
    });
  }

  deleteFoodCalendar(foodId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/food-calendar/delete.php`, {
      // calendar_id: calendarId
      food_id: foodId
    });
  }
}

