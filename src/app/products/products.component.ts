import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../navbar-menu.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSrc: any = []
  constructor(private navbar: NavbarMenuService, private titleService: Title, private meta: Meta) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'Products :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/products/overview' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'Regenerating Tissue for a Variety of Markets' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'Regenerating Tissue for a Variety of Markets, SkinTE, OsteoTE' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'Regenerating Tissue for a Variety of Markets' }

    );
  }


  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle('Products :: PolarityTE, Inc.(PTE)');
  }

}