import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { NavbarMenuService } from '../../navbar-menu.service';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {
  dataSrc: any = [];
  heading='Detailed  Quote';
  quotecolor='#49a0df';
  chartcolor;
  historicalcolor;
  hidequote;
  hidecharts='none';
  hidehistorical='none';
  constructor(private navbar: NavbarMenuService, private renderer: Renderer2, @Inject(DOCUMENT) private document: any,private titleService: Title, private meta: Meta) {
  
    this.meta.updateTag(
      { property: 'og:title', content: 'Stock Data :: PolarityTE, Inc.(PTE)' }

    );

    this.meta.updateTag(
      { property: 'og:url', content: 'https://www.polarityte.com/investor/stock-data' }
    );
  
    this.meta.updateTag(
      { name: 'keywords', content: 'NASDAQ: PTE, Detailed Quote, Stock Data' }
    );

  }

  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc
    this.titleService.setTitle( 'Stock Data :: PolarityTE, Inc.(PTE)' );
    let scriptchart = this.renderer.createElement('script');
    scriptchart.type = `text/javascript`;
    scriptchart.text = `
          oChart.BizID= "2361";
          oChart.Exchange= "NASDAQ";
          oChart.sDiv = "chartdiv";
          oChart.Symbol = "PTE";
          oChart.Period= "2";
          oChart.FillColor = "000000";
          oChart.CursorColor = "FF0000";
          GetChart();
    `;
    let scripthistorical = this.renderer.createElement('script');
    scripthistorical.type = `text/javascript`;
    scripthistorical.text = `
    oHistoric.BizID = "2361";
    oHistoric.sKey = "C4B8g6V4p5";
    oHistoric.Symbol = "PTE";
    oChart.sDiv = "HistoricalDiv";
    oHistoric.sHttp = "https";
    getHistoricalData();
    `;
  
    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          oQuote.BizID="2361";
          oQuote.sKey="C4B8g6V4p5";
          oQuote.Symbol="PTE";
          oQuote.sDiv="b2iClientQuote"; 
          oQuote.sHttp="https";
          oQuote.Format='c';
          oQuote.CSS="0";
          oQuote.Dollar="1";
          getQuoteData();
          
        }
    `;
    this.renderer.appendChild(this.document.body, script);
    this.renderer.appendChild(this.document.body, scriptchart);
    this.renderer.appendChild(this.document.body, scripthistorical);
  }
  opencharts(){
    this.hidequote='none';
    this.hidecharts='block';
    this.hidehistorical='none'
    this.heading='Charts';
    this.quotecolor='#ffffff';
    this.historicalcolor='#ffffff';
    this.chartcolor='#49a0df'
  }
  openhistorical(){
    this.hidequote='none';
    this.hidecharts='none';
    this.hidehistorical='block';
    this.heading='Historical Data';
    this.historicalcolor='#49a0df';
    this.quotecolor='#ffffff';
    this.chartcolor='#ffffff'
  }
  openquote(){
    this.hidequote='block';
    this.hidecharts='none';
    this.hidehistorical='none'
    this.heading='Detailed Quote';
    this.quotecolor='#49a0df';
    this.chartcolor='#ffffff';
    this.historicalcolor='#ffffff';
  }
}