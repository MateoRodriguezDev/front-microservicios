import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthInterceptorService } from './auth.interceptor.service';

/**
 * Intercept
 *
 * @param req
 * @param next
 */
export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const _authInterceptorService = inject(AuthInterceptorService);

   
    let newReq = req.clone();

    // Request
    if (_authInterceptorService.accessToken) {
        newReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + _authInterceptorService.accessToken),
        });
    }

    // Response
    return next(newReq).pipe(
        catchError((error) => {
            // Capta errores desconocidos
            if (error.status === 0) {
                _authInterceptorService.signOut();
                location.reload();
                return throwError(() => new Error('Token expirado u inexistente'));
            }

            // Capta respuestas 201
            if (error instanceof HttpErrorResponse && error.status === 401) {
                _authInterceptorService.signOut();
                location.reload();
                return throwError(() => new Error('Credenciales invalidas.'));
            }

            // Capta errores desconocidos
            if (error.status === 500) {
                return throwError(() => new Error('Error interno del servidor'));
            }

            if (error instanceof HttpErrorResponse && error.status === 404) {
                return throwError(() => new Error('Error en persistencia'));
            }

            // Si nada de lo anterior se cumple da error desconocido
            return throwError(() => new Error('Error desconocido'));
        }),
    );
};