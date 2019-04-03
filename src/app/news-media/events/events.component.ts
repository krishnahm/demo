import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';

@Component({
 selector: 'app-events',
 templateUrl: './events.component.html',
 styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

 constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer2,private titleService: Title, private meta: Meta) {
   
   this.meta.updateTag(
     { property: 'og:title', content: 'Events :: PolarityTE, Inc.(PTE)' }
   );
   this.meta.updateTag(
     { property: 'og:url', content: 'https://www.polarityte.com/news-media/events' }
   );

   this.meta.updateTag(
     { name: 'keywords', content: 'Events' }
   );
 }

 ngOnInit() {
   this.titleService.setTitle( 'Events :: PolarityTE, Inc.(PTE)' );
   let futureDiv = this.renderer.createElement('script');
   futureDiv.type = `text/javascript`;
   futureDiv.text = `
   {
     oCal.BizID = "2361";
     oCal.sKey = "C4B8g6V4p5";
     oCal.sDiv = "futureDiv";
     oCal.Count = 4;
     oCal.Mode = "";
     oCal.sHttp = "https";
     getCalData();
   }
   `;
   this.renderer.appendChild(this.document.body, futureDiv);

   let pastDiv = this.renderer.createElement('script');
   pastDiv.type = `text/javascript`;
   pastDiv.text = `
   {
     oCal.BizID = "2361";
     oCal.sKey = "C4B8g6V4p5";
     oCal.sDiv = "pastDiv";
     oCal.Count = 10;
     oCal.Mode = "1";
     oCal.sHttp = "https";
     getCalData();
   }
   `;
   this.renderer.appendChild(this.document.body, pastDiv);
 }


}