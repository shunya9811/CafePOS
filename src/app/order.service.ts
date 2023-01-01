import { Injectable } from '@angular/core';
import { Order } from './models/order';

import { MenuItemService } from './menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [];

  constructor(private menuItemService: MenuItemService) {
  }

  // インデックスを受け取り、注文を取得します
  get(index : number) : Order{
    return this.orders[index];
  }

  // 有効な注文をすべて取得します
  getAll(): Order[]{
    return this.orders;
  }

  // 現在のすべての注文を取得します
  getAllCurrent() : Order[]{
    let resArray: Order[] = [];
    for (let i = 0; i < this.orders.length; i++){
      if (this.orders[i].isCompleted == false){
        resArray.push(this.orders[i]);
      }
    }

    return resArray;
  }

  // 完了したすべての注文を取得します
  getAllCompleted() : Order[]{
    let resArray: Order[] = [];
    for (let i = 0; i < this.orders.length; i++){
      if (this.orders[i].isCompleted == true){
        resArray.push(this.orders[i]);
      }
    }

    return resArray;
  }

  // 新しい注文オブジェクトを作成し、それを注文の配列にプッシュして、その参照を返します
  // Orderにindexをつける
  create(customerName: string, numOfMenuItems: number[]): void{
    this.orders.push(new Order(this.orders.length, customerName, numOfMenuItems, this.menuItemService));
  }
}
