import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersTableComponent} from "@modules/customer/components/customers-table.component";

const routes: Routes = [
  {
    path: '',
    component: CustomersTableComponent,
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
