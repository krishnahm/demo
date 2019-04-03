import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecFilingsComponent } from './sec-filings.component';

describe('SecFilingsComponent', () => {
  let component: SecFilingsComponent;
  let fixture: ComponentFixture<SecFilingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecFilingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecFilingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
