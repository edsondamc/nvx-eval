import {Component, OnInit} from '@angular/core';
import {ListOrdersGQL, ListProductsGQL, ListUsersGQL, Order, Product, User} from "@graphql";
import {Apollo} from "apollo-angular";
import {finalize} from "rxjs";

@Component({
  templateUrl: 'orders-table.component.html',
  providers: [],
})
export class OrdersTableComponent implements OnInit {
  public orders: Order[] = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts() {
    new ListOrdersGQL(this.apollo).fetch({})
      .pipe(finalize(() => {
      }))
      .subscribe({
        next: data => {
          this.orders = data.data.orders as Order[];
        },
        error: error => {
        }
      })
  }
}
