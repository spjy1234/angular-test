import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Post} from "../post";
import {Posts} from "../post";
import {ApiServiceService} from "../api-service.service";
import {filter, groupBy, map, Observable, pluck, skip, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  post$: Observable<Post[]> | undefined;
  newPost: Post[] = [];
  posts$: Observable<Post[]> | undefined;
  limit: number = 10;
  skip: number = 14;


  constructor(private apiService: ApiServiceService, public router: Router, public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.posts$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
      map(res => res.posts.reverse()),

    )

    // this.post$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
    //   pluck("posts"),
    //   map(res => res.reverse())
    // )


  }

  // leftClick() {
  //   if (this.skip < 14) {
  //     this.skip += 1;
  //   }
  //   this.posts$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
  //     map(res => res.posts.reverse(),
  //     ))
  // }

  // rightClick() {
  //   if (this.skip > 0) {
  //     this.skip -= 1;
  //   }
  //   this.posts$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
  //     map(res => res.posts.reverse(),
  //     ))
  // }

  eventClick(event: string) {
    console.log(event)
    if (event == "left") {
      if (this.skip < 14) {
        this.skip += 1;
      }
    }
    if (event == "right") {
      if (this.skip > 0) {
        this.skip -= 1;
      }
    }
    this.posts$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
      map(res => res.posts.reverse()
      ))

    // this.post$ = this.apiService.getAllPost(this.skip * this.limit, this.limit).pipe(
    //   pluck( "posts"),
    //   map(res => res.reverse())
    // )
  }


}
