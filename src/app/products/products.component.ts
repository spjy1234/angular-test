import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {Product, Products} from "../product";
import {ApiServiceService} from "../api-service.service";
import {Route, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product: Product[] = [];
  newProduct: Product[] = [];

  skip: number = 0;
  limit: number = 7;

  constructor(private apiService: ApiServiceService, public router: Router) {
  }

  ngOnInit() {
    this.getApi()

  }

  ngOnDestroy() {
    this.getApi()
  }

  getApi() {
    this.apiService.getAllProduct()
      .subscribe(data => {
        this.product = data.products;
        this.newProduct = [...this.newProduct, ...this.product.slice(this.skip, this.limit)];
        this.skip++;
      })
  }


  scrollDn() {
    console.log("scrolled")
    this.newProduct = [...this.newProduct, ...this.product.slice(this.skip*this.limit, this.skip*this.limit+this.limit)]
    this.skip++;
  }

}
