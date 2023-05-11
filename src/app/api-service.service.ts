import { Injectable } from '@angular/core';
import { Post } from "./post";
import { Product } from "./product";
import { User } from "./user";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  postsUrl = 'https://dummyjson.com/posts?limit=150';
  productsUrl = 'https://dummyjson.com/products?limit=100';
  usersUrl = 'https://dummyjson.com/users?limit=100';
  getPostApi(){
    return this.http.get<Post>(this.postsUrl)
  }

  getProductApi(){
    return this.http.get<Product>(this.productsUrl)
  }

  getUsersApi(){
    return this.http.get<User>(this.usersUrl)
  }
}
