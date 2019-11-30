import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriceQueryFacade, PriceQuery } from '@coding-challenge/stocks/data-access-price-query';
import { Observable } from 'rxjs';

@Component({
  selector: 'coding-challenge-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stockPickerForm: FormGroup;
  symbol: string;
  period: string;
  stockData: [string, number];
  
  /* quotes$ = this.priceQuery.priceQueries$.
  subscribe(response => (this.stockData = response)); */

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

  constructor(private fb: FormBuilder, private priceQuery: PriceQueryFacade) {
    this.stockPickerForm = fb.group({
      symbol: [null, Validators.required],
      period: [null, Validators.required]
    });
  }

  ngOnInit() {
    /* this.priceQuery.priceQueries$.
       subscribe(response  => (this.stockData = response));  */
  }

  fetchQuote() {
    
    if (this.stockPickerForm.valid) {

      const { symbol, period } = this.stockPickerForm.value;
      this.priceQuery.fetchQuote(symbol, period);

      this.priceQuery.priceQueries$.
       subscribe( (responseData)  => (this.stockData = responseData)); 
    }
  }

}
