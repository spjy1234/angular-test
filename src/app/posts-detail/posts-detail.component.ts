import {Component, OnInit} from '@angular/core';
import { Post , Posts} from "../post";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, tap} from "rxjs";
import {ApiServiceService} from "../api-service.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit{
  posts$: Observable<Post> | undefined;
  getId: number;

  constructor(private route: ActivatedRoute, private apiService: ApiServiceService, public location: Location) {
    this.getId = Number(this.route.snapshot.paramMap.get("id"))
  }

  ngOnInit() {
    this.posts$ = this.apiService.getPostApi(this.getId)
  }
  goBack(){
    this.location.back()
  }
}
