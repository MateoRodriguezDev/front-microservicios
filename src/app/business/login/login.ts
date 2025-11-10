import { Component } from '@angular/core';


import { AngularToastifyModule, ToastService } from 'angular-toastify';

import { FormsModule } from '@angular/forms';
import { ILogin } from '../../shared/interfaces/auth.interface';
import { AuthService } from '../../shared/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AngularToastifyModule, FormsModule],
  providers: [ToastService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  email: string = '';
  password: string = '';

  constructor(private _authService: AuthService, private _toastService: ToastService, private router: Router) {}

  //Funcion para iniciar sesión
  login() {
    const data: ILogin = {
      email: this.email,
      password: this.password,
    };

    this._authService.login(data).subscribe({
      next: (results) => {
        console.log(results)
        this._toastService.success('Sesión iniciada correctamente');
        localStorage.setItem('token', results.token)
        localStorage.setItem('user', JSON.stringify(results))
        this.router.navigate(['/'])
      
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
        this._toastService.error('No se pudo iniciar sesión');
      },
    });
  }
}
