import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteoteComponent } from './osteote.component';

describe('OsteoteComponent', () => {
  let component: OsteoteComponent;
  let fixture: ComponentFixture<OsteoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsteoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsteoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
