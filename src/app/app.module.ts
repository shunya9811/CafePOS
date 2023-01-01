import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentOrdersComponent,
    CompletedOrdersComponent,
    AddOrUpdateOrderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
