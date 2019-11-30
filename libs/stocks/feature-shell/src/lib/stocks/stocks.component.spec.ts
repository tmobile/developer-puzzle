import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksComponent } from './stocks.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';
import { SharedUiChartModule } from '@coding-challenge/shared/ui/chart';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;
  let priceQueryStub: Partial<PriceQueryFacade>;

  beforeEach(async(() => {

    priceQueryStub = {
      
    };
    
    TestBed.configureTestingModule({
      declarations: [ StocksComponent ],
      imports: [
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule,
                MatButtonModule,
                SharedUiChartModule,
                NoopAnimationsModule
              ],
       providers: [ {provide: PriceQueryFacade, useValue: priceQueryStub } ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
