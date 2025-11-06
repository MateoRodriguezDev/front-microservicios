import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthInterceptorService } from '../interceptors/auth.interceptor.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(private _authInterceptorService: AuthInterceptorService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this._authInterceptorService.check().pipe(
            switchMap((authenticated) => {
                if (!authenticated) {
                    return of(true); // Se permite el acceso
                } else {
                    this.router.navigate(['/']); // Redirigir a la página de dashboard si ya está autenticado
                    return of(false); // Se denega el acceso
                }
            })
        );
    }
}