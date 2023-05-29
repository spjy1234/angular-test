import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {Observable} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit{
  product$: Observable<Product>
  productId: number
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute, private location: Location) {
    this.productId = Number(this.route.snapshot.paramMap.get("id"))
    console.log(this.productId)
  }

  ngOnInit() {
    this.product$ = this.apiService.getProductApi(this.productId)
  }

  goBack(){
    this.location.back()
  }
}

