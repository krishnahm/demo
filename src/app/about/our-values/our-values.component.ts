import { Component, OnInit, ElementRef, Inject, Renderer2 } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent implements OnInit {
  dataSrc:any = []
  show=false;
  state = 'hide';
  state1='hide'
  constructor(private navbar : NavbarMenuService , public el: ElementRef,
    @Inject(DOCUMENT) private document: any, private renderer: Renderer2,
    private titleService: Title,private meta: Meta) {

  
     }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc;
    this.titleService.setTitle( 'Our Values :: PolarityTE, Inc.(PTE)' );
    this.meta.updateTag(
      {property: 'og:title', content: 'Our Values :: PolarityTE, Inc.(PTE)'}
     
    );
  
    this.meta.updateTag(
      {property: 'og:url', content: 'https://www.polarityte.com/about/values'} 
    );
    this.meta.updateTag(
      {name: 'description', content: 'We are a company created by providers for providers and the patients they serve.'}
    
    );
    this.meta.updateTag(
      {property: 'og:description', content: 'We are a company created by providers for providers and the patients they serve.'}
    
    );
     }


}