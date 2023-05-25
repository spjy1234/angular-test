import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./posts/posts.component";
import {ProductsComponent} from "./products/products.component";
import {UsersComponent} from "./users/users.component";
import {DetailComponent} from "./detail/detail.component";
import {PostsDetailComponent} from "./posts-detail/posts-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostsDetailComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'detail', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
