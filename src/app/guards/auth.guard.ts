import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthInterceptorService } from '../interceptors/auth.interceptor.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _authInterceptorService: AuthInterceptorService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this._authInterceptorService.check().pipe(
            switchMap((authenticated) => {
                if (authenticated) {
                    return of(true); // Se permite el acceso
                } else {
                    this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
                    return of(false); // Se denega el acceso
                }
            })
        );
    }
}