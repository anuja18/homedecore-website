import { Component, OnInit } from '@angular/core';
import { shopping_products} from './shopping_product';
import {ItemModel} from '@syncfusion/ej2-angular-splitbuttons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shopping_products = shopping_products;  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  
}
