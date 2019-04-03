import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { TeamDataService } from '../../shared/team-data.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-clinical-board-of-advisors',
  templateUrl: './clinical-board-of-advisors.component.html',
  styleUrls: ['../management-team/management-team.component.css']
})
export class ClinicalBoardOfAdvisorsComponent implements OnInit {
  teamdata_Cba=[]
  dataSrc:any = []

  constructor(private navbar : NavbarMenuService,private cba_team:TeamDataService,private titleService: Title, private meta: Meta) { 
 
  this.meta.updateTag(
  {property: 'og:title', content: 'Clinical Board of Advisors :: PolarityTE, Inc.(PTE)'}
  
  );

  this.meta.updateTag(
  {property: 'og:url', content: 'https://www.polarityte.com/about/clinical-board-of-advisors'} 
  );
  
  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc;
    this.cba_team.getClinicalBoard().subscribe(emplist=>this.teamdata_Cba=emplist);
    this.titleService.setTitle( 'Clinical Board of Advisors :: PolarityTE, Inc.(PTE)' );
  }
  
@HostListener('touchstart', ['$event'])
ontouchstart(event){}
 
}

