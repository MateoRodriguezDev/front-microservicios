import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthInterceptorService } from '../../../interceptors/auth.interceptor.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  providers: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private _authInterceptorService: AuthInterceptorService) {}

  //Agarro el user del local storage para verificar su role
  userLocalStorage = localStorage.getItem('user');
  user: IUser = this.userLocalStorage ? JSON.parse(this.userLocalStorage) : {};

  isSuperAdmin: boolean = this.user.role === 'superadmin' ? true : false;

  signOutButton() {
    this._authInterceptorService.signOut();
  }
}
