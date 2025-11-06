import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService {
    private _authenticated: boolean = false;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    /**
     * Setter & getter para el token
     */
    set accessToken(token: string) {
        localStorage.setItem('token', token);
    }

    get accessToken(): string {
        return localStorage.getItem('token') ?? '';
    }

    /**
     * Cerrar sesión
     */
    signOut(): Observable<any> {
        // Eliminar el token de acceso del almacenamiento local
        localStorage.clear();
        // Establecer el indicador de autenticación en falso
        this._authenticated = false;
        // Devolver el observable
        return of(true);
    }

    check(): Observable<boolean> {
        // Comprobar si el usuario ha iniciado sesión
        if (this._authenticated) {
            return of(true);
        }

        // Comprobar la disponibilidad del token de acceso
        if (!this.accessToken) {
            return of(false);
        }

        // Si el token de acceso existe y no ha caducado, iniciar sesión con él
        return of(true);
    }
}
