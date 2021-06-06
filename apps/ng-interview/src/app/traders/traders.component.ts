import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from '../model/trader';

@Component({
  selector: 'ng-interview-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.css'],
})
export class TradersComponent implements OnInit {
  traders: Observable<Trader[]> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.traders = new Observable<Trader[]>((observer) => {
      observer.next(
        [
          new Trader('trd001', 'Smith', 'John', 1000000),
          new Trader('trd002', 'Ashley', 'Mary'),
        ].sort((a, b) => a.familyName.localeCompare(b.familyName))
      );
      observer.complete();
    });
  }
}
