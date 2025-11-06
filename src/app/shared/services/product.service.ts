import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private http: HttpClient,
    ) {}

    allProducts(): Observable<any> {
        return this.http.get(`${environment.products.allProducts}`);
    }

    getProductById(productId: number): Observable<any> {
        return this.http.get(`${environment.products.getProductByID}/${productId}`, );
    }

    createProduct(product: IProduct): Observable<any> {
        return this.http.post(`${environment.products.createProducts}/`, product);
    }

    updateProduct(product: IProduct): Observable<any> {
        const  {id, ...productWithoutId} = product
        return this.http.post(`${environment.products.updateProduct}/${id}`, productWithoutId);
    }

    deleteProduct(productId: number): Observable<any> {
        return this.http.delete(`${environment.products.deleteProduct}/${productId}`, );
    }

    
}
