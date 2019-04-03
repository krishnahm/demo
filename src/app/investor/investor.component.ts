import {
  Component, OnInit, Inject,
  Renderer2
} from '@angular/core';
import { NavbarMenuService } from '../navbar-menu.service';
import { InthenewsService } from '../shared/inthenews.service';
import { StockdataService } from '../shared/stockdata.service';
import { DOCUMENT, Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {
  dataSrc: any = []
  newsList = [];
  most_latest = [];
  stocksdata;
  constructor(private navbar: NavbarMenuService, private intheNews: InthenewsService, private stockdata: StockdataService,private titleService: Title,
    @Inject(DOCUMENT) private document: any, private renderer: Renderer2, private meta: Meta) {

      this.meta.updateTag(
        { property: 'og:title', content: 'Investor Relations :: PolarityTE, Inc.(PTE)' }
  
      );
      this.meta.updateTag(
        { property: 'og:url', content: 'https://www.polarityte.com/investor/overview' }
      );
      this.meta.updateTag(
        { name: 'description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }
  
      );
      this.meta.updateTag(
        { name: 'keywords', content: 'PolarityTE, Investor Relations' }
      );
      this.meta.updateTag(
        { property: 'og:description', content: 'PolarityTE is a commercial-stage biotechnology and regenerative biomaterials company focused on transforming the lives of patients by discovering, designing and developing regenerative tissue products and biomaterials for the fields of medicine, biomedical engineering and material sciences.' }
  
      );
    let datavidebg = this.renderer.createElement('script');
    datavidebg.type = `text/javascript`;
    datavidebg.src = './assets/jquery.vide.js'
    this.renderer.appendChild(this.document.head, datavidebg);
    let pressReleases = this.renderer.createElement('script');
    pressReleases.type = `text/javascript`;
    pressReleases.text = `
    {
      oLib.BizID = "2361";
      oLib.Group = "1148";
      oLib.sKey = "C4B8g6V4p5";
      oLib.Count = "4";
      oLib.sNav = "1";
      oLib.sTools="1";
      oLib.sHttp = "https";
      oLib.Output="1";
      oLib.CSS="0";
      oLib.sDiv="LibDivPress"
      getData();
    }
    `;

    this.renderer.appendChild(this.document.body, pressReleases);
  }


  ngOnInit() {
    this.dataSrc = this.navbar.DataSrc;
    this.titleService.setTitle( 'Investor Relations :: PolarityTE, Inc.(PTE)' );
    this.intheNews.getnewslist().subscribe(newsList => this.newsList = newsList)
    this.most_latest = this.newsList;
    this.stockdata.getStockData().subscribe((data) => {
      this.stocksdata = data.QuoteData[0];
    });

    
    let calDiv = this.renderer.createElement('script');
    calDiv.type = `text/javascript`;
    calDiv.text = `
    {
      oCal.BizID = "2361";
      oCal.sKey = "C4B8g6V4p5";
      oCal.sDiv = "CalDiv";
      oCal.Count = 3;
      oCal.Mode = "";
      oCal.sHttp = "https";
      getCalData();
    }
    `;
    this.renderer.appendChild(this.document.body, calDiv);

    let quoteDiv = this.renderer.createElement('script');
    quoteDiv.type = `text/javascript`;
    quoteDiv.text = `
    oQuote.BizID = "2361";
    oQuote.sKey = "C4B8g6V4p5";
    oQuote.Symbol = "PTE";
    oQuote.sDiv = "QuoteDiv";
    oQuote.sHttp = "https";
    oQuote.Format = "1";
    getQuoteData();
    `;

    this.renderer.appendChild(this.document.body, quoteDiv);

    let chartDiv = this.renderer.createElement('script');
    chartDiv.type = `text/javascript`;
    chartDiv.text = `
    oChart.BizID= "2361";
    oChart.Exchange= "NASDAQ";
    oChart.sDiv = "chartdiv";
    oChart.Symbol = "PTE";
    oChart.Period= "2";
    oChart.FillColor = "000000";
    oChart.CursorColor = "FF0000";
    GetChart();
    `;

    this.renderer.appendChild(this.document.body, chartDiv);
    
  }
}

