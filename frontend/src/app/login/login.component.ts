import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''};

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.appService.authenticate(this.credentials, () => {
      this.router.navigateByUrl("/");
    });
    return false;
  }

}
