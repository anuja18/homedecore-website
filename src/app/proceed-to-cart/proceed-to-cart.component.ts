import { Component, OnInit} from '@angular/core';
import {SHOPPING_PRODUCT} from './mock_products';

@Component({
  selector: 'app-proceed-to-cart',
  templateUrl: './proceed-to-cart.component.html',
  styleUrls: ['./proceed-to-cart.component.css']
})
export class ProceedToCartComponent implements OnInit {
shopping_product = SHOPPING_PRODUCT;

  constructor() { }

  ngOnInit(): void {
  }

  

}
