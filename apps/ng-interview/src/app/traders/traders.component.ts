import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from '../model/trader';
import { TradersService } from '../services/traders.service';

@Component({
  selector: 'ng-interview-traders',
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.css'],
})
export class TradersComponent implements OnInit {
  traders: Observable<Trader[]> | undefined;

  constructor(private service: TradersService) {}

  ngOnInit(): void {
    this.traders = this.service.getTraders();
  }
}
