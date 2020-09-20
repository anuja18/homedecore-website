import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) {
   }

   getProducts():Observable<Product[]>{
     return this.httpClient.get<Product[]>(this.baseUrl+"/products");
   }

}

export class Product{
  id:number;
  imgPath:string;
  imgName:string;
  name:string;
  price:number;
  original_price:string;
  Description:string;
}
