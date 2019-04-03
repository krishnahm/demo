import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-deployment-overview',
  templateUrl: './deployment-overview.component.html',
  styleUrls: ['../harvest-overview/harvest-overview.component.css']
})
export class DeploymentOverviewComponent implements OnInit {

  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle( 'Deployment Overview :: PolarityTE, Inc.(PTE)' );
  }

}
