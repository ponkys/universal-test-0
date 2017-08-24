import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedListComponent } from './feed-list/feed-list.component';
import { StandingsChartComponent } from './standings-chart/standings-chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: FeedListComponent,
  },
  {
    path: 'standings',
    component: StandingsChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
