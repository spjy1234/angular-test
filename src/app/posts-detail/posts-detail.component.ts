import {Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit{
  // @Input() postData: any;
  posts: any;

  constructor(public location: Location) {

  }

  ngOnInit() {
    this.posts = history.state.event;
    console.log(this.posts)
  }

  goBack(){
    this.location.back()
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.posts = changes['posts'].currentValue
  //   console.log(this.posts)
  // }

}
