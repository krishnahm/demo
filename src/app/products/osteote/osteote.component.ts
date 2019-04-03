import { Component, OnInit } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { ModalService } from '../../shared';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-osteote',
  templateUrl: './osteote.component.html',
  styleUrls: ['./osteote.component.css']
})
export class OsteoteComponent implements OnInit {
  dataSrc: any = []

  constructor(private navbar: NavbarMenuService, private modalService: ModalService, private titleService: Title, private meta: Meta) {
 
    this.meta.updateTag(
      { property: 'og:title', content: 'OsteoTE :: PolarityTE, Inc.(PTE)' }

    );
    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/products/osteoTE' }
    );
    this.meta.updateTag(
      { name: 'description', content: 'OsteoTE is an autologous—from the patient, for the patient—product intended for bone repair, reconstruction, replacement, supplementation and regeneration, including in the long bone, craniomaxillofacial, spine, dental, hand and foot/ankle markets.' }

    );
    this.meta.updateTag(
      { name: 'keywords', content: 'OsteoTE, Regeneration of Bone in Critical Defects' }
    );
    this.meta.updateTag(
      { property: 'og:description', content: 'OsteoTE is an autologous—from the patient, for the patient—product intended for bone repair, reconstruction, replacement, supplementation and regeneration, including in the long bone, craniomaxillofacial, spine, dental, hand and foot/ankle markets.' }

    );
  }


  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle('OsteoTE :: PolarityTE, Inc.(PTE)');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}