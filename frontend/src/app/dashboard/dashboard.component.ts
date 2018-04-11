import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

  greeting = {'id': '', 'content': ''};

  constructor(private appService: AppService, private http: HttpClient) {
    http.get('api/token').subscribe(data => {
      const token = data['token'];
      http.get(Constants.INVENTORY_API_ENDPOINT + '/items',
        {headers: new HttpHeaders().set('X-Auth-Token', token)}).subscribe((result: { 'id': '', 'content': '' }) => this.greeting = result);
    });
  }

  isAuthenticated() {
    return this.appService.authenticated;
  }

}
