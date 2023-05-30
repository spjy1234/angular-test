import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {ProductsComponent} from './products/products.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsDetailComponent} from './posts-detail/posts-detail.component';
import {ProductsDetailComponent} from './products-detail/products-detail.component';
import {UsersDetailComponent} from './users-detail/users-detail.component';
import {QuotesComponent} from './quotes/quotes.component';
import { GitUserComponent } from './git-user/git-user.component';
import { GitUserDetailComponent } from './git-user-detail/git-user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    ProductsComponent,
    PostsDetailComponent,
    ProductsDetailComponent,
    UsersDetailComponent,
    QuotesComponent,
    GitUserComponent,
    GitUserDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
