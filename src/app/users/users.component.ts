import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {User, Users} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy{
  user: User[] = [];
  newUser: User[] = [];

  index: number = 0;
  pageSize: number = 5;
  constructor(private apiService: ApiServiceService, public router: Router) {
  }
  ngOnInit() {
    this.getApi()
  }

  ngOnDestroy() {
    this.getApi()
  }

  getApi(){
    this.apiService.getAllUser()
      .subscribe((data) => {
        this.user = data.users;
        this.newUser = [...this.newUser, ...this.user.slice(this.index, this.pageSize)]
        this.index++;})
  }
  scrollDn(){
    this.newUser = [...this.newUser, ...this.user.slice(this.index * this.pageSize, this.index * this.pageSize + this.pageSize)]
    this.index++;
  }

}
