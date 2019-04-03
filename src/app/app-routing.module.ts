import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutComponent } from "./about/about.component";
import { ManagementTeamComponent } from "./about/management-team/management-team.component";
import { BoardOfDirectorsComponent } from "./about/board-of-directors/board-of-directors.component";
import { ClinicalBoardOfAdvisorsComponent } from "./about/clinical-board-of-advisors/clinical-board-of-advisors.component";
import { OurValuesComponent } from "./about/our-values/our-values.component";
import { BioDetailComponent } from "./about/bio-detail/bio-detail.component";
import { PlatformComponent } from "./platform/platform.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PartnersComponent } from "./partners/partners.component";
import { ProductsComponent } from "./products/products.component";
import { SkinteForPatientsComponent } from "./products/skinte-for-patients/skinte-for-patients.component";
import { SkinteForProvidersComponent } from "./products/skinte-for-providers/skinte-for-providers.component";
import { RtaComponent } from "./products/rta/rta.component";
import { ContactComponent } from "./contact/contact.component";
import { InvestorComponent } from "./investor/investor.component";

import { GovernanceComponent } from "./investor/governance/governance.component";

import { CompanyInfoComponent } from "./investor/company-info/company-info.component";
import { FinancialInfoComponent } from "./investor/financial-info/financial-info.component";
import { CareersComponent } from "./careers/careers.component";
import { OsteoteComponent } from "./products/osteote/osteote.component";
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PrivacyComponent } from "./footer/privacy/privacy.component";
import { DisclaimerComponent } from "./footer/disclaimer/disclaimer.component";
import { SecFilingsComponent } from "./investor/sec-filings/sec-filings.component";
import { StockDataComponent } from "./investor/stock-data/stock-data.component";
import { PressReleasesComponent } from "./news-media/press-releases/press-releases.component";
import { EmailAlertsComponent } from './email-alerts/email-alerts.component';
import { InTheNewsComponent } from "./news-media/in-the-news/in-the-news.component";
import { EventsComponent } from "./news-media/events/events.component";

import { ProductManualComponent } from "./Rta-App/product-manual/product-manual.component";
import { RtaTermsConditionsComponent } from "./Rta-App/rta-terms-conditions/rta-terms-conditions.component";
import { FaqComponent } from "./Rta-App/faq/faq.component";
import { HarvestOverviewComponent } from "./Rta-App/harvest-overview/harvest-overview.component";
import { DeploymentOverviewComponent } from "./Rta-App/deployment-overview/deployment-overview.component";
import { ERComponent } from "./Rta-App/er/er.component";
import { EulaComponent } from "./Rta-App/eula/eula.component";
import { WINDOW_PROVIDERS } from "./window.service";
import { SiteMapComponent } from "./footer/site-map/site-map.component";
import { PublicationsComponent } from "./news-media/publications/publications.component";
import { AkamaiComponent } from "./akamai/akamai.component";




const appRoutes:Routes=[
    {path:'',component:HomePageComponent},

    {path:'about/overview',component:AboutComponent},
    
    {path:'about/management-team',component:ManagementTeamComponent},
    {path:'about/board-of-directors',component:BoardOfDirectorsComponent},
    {path:'about/clinical-board-of-advisors',component:ClinicalBoardOfAdvisorsComponent},
    {path:'about/values',component:OurValuesComponent},
    {path:'biodetail/:name',component:BioDetailComponent},
    {path:'platform',component:PlatformComponent},
    {path:'partners',component:PartnersComponent},
    {path:'products/overview',component:ProductsComponent},
    {path:'products/skinTE-patients',component:SkinteForPatientsComponent},
    {path:'products/skinTE-providers',component:SkinteForProvidersComponent},
    {path:'products/osteoTE',component:OsteoteComponent},
    {path:'products/rta',component:RtaComponent},
    {path:'contact',component:ContactComponent},
    {path:'ctc',component:ContactComponent},
    {path:'investor/overview',component:InvestorComponent},
    {path:'investor/governance',component:GovernanceComponent},    {path:'investor/company-info',component:CompanyInfoComponent},
    {path:'investor/financial-info',component:FinancialInfoComponent},
    {path:'careers',component:CareersComponent},

    {path:'investor/sec-filings', component:SecFilingsComponent},
    {path:'investor/stock-data', component:StockDataComponent},

    {path:'thank-you',component:ThankYouComponent},
    {path:'privacy-policy',component:PrivacyComponent},
    {path:'disclaimer',component:DisclaimerComponent},
    {path:'sitemap',component:SiteMapComponent},

    {path:'email-alerts',component:EmailAlertsComponent},
     {path:'news-media/press-releases',component:PressReleasesComponent},
    {path:'news-media/in-the-news',component:InTheNewsComponent},
    {path:'news-media/events',component:EventsComponent},
    {path:'news-media/scientific-communications',component:PublicationsComponent},

    {path:'akamai/akamai-sureroute-test-object.html',component:AkamaiComponent},
    {path:'app/pte-skinte-product-manual',component:ProductManualComponent},
    {path: 'IFU', redirectTo: 'app/pte-skinte-product-manual', pathMatch: 'full'},

    {path:'app/polarityte-rta-terms-conditions',component:RtaTermsConditionsComponent},
    {path: 'terms', redirectTo: 'app/polarityte-rta-terms-conditions', pathMatch: 'full'},
    {path: 'privacy', redirectTo: 'app/polarityte-rta-terms-conditions#privacy-principles'},

    {path:'app/harvest-overview',component:HarvestOverviewComponent},
    {path: 'harvest', redirectTo: 'app/harvest-overview', pathMatch: 'full'},

    {path:'app/deployment-overview',component:DeploymentOverviewComponent},
    {path: 'deployment', redirectTo: 'app/deployment-overview', pathMatch: 'full'},

    {path:'app/exceptional-release-form',component:ERComponent},
    {path: 'ER', redirectTo: 'app/exceptional-release-form', pathMatch: 'full'},

    {path:'app/faq',component:FaqComponent},
    {path: 'faq', redirectTo: 'app/faq', pathMatch: 'full'},

    {path:'app/eula',component:EulaComponent},
    {path: 'eula', redirectTo: 'app/eula', pathMatch: 'full'},


    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'/not-found'}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'})],
    providers: [WINDOW_PROVIDERS],
    exports:[RouterModule],

})
export class AppRoutingModule{

}