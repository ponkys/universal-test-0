import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { Item } from '../models/item';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  // Feed data
  feed: Item[];
  nativeFeed: Item[];
  twitterFeed: Item[];

  constructor(
    private feedService: FeedService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('OneFootbal Test');
    meta.addTags([
      {
        name: 'author', content: 'Diego M. Mosquera'
      },
      {
        name: 'keywords', content: 'angular universal, test, OneFootball, Web Engineer'
      },
      {
        name: 'description', content: 'OneFootball test for Web Enginneer vacancy!'
      },
    ]);
  }

  ngOnInit() {
    this.feedService.get()
      .subscribe(
        data => {
          this.feed = data['data']['items'];
          this.nativeFeed = this.feed.filter( item => item.content_type === 'native_article');
          this.twitterFeed = this.feed.filter( item => item.content_type === 'twitter');

        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );
  }

}
