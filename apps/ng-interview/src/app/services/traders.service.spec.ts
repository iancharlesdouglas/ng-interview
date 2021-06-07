import { TestBed } from '@angular/core/testing';

import { TradersService } from './traders.service';
import { Trader } from '../model/trader';

describe(TradersService.name, () => {
  let service: TradersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Target should be derived from grade', () => {
    it('Grade C yields expected target', () => {
      const trader = new Trader('t1', 'Smith', 'Kevin', undefined, 'C');
      expect(service.getTraderTarget(trader)).toEqual(1000000);
    });
  });
});
