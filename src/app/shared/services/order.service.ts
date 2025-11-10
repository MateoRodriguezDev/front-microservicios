import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private http: HttpClient,
    ) {}

    allOrders(): Observable<any> {
        return this.http.get(`${environment.orders.allOrders}`);
    }

    getOrderById(orderId: string): Observable<any> {
        return this.http.get(`${environment.orders.getOrderByID}/${orderId}`, );
    }

    getOrderByUserId(): Observable<any> {
        return this.http.get(`${environment.orders.getOrderByUserID}`, );
    }
    
}
