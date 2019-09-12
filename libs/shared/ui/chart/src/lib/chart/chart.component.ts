import { Component, Input } from '@angular/core';

@Component({
  selector: 'coding-challenge-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() data: (string | number)[][] = [];
  @Input() title = '';
  @Input() type = 'LineChart';
  @Input() columnNames: string[];
  @Input() options: any = { width: '600', height: '400' };
}
