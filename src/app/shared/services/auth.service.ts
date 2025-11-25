import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IRegister } from '../interfaces/auth.interface';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
    ) {}

    login(data: ILogin): Observable<any> {
        return this.http.post(`${environment.auth.login}`, data);
    }

    register(data: IRegister): Observable<any> {
        return this.http.post(`${environment.auth.register}`, data);
    }

    allUsers(): Observable<any> {
        return this.http.get(`${environment.auth.allUsers}`)
    }
}
