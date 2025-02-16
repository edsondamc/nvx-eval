import {Component, OnInit} from '@angular/core';
import {ListProductsGQL, ListUsersGQL, Product, User} from "@graphql";
import {Apollo} from "apollo-angular";
import {finalize} from "rxjs";

@Component({
  templateUrl: 'products-table.component.html',
  providers: [],
})
export class ProductsTableComponent implements OnInit {
  public products: Product[] = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  public listProducts() {
    new ListProductsGQL(this.apollo).fetch({})
      .pipe(finalize(() => {
      }))
      .subscribe({
        next: data => {
          this.products = data.data.products as Product[];
        },
        error: error => {
        }
      })
  }
}
