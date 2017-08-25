import { Component, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() item: Item;
  @Input() conditional = false;

}
