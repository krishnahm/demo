import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarMenuService } from './navbar-menu.service';
import { isPlatformBrowser } from '@angular/common';
import { WINDOW } from './window.service';
import { ScrollTopServiceService } from './shared/scroll-top-service.service';

declare const ga: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSrc = [
    {
      name: 'About', path: 'about/overview',
      children: [
        { name: 'Overview', path: '/about/overview' },
        { name: 'Management Team', path: 'about/management-team' },
        { name: 'Board of Directors', path: 'about/board-of-directors' },
        { name: 'Clinical Board of Advisors', path: 'about/clinical-board-of-advisors' },
        { name: 'Values', path: 'about/values' },
      ]
    },
    {
      name: 'Platform', path: 'platform'
    },
    {
      name: 'Products', path: 'products/overview',
      children: [
        { name: 'Overview', path: 'products/overview' },
        { name: 'SkinTE for Patients', path: 'products/skinTE-patients' },
        { name: 'SkinTE for Providers', path: 'products/skinTE-providers', },
        { name: 'OsteoTE', path: 'products/osteoTE' },
        { name: 'RTA', path: 'products/rta' },
      ]
    },
    {
      name: 'Partners', path: 'partners'
    },
    {
      name: 'Investor Relations', path: 'investor/overview',
      children: [
        { name: 'Overview', path: 'investor/overview' },
        { name: 'Company Info', path: 'investor/company-info' },
        { name: 'Financial Info', path: 'investor/financial-info' },
        { name: 'SEC Filings', path: 'investor/sec-filings' },
        { name: 'Stock Data', path: 'investor/stock-data' },
        { name: 'Governance', path: 'investor/governance' },
        { name: 'Contact', path: 'contact' },
      ]
    }

  ];

  constructor(private router: Router, private navbar: NavbarMenuService, @Inject(PLATFORM_ID) private platformId: Object,@Inject(WINDOW) private window: Window,private scrollTopService:ScrollTopServiceService) {
  }
  // route change listener to scroll to top on route changes.
  ngOnInit() {
    this.scrollTopService.setScrollTop();
    this.navbar.getDataSrc(this.dataSrc)
  }
  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

}

