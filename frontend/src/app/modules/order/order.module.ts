import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {OrdersTableComponent} from "@modules/order/components/orders-table.component";
import {OrderRoutingModule} from "@modules/order/order.routing.module";
import {CreateOrderComponent} from "@modules/order/components/create-order.component";

@NgModule({
  declarations: [
    OrdersTableComponent,
    CreateOrderComponent
  ],
  imports: [
    OrderRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class OrderModule {
}
