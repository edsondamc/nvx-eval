import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersTableComponent} from "@modules/user/components/users-table.component";

const routes: Routes = [
  {
    path: '',
    component: UsersTableComponent
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
