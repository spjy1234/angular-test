import {Component, OnInit} from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  post: any;
  product: any;
  user: any;

  constructor(public location: Location) {
  }
  ngOnInit() {
    this.post = history.state.posts;
    this.product = history.state.products;
    this.user = history.state.users;
  }
  goBack(){
    this.location.back();
  }
}
