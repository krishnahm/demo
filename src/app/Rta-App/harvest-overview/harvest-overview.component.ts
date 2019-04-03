import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-harvest-overview',
  templateUrl: './harvest-overview.component.html',
  styleUrls: ['./harvest-overview.component.css']
})
export class HarvestOverviewComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle( 'Harvest Overview :: PolarityTE, Inc.(PTE)' );
  }

}
