import { Component, Input } from '@angular/core';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() data: (string | number)[][] = [];

  title = '';
  type = 'LineChart';
  columnNames: string[] = ['period', 'close'];
  options: any = { title: `Stock price`, width: '600', height: '400' };
}
