import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getToken();

  // Clone the request and add headers
  if (token) {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    
    // Debug logging (only in development)
    if (!req.url.includes('/auth/login.php') && !req.url.includes('/auth/verify-token.php')) {
      console.log(`[Auth Interceptor] Adding token to request: ${req.url.substring(0, 50)}...`);
    }
  } else {
    console.warn('[Auth Interceptor] No token found in localStorage');
    // Don't block the request, but log a warning
    // Some endpoints might not require authentication
  }

  // Handle the response and catch 401 errors
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle 401 Unauthorized errors
      if (error.status === 401) {
        console.error('[Auth Interceptor] 401 Unauthorized - Token may be invalid or expired');
        console.error('[Auth Interceptor] Request URL:', error.url);
        
        // Don't redirect if we're already on the login page or making auth requests
        if (!router.url.includes('/login') && 
            !error.url?.includes('/auth/login.php') && 
            !error.url?.includes('/auth/verify-token.php')) {
          // Clear auth data and redirect to login
          authService.clearAuth();
          authService.isLoggedInChange.emit(false);
          router.navigate(['/login'], { 
            queryParams: { returnUrl: router.url } 
          });
        }
      }
      
      return throwError(() => error);
    })
  );
};

