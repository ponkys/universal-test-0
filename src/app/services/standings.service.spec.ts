import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StandingsService } from './standings.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/rx';

class FakeStandingsService {

    get(): Observable<any> {
      return Observable.of(data);
    }
  }

  const data = {
      'groups' : [
         {
          'ranking' : [
            {
              'team': {
                'isNational': false,
                'teamstats': {
                  'lostHome': 5,
                  'yellowCards': 0,
                  'wonHome': 6,
                  'pointsAway': 28,
                  'goalsShotAway': 22,
                  'playedAway': 11,
                  'pointsHome': 18,
                  'diff': 13,
                  'played': 22,
                  'goalsShot': 36,
                  'drawn': 1,
                  'drawnHome': 0,
                  'points': 46,
                  'playedHome': 11,
                  'wonAway': 9,
                  'lostAway': 1,
                  'goalsGotAway': 12,
                  'diffHome': 3,
                  'drawnAway': 1,
                  'won': 15,
                  'redCards': 0,
                  'diffAway': 10,
                  'goalsGot': 23,
                  'topScorer': {
                    'name': '',
                    'ranking': '',
                    'stat': '',
                    'id': '',
                    'imageSrc': ''
                  },
                  'goalsGotHome': 11,
                  'goalsShotHome': 14,
                  'lost': 6
                },
                'name': 'Kashima Antlers',
                'idInternal': '1199',
                'id': ''
              },
              'indexOld': 1,
              'indexChange': '',
              'indexHome': 7,
              'type': 19,
              'type_name': 'AFC Champions League',
              'index': 1,
              'indexAway': 1
            }
          ]
        }
      ]
  };

describe('StandingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [{provide: StandingsService, useClass: FakeStandingsService}],
        imports: [HttpClientTestingModule],
    });
  });

  it('should be created', inject([StandingsService], (service: StandingsService) => {
    expect(service).toBeTruthy();
  }));

  it('should call get method', async(inject([
        StandingsService,
        HttpClient,
        HttpTestingController
    ], (service: StandingsService, http: HttpClient, httpMock: HttpTestingController) => {
    const url = 'http://localhost:4200/assets/data/17-standings.json';
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
