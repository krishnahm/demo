import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtaTermsConditionsComponent } from './rta-terms-conditions.component';

describe('RtaTermsConditionsComponent', () => {
  let component: RtaTermsConditionsComponent;
  let fixture: ComponentFixture<RtaTermsConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtaTermsConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtaTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
