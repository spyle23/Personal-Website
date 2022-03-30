import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { SingleProjetComponent } from './single-projet/single-projet.component';


const routes: Routes = [
  {path:'projetInfo/:id', component: SingleProjetComponent},
  {path:'', component:LandingPageComponent},
  {path: 'portfoliolist', component:PortfolioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
