import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersTableComponent} from "@modules/order/components/orders-table.component";
import {CreateOrderComponent} from "@modules/order/components/create-order.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersTableComponent,
  }, {
    path: 'create',
    component: CreateOrderComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
