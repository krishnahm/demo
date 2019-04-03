import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
;
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { ManagementTeamComponent } from './about/management-team/management-team.component';
import { BoardOfDirectorsComponent } from './about/board-of-directors/board-of-directors.component';

import { ClinicalBoardOfAdvisorsComponent } from './about/clinical-board-of-advisors/clinical-board-of-advisors.component';
import { OurValuesComponent } from './about/our-values/our-values.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

import { AppRoutingModule } from './app-routing.module';
import { BioDetailComponent } from './about/bio-detail/bio-detail.component';
import { PlatformComponent } from './platform/platform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PartnersComponent } from './partners/partners.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component'

import { SkinteForPatientsComponent } from './products/skinte-for-patients/skinte-for-patients.component';
import { SafePipe } from './safe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RtaComponent } from './products/rta/rta.component';
import { ContactComponent } from './contact/contact.component';
import { StickyheaderDirective } from './shared/stickyheader.directive';
import { InvestorComponent } from './investor/investor.component';

import { GovernanceComponent } from './investor/governance/governance.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { CompanyInfoComponent } from './investor/company-info/company-info.component';
import { FinancialInfoComponent } from './investor/financial-info/financial-info.component';
import { CareersComponent } from './careers/careers.component';
import { SkinteForProvidersComponent } from './products/skinte-for-providers/skinte-for-providers.component';
import { OsteoteComponent } from './products/osteote/osteote.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { SecFilingsComponent } from './investor/sec-filings/sec-filings.component';
import { StockDataComponent } from './investor/stock-data/stock-data.component';
import { PressReleasesComponent } from './news-media/press-releases/press-releases.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { StockdataService } from './shared/stockdata.service';
import { HttpModule } from '@angular/http';
import { EmailAlertsComponent } from './email-alerts/email-alerts.component';
import { InTheNewsComponent } from './news-media/in-the-news/in-the-news.component';
import { EventsComponent } from './news-media/events/events.component';
import { ProductManualComponent } from './Rta-App/product-manual/product-manual.component';
import { RtaTermsConditionsComponent } from './Rta-App/rta-terms-conditions/rta-terms-conditions.component';
import { FaqComponent } from './Rta-App/faq/faq.component';
import { HarvestOverviewComponent } from './Rta-App/harvest-overview/harvest-overview.component';
import { DeploymentOverviewComponent } from './Rta-App/deployment-overview/deployment-overview.component';
import { ERComponent } from './Rta-App/er/er.component';
import { EulaComponent } from './Rta-App/eula/eula.component';
import { AppearDirective } from './shared/appear.directive';
import { SiteMapComponent } from './footer/site-map/site-map.component';
import { PublicationsComponent } from './news-media/publications/publications.component';
import { AkamaiComponent } from './akamai/akamai.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutComponent,
    ManagementTeamComponent,
    BoardOfDirectorsComponent,
    ClinicalBoardOfAdvisorsComponent,
    OurValuesComponent,
    SubHeaderComponent,
    BioDetailComponent,
    PlatformComponent,
    PageNotFoundComponent,
    PartnersComponent,
    ProductsComponent,
    SkinteForPatientsComponent,
    SafePipe,
    RtaComponent,
    SkinteForProvidersComponent,
    OsteoteComponent,
    ContactComponent,
    StickyheaderDirective,
    InvestorComponent,
    InTheNewsComponent,
    GovernanceComponent,
    PrivacyComponent,
    DisclaimerComponent,
    CompanyInfoComponent,
    FinancialInfoComponent,
    CareersComponent,
    SecFilingsComponent,
    StockDataComponent,
    PressReleasesComponent,
    ModalComponent,
    PresentationComponent,
    ThankYouComponent,
    EmailAlertsComponent,
    EventsComponent,
    ProductManualComponent,
    RtaTermsConditionsComponent,
    FaqComponent,
    HarvestOverviewComponent,
    DeploymentOverviewComponent,
    ERComponent,
    EulaComponent,
    AppearDirective,
    SiteMapComponent,
    PublicationsComponent,
    AkamaiComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'polarityte-app'}),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPageScrollModule

    ],
  providers: [
    StockdataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    // console.log(`Running ${platform} with appId=${appId}`);
  }

  
 }
