import { Component, OnInit, Output } from '@angular/core';
import { ContactserviceService } from 'src/app/contact/contactservice.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {
  @Output() sendvalue = new EventEmitter;
  constructor(private cs:ContactserviceService) { }

  ngOnInit() {
  }
  goToContact(data){
 
    if(data=="feedback"){
      this.cs.getFromService('feedback')
      this.sendvalue.emit('feedback')
    }

    else if(data=="collaborate"){
      this.cs.getFromService('collaborate')
      this.sendvalue.emit('collaborate')
    }
    else if(data=="investor"){
      this.cs.getFromService('investor')
      this.sendvalue.emit('investor')
  
    }

    else if(data=="contact"){
      this.cs.getFromService('contact')
      this.sendvalue.emit('contact')
    }
    
  }
}
