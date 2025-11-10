import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-create-product-view',
  imports: [CommonModule, FormsModule, AngularToastifyModule],
  providers: [ToastService],
  templateUrl: './create-product-view.html',
  styleUrl: './create-product-view.css',
})
export default class CreateProductView {
  constructor(private _productService: ProductService, private _toastService: ToastService) {}

  product: IProduct = {
    name: '',
    price: 0,
    stock: 0,
  };

  createProduct() {
    this._productService.createProduct(this.product).subscribe({
      next: () => {
        this._toastService.success('Producto creado correctamente');
        this.product = { name: '', price: 0, stock: 0 };
      },
      error: (err) => {
        console.error('Error al crear producto', err);
        this._toastService.error('No se pudo crear el producto');
      },
    });
  }
}
