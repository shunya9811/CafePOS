import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

import { Order } from '../models/order';


@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit{
  currentList: Order[];

  constructor(private orderService: OrderService){
    this.currentList = this.orderService.getAllCurrent();
  }

  ngOnInit(): void {
    
  }

  moveToCompleted(order: Order){
    order.setCompleted();
  }
}
