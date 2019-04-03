import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.css']
})
export class PressReleasesComponent implements OnInit {

  dataSrc:any = []
  constructor(private navbar : NavbarMenuService,
    @Inject(DOCUMENT) private document: any, private renderer: Renderer2,private titleService: Title, private meta: Meta) {
  
      this.meta.updateTag(
        { property: 'og:title', content: 'Press Releases :: PolarityTE, Inc.(PTE)' }
  
      );
      this.meta.updateTag(
        { property: 'og:url', content: 'https://www.polarityte.com/news-media/press-releases' }
      );
      this.meta.updateTag(
        { name: 'description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }
  
      );
      this.meta.updateTag(
        { name: 'keywords', content: 'Press Releases, PolarityTE, Inc.(PTE)' }
      );
      this.meta.updateTag(
        { property: 'og:description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }
  
      );

    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          oLib.BizID = "2361";
          oLib.Group = "1148";  
          oLib.sKey = "C4B8g6V4p5";
          oLib.Count="10";
          oLib.Output="1";
          oLib.sTools="1";
          oLib.CSS="0";
          oLib.sHttp="https";
          oLib.sDiv="LibDiv"
          getData();
        }
    `;
    this.renderer.appendChild(this.document.head, script);
     }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle( 'Press Releases :: PolarityTE, Inc.(PTE)' );
  }

}