import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductService } from '../../shared/services/product.service';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { IProduct } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-dashboard',
  imports: [ProductCard, AngularToastifyModule],
  providers: [ToastService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard implements OnInit{

  products: IProduct[] = []

  constructor(
    private _productService: ProductService,
    private _toastService: ToastService
  ){}

  ngOnInit(): void{
    this.allProducts()
  }

  //Consigue los productos
  allProducts() {
    this._productService.allProducts().subscribe({
      next: (results) => {
        this.products = results.data
      
      },
      error: (err) => {
        console.error('Error al traer los productos', err);
        this._toastService.error('No se pudo obtener productos');
      },
    });
  }



}
