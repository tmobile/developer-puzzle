import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceQueryFacade } from '@coding-challenge/stocks/data-access-price-query';
import { Observable } from 'rxjs';
import { A11yModule } from '@angular/cdk/a11y';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockPickerForm: FormGroup;
  symbol: string;
  period: string;
  stockData: any;
  fromDate: Date;
  toDate: Date;

  timePeriods = [
    { viewValue: 'All available data', value: 'max' },
    { viewValue: 'Five years', value: '5y' },
    { viewValue: 'Two years', value: '2y' },
    { viewValue: 'One year', value: '1y' },
    { viewValue: 'Year-to-date', value: 'ytd' },
    { viewValue: 'Six months', value: '6m' },
    { viewValue: 'Three months', value: '3m' },
    { viewValue: 'One month', value: '1m' }
  ];

  minDate = new Date(2000, 0, 1);
  maxDate = new Date();

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      period: [null, Validators.required],
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required]
    });
  }

  ngOnInit() {

  }



  fetchQuote() {
    
    if (this.stockPickerForm.valid) {

      let { symbol, period, fromDate, toDate } = this.stockPickerForm.value;

      if(fromDate.getTime() > toDate.getTime()) {
        
        this.stockPickerForm.patchValue({
          fromDate: toDate
        });
        this.fromDate = toDate;
      }

      this.priceQuery.fetchQuote(symbol, period);

      this.priceQuery.priceQueries$.
       subscribe( (responseData)  => {
         (this.stockData = responseData)
       }); 
    }
  }

}
