import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { menuItems } from '../data/validMenuItems';
import { OrderService } from '../order.service';
import { MenuItemService } from '../menu-item.service';

import { Order } from '../models/order';

@Component({
  selector: 'app-add-or-update-order',
  templateUrl: './add-or-update-order.component.html',
  styleUrls: ['./add-or-update-order.component.css']
})
export class AddOrUpdateOrderComponent implements OnInit{
  menuItems = menuItems;

  isCreated: boolean;
  id: number;

  customerName: string;
  numOfMenuItems: number[];
  total: number;
  
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private menuItemService: MenuItemService
  ) {
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    
    if (id == null){
      this.isCreated = false;
      this.numOfMenuItems = new Array(14);
      this.numOfMenuItems.fill(0);
      this.customerName = "";

    } else {
      this.isCreated = true;
      // numOfMenuItemsを取得したオーダーを用いて変更
      this.id = Number(id);
      this.customerName = this.orderService.get(Number(id)).customerName;
      this.numOfMenuItems = this.orderService.get(Number(id)).numOfMenuItems;
    }
  }

  setCustomerName(customerName: string){
    this.customerName = customerName;
  }

  setNumOfItem(numberOfItem: string, index: number){
    let num = Number(numberOfItem);
    if (num % 1 == 0){
      this.numOfMenuItems[index] = num;
    }
    else {
      alert("0以上の整数を入力してください");
    }
  }

  calculateTotal(): number{
    let res: number = 0;

    for (let i = 0; i < menuItems.length; i++){
      res += this.numOfMenuItems[i] * menuItems[i].price;
    }
    this.total = res;

    return res;
  }


  checkSubmit(): boolean{
    if (this.customerName != "" && this.total != 0){
      return false;
    }
    else return true;
  }

  onClickSubmitUpdateOrder(): void{
    if (this.isCreated){
      let order = this.orderService.get(this.id);
      order = new Order(order.id, this.customerName, this.numOfMenuItems, this.menuItemService);
    }
    else {
      this.orderService.create(this.customerName, this.numOfMenuItems);
    }

    this.ngOnInit();
  }

}
