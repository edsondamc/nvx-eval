import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)
  }, {
    path: 'products',
    loadChildren: () => import('@modules/product/product.module').then(m => m.ProductModule)
  }, {
    path: 'orders',
    loadChildren: () => import('@modules/order/order.module').then(m => m.OrderModule)
  }, {
    path: 'customers',
    loadChildren: () => import('@modules/customer/customer.module').then(m => m.CustomerModule)
  }, {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
