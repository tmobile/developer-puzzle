import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  @Input() data : [string, number];
  chartData: any;

  chart: {
    title: string;
    type: string;
    data: [];
    columnNames: string[];
    options: any;
  };

  ngOnInit() {
    this.chart = {
      title: 'Stock Price Chart',
      type: 'LineChart',
      data: [],
      columnNames: ['period', 'close'],
      options: { title: `Stock price`, width: '600', height: '400' }
    };
  }
}
