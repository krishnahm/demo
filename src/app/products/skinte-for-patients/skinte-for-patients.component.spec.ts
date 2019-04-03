import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinteForPatientsComponent } from './skinte-for-patients.component';

describe('SkinteForPatientsComponent', () => {
  let component: SkinteForPatientsComponent;
  let fixture: ComponentFixture<SkinteForPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinteForPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinteForPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
