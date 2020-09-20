import { Component, OnInit } from '@angular/core';
import { shopping_products} from './shopping_product';
import {ItemModel} from '@syncfusion/ej2-angular-splitbuttons';
import { ActivatedRoute } from '@angular/router';
import {ShoppingCartService, Product} from './shopping-cart.service'
import {CartService, Cart} from './cart.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {v4} from 'uuid';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:Product[];  
  carts: Cart = new Cart();
  id: number = -1;
  Qty : number = 1;
  constructor( private cartService:ShoppingCartService,private cart:CartService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();  //Call
   // this.getcart();
  }

  addd(id:number){
    if(localStorage.getItem('sessionId') && localStorage.getItem('isLogged')==='true'){
      this.addToCart(id);
      alert("Added To Cart...");
    }else{
      this.router.navigate(['/Login']);
    }
  }

  getProducts():void{
    this.cartService.getProducts()
    .subscribe(products=>this.products=products);
  }  

  createcart(carts:Cart):void{
    this.cart.createcart(carts).subscribe(()=>this.router.navigate(['']));
  }

  addToCart(id:number): void{
    this.cart.getProduct(id).subscribe((product:Product)=>{
      this.carts.id = v4();
      this.carts.imgPath = product.imgPath;
      this.carts.name = product.name;
      this.carts.price = product.price;
      this.carts.sessionId = window.localStorage.getItem('sessionId');
      this.createcart(this.carts);      
    });
  }  
}
