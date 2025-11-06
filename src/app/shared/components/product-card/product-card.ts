import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { ToastService } from 'angular-toastify';
import { CartService } from '../../services/cart.service';
import { ICart } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _toastService: ToastService
  ) {}

  @Input() product!: IProduct;
  @Output() productChanged = new EventEmitter<void>();


  //Creo un carrito con el product
  createCart(idProduct: number | undefined) {
    
    if (idProduct) {
      const cart: ICart = { idProduct, quantity: 1 };

      this._cartService.createCart(cart).subscribe({
        next: (results) => {
          this._toastService.success('Producto Agregado al carrito');
          this.productChanged.emit();
        },
        error: (err) => {
          console.error('Error al agregar el producto al carrito', err);
          this._toastService.error('No se pudo agregar el producto al carrito');
        },
      });
    }
  }


  //Elimino el producto del catalogo
  deleteProduct(productId: number | undefined) {
    if (productId) {
      this._productService.deleteProduct(productId).subscribe({
        next: (results) => {
          this._toastService.info('Producto Eliminado correctamente');
          console.log(results);
          this.productChanged.emit();
        },
        error: (err) => {
          console.error('Error al eliminar el producto', err);
          this._toastService.error('No se pudo eliminar el producto');
        },
      });
    }
  }
}
