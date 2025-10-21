import { Component } from '@angular/core';
import { UserCard } from '../../shared/components/user-card/user-card';

@Component({
  selector: 'app-users',
  imports: [UserCard],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export default class Users {

}
