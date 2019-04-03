import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter, Inject, PLATFORM_ID
 } from '@angular/core';
 import {Observable} from 'rxjs/Rx';
 import {Subscription} from 'rxjs/Subscription';
import { WINDOW } from '../window.service';
import { isPlatformBrowser } from '@angular/common';

 @Directive({
  selector: '[appear]'
 })
 export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output()
  appear: EventEmitter<void>;
 
  elementPos: number;
  elementHeight: number;
 
  scrollPos: number;
  windowHeight: number;
 
  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;
 
  constructor(private element: ElementRef,@Inject(WINDOW) private window, @Inject(PLATFORM_ID) private platform: Object){
    this.appear = new EventEmitter<void>();
  }
 
  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = this.window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = this.window.scrollY;
  }
  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(){
    if(this.isVisible()){
      this.saveDimensions();
      if(this.isVisible()){
        this.unsubscribe();
        this.appear.emit();
      }
    }
  }
  isVisible(){
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }
 
  subscribe(){
    if (isPlatformBrowser(this.platform)) {
      this.subscriptionScroll = Observable.fromEvent(window, 'scroll').startWith(null)
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = Observable.fromEvent(window, 'resize').startWith(null)
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });

    }
  }
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if(this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }
 
  ngAfterViewInit(){
    this.subscribe();
  }
  ngOnDestroy(){
    this.unsubscribe();
  }
 }