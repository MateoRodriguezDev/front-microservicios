import { Component } from '@angular/core';
import { ProductCart } from '../../shared/components/product-cart/product-cart';
import { ICart } from '../../shared/interfaces/cart.interface';
import { CartService } from '../../shared/services/cart.service';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@Component({
  selector: 'app-cart',
  imports: [ProductCart, AngularToastifyModule],
  providers: [ToastService],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export default class Cart {
  carts: ICart[] = [];
  totalPrice: number = 0;

  constructor(private _cartService: CartService, private _toastService: ToastService) {}

  ngOnInit(): void {
    
    this.allCarts();
   
  }

  //Consigue los carritos
  allCarts() {
    this._cartService.getCartByUserToken().subscribe({
      next: (results) => {
        this.totalPrice = 0
        this.carts = results;
        this.calculateTotal()
      },
      error: (err) => {
        console.error('No sé encontraron carritos', err);
        this.carts = []
      },
    });

  }


  //Calculo el total de los carritos
  calculateTotal() {
    this.carts.forEach(cart => {
      if(cart.totalPrice){
        this.totalPrice = this.totalPrice + cart.totalPrice
      }
    })
  }

  //Compro los carritos
  buyCarts() {
  this.carts.forEach(cart => {
    if (cart.id) {
      this._cartService.purchaseCart(cart.id).subscribe({
        next: (response) => {
          console.log(`✅ Carrito ${cart.id} comprado`, response);
          
        },
        error: (err) => {
          console.error(`❌ Error al comprar carrito ${cart.id}`, err);
          this._toastService.error('Hubo un error al comprar el carrito');
        }
      });
    }
  });

  if(this.carts.length !== 0){
    this._toastService.success('Carrito comprado');
  }
  this.carts = []

}


}
