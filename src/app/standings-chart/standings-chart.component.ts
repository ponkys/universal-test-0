import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StandingsService } from '../services/standings.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { Standings,  } from '../models/standings';

@Component({
  selector: 'app-standings-chart',
  templateUrl: './standings-chart.component.html',
  styleUrls: ['./standings-chart.component.css']
})
export class StandingsChartComponent implements OnInit {
  @ViewChild('rowTitle') rowTitle: ElementRef;

  // standings data
  standings: Standings[];

  constructor(
    private standingsService: StandingsService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('OneFootbal Standings');
    meta.updateTag({
        name: 'keywords', content: 'Standings, test!'
    });
    meta.updateTag({
        name: 'description', content: 'OneFootball standings data!'
      },
    );
  }

  ngOnInit() {
    this.standingsService.get()
      .subscribe(
        res => {
          let data: Standings[];
          data = res['groups'][0]['ranking'];
          // sort teams by highest points
          this.standings = data.sort((a, b) => {
            const first = a.team.teamstats.points;
            const second = b.team.teamstats.points;
            return (first > second) ? -1 : (first > second) ? 1 : 0;
          });
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
