import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';

import postscribe from 'postscribe';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-skinte-for-providers',
  templateUrl: './skinte-for-providers.component.html',
  styleUrls: ['./skinte-for-providers.component.css']
})
export class SkinteForProvidersComponent implements OnInit {
  dataSrc: any = []

  public show: boolean = false;

  public reviews = [{
    url: "./assets/skinte-providers-assets/slides/skinteSlides1.jpg"
  }, {

    url: "./assets/skinte-providers-assets/slides/skinteSlides2.jpg"
  }, {

    url: "./assets/skinte-providers-assets/slides/skinteSlides3.jpg"
  }, {

    url: "./assets/skinte-providers-assets/slides/skinteSlides4.jpg"
  }
  ];

  videoURL = 'https://www.youtube-nocookie.com/embed/Nxsp1Bo5zFo?rel=0&amp;showinfo=0'

  
  constructor(private navbar: NavbarMenuService, private titleService: Title, private meta: Meta) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'SkinTE For Providers :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/products/skinTE-providers' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'SkinTE is a first-of-its-kind human cellular and tissue-based product derived from a patient’s own skin to regenerate full-thickness, functional skin with all its layers and appendages, including hair follicles and glands.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'SkinTE for Providers, Regenerative full-thickness, functional skin' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'SkinTE is a first-of-its-kind human cellular and tissue-based product derived from a patient’s own skin to regenerate full-thickness, functional skin with all its layers and appendages, including hair follicles and glands.' }

    );
  }


  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle('SkinTE For Providers :: PolarityTE, Inc.(PTE)');

  }
  ngAfterViewInit() {
    postscribe('#slider', '<script src="assets/thumbnail-slider.js" type="text/javascript"><\/script>');
  }

}
