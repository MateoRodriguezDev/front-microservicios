import { Component } from '@angular/core';
import { UserCard } from '../../shared/components/user-card/user-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [UserCard, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

}
