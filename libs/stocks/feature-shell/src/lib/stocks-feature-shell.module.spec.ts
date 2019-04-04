import { async, TestBed } from '@angular/core/testing';
import { StocksFeatureShellModule } from './stocks-feature-shell.module';

describe('StocksFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StocksFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StocksFeatureShellModule).toBeDefined();
  });
});
