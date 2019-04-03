import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT} from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-sec-filings',
  templateUrl: './sec-filings.component.html',
  styleUrls: ['./sec-filings.component.css']
})
export class SecFilingsComponent implements OnInit {

  dataSrc:any = []


  
  constructor(private navbar : NavbarMenuService, private renderer: Renderer2, @Inject(DOCUMENT) private document: any,private titleService: Title, private meta: Meta) {
   
    this.meta.updateTag(
      { property: 'og:title', content: 'SEC Filings :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/investor/sec-filings' }
    );

  }
 ngOnInit() {
  this.dataSrc = this.navbar.DataSrc
  this.titleService.setTitle( 'SEC Filings :: PolarityTE, Inc.(PTE)' );
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          oSEC.BizID="2361";
          oSEC.sKey="C4B8g6V4p5";
          oSEC.sDiv="SECdiv";
          oSEC.o="default";
          oSEC.sHttp="https";
          oSEC.lo="1";
          getSecData();
        }
    `;
    this.renderer.appendChild(this.document.head, script);

}

} 