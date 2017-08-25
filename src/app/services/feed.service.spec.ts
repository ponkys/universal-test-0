import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController,  } from '@angular/common/http/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FeedService } from './feed.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/rx';

class FakeFeedService {
    get(): Observable<any> {
        return Observable.of(data);
    }
}

const data = {
    'status': 'ok',
    'code': 0,
    'message': '',
    'data': {
        'items': [{
        'id': '15965813',
        'feed_item_id': '15965813',
        'my_stream_item_id': '0',
        'language': 'en',
        'content_type': 'native_article',
        'type': 'news',
        'title': 'Crotone 0 AC Milan 3: Cutrone and Suso star in sizzling start',
        'teaser': 'Patrick Cutrone set down a marker to new signing Nikola Kalinic by leading',
        'content': 'Homegrown striker Patrick Cutrone stole the headlines for big-spending AC Milan',
        'html_content': '\u003cp\u003eHomegrown striker Patrick Cutrone stole the',
        'images': {
            'thumb': 'https://image-service.onefootball.com',
            'large': 'https://image-service.onefootball.com',
            'share': 'https://image-service.onefootball.com'
        },
        'video_src': null,
        'link': null,
        'item_link': 'https://cms-api.onefootball.com/en/15965813',
        'tags': null,
        'publish_time': '2017-08-20T20:51:05Z',
        'related_entities': {
            'provider': {
            'id': 17,
            'name': 'perform',
            'display_name': 'Onefootball',
            'img_src': null,
            'copyright_text': 'powered by',
            'copyright_img_src': 'https://images.onefootball.com/news_provider_logo/Goal.com_Logo_LR.png'
            },
            'author': null,
            'players': [{
            'id': 28992,
            'name': 'Suso',
            'images': [{
                'width': 150,
                'height': 180,
                'url': 'https://images.onefootball.com/default/default_player.png'
            }]
            }, {
            'id': 125537,
            'name': 'Franck Kessié',
            'images': [{
                'width': 150,
                'height': 180,
                'url': 'https://images.onefootball.com/default/default_player.png'
            }]
            }],
            'teams': [{
            'id': 23,
            'name': 'Milan',
            'images': [{
                'width': 56,
                'height': 56,
                'url': 'https://images.onefootball.com/icons/teams/56/23.png'
            }, {
                'width': 164,
                'height': 164,
                'url': 'https://images.onefootball.com/icons/teams/164/23.png'
            }]
            }, {
            'id': 723,
            'name': 'Crotone',
            'images': [{
                'width': 56,
                'height': 56,
                'url': 'https://images.onefootball.com/icons/teams/56/723.png'
            }, {
                'width': 164,
                'height': 164,
                'url': 'https://images.onefootball.com/icons/teams/164/723.png'
            }]
            }],
            'matches': null,
            'competition': [{
            'id': 13,
            'name': 'Serie A',
            'images': [{
                'width': 128,
                'height': 128,
                'url': 'https://images.onefootball.com/icons/leagueColoredCompetition/128/13.png'
            }]
            }]
        },
        'share_link': 'https://www.onefootball.com/cms/en/15965813?variable=2017-08-20T20:51:05Z',
        'related_items': null
        }]
    }
  };

describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [{provide: FeedService, useClass: FakeFeedService}],
        imports: [HttpClientTestingModule],
    });
  });

  it('should be created', inject([FeedService], (service: FeedService) => {
    expect(service).toBeTruthy();
  }));

  it('should call get method', async(inject([
        FeedService,
        HttpClient,
        HttpTestingController
    ], (service: FeedService, http: HttpClient, httpMock: HttpTestingController) => {
    const url = 'http://localhost:4200/assets/data/assets/data/17-feed.json';
    http
        .get(url)
        .subscribe(ranking => {
            return expect(ranking).toEqual(data);
        });
    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(data);
    httpMock.verify();
  })));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
