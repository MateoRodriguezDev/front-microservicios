import { Component } from '@angular/core';
import { OrderCard } from '../../shared/components/order-card/order-card';
import { IOrder } from '../../shared/interfaces/order.interface';
import { ToastService } from 'angular-toastify';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-orders',
  imports: [OrderCard],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export default class Orders {


   orders: IOrder[] = [];
  
    constructor(private _orderService: OrderService, private _toastService: ToastService) {}
  
    ngOnInit(): void {
      
      this.allOrderse();
     
    }
  
    //Consigue las ordenes
    allOrderse() {
      this._orderService.allOrders().subscribe({
        next: (results) => {
          this.orders = results;
        },
        error: (err) => {
          console.error('No sé encontraron orders', err);
          this.orders = []
        },
      });
  
    }
}
