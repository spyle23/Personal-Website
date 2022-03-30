import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EndpageComponent } from './endpage/endpage.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { FormationComponent } from './formation/formation.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ProjetComponent } from './projet/projet.component';
import { SingleProjetComponent } from './single-projet/single-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    EndpageComponent,
    PortfolioListComponent,
    FormationComponent,
    ProjetListComponent,
    ProjetComponent,
    SingleProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
