import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../navbar-menu.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {
dataSrc:any = []
  constructor(private navbar : NavbarMenuService,private meta: Meta,private titleService: Title) {
   
  }
ngOnInit(){
  this.dataSrc = this.navbar.DataSrc
  this.titleService.setTitle( 'About :: PolarityTE, Inc.(PTE)' );
  this.meta.updateTag(
    {property: 'og:site_name', content: 'PolarityTE, Inc.(PTE)'} 
);
this.meta.updateTag(
{property: 'og:title', content: 'About :: PolarityTE, Inc.(PTE)'});
this.meta.updateTag(
{property: 'og:url', content: 'https://www.polarityte.com/about/overview'} 
);
this.meta.updateTag(
{name: 'description', content: 'At PolarityTE, we’re aiming to be the first company to truly deliver regenerative medicine into clinical practice, fulfilling the long unmet promise that tissue engineering has failed to meet. We utilize a patient’s own cells and tissues to regenerate functionally-polarized human tissue.'}
);
this.meta.updateTag(
{name: 'keywords', content: 'innovative platform technology, Where Self Regenerates Self'} 
);
this.meta.updateTag(
{property: 'og:description', content: 'At PolarityTE, we’re aiming to be the first company to truly deliver regenerative medicine into clinical practice, fulfilling the long unmet promise that tissue engineering has failed to meet. We utilize a patient’s own cells and tissues to regenerate functionally-polarized human tissue.'}
);
 
  }
}
