import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rta-terms-conditions',
  templateUrl: './rta-terms-conditions.component.html',
  styleUrls: ['../product-manual/product-manual.component.css']
})
export class RtaTermsConditionsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'PolarityTE RTA Terms & Conditions :: PolarityTE, Inc.(PTE)' );
  }

}
