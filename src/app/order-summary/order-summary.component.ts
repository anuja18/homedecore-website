import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Order,OrderService} from './order.service';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  
  constructor(private orderService:OrderService, private route:ActivatedRoute) { }
  order:Order = new Order();
  private id:string = ''; 
  totalPrice:number;
  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id');
    this.getOrderById();
    
  }

  getOrderById(){
    return this.orderService.getOrderById(this.id).subscribe((order)=>{
      this.order=order;
      this.getTotal();
    });
  }

  getTotal():void{
    this.totalPrice = this.order.items.map((cart)=>cart.price).reduce((prev,val)=>prev+val,0);     
  }

}
