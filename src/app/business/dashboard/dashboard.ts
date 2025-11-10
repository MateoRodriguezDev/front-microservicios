import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductService } from '../../shared/services/product.service';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { IProduct } from '../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { IUser } from '../../shared/interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ProductCard, AngularToastifyModule, RouterLink, CommonModule],
  providers: [ToastService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export default class Dashboard implements OnInit {

  //Agarro el user del local storage para verificar su role
  userLocalStorage = localStorage.getItem('user');
  user: IUser = this.userLocalStorage ? JSON.parse(this.userLocalStorage) : {};


  isSuperAdmin: boolean = this.user.role === 'superadmin' ? true  : false;
  products: IProduct[] = [];

  constructor(private _productService: ProductService, private _toastService: ToastService) {}

  ngOnInit(): void {
    this.allProducts();
  }

  //Consigue los productos
  allProducts() {
    this._productService.allProducts().subscribe({
      next: (results) => {
        this.products = results.data;
      },
      error: (err) => {
        console.error('Error al traer los productos', err);
        this._toastService.error('No se pudo obtener productos');
      },
    });
  }
}
