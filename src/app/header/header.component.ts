import { Component, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '../../../node_modules/@angular/animations';
import { EventEmitter } from '@angular/core';
import { ContactserviceService } from '../contact/contactservice.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('slideInOut', [
        state('in2', style({
            'max-height': '500px' ,'overflow-y':'hidden'
        })),
        state('out2', style({
            'max-height': '0px','overflow-y':'hidden'
        })),
       
        transition('in2 <=> out2', [group([
            animate('400ms ease')
        ]
        )])
    ]),
]
})
export class HeaderComponent implements OnInit {
  isIn = false;   // store state
  isIn2 = false;
  isCollapsed=false;
  menuState:string = 'out';
  menuState2:string = 'out2';
  @Output() sendvalue = new EventEmitter;
  @Output() sendvaluepl = new EventEmitter;
  
  public constructor(private cs:ContactserviceService) {
 }

  ngOnInit() {
  }
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
   this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  toggleState2() { // click handler
    let bool2 = this.isIn2;
    this.isIn2 = bool2 === false ? true : false;
   this.menuState2 = this.menuState2 === 'out2' ? 'in2' : 'out2';

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
