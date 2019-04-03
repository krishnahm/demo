import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { TeamDataService } from '../../shared/team-data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.css']
})
export class GovernanceComponent implements OnInit {
  dataSrc = [];
  teamdata=[]

  constructor(private navbar: NavbarMenuService,private team:TeamDataService,
    private titleService: Title, private meta: Meta) {
   
      this.meta.updateTag(
        { property: 'og:title', content: 'Governance :: PolarityTE, Inc.(PTE)' }
  
      );
   
      this.meta.updateTag(
        { property: 'og:url', content: 'https://www.polarityte.com/investor/governance' }
      );
 
      this.meta.updateTag(
        { name: 'keywords', content: 'Governance, Board of Directors' }
      );
      }
  
  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc;
    this.titleService.setTitle( 'Governance :: PolarityTE, Inc.(PTE)' );
    this.team.getEmployees().subscribe(emplist=>this.teamdata=emplist) ;
  }
}