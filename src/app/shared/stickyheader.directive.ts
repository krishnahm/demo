import { Directive,Inject, HostListener, ElementRef, Input } from '@angular/core';
import { WINDOW } from '../window.service';


@Directive({
  selector: '[sticky]'
})
export class StickyheaderDirective {
  private _minY: number = 45;
  private _className: string = 'stick';

  @Input('stickMin') set stickMin(minY: number) {
      this._minY = minY || this._minY;
  }

  @Input('stickClass') set stickClass(className: string) {
      this._className = className || this._className;
  }

  constructor(
  @Inject(WINDOW) private window,private _element: ElementRef) { 
   
  }
  @HostListener("window:scroll", [])
  handleScrollEvent(e) {
    if (this.window.pageYOffset > this._minY) {
      this._element.nativeElement.classList.add( this._className);
    
     } else  {
      this._element.nativeElement.classList.remove(this._className);
    }
  }
}
