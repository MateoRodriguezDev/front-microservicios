import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-dashboard',
  imports: [ProductCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
