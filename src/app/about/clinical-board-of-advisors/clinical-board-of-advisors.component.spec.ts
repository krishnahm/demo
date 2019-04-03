import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalBoardOfAdvisorsComponent } from './clinical-board-of-advisors.component';

describe('ClinicalBoardOfAdvisorsComponent', () => {
  let component: ClinicalBoardOfAdvisorsComponent;
  let fixture: ComponentFixture<ClinicalBoardOfAdvisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalBoardOfAdvisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalBoardOfAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
