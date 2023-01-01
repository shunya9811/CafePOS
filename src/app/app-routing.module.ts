import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';


const routes: Routes = [
  {path: "add", component: AddOrUpdateOrderComponent},
  {path: "add/:id", component: AddOrUpdateOrderComponent},
  {path: "current", component: CurrentOrdersComponent},
  {path: "completed", component: CompletedOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }