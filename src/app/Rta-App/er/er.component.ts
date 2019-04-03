import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-er',
  templateUrl: './er.component.html',
  styleUrls: ['../harvest-overview/harvest-overview.component.css']
})
export class ERComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Exceptional Release Form :: PolarityTE, Inc.(PTE)' );
    
  }

}
