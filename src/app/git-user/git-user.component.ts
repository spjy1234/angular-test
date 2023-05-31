import {Component, OnDestroy, OnInit} from '@angular/core';
import {GitUser} from "../git-user";
import {ApiServiceService} from "../api-service.service";
import {Observable, Subscription} from "rxjs";
import {group} from "@angular/animations";

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.scss']
})
export class GitUserComponent implements OnInit, OnDestroy {
  gitUsers: GitUser[];
  newGitUsers: GitUser[] = [];
  subscription!: Subscription;

  skip: number = 0;
  limit: number = 9;

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit() {
    this.subscription = this.apiService.getAllGitUsers().subscribe(
      data => {
        this.gitUsers = data;
        this.newGitUsers = [...this.newGitUsers, ...this.gitUsers.slice(this.skip, this.limit)]
        this.skip++;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  scrollDn() {
    console.log("scrolled")
    this.newGitUsers = [...this.newGitUsers, ...this.gitUsers.slice(this.skip * this.limit, this.skip * this.limit + this.limit)]
    this.skip++;
  }
}
