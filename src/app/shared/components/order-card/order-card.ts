import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { IOrder } from '../../interfaces/order.interface';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css'
})
export class OrderCard implements OnInit{
  constructor(private _productService: ProductService, private _cartService: CartService, private _toastService: ToastService) {}

  product: IProduct = {price: 0, name: '', stock: 0}

  @Input() order!: IOrder;

   ngOnInit(): void {
    if (this.order.productId) {
      this.getProductById(this.order.productId);
    }
  }


  //Busco el producto desde el id del carrito para mostrarlo en la card
  getProductById(id: number) {
    if (id) {
      this._productService.getProductById(id).subscribe({
        next: (results) => {
          this.product = results;
        },
        error: (err) => {
          console.error('', err);
        },
      });
    }
  }

}
