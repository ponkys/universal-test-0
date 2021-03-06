import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import { environment } from '../../environments/environment';

@Injectable()
export class FeedService {

  private url;

  constructor(private http: HttpClient) {
    this.url = environment.url + 'assets/data/17-feed.json';
  }

  get(): Observable<any> {
    return this.http.get(this.url);
  }

}
