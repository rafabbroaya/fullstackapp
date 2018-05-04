import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ItemsService} from '../items.service';
import {Item} from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemsService]
})
export class ItemEditComponent implements OnInit, OnChanges {

  image: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes")
    console.log(changes)
  }

  constructor(private appService: AppService, private itemsService: ItemsService, private router: Router) {
  }

  ngOnInit() {
    console.log("on init")
    if (!this.isAuthenticated()) {
      // this.router.navigateByUrl("/login");
    }
  }

  isAuthenticated() {
    return this.appService.authenticated;
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const item = new Item(null, value.sellingPrice, value.description, this.image);

    this.itemsService.getToken().subscribe(token => {
      this.itemsService.addItem(token['token'], item).subscribe(item => {
        console.log(item);
      }, error => {
        console.log(error);
      });
    })
  }

  onPicked(input: HTMLInputElement) {
    const file: File = input.files[0];
    var reader: FileReader = new FileReader();
    if (file) {
      reader.onloadend = (e) => {
        this.image = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }

}
