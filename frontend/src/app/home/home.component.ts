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
    http.get('token').subscribe(data => {
      const token = data['token'];
      http.get('http://localhost:8181/api/items', {headers: new HttpHeaders().set('X-Auth-Token', token)}).subscribe((data: { 'id': '', 'content': '' }) => this.greeting = data);
    });
  }

  authenticated() {
    return this.appService.authenticated;
  }
}
