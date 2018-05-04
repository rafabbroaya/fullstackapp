import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ItemsService} from '../items.service';
import {Item} from '../item.model';

@Component({
  selector: 'app-item-show',
  templateUrl: './item-show.component.html',
  styleUrls: ['./item-show.component.css'],
  providers: [ItemsService]
})
export class ItemShowComponent implements OnInit {

  id: number;
  item: Item;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.itemsService.getItem(this.id).subscribe((item: Item) => {
        this.item = item;
      });
    })
  }


}
