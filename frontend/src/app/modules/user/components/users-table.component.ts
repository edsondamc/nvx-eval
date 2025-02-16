import {Component, OnInit} from '@angular/core';
import {ListUsersGQL, User} from "@graphql";
import {Apollo} from "apollo-angular";
import {finalize} from "rxjs";

@Component({
  templateUrl: 'users-table.component.html',
  providers: [],
})
export class UsersTableComponent implements OnInit {
  public users: User[] = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit(): void {
    this.listUsers();
  }

  public listUsers() {
    new ListUsersGQL(this.apollo).fetch({})
      .pipe(finalize(() => {
      }))
      .subscribe({
        next: data => {
          this.users = data.data.users;
        },
        error: error => {
        }
      })
  }
}
