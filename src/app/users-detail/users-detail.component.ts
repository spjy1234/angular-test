import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit{
  users: any;

  constructor(public location: Location) {
  }
  ngOnInit() {
    this.users = history.state.event;
  }
  goBack(){
    this.location.back();
  }

}
