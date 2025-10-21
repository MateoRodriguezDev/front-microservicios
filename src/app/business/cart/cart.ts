import { Component } from '@angular/core';
import { ProductCart } from '../../shared/components/product-cart/product-cart';

@Component({
  selector: 'app-cart',
  imports: [ProductCart],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export default class Cart {

}
