import {
  Component,
  OnInit,
  Inject,
  Renderer2
} from '@angular/core';
import { InthenewsService } from '../shared/inthenews.service';
import { Meta } from '@angular/platform-browser';
import { ModalService } from '../shared';
import postscribe from 'postscribe';
import { DOCUMENT } from '@angular/platform-browser';
import { StockdataService } from '../shared/stockdata.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
newsList=[];
most_latest=[];
stocksdata;
LastDate;
LastTime;
Exch;
Ticker;
LastPrice;
Change
ChangePercent
Volume
DayLow
DayHigh
YearLow
YearHigh


public reviews = [{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide01.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide02.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide03.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide04.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide05.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide06.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide07.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide08.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide09.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide10.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide11.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide12.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide13.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide14.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide15.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide16.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide17.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide18.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide19.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide20.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide21.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide22.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide23.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide24.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide25.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide26.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide27.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide28.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide29.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide30.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide31.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide32.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide33.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide34.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide35.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide36.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide37.jpg"
},
{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide38.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide39.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide40.jpg"
}
,{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide41.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide42.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide43.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide44.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide45.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide46.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide47.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide48.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide49.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide50.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide51.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide52.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide53.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide54.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide55.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide56.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide57.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide58.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide59.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide60.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide61.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide62.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide63.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide64.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide65.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide66.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide67.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide68.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide69.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide70.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide71.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide72.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide73.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide74.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide75.jpg"
},{
  url: "./assets/home-assests/07_presentation_rens_looping/presentation/slide76.jpg"
}

];

  constructor(private intheNews:InthenewsService,private modalService:ModalService,private stockdata:StockdataService,  @Inject(DOCUMENT) private document: any, private renderer: Renderer2,private meta: Meta){
  
  }
  openModal(id: string) {
    postscribe('#slider', '<script src="assets/thumbnail-slider.js" type="text/javascript"><\/script>');
    this.modalService.open(id);  
}

closeModal(id: string) {
    this.modalService.close(id);
}
onAppear(rtaBg){
 
  rtaBg.play();
 
 }
  ngOnInit() {


    this.intheNews.getnewslist().subscribe(newsList=>this.newsList = newsList)
    this.most_latest=this.newsList;
    this.meta.addTag(
      {property: 'og:title', content: 'PolarityTE, Inc.(PTE)'}
     
    );
    
    this.meta.addTag(
      {property: 'og:url', content: 'https://www.polarityte.com'} 
    );
    this.meta.addTag(
      {name: 'description', content: 'At PolarityTE, our revolutionary platform is being developed to induce cell and tissue polarity, creating uniquely functional tissue to mirror natural development in the human body.'}
    
    );
    this.meta.addTag(
      {property: 'og:description', content: 'At PolarityTE, our revolutionary platform is being developed to induce cell and tissue polarity, creating uniquely functional tissue to mirror natural development in the human body.'}
    
    );
    
    // this.meta.updateTag(
    //   {property: 'twitter:description', content: 'At PolarityTE, our revolutionary platform is being developed to induce cell and tissue polarity, creating uniquely functional tissue to mirror natural development in the human body.'}
    
    // );

    this.stockdata.getStockData().subscribe((data) => {
    this.LastDate=data.QuoteData[0].LastDate;
    this.LastTime=data.QuoteData[0].LastTime;
    this.Exch=data.QuoteData[0].Exch;
    this.Ticker=data.QuoteData[0].Ticker;
    this.LastPrice=data.QuoteData[0].LastPrice;
    this.Change=data.QuoteData[0].Change;
    this.ChangePercent=data.QuoteData[0].ChangePercent;
    this.Volume=data.QuoteData[0].Volume;
    this.DayLow=data.QuoteData[0].DayLow;
    this.DayHigh=data.QuoteData[0].DayHigh;
    this.YearLow=data.QuoteData[0].YearLow;
    this.YearHigh=data.QuoteData[0].YearHigh;


    });

    let script = this.renderer.createElement('script');
    script.type = `text/javascript`;
    script.text = `
        {
          oLib.BizID = "2361";
          oLib.Group = "1148";  
          oLib.sKey = "C4B8g6V4p5";
          oLib.Count="1";
          oLib.CSS="0";
          oLib.Output="1";
          oLib.sHttp="https";
          oLib.sDiv="LibDiv1"
          getData();
        }
    `;
  
    this.renderer.appendChild(this.document.head, script);
    let datavidebg = this.renderer.createElement('script');
    datavidebg.type = `text/javascript`;
    datavidebg.src = './assets/jquery.vide.js'
    this.renderer.appendChild(this.document.head, datavidebg); 
} 
}
