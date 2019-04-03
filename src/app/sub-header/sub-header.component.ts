import { Component,Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() subNavArr:any;
  @Input() subNavArr2:any;
  subData;
  subDataMain;
  constructor(
 ) { }

  ngOnInit() {
    this.subData = this.subNavArr
    this.subDataMain=this.subNavArr2
     } 
  }
   

