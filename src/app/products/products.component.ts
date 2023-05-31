import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {Product, Products} from "../product";
import {ApiServiceService} from "../api-service.service";
import {Route, Router} from "@angular/router";
import {map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  product: Product[] = [];
  newProduct: Product[] = [];
  subscription!: Subscription;

  skip: number = 0;
  limit: number = 7;

  constructor(private apiService: ApiServiceService, public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.apiService.getAllProduct().subscribe(
      data => {
        this.product = data.products;
        this.newProduct = [...this.newProduct, ...this.product.slice(this.skip, this.limit)]
        this.skip++;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


  scrollDn() {
    console.log("scrolled")
    this.newProduct = [...this.newProduct, ...this.product.slice(this.skip * this.limit, this.skip * this.limit + this.limit)]
    this.skip++;
  }

}
