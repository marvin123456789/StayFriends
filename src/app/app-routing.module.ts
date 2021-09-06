import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './Bundesland/details/details.component';
import { OverviewComponent } from './Bundesland/overview/overview.component';

const routes: Routes = [
  { path: 'Bundesländer', component: OverviewComponent },
  { path: 'Bundesland/:id', component: DetailsComponent },
  { path: "*", redirectTo: "Bundesländer", },
  { path: "**", redirectTo: "Bundesländer", },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
