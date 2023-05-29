import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {Observable} from "rxjs";
import {ApiServiceService} from "../api-service.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  user$: Observable<User> | undefined;
  userId: number;

  constructor(private apiService: ApiServiceService, public location: Location, private router: ActivatedRoute) {
    this.userId = Number(this.router.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.user$ = this.apiService.getUsersApi(this.userId)
  }

  goBack(){
    this.location.back()
  }
}
