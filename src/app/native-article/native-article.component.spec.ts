import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NativeArticleComponent } from './native-article.component';
import { ResourceService } from '../resource.service';

const item = {
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
};

describe('NativeArticleComponent', () => {
  let component: NativeArticleComponent;
  let fixture: ComponentFixture<NativeArticleComponent>;
  let service: ResourceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeArticleComponent ],
      providers: [ResourceService]
    })
    .compileComponents();
  }));

  beforeEach(inject([ResourceService], (_service) => {
    service = _service;
    fixture = TestBed.createComponent(NativeArticleComponent);
    component = fixture.debugElement.componentInstance;
    component.item = item;
    fixture.detectChanges();
  }));

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));
});
