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
}
