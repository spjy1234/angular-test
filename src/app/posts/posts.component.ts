import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { ApiServiceService } from "../api-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit{
  post: Post[] = [];
  newPost: Post[] = [];
  pageSize: number = 5;
  length: number = 0;
  constructor(private apiService: ApiServiceService, public router: Router) { }
  ngOnInit() {
    this.getApi()
  }

  getApi(){
    this.apiService.getPostApi()
      .subscribe((data: any) => {
        this.post = data.posts.reverse();
        this.length = this.post.length;
        this.newPost = this.post.slice(length, this.pageSize)
      })
  }

  putClick(posts: any){
    this.router.navigateByUrl('/detail', {state: {posts}});
  }

  // pageGet(event: any ){
  //   console.log(event)
  //   this.newPost = this.post.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize)
  // }
}
