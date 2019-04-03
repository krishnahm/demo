import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestOverviewComponent } from './harvest-overview.component';

describe('HarvestOverviewComponent', () => {
  let component: HarvestOverviewComponent;
  let fixture: ComponentFixture<HarvestOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
