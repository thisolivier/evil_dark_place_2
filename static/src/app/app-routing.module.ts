import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuctionComponent } from './auction/auction.component'
import { ResultsComponent } from './results/results.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
    { path: 'auctions', component: AuctionComponent},
    { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
