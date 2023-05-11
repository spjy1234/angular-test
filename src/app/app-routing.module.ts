import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts/posts.component";
import {ProductsComponent} from "./products/products.component";
import {UsersComponent} from "./users/users.component";
import {PostsDetailComponent} from "./posts-detail/posts-detail.component";
import {ProductsDetailComponent} from "./products-detail/products-detail.component";
import {UsersDetailComponent} from "./users-detail/users-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'postsDetail', component: PostsDetailComponent},
  {path: 'productsDetail', component: ProductsDetailComponent},
  {path: 'usersDetail', component: UsersDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
