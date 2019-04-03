import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../../shared/team-data.service';
import { NavbarMenuService } from '../../navbar-menu.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  dataSrc: any = []
  heading = 'Company Info';
  overview: boolean = true;
  teamdata_Mngmnt = [];
  management;
  faq;
  black='transparent';
  removeAsideImage
  fonts_color_over = '#49a0df';
  fonts_color_mngmnt;
  fonts_color_faq;
  panelExpanded: any = [];
  expandall = false;
  collapseall = false;

  constructor(private navbar: NavbarMenuService,
    private mngmnt_team: TeamDataService, private titleService: Title, private meta: Meta) {

    this.meta.updateTag(
      { property: 'og:title', content: 'Company Information :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/investor/company-info' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'Company Information, PolarityTE, Inc.(PTE)' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }

    );
  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc;
    this.removeAsideImage='./assets/companyInfo-assets/leftSidebar.mask.jpg';
    this.titleService.setTitle('Company Information :: PolarityTE, Inc.(PTE)');

  }
  queAns = [
    {
      que: "What is PolarityTE's stock symbol?",
      ans: 'Our stock is traded on the NASDAQ under the symbol PTE.'
    },
    {

      que: "Where is PolarityTE located?",
      ans: '123 North Wright Brothers Drive, \nSalt Lake City, UT 84116'
    },
    {

      que: "When is PolarityTE’s fiscal year end?",
      ans: 'December 31st'
    },
    {

      que: "Who is PolarityTE's transfer agent?",
      ans: 'Equity Stock Transfer \n237 W 37th St Suite 601, \nNew York, NY 10018 \nT: 917-746-4595 F: 347-584-3644'
    },
    {

      que: "Who is PolarityTE’s independent auditor?",
      ans: 'EisnerAmper LLP'
    },
    {
      que: "Who is PolarityTE’s outside legal counsel?",
      ans: 'Parsons Behle & Latimer'
    }
  ]

  expandmethod() {
    this.expandall = true;
  }
  collapsemethod() {
    this.expandall = false;
  }


  openoverview() {
    this.heading = 'Company Info';
    this.overview = true;
    this.management = false;
    this.faq = false;
    this.fonts_color_over = '#49a0df';
    this.fonts_color_faq = '';
    this.fonts_color_mngmnt = '';
    this.removeAsideImage = './assets/companyInfo-assets/leftSidebar.mask.jpg';
    this.black='transparent'

  }
  openmanagement() {
    this.overview = false;
    this.management = true;
    this.faq = false;
    this.heading = 'Management Team';
    this.fonts_color_over = '';
    this.fonts_color_mngmnt = '#49a0df';
    this.fonts_color_faq = '';
    this.mngmnt_team.getManagement().subscribe(emplist => this.teamdata_Mngmnt = emplist);
    this.removeAsideImage = 'none';
    this.black='#000000'
  }
  openfaq() {
    this.overview = false;
    this.management = false;
    this.faq = true;
    this.heading = 'FAQ';
    this.fonts_color_over = '';
    this.fonts_color_mngmnt = '';
    this.fonts_color_faq = '#49a0df';
    this.removeAsideImage = './assets/companyInfo-assets/leftSidebar.mask.jpg';
    this.black='transparent'
  }
}