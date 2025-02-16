import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomersTableComponent} from "@modules/customer/components/customers-table.component";
import {CustomerRoutingModule} from "@modules/customer/customer.routing.module";

@NgModule({
  declarations: [
    CustomersTableComponent,
  ],
  imports: [
    CustomerRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class CustomerModule {
}
