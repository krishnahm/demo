import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamDataService } from '../../shared/team-data.service';
import { Location } from '@angular/common';
import { NavbarMenuService } from '../../navbar-menu.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-bio-detail',
  templateUrl: './bio-detail.component.html',
  styleUrls: ['./bio-detail.component.css']
})
export class BioDetailComponent implements OnInit {
  name
  bod_list = [];
  mngmnt_list = [];
  cba_list = [];
  individual_list = []
  dataSrc: any = []

  constructor(private activateroute: ActivatedRoute,
    private navbar: NavbarMenuService,
    private team: TeamDataService, private _location: Location,private titleService: Title
  ) { }
  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle( 'Bio Details :: PolarityTE, Inc.(PTE)' );

    this.activateroute.params.subscribe((data: Params) => {
      this.name = data.name;

    });
    this.team.getEmployees().subscribe((data) => {
      this.bod_list = data;
    })
    this.team.getManagement().subscribe((data) => {
      this.mngmnt_list = data;

      for (var i = 0; i < this.mngmnt_list.length; i++) {
        if (this.name == this.mngmnt_list[i].firstName) {
          this.individual_list.push(this.mngmnt_list[i]);
        }
      }
      for (var i = 0; i < this.bod_list.length; i++) {
        if (this.name == this.bod_list[i].firstName) {
          this.individual_list.push(this.bod_list[i]);
        }
      }
    })
    this.team.getClinicalBoard().subscribe((data) => {
      this.cba_list = data;
      for (var i = 0; i < this.cba_list.length; i++) {
        if (this.name == this.cba_list[i].firstName) {
          this.individual_list.push(this.cba_list[i]);
        }
      }
    });
  }
  goback() {
    this._location.back();

  }
}
