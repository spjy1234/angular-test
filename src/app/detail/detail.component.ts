import {Component, OnChanges, OnInit} from '@angular/core';
import { Location } from "@angular/common";
import { Post } from "../post";
import { ApiServiceService } from "../api-service.service";
import { SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges{
  dPost: Post[] = [];
  post: any;
  product: any;
  user: any;

  ngOnChanges(changes: SimpleChanges) {

  }

  constructor(public location: Location, public apiService: ApiServiceService) {
  }
  ngOnInit() {
    this.post = history.state.posts;
    this.product = history.state.products;
    this.user = history.state.users;
    this.getApi();
  }

  getApi(){
    this.apiService.getPostApi()
      .subscribe((data: any) => {
        this.dPost = data.posts
      })
  }

  goBack(){
    this.location.back();
  }

  rightClick(){
    console.log(this.dPost[this.post.id-2]);
    let i = this.dPost[this.post.id-2];
  }
}
