import { Component, OnInit, HostListener } from '@angular/core';
import { TeamDataService } from '../../shared/team-data.service';
import { NavbarMenuService } from '../../navbar-menu.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['../management-team/management-team.component.css'],
})
export class BoardOfDirectorsComponent implements OnInit {
  dataSrc:any = []
  teamdata=[]


  constructor(private navbar : NavbarMenuService,private team:TeamDataService,private titleService: Title, private meta: Meta) {

this.meta.updateTag(
  {property: 'og:title', content: 'Board of Directors:: PolarityTE, Inc.(PTE)'}
 
);

this.meta.updateTag(
  {property: 'og:url', content: 'https://www.polarityte.com/about/board-of-directors'} 
);


  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.team.getEmployees().subscribe(emplist=>this.teamdata=emplist) ;
    this.titleService.setTitle('Board of Directors:: PolarityTE, Inc.(PTE)' );
  }

  @HostListener('touchstart', ['$event'])
  ontouchstart(event){}
   
  
}