import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-skinte-for-patients',
  templateUrl: './skinte-for-patients.component.html',
  styleUrls: ['./skinte-for-patients.component.css']
})

export class SkinteForPatientsComponent implements OnInit {
  dataSrc: any = []
  videoURL = 'https://www.youtube-nocookie.com/embed/Nxsp1Bo5zFo?rel=0&amp;showinfo=0'

  constructor(private navbar: NavbarMenuService, private titleService: Title, private meta: Meta) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'SkinTE For Patients :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/products/skinTE-patients' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'SkinTE is a first-of-its-kind human cellular and tissue-based product derived from a patient’s own skin to regenerate full-thickness, functional skin with all its layers and appendages, including hair follicles and glands.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'SkinTE for Patients, tissue-based product' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'SkinTE is a first-of-its-kind human cellular and tissue-based product derived from a patient’s own skin to regenerate full-thickness, functional skin with all its layers and appendages, including hair follicles and glands.' }

    );
  }


  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle('SkinTE For Patients :: PolarityTE, Inc.(PTE)');

  }
}