import { Component } from '@angular/core';
import { ProfileCard } from '../../shared/components/profile-card/profile-card';
import { OrderCard } from '../../shared/components/order-card/order-card';
import { IUser } from '../../shared/interfaces/user.interface';
import { ToastService } from 'angular-toastify';
import { IOrder } from '../../shared/interfaces/order.interface';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-profile',
  imports: [ProfileCard, OrderCard],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export default class Profile {
  constructor(private _orderService: OrderService, private _toastService: ToastService) {}


  //Agarro el user del local storage para mostrarlo en el perfil
  userLocalStorage = localStorage.getItem('user')
  user: IUser = this.userLocalStorage ? JSON.parse(this.userLocalStorage) :  {}
  
  

  //Agarro las compras realizadas por este usuario
  orders: IOrder[] = [];
  
  
    ngOnInit(): void {
      
      this.allOrderse();
     
    }
  
    //Consigue las ordenes
    allOrderse() {
      this._orderService.getOrderByUserId().subscribe({
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
