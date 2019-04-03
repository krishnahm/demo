import { Component, OnInit } from '@angular/core';
import { PublicationsService } from './publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  listarticle: any[];

  constructor(private ps:PublicationsService) { }

  ngOnInit() {
    this.listarticle=this.ps.List_of_journal;

  }

}
