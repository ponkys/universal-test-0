import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-native-article',
  templateUrl: './native-article.component.html',
  styleUrls: ['./native-article.component.css']
})
export class NativeArticleComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;

  image: string;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.image = this.resourceService.getImage(this.item.images.large);
  }

}
