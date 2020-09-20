import { Component, OnInit} from '@angular/core';
import { Cart, CartService } from '../shopping-cart/cart.service';
import {UserInfo,CreateSessionService} from '../login/create-session.service'
import { Order,OrderService } from '../order-summary/order.service';
import {v4} from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed-to-cart',
  templateUrl: './proceed-to-cart.component.html',
  styleUrls: ['./proceed-to-cart.component.css']
})
export class ProceedToCartComponent implements OnInit {
carts:Cart[];
totalPrice : number;
order:Order = new Order();

  constructor(private cartService:CartService, private sessionService:CreateSessionService, 
    private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart():void{
    this.cartService.getCartBySessionId().subscribe((cart)=>{
      this.carts = cart;
      this.getTotal();
    });
  }

    getTotal():void{
      this.totalPrice = this.carts.map((cart)=>cart.price).reduce((prev,val)=>prev+val,0);
       
    }

    buy():void{
      this.placeOrder();
      alert("Orders Confirmed And Placed....After 4 Days you Recieved your Ordered items...");
    }

    placeOrder():void{
      this.sessionService.getSessionBySessionId(window.localStorage.getItem('sessionId'))
      .subscribe((session)=> {
        this.order.userId = session.userId;
        this.order.items = this.carts;
        this.order.status = 'confirmed';
        this.order.id = v4();
        this.orderService.createOrder(this.order).subscribe(()=>{
        this.router.navigate(['/order/'+this.order.id]);
        });
      });
    }
}
