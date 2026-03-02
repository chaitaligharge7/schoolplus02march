import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, tap, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User {
  user_id: number;
  key_id: number;
  school_id: number;
  school_name: string;
  school_logo: string;
  user_type: string;
  role_id: number;
  role_name: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  profile_image: string;
  language_code: string;
  timezone: string;
  permissions: any[];
}

export interface LoginResponse {
  status: string;
  message: string;
  access_token?: string;
  user?: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'access_token';
  private userKey = 'user_data';
  
  isLoggedInChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    // Check if user is already logged in
    if (this.getToken()) {
      this.isLoggedInChange.emit(true);
    }
  }

  /**
   * Sign in user
   */
  signIn(username: string, password: string, deviceToken: string): Observable<LoginResponse> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login.php`, {
      username,
      password,
      device_token: deviceToken
    }).pipe(
      map((response) => {
        // Handle response structure: {status, message, data: {access_token, user}}
        const loginResponse: LoginResponse = {
          status: response.status,
          message: response.message,
          access_token: response.data?.access_token || response.access_token,
          user: response.data?.user || response.user
        };
        
        console.log('Processing login response:', loginResponse);
        
        if (loginResponse.status === 'success' && loginResponse.access_token) {
          this.setToken(loginResponse.access_token);
          if (loginResponse.user) {
            this.setUser(loginResponse.user);
            console.log('User data saved to localStorage');
          }
          this.isLoggedInChange.emit(true);
          console.log('Authentication state updated');
        } else {
          console.warn('Login response missing required data:', loginResponse);
        }
        return loginResponse;
      })
    );
  }

  /**
   * Sign out user
   */
  signOut(): Observable<any> {
    const token = this.getToken();
    return this.http.post(`${environment.apiUrl}/auth/logout.php`, {
      access_token: token
    }).pipe(
      tap(() => {
        // Clear auth data on successful logout
        this.clearAuth();
        this.isLoggedInChange.emit(false);
        this.router.navigate(['/login']);
      }),
      // Handle errors - still clear auth data even if request fails
      catchError((error) => {
        console.warn('Logout request failed, but clearing local auth data:', error);
        this.clearAuth();
        this.isLoggedInChange.emit(false);
        this.router.navigate(['/login']);
        // Return a success response so the component doesn't treat it as an error
        return of({ status: 'success', message: 'Logged out locally' });
      })
    );
  }

  /**
   * Verify token
   */
  verifyToken(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return new Observable(observer => {
        observer.error('No token found');
      });
    }
    return this.http.post(`${environment.apiUrl}/auth/verify-token.php`, {
      token
    });
  }

  /**
   * Get user profile
   */
  getUserProfile(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/user/profile.php`);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  /**
   * Get token
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Set token
   */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Set user data
   */
  setUser(user: User): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  /**
   * Clear authentication data
   */
  clearAuth(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem('user_type');
    localStorage.removeItem('school_id');
    localStorage.removeItem('key_id');
  }

  /**
   * Get user type
   */
  getUserType(): string | null {
    const user = this.getCurrentUser();
    return user ? user.user_type : null;
  }

  /**
   * Check if user has permission
   */
  hasPermission(module: string, action: string = 'view'): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    // Super admin has all permissions
    if (user.user_type === 'super_admin') {
      return true;
    }
    
    // Check role permissions
    if (user.permissions && Array.isArray(user.permissions)) {
      return user.permissions.some((perm: any) => 
        perm.module === module && perm.actions?.includes(action)
      );
    }
    
    return false;
  }
}

