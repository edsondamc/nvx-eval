import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductRoutingModule} from "@modules/product/product.routing.module";
import {ProductsTableComponent} from "@modules/product/components/products-table.component";
import {CreateProductComponent} from "@modules/product/components/create-product.component";

@NgModule({
  declarations: [
    ProductsTableComponent,
    CreateProductComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class ProductModule {
}
