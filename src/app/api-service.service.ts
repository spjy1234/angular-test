import {Injectable} from '@angular/core';
import {Post, Posts} from "./post";
import {Product} from "./product";
import {User} from "./user";

import {map, Observable, tap, throwError} from "rxjs";
import {catchError, retry} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {
  }

  postsUrl = 'https://dummyjson.com/posts';
  productsUrl = 'https://dummyjson.com/products?limit=100';
  usersUrl = 'https://dummyjson.com/users?limit=100';

  getPostApi(getId: number) {
    return this.http.get<Post>(this.postsUrl + `/${getId}`)
  }

  getAllPost(skip: number, limit: number) {
    return this.http.get<Posts>(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`)
  }

  getProductApi() {
    return this.http.get<Product>(this.productsUrl)
  }

  getUsersApi() {
    return this.http.get<User>(this.usersUrl)
  }
}
