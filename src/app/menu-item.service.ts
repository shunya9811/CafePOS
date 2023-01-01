import { Injectable } from '@angular/core';
import { MenuItem } from './models/menuItem';

import { menuItems } from './data/validMenuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  menuItems: MenuItem[] = menuItems;

  constructor() { }

  // インデックスが配列の有効範囲内であれば、そのインデックスにあるメニュー項目を取得する
  get(index: number): MenuItem{
    return this.menuItems[index];
  }

  // 配列内のメニュー項目をすべて取得する
  getAll() : MenuItem[]{
    return this.menuItems;
  }
}
