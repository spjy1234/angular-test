import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {User, Users} from "../user";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  user: User[] = [];
  newUser: User[] = [];
  subscription!: Subscription;

  skip: number = 0;
  limit: number = 5;

  constructor(private apiService: ApiServiceService, public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.apiService.getAllUser().subscribe(
      data => {
        this.user = data.users;
        this.newUser = [...this.newUser, ...this.user.slice(this.skip, this.limit)];
        this.skip++;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


  scrollDn() {
    this.newUser = [...this.newUser, ...this.user.slice(this.skip * this.limit, this.skip * this.limit + this.limit)]
    this.skip++;
  }

}
