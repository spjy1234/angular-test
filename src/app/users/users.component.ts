import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  user: User[] = [];
  newUser: User[] = [];

  index: number = 0;
  pageSize: number = 5;
  constructor(private apiService: ApiServiceService, public router: Router) {
  }
  ngOnInit() {
    this.getApi()
  }

  getApi(){
    this.apiService.getUsersApi()
      .subscribe((data: any) => {
        this.user = data.users;
        this.newUser = [...this.newUser, ...this.user.slice(this.index, this.pageSize)]
        this.index++;})
  }
  scrollDn(){
    this.newUser = [...this.newUser, ...this.user.slice(this.index * this.pageSize, this.index * this.pageSize + this.pageSize)]
    this.index++;
  }

  putClick(users: any){
    this.router.navigateByUrl('/detail', {state:{users}})
    // console.log(event)
  }
}
