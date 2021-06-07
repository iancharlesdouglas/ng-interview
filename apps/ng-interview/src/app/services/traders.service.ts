import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trader } from '../model/trader';

@Injectable({
  providedIn: 'root',
})
export class TradersService {
  getTraders(): Observable<Trader[]> {
    return new Observable<Trader[]>((observer) => {
      observer.next(
        [
          new Trader('trd001', 'Smith', 'John', 1000000),
          new Trader('trd002', 'Ashley', 'Mary'),
        ].sort((a, b) => a.familyName.localeCompare(b.familyName))
      );
      observer.complete();
    });
  }

  getTraderTarget(trader: Trader): number {
    switch (trader.grade) {
      case 'C':
        return 1000000;
      default:
        return 0;
    }
  }

  async getTrader(id: string): Promise<Trader> {
    const traders = await this.getTraders().toPromise();
    const foundTrader = traders.find((trader) => trader.id === id);
    if (foundTrader) {
      return foundTrader;
    }
    return Promise.reject(new Error(`No trader ${id}`));
  }
}
