import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppComponent } from '../app.component';
import { NavbarMenuService } from '../navbar-menu.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,NgxPageScrollModule],
      declarations: [ AboutComponent,HeaderComponent,SubHeaderComponent,FooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should match the chlidren', () => {
  //   fixture = TestBed.createComponent(AboutComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   let sub=fixture.debugElement.injector.get(SubHeaderComponent);
  //   // let about=fixture.debugElement.injector.get(AboutComponent);
  //   fixture.detectChanges();
  //    expect(component.dataSrc[0].children).toEqual(sub.subNavArr);
  // });
  it('Setting enabled to false disables the submit button', () => {
    component.dataSrc[0].children = true;
    fixture.detectChanges()
  });
});
