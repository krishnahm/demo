import { Component, OnInit } from '@angular/core';

import { PageScrollConfig } from 'ngx-page-scroll';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
  classwhatisPolarity;
  classpolarityteplatform;
  classhowitworks;
  constructor(private titleService: Title, private meta: Meta) {

  this.meta.updateTag(
  {property: 'og:title', content: 'Platform :: PolarityTE, Inc.(PTE)'}
 
 );


 this.meta.updateTag(
  {property: 'og:url', content: 'https://www.polarityte.com/platform'}
 );
 this.meta.updateTag(
  {name: 'description', content: 'po•lar•i•ty: the asymmetric organization of cellular elements, which allows development of specialized tissue and downstream function.'}
 
 );
 this.meta.updateTag(
  {name: 'keywords', content: 'What is Polarity?'}
 );
 this.meta.updateTag(
  {property: 'og:description', content: 'po•lar•i•ty: the asymmetric organization of cellular elements, which allows development of specialized tissue and downstream function.'}
 
 );
  }
  ngOnInit() {
    PageScrollConfig.defaultScrollOffset = 70;
    this.titleService.setTitle('Platform :: PolarityTE, Inc.(PTE)');
  }

  getvalue(data){
    if(data == 'whatispolarity?'){
      this.classwhatisPolarity='active';
       this.classpolarityteplatform='';
       this.classhowitworks='';
     
    }
    if(data == 'polarityteplatform'){
      this.classpolarityteplatform='active';
      this.classwhatisPolarity='';
      this.classhowitworks='';
      

    }
    if(data == 'howitworks'){
      this.classhowitworks='active';
      this.classpolarityteplatform='';
      this.classwhatisPolarity='';
      

    }

  }

}


