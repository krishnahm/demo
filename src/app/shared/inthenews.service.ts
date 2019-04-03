import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { news_interface } from '../shared/news_Modal';

@Injectable({
  providedIn: 'root'
})
export class InthenewsService {

constructor() {

}
List_of_news: news_interface[]=[
  {
    href: "https://healthprofessionalradio.com.au/skinte-for-burn-treatment/",
    src:"./assets/news-assets/HPR.png",
    title:"SkinTE for Burn Treatment",
    date:"Feb 25, 2019"
  },

  {
    href: "https://business.utah.gov/news/in-their-words-denver-lough/",
    src:"./assets/news-assets/ugoed3.png",
    title:"Interview with PolarityTE CEO Denver Lough",
    date:"Jan 29, 2019"
  },
{
  href: "http://www.plasticsurgerypractice.com/2019/01/skinte-aims-provide-full-thickness-skin-regeneration/",
  src:"./assets/news-assets/PSPcom.png",
  title:" SkinTE Aims to Provide Full-Thickness Skin Regeneration",
  date:"Jan 17, 2019"
},

  { 
    href: "https://www.deseretnews.com/article/900050871/this-new-utah-company-helping-patients-regrow-skin-and-bone-is-just-getting-started.html",
    src:"./assets/news-assets/deseret_news.png",
    title:" This new Utah company helping patients regrow skin and bone is just getting started ",
    date:"Jan 16, 2019"
   },
   {
    href: "http://www.bioutah.org/blog/bioutah-life-science-blog-121/post/polarityte-becomes-legacy-member-of-bioutah-17622",
    src:"./assets/news-assets/BioUtah.png",
    title:"PolarityTE Becomes Legacy Member of BioUtah",
    date:"Jan 3, 2019"
  },
  { 
    href: "https://foxillinois.com/news/local/6-year-old-severely-burned-first-in-illinois-to-receive-skinte-procedure",
    src:"./assets/news-assets/foxIL.jpg",
    title:"6-year-old severely burned, first in Illinois to receive SkinTE procedure",
    date:"Oct 9, 2018"
   },
{ 
  href: "http://ksltv.com/399084/utah-company-helps-burn-victims-grow-new-skin/",
  src:"./assets/news-assets/ksl.png",
  title:"Utah Company Helps Burn Victims Grow New Skin",
  date:"Aug 6, 2018"
 },
{ 
  href: "https://www.deseretnews.com/article/900025646/brand-new-burn-treatment-giving-utah-family-hope-where-there-was-absolutely-none-left.html",
  src:"./assets/news-assets/deseret_news.png",
  title:"Brand new burn treatment giving Utah family hope 'where there was absolutely none left'",
  date:"Jul 22, 2018"
 },   { 
  href: "https://www.beckersspine.com/biologics/item/41323-how-polarityte-aims-to-bring-an-entirely-new-treatment-paradigm-to-orthopedics-spine-7-qs-with-dr-ned-swanson.html",
  src:"./assets/news-assets/spine_review.png",
  title:"How PolarityTE aims to bring 'an entirely new treatment paradigm' to orthopedics & spine — 7 Qs with Dr. Ned Swanson",
  date:"Jun 1, 2018"
 },   { 
  href: "https://www.drugdeliverybusiness.com/polarityte-aims-to-wage-war-on-skin-grafts-with-regenerative-tech/",
  src:"../assets/news-assets/drug_delivery.png",
  title:"PolarityTE aims to ‘wage war on skin grafts’ with regenerative tech",
  date:"May 15, 2018"
 },   { 
  href: "http://www.drugdeliverybusiness.com/meet-two-former-johns-hopkins-residents-disrupting-wound-care-market/",
  src:"./assets/news-assets/drug_delivery.png",
  title:"Meet the two former Johns Hopkins residents disrupting the wound care market",
  date:"Oct 20, 2017"
 },   { 
  href: "http://www.sltrib.com/news/business/2017/08/14/execs-with-utah-based-polarityte-ring-nasdaqs-closing-bell/",
  src:"./assets/news-assets/salt_lake_tribune.png",
  title:"Execs with Utah-based PolarityTE ring Nasdaq's closing bell",
  date:"Aug 16, 2017"
 },   { 
  href: "http://medcitynews.com/2017/08/reinventing-tissue-regeneration/?_hsenc=p2ANqtz-9XVRjAhy8vKgVAJ1CuqOfKBofeO87h1DjM1vhbkbIjcFq9LNQDdM6LIMK4XeBQ5HThSWo0aF4ZuG3TwnltUoFPCGy5s11xM07BuMNpCfXmQfaso-g&amp;_hsmi=55058738",
  src:"./assets/news-assets/medcitynews.png",
  title:"Reinventing tissue regeneration, one layer at a time",
  date:"Aug 8, 2017"
 },   { 
  href: "https://www.digitaltrends.com/health-fitness/skinte-skin-regeneration/",
  src:"./assets/news-assets/digitaltrends.png",
  title:"We could be closer than ever to regenerating skin for burn victims",
  date:"Jun 11, 2017"
 },   { 
  href: "https://www.engadget.com/2017/06/09/polarityte-skin-regeneration-burns/",
  src:"../assets/news-assets/engadget.png",
  title:"Humans may be able to regrow skin after severe burns",
  date:"Jun 9, 2017"
 },   { 
  href: "http://kfgo.com/podcasts/it-takes-2/955/breakthrough-for-burn-victims/",
  src:"../assets/news-assets/kfgo.png",
  title:"Breakthrough for Burn Victims (Podcast)",
  date:"Jun 9, 2017"
 },   { 
  href: "http://www.drugdeliverybusiness.com/small-utah-biotech-regenerates-skin-hair-pigs/",
  src:"../assets/news-assets/drug_delivery.png",
  title:"Small Utah biotech regenerates skin, hair in pigs",
  date:"Jun 8, 2017"
 },
 { 
  href: "http://www.fiercebiotech.com/medtech/upstart-polarityte-regenerates-full-thickness-skin-animal-models",
  src:"./assets/news-assets/fierce_biotech.png",
  title:"Upstart PolarityTE regenerates full-thickness skin in animal models",
  date:"Jun 8, 2017"
 },   { 
  href: "http://www.reuters.com/article/us-polarityte-study-idUSKBN18Z2CC?",
  src:"./assets/news-assets/reuters.png",
  title:"In major breakthrough, tiny Utah firm regenerates skin, hair in pigs",
  date:"Jun 8, 2017"
 },   { 
  href: "http://www.newsmax.com/Health/Health-News/skin-cancer-burns-third-degree-burns/2017/06/08/id/794905/",
  src:"./assets/news-assets/newsmax_health.png",
  title:"Skin Regeneration - From Science Fiction to Science Fact",
  date:"Jun 8, 2017"
 },   { 
  href: "http://www.deseretnews.com/article/865681300/Salt-Lake-City-firm-developing-technology-to-regenerate-human-skin.html",
  src:"../assets/news-assets/deseret_news.png",
  title:"Salt Lake City firm developing technology to regenerate human skin",
  date:"Jun 3, 2017"
 },   { 
  href: "https://www.bioinformant.com/polarityte/",
  src:"../assets/news-assets/bioInformant.png",
  title:"Interview with Dr. Denver Lough, President and CEO of PolarityTE",
  date:"Apr 27, 2017"
 }
]
getnewslist():Observable<news_interface[]>{
  return of(this.List_of_news);
}
}