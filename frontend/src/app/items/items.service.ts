import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../constants';
import {Subject} from 'rxjs/Subject';
import {PageableDto} from '../shared/pageable.dto';
import {Item} from './item.model';

@Injectable()
export class ItemsService {
  itemsChanged = new Subject<PageableDto<Item>>();
  private items: PageableDto<Item>;

  constructor(private http: HttpClient) {
  }


  getToken(): Observable<any> {
    return this.http.get('api/token');
  }

  getItems(token: string) {
    this.http.get(Constants.INVENTORY_ITEMS, {headers: new HttpHeaders().set('X-Auth-Token', token)})
    .subscribe(items => {
      this.items = <PageableDto<Item>>items;
      this.itemsChanged.next(this.items);
    });
  }
}
