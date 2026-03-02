import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CleaningService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCleaningSchedules(params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (
          params[key] !== null &&
          params[key] !== undefined &&
          params[key] !== ""
        ) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get<any>(`${this.apiUrl}/cleaning/list.php`, {
      params: httpParams,
    });
  }

  createCleaningSchedule(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cleaning/list.php`, data);
  }

  completeCleaning(scheduleId: number, options?: { action?: string; remarks?: string; area_cleaned?: string; photo_path?: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cleaning/complete.php`, { schedule_id: scheduleId, ...options });
  }
  getDutyStatus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/housekeeping/duty-status.php`);
  }
  dutyLogin(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/housekeeping/duty-login.php`, {});
  }
  dutyLogout(logId?: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/housekeeping/duty-logout.php`, logId ? { log_id: logId } : {});
  }

  updateCleaningSchedule(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cleaning/update.php`, data);
  }

  deleteCleaningSchedule(scheduleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cleaning/delete.php`, {
      body: { schedule_id: scheduleId }
    });
  }
}
