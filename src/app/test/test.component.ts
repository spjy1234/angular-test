import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  num: number = 1;
  user$: Observable<User>;

  constructor(private apiService: ApiServiceService) {

  }

  ngOnInit() {
    this.user$ = this.apiService.getUsersApi(this.num)
  }

  ngOnDestroy() {

  }

  clickEvent() {
    if (this.num < 100) {
      this.num += 1
    }
    this.user$ = this.apiService.getUsersApi(this.num)
  }


}
