import { async, TestBed } from '@angular/core/testing';
import { SharedUiChartModule } from './shared-ui-chart.module';

describe('SharedUiChartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiChartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiChartModule).toBeDefined();
  });
});
