import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiServiceService} from "../api-service.service";
import {Location} from "@angular/common";
import {GitLogin} from "../git-user";
import {map, Observable, pluck, tap} from "rxjs";

@Component({
  selector: 'app-git-user-detail',
  templateUrl: './git-user-detail.component.html',
  styleUrls: ['./git-user-detail.component.scss']
})
export class GitUserDetailComponent implements OnInit {
  gitUser$: Observable<GitLogin>;
  login: string;
  test: Observable<any>;

  constructor(private router: ActivatedRoute, private apiService: ApiServiceService, public location: Location) {
    this.login = String(this.router.snapshot.paramMap.get("login"));
  }

  ngOnInit() {
    this.gitUser$ = this.apiService.getGitUser(this.login)
  }

  goBack() {
    this.location.back()
  }

  eClick(event: any) {
    console.log(event)

  }

}
