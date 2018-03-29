import {Component} from '@angular/core';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = true;

  constructor(private appService: AppService, private http: HttpClient, private router: Router) {
    this.appService.authenticate(undefined, undefined);
  }

  logout() {
    this.http.post('logout', {}).finally(() => {
      this.appService.authenticated = false;
      this.router.navigateByUrl('/login');
    }).subscribe();
  }

  isAuthenticated() {
    return this.appService.authenticated;
  }
}
