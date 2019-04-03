import { Component, OnInit, HostListener, Renderer2, Inject } from '@angular/core';

import { TeamDataService } from '../../shared/team-data.service';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';
  @Component({
  selector: 'app-management-team',
  templateUrl: './management-team.component.html',
  styleUrls: ['./management-team.component.css']
})
export class ManagementTeamComponent implements OnInit {
teamdata_Mngmnt=[];
dataSrc:any = []
  constructor(private navbar : NavbarMenuService,private mngmnt_team:TeamDataService,private renderer: Renderer2,@Inject(DOCUMENT) private document: any,private titleService: Title, private meta: Meta) {
  
this.meta.updateTag(
  {property: 'og:title', content: 'Management Team :: PolarityTE, Inc.(PTE)'}
 
);
this.meta.updateTag(
  {property: 'og:url', content: 'https://www.polarityte.com/about/management-team'} 
);


  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.mngmnt_team.getManagement().subscribe(emplist=>this.teamdata_Mngmnt=emplist);
    let datavidebg = this.renderer.createElement('script');
    datavidebg.type = `text/javascript`;
    datavidebg.src = './assets/jquery.vide.js'
    this.renderer.appendChild(this.document.head, datavidebg);
    this.titleService.setTitle( 'Management Team :: PolarityTE, Inc.(PTE)' );
   }


@HostListener('touchstart', ['$event'])
ontouchstart(event){}
 
}