import { Component, OnInit, Inject, PLATFORM_ID, Optional, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import {Response} from 'express';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  @Optional() @Inject(Injector) private injector: Injector) { }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      let response = this.injector.get(RESPONSE) as Response;
      response.status(404);
    }
  }

}
