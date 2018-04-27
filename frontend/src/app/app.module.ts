import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {AppService} from './app.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemsComponent} from './items/items.component';
import {ItemEditComponent} from './items/item-edit/item-edit.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'item', component: ItemEditComponent}
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ItemsComponent,
    ItemEditComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
