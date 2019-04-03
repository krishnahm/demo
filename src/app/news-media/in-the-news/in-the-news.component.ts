import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { PagerService } from '../../pager.service';
import { Title, Meta } from '@angular/platform-browser';
import { InthenewsService } from 'src/app/shared/inthenews.service';


@Component({
  selector: 'app-in-the-news',
  templateUrl: './in-the-news.component.html',
  styleUrls: ['./in-the-news.component.css']
})
export class InTheNewsComponent implements OnInit {
  dataSrc:any = []
square:any=[];
  constructor(private navbar : NavbarMenuService, private pagerService: PagerService,private titleService: Title,private newsService:InthenewsService, private meta: Meta) {

    this.meta.updateTag(
      { property: 'og:title', content: 'In the News :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/news-media/in-the-news' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'In The News' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }

    );
   }




  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {
    this.square=this.newsService.List_of_news;
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle( 'In the News :: PolarityTE, Inc.(PTE)' );

        // initialize to page 1
        this.setPage(1);
    }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.square.length, page);

    // get current page of items
    this.pagedItems = this.square.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


}

   



