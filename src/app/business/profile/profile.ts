import { Component } from '@angular/core';
import { ProfileCard } from '../../shared/components/profile-card/profile-card';
import { OrderCard } from '../../shared/components/order-card/order-card';

@Component({
  selector: 'app-profile',
  imports: [ProfileCard, OrderCard],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export default class Profile {

}
