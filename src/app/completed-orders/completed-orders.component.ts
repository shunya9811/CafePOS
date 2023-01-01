import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

import { Order } from '../models/order';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit{
  completedList: Order[];

  constructor(private orderService: OrderService){
    this.completedList = orderService.getAllCompleted();
  }

  ngOnInit(): void {
    
  }
}
