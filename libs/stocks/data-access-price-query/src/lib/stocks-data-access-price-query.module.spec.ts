import { async, TestBed } from '@angular/core/testing';
import { StocksDataAccessPriceQueryModule } from './stocks-data-access-price-query.module';

describe('StocksDataAccessPriceQueryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksDataAccessPriceQueryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StocksDataAccessPriceQueryModule).toBeDefined();
  });
});
