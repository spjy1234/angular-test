import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Post} from "../post";
import {Posts} from "../post";
import {ApiServiceService} from "../api-service.service";
import {map, Observable, skip, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit{

  post$: Observable<Post[]> | undefined;
  newPost: Post[] = [];
  posts$: Observable<Post[]> | undefined;
  limit: number = 10;
  num: number = 14;
  skip: number;


  constructor(private apiService: ApiServiceService, public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.posts$ = this.apiService.getAllPost(this.skip = this.num * this.limit, this.limit).pipe(
      map(res => res.posts.reverse())
    )
  }

  leftClick() {
    if (this.num < 14) {
      this.num += 1;
    }
    this.posts$ = this.apiService.getAllPost(this.skip = this.num * this.limit, this.limit).pipe(
      tap(i => console.log(i)),
      map(res => res.posts.reverse(),
      ))
  }

  rightClick() {
    if (this.num > 0) {
      this.num -= 1;
    }
    this.posts$ = this.apiService.getAllPost(this.skip = this.num * this.limit, this.limit).pipe(
      tap(i => console.log(i)),
      map(res => res.posts.reverse(),
      ))
  }

}
