import {Component} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  greeting = {'id': '', 'content': ''};

  constructor(private appService: AppService, private http: HttpClient) {
    http.get('api/token').subscribe(data => {
      const token = data['token'];
      http.get('http://localhost:8181/api/items',
        {headers: new HttpHeaders().set('X-Auth-Token', token)}).subscribe((result: { 'id': '', 'content': '' }) => this.greeting = result);
    });
  }

  isAuthenticated() {
    return this.appService.authenticated;
  }
}
