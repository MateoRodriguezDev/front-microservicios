import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';
import { ICart } from '../interfaces/cart.interface';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(
        private http: HttpClient,
    ) {}

    allCarts(): Observable<any> {
        return this.http.get(`${environment.carts.allCarts}`);
    }

    getCartById(cartId: number): Observable<any> {
        return this.http.get(`${environment.carts.getCartByID}/${cartId}`, );
    }

    getCartByUserId(userId: number): Observable<any> {
        return this.http.get(`${environment.carts.getCartByUserID}/${userId}`, );
    }

    getCartByUserToken(): Observable<any> {
        return this.http.get(`${environment.carts.getCartByUserToken}`, );
    }

    createCart(cart: ICart): Observable<any> {
        return this.http.post(`${environment.carts.createCarts}/`, cart);
    }

    updateCart(cart: ICart): Observable<any> {
        const  {id, ...cartWithoutId} = cart
        return this.http.post(`${environment.carts.updateCart}/${id}`, cartWithoutId);
    }

    deleteCart(cartId: number): Observable<any> {
        return this.http.delete(`${environment.carts.deleteCart}/${cartId}`, );
    }

    
}
