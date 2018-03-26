import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greeting = {'id': '', 'content': ''};

  constructor(private appService: AppService, private http: HttpClient) {
    http.get('api/resource').subscribe((data: { 'id': '', 'content': '' }) => this.greeting = data);
  }

  ngOnInit() {
  }

  authenticated() {
    return this.appService.authenticated;
  }
}
