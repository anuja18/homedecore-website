import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../shopping-cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private baseurl='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
 
 createOrder(order:Order):Observable<Order>{
  return this.httpClient.post<Order>(this.baseurl+'/orders',order);
 }

 getOrderById(id:string):Observable<Order>{
   return this.httpClient.get<Order>(this.baseurl+'/orders/'+id)
 }

}

export class Order {
  id:string;
  items:Cart[];
  userId
  status:string;
}
