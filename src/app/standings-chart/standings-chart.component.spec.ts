import { async, ComponentFixture, TestBed, fakeAsync, inject} from '@angular/core/testing';
import {HttpClientTestingModule } from '@angular/common/http/testing';
import { StandingsChartComponent } from './standings-chart.component';
import { StandingsService } from '../services/standings.service';
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
            }, 'indexOld': 1,
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

describe('StandingsChartComponent', () => {
  let component: StandingsChartComponent;
  let fixture: ComponentFixture<StandingsChartComponent>;
  let service: FakeStandingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ StandingsChartComponent ],
      providers: [{provide: StandingsService, useClass: FakeStandingsService}],
    })
    .compileComponents();
  }));

  beforeEach(inject([StandingsService], (_service) => {
    service = _service;
    fixture = TestBed.createComponent(StandingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call standingsService.get() in ngOnInit', async(() => {
      const chartComponent = fixture.componentInstance;
      spyOn(service, 'get').and.returnValue(Observable.of(data));
      chartComponent.ngOnInit();
      expect(service.get).toHaveBeenCalled();
    }));

  it('Should render team name: `Kashima Antlers`', async(() => {
    const team = 'Kashima Antlers';
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain(team);
  }));

  it('Should render points `46`', async(() => {
    const points = '46';
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p:nth-child(2)').textContent).toContain(points);
  }));
});
