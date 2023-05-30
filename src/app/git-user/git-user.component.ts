import {Component, OnDestroy, OnInit} from '@angular/core';
import {GitUser} from "../git-user";
import {ApiServiceService} from "../api-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.scss']
})
export class GitUserComponent implements OnInit, OnDestroy {
  gitUsers: GitUser[];
  newGitUsers: GitUser[] = [];
  index: number = 0;
  pageSize: number = 9;

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit() {
    this.getApi()
  }

  ngOnDestroy() {
    this.getApi()
  }

  getApi() {
    this.apiService.getAllGitUsers()
      .subscribe((i) => {
        this.gitUsers = i
        this.newGitUsers = [...this.newGitUsers, ...this.gitUsers.slice(this.index, this.pageSize)]
        this.index++;
      })
  }

  scrollDn() {
    this.newGitUsers = [...this.newGitUsers, ...this.gitUsers.slice(this.index * this.pageSize, this.index * this.pageSize + this.pageSize)]
    this.index++;
  }
}
