import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.component.html',
  styleUrls: ['../product-manual/product-manual.component.css']
})
export class EulaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'EULA :: PolarityTE, Inc.(PTE)' );
  }

}
