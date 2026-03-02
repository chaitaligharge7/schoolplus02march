import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings(category?: string): Observable<any> {
    const url = category 
      ? `${environment.apiUrl}/settings/get-settings.php?category=${category}`
      : `${environment.apiUrl}/settings/get-settings.php`;
    return this.http.get(url);
  }

  saveSettings(category: string, settings: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/settings/save-settings.php`, {
      category,
      settings
    });
  }
}

