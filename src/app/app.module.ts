import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ApiService,AuthService,AuthGuard,
  { provide :HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
