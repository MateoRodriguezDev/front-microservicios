import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthInterceptorService } from '../../../interceptors/auth.interceptor.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  providers: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(private _authInterceptorService: AuthInterceptorService){}

  signOutButton() {
    this._authInterceptorService.signOut()
  }

}
