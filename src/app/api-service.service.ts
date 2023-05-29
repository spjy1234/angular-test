import {Injectable} from '@angular/core';
import {Post, Posts} from "./post";
import {Product, Products} from "./product";
import {User, Users} from "./user";

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
  productsUrl = 'https://dummyjson.com/products';
  usersUrl = 'https://dummyjson.com/users';

  getPostApi(postId: number): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + `/${postId}`)
  }

  getAllPost(skip: number, limit: number): Observable<Posts> {
    return this.http.get<Posts>(this.postsUrl + `?skip=${skip}&limit=${limit}`)
  }

  getProductApi(productId: number) {
    return this.http.get<Product>(this.productsUrl + `/${productId}`)
  }

  getAllProduct() {
    return this.http.get<Products>(this.productsUrl + "?limit=100")
  }

  getUsersApi(userId: number) {
    return this.http.get<User>(this.usersUrl + `/${userId}`)
  }

  getAllUser(){
    return this.http.get<Users>(this.usersUrl + "?limit=100")
  }
}
