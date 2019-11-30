import { async, TestBed } from '@angular/core/testing';
import { SharedUiChartModule } from './shared-ui-chart.module';
import { GoogleChartsModule } from 'angular-google-charts';

describe('SharedUiChartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiChartModule, GoogleChartsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiChartModule).toBeDefined();
  });
});
