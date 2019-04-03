import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManualComponent } from './product-manual.component';

describe('ProductManualComponent', () => {
  let component: ProductManualComponent;
  let fixture: ComponentFixture<ProductManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
