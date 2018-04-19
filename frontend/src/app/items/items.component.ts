import {Component, OnInit} from '@angular/core';
import {ItemsService} from './items.service';
import {Subscription} from 'rxjs/Subscription';
import {PageableDto} from '../shared/pageable.dto';
import {Item} from './item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  subscription: Subscription;
  items: PageableDto<Item>;
  token: string;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.subscription = this.itemsService.itemsChanged.subscribe(
      (items: PageableDto<Item>) => {
        this.items = items;
      }
    );
    this.itemsService.getToken().subscribe(token => {
      this.itemsService.getItems(token['token']);
    });
  }

  getItems(): Item[] {
    if (this.items === undefined) {
      return new Array<Item>();
    }
    return this.items.content;
  }

}
