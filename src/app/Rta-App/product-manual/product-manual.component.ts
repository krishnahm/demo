import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-manual',
  templateUrl: './product-manual.component.html',
  styleUrls: ['./product-manual.component.css']
})
export class ProductManualComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'PTE SkinTE Product Manual :: PolarityTE, Inc.(PTE)' );
  
  }


}
