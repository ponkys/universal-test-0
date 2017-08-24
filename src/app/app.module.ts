import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedService } from './services/feed.service';
import { NativeArticleComponent } from './native-article/native-article.component';
import { TweetComponent } from './tweet/tweet.component';
import { ResourceService } from './resource.service';
import { StandingsService } from './services/standings.service';
import { StandingsChartComponent } from './standings-chart/standings-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    NativeArticleComponent,
    TweetComponent,
    StandingsChartComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'one'
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FeedService, ResourceService, StandingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
