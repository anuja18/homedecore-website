import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { shopping_products } from './shopping-cart/shopping_product';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items : [];

  addToCart(shopping_products): void {
    this.items.push(shopping_product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
