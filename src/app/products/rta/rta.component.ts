import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-rta',
  templateUrl: './rta.component.html',
  styleUrls: ['./rta.component.css']
})
export class RtaComponent implements OnInit {

  dataSrc: any = []

  constructor(private navbar: NavbarMenuService, private titleService: Title, private meta: Meta) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'RTA :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/products/rta' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'The advanced Real-Time Assistant (RTA) allows medical providers to communicate with the PolarityTE Physician-led Clinical Operations Team 24-hours a Day, track issues, conduct peer-to-peer QA, submit images or videos for review.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'RTA, Real-Time Assistant, HIPAA-compliant messaging platform' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'The advanced Real-Time Assistant (RTA) allows medical providers to communicate with the PolarityTE Physician-led Clinical Operations Team 24-hours a Day, track issues, conduct peer-to-peer QA, submit images or videos for review.' }

    );
  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle('RTA :: PolarityTE, Inc.(PTE)');
  }

  autoplayVideo(id) {
    id.currentTime = 0;
    id.play;
  }
  arrowClick(video_1, video_2, video_3) {
    video_1.currentTime = 0;
    video_1.play;
    video_2.currentTime = 0;
    video_2.play;
    video_3.currentTime = 0;
    video_3.play;

  }
}