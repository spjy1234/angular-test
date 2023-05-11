import {Component, DoCheck, OnInit} from '@angular/core';
import { Product } from "../product";
import {ApiServiceService} from "../api-service.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck{
  product: Product[] = [];
  newProduct: Product[] = [];

  index: number = 0;
  pageSize: number = 7;

  constructor(private apiService: ApiServiceService, public router: Router) {
  }
  ngOnInit() {
    this.getApi()
  }
  ngDoCheck() {
  }

  getApi(){
    this.apiService.getProductApi()
      .subscribe((data: any) => {
        this.product = data.products;
        this.newProduct = [...this.newProduct, ...this.product.slice(this.index, this.pageSize)]
        this.index++;})
  }
  scrollDn(){
    this.newProduct = [...this.newProduct, ...this.product.slice(this.index * this.pageSize, this.index * this.pageSize + this.pageSize)]
    this.index++;
  }

  putClick(event: any){
    this.router.navigateByUrl('/productsDetail',{state:{event}})
    // console.log(event)
  }
}
