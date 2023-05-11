import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit{
  product: any;
  constructor(public location: Location) {
  }

  ngOnInit() {
    this.product = history.state.event;
    console.log(this.product);
  }

  goBack(){
    this.location.back();
  }

}
