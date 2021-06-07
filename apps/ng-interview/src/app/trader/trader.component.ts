import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradersService } from '../services/traders.service';

@Component({
  selector: 'ng-interview-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css'],
})
export class TraderComponent implements OnInit {
  traderId = '';

  familyName = '';

  constructor(
    private actRoute: ActivatedRoute,
    private service: TradersService
  ) {
    this.traderId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getTrader(this.traderId).then((trader) => {
      this.familyName = trader.familyName;
    });
  }

  save(form: HTMLFormElement): void {
    if (form.checkValidity()) {
      alert('Saved');
    } else {
      alert('Invalid - not saved');
    }
  }
}
