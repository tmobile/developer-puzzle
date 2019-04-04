import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [CommonModule, GoogleChartsModule.forRoot()],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class SharedUiChartModule {}
