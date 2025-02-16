import {NgModule} from '@angular/core';
import {UserRoutingModule} from "@modules/user/user.routing.module";
import {CommonModule} from "@angular/common";
import {UsersTableComponent} from "@modules/user/components/users-table.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UsersTableComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class UserModule {
}
