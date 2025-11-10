import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {

   @Input() user!: IUser;



   

}
