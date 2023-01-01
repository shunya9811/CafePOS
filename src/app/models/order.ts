import { MenuItemService } from "../menu-item.service";

export class Order{
    id: number;
    customerName: string;  // 顧客の名前
    numOfMenuItems: number[]; 
    // 各要素のインデックスは、メニュー項目の配列のインデックスと一致し、
    // 値は商品の個数と一致します
    
    year: number;
    month: number;
    day: number;
    hours: number; // 注文が最後に更新された時間
    minutes: number; // 注文が最後に更新された分
    seconds: number; // 注文が最後に更新された秒
    isCompleted: boolean = false; // デフォルトでは false

    constructor(id: number, customerName: string, numOfMenuItems: number[], private menuItemService: MenuItemService){
        this.id = id;
        this.customerName = customerName;
        this.numOfMenuItems = numOfMenuItems;
        this.updateTime();
    }

    // isCompleted を true に設定します
    setCompleted() : void{
        this.isCompleted = true;
    }

    /*
    // インデックスが配列の長さを超えていない場合、そのインデックスの要素、
    // つまり商品の個数をインクリメントします
    addItem(index : number): void{
        
    }

    // インデックスが配列の長さを超えていない、かつインデックスの要素の値が 
    // 0 より大きい場合、
    // そのインデックスの要素、つまり商品の個数をデクリメントします
    removeItem(index : number): void{

    }
    */

    // 合計金額を出力する
    getTotal(): number{
        let total: number = 0;
        for (let i = 0; i < this.numOfMenuItems.length; i++){
            total += this.numOfMenuItems[i] * this.menuItemService.getAll()[i].price;
        }

        return total;
    }

    // 現在の時刻を使用して、すべての時刻データフィールドを更新します
    updateTime(){
        const now: Date = new Date();
        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDay() + 1;
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    }

    getDateString(){
        return `${this.year}/${this.month}/${this.day}`;
    }

    getTimeString(){
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}