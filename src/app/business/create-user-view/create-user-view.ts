import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user-view',
  imports: [CommonModule, FormsModule, AngularToastifyModule],
  providers: [ToastService],
  templateUrl: './create-user-view.html',
  styleUrl: './create-user-view.css'
})
export default class CreateUserView {

  constructor( private _authService: AuthService, 
      private _toastService: ToastService) {}

   user = {
    email: '',
    password: ''
  };

  createUser() {
    this._authService.register(this.user).subscribe({
      next: () => {
        this._toastService.success('Usuario creado correctamente');
        this.user = { email: '', password: '' }; 
      },
      error: (err) => {
        console.error('Error al crear usuario', err);
        this._toastService.error('No se pudo crear el usuario');
      },
    });
  }

}
