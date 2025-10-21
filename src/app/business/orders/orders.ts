import { Component } from '@angular/core';
import { OrderCard } from '../../shared/components/order-card/order-card';

@Component({
  selector: 'app-orders',
  imports: [OrderCard],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export default class Orders {

}
