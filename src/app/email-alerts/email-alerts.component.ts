import { Component, OnInit,Renderer2, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-email-alerts',
  templateUrl: './email-alerts.component.html',
  styleUrls: ['./email-alerts.component.css']
})
export class EmailAlertsComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.language ="JavaScript";
    script.text = `
        {
          oEmail.BizID = "2361";
          oEmail.sKey = "C4B8g6V4p5";
          oEmail.sHttp = "https";
          getEmailAlertData();
        }
    `;
    this.renderer.appendChild(this.document.head, script);
  }

}
