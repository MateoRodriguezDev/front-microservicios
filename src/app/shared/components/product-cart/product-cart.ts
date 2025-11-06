import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICart } from '../../interfaces/cart.interface';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart implements OnInit {
  constructor(private _productService: ProductService, private _cartService: CartService, private _toastService: ToastService) {}

  product: IProduct = {price: 0, name: '', stock: 0}

  @Input() cart!: ICart;
  @Output() cartChanged = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.cart.idProduct) {
      this.getProductById(this.cart.idProduct);
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

  //Elimino el producto del carrito
  deleteCart(cartId: number | undefined) {
    if (cartId) {
      this._cartService.deleteCart(cartId).subscribe({
        next: (results) => {
          this._toastService.info('Carrito Eliminado correctamente');
          console.log(results);
          this.cartChanged.emit();
        },
        error: (err) => {
          console.error('Error al eliminar el carrito', err);
          this._toastService.error('No se pudo eliminar el carrito');
        },
      });
    }
  }
}
