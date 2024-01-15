import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);
  const router = inject(Router);
  const modifiedReq = req.clone({
    url: environment.apiUrl + req.url,
    withCredentials: true,
  });

  return next(modifiedReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/login']);
      } else {
        errorService.setError(error);
        router.navigate(['/error']);
      }

      return [error];
    })
  );
};
