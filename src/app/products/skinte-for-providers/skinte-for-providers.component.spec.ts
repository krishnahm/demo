import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinteForProvidersComponent } from './skinte-for-providers.component';

describe('SkinteForProvidersComponent', () => {
  let component: SkinteForProvidersComponent;
  let fixture: ComponentFixture<SkinteForProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinteForProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinteForProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
