import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from '../model/trader';

@Component({
  selector: 'ng-interview-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.css'],
})
export class TradersComponent {
  traders: Observable<Trader[]>;

  constructor() {}
}
