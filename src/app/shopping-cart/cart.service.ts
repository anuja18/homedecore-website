import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseurl='http://localhost:3000';

  constructor(private httpClient:HttpClient) { }
  /* 
   getcart():Observable<Carts[]>{
     return this.httpClient.get<Carts[]>(this.baseurl+"/carts");
   }

   createUser(user:User):Observable<any>{
     return this.httpClient.post<User>(this.baseUrl+"/users",user);
  }
*/
   createcart(carts:Cart):Observable<any>{
     return this.httpClient.post<Cart>(this.baseurl+"/carts",carts);
   }

   getProduct(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.baseurl+"/products/"+id);
  }
    
  getCartBySessionId():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(this.baseurl+"/carts?sessionId="+ window.localStorage.getItem("sessionId"))
  }
}

export class Cart{
  id:number;
  imgPath:string;
  name:string;
  price:number;
  Qty : number;
  sessionId:string;
}
