import { Component } from '@angular/core';
import { UserCard } from '../../shared/components/user-card/user-card';
import { RouterLink } from '@angular/router';
import { IUser } from '../../shared/interfaces/user.interface';
import { AuthService } from '../../shared/services/auth.service';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@Component({
  selector: 'app-users',
  imports: [UserCard, RouterLink, AngularToastifyModule],
  providers: [ToastService],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

  users: IUser[] = [];


    constructor(private _authService: AuthService, private _toastService: ToastService) {}
  
    ngOnInit(): void {
      this.allUsers();
    }
  
    //Consigue los productos
    allUsers() {
      this._authService.allUsers().subscribe({
        next: (results) => {
          this.users = results;
        },
        error: (err) => {
          console.error('Error al traer los productos', err);
          this._toastService.error('No se pudo obtener productos');
        },
      });
    }

}
