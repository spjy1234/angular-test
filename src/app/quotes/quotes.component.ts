import {Component, OnDestroy, OnInit} from '@angular/core';
import {Quotes, Quote} from "../quotes";
import {filter, map, Observable, pluck, tap} from "rxjs";
import {ApiServiceService} from "../api-service.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnDestroy {
  quotes$: Observable<Quote[]> | undefined;
  quotes: Quote[] = [];
  newQuotes: Quote[] = []

  skip: number = 9;
  limit: number = 10;


  constructor(public apiService: ApiServiceService) {

  }

  ngOnInit() {
    this.quotes$ = this.apiService.getAllQuotes(this.skip * this.limit, this.limit).pipe(
      pluck("quotes"),
      map(i => i.reverse())
    )
  }

  ngOnDestroy() {

  }

  eventClick(event: string) {
    if (event == "left") {
      if (this.skip < 9) {
        this.skip += 1
      }
    }
    if (event == "right") {
      if (this.skip > 1) {
        this.skip -= 1
      }
    }
    this.quotes$ = this.apiService.getAllQuotes(this.skip * this.limit, this.limit).pipe(
      pluck("quotes"),
      map(i => i.reverse())
    )
  }
}
