import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/users/list.php`, { params: httpParams });
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/get.php`, {
      params: { user_id: userId }
    });
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/create.php`, userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/update.php`, {
      user_id: userId,
      ...userData
    });
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/delete.php`, {
      user_id: userId
    });
  }

  changePassword(userId: number, passwordData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/users/change-password.php`, {
      user_id: userId,
      ...passwordData
    });
  }
}

