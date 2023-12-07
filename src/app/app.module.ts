import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAccordionModule, NgbModule, NgbTypeaheadModule, NgbCollapseModule , NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialHeaderComponent } from './components/social-header/social-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TopTenBannerComponent } from './components/top-ten-banner/top-ten-banner.component';
import { TitleTextComponent } from './components/title-text/title-text.component';
import { DepFinderComponent } from './components/dep-finder/dep-finder.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { SecCardComponent } from './components/sec-card/sec-card.component';
import { SecListComponent } from './components/sec-list/sec-list.component';
import { CircleInfoComponent } from './components/circle-info/circle-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcCardTableComponent } from './components/proc-card-table/proc-card-table.component';
import { ProcCardComponent } from './components/proc-card/proc-card.component';
import { DetalleTramiteComponent } from './pages/detalle-tramite/detalle-tramite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfoListComponent } from './components/info-list/info-list.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { HeroBannerLiteComponent } from './components/hero-banner-lite/hero-banner-lite.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DepFilterPipe } from './services/pipes/dep-filter.pipe';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { FundamentosPipe } from './services/pipes/fundamentos.pipe';
import { CommonModule } from '@angular/common';
import { FormatoAPipe } from './services/pipes/formato-a.pipe';
import { FormatoBPipe } from './services/pipes/formato-b.pipe';
import { AvisoComponent } from './pages/aviso/aviso.component';
import { DepListComponent } from './components/dep-list/dep-list.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialHeaderComponent,
    MainHeaderComponent,
    HeroBannerComponent,
    TopTenBannerComponent,
    TitleTextComponent,
    DepFinderComponent,
    SecCardComponent,
    SecListComponent,
    CircleInfoComponent,
    FooterComponent,
    InicioComponent,
    BusquedaComponent,
    ProcCardTableComponent,
    ProcCardComponent,
    DetalleTramiteComponent,
    InfoListComponent,
    InfoCardComponent,
    HeroBannerLiteComponent,
    DepFilterPipe,
    ScrollTopComponent,
    FundamentosPipe,
    FormatoAPipe,
    FormatoBPipe,
    AvisoComponent,
    DepListComponent,
    CustomModalComponent,
    AyudaComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgxPaginationModule,
    NgbTypeaheadModule,
    InfiniteScrollModule,
    CommonModule
  ],
  providers: [NgbModal, NgbActiveModal],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab)
  }
}
