import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsTableComponent} from "@modules/product/components/products-table.component";
import {CreateProductComponent} from "@modules/product/components/create-product.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsTableComponent
  }, {
    path: 'create',
    component: CreateProductComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
