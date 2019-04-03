import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {
  dataSrc: any = [];
  heading='Cash Flow';
  quotecolor='#49a0df';
  chartcolor;
  historicalcolor;
  hidequote;
  hidecharts='none';
  hidehistorical='none';
  constructor(private navbar: NavbarMenuService, private renderer: Renderer2, @Inject(DOCUMENT) private document: any,private titleService: Title, private meta: Meta) {

    this.meta.updateTag(
      { property: 'og:title', content: 'Financial Information :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/investor/financial-info' }
    );

    this.meta.updateTag(
      { name: 'keywords', content: 'Financial Information, Cash Flow, Income Statement, Balance Sheet' }
    );

  }

  ngOnInit() {
    this.titleService.setTitle( 'Financial Information :: PolarityTE, Inc.(PTE)' );
    let scriptchart = this.renderer.createElement('script');
    scriptchart.type = `text/javascript`;
    scriptchart.text = `
    oFinancials.BizID="2361";
    oFinancials.sKey="C4B8g6V4p5";
    oFinancials.Symbol="PTE"; //Stock ticker
    oFinancials.sDiv="Fin1Div";
    oFinancials.sHttp="https";
    oFinancials.Mode="1";
    getFinancialsData();
    `;
    let scripthistorical = this.renderer.createElement('script');
    scripthistorical.type = `text/javascript`;
    scripthistorical.text = `
    oFinancials.BizID="2361";
    oFinancials.sKey="C4B8g6V4p5";
    oFinancials.Symbol="PTE"; //Stock ticker
    oFinancials.sDiv="Fin2Div";
    oFinancials.sHttp="https";
    oFinancials.Mode="2";
    getFinancialsData();
    `;
    this.dataSrc = this.navbar.DataSrc
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          oFinancials.BizID="2361";
          oFinancials.sKey="C4B8g6V4p5";
          oFinancials.Symbol="PTE"; //Stock ticker
          oFinancials.sDiv="Fin3Div";
          oFinancials.sHttp="https";
          oFinancials.Mode="3";
          getFinancialsData();
          
        }
    `;
    this.renderer.appendChild(this.document.body, script);
    this.renderer.appendChild(this.document.body, scriptchart);
    this.renderer.appendChild(this.document.body, scripthistorical);
  }
  openCashFlow(){
    this.hidequote='block';
    this.hidecharts='none';
    this.hidehistorical='none'
    this.heading='Cash Flow';
    this.quotecolor='#49a0df';
    this.historicalcolor='#ffffff';
    this.chartcolor='#fff'
  }
  openIncomeStatement(){
    this.hidequote='none';
    this.hidecharts='block';
    this.hidehistorical='none';
    this.heading='Income Statement';
    this.historicalcolor='#fff';
    this.quotecolor='#ffffff';
    this.chartcolor='#49a0df'
  }
  openBalancedSheet(){
    this.hidequote='none';
    this.hidecharts='none';
    this.hidehistorical='block'
    this.heading='Balance Sheet';
    this.quotecolor='#fff';
    this.chartcolor='#ffffff';
    this.historicalcolor='#49a0df ';
  }
}