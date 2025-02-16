import {Component, OnInit} from '@angular/core';
import {Customer, ListCustomerGQL, ListOrdersGQL, ListProductsGQL, ListUsersGQL, Order, Product, User} from "@graphql";
import {Apollo} from "apollo-angular";
import {finalize} from "rxjs";

@Component({
  templateUrl: 'customers-table.component.html',
  providers: [],
})
export class CustomersTableComponent implements OnInit {
  public customers: Customer[] = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts() {
    new ListCustomerGQL(this.apollo).fetch({})
      .pipe(finalize(() => {
      }))
      .subscribe({
        next: data => {
          this.customers = data.data.customers as Customer[];
        },
        error: error => {
        }
      })
  }
}
