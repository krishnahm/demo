import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) { 

    this.meta.updateTag(
      { property: 'og:title', content: 'Partners :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/partners' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'At PolarityTE, we are inspired by innovation and have the capability, experience and know-how to bring pioneering concepts and game-changing ideas to fruition in an efficient manner. We want to partner with people who share our drive and ambition to change the landscape of medicine.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'Building Strategic Partnerships, PolarityTE, Inc.(PTE), PolarityIS, PolarityRD, PolarityED, PolarityIT, PolarityRX' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'At PolarityTE, we are inspired by innovation and have the capability, experience and know-how to bring pioneering concepts and game-changing ideas to fruition in an efficient manner. We want to partner with people who share our drive and ambition to change the landscape of medicine.' }

    );
  }
  ngOnInit() {
     PageScrollConfig.defaultScrollOffset = 70;
     this.titleService.setTitle( 'Partners :: PolarityTE, Inc.(PTE)' );
  }
}