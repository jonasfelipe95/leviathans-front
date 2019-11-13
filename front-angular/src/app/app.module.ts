import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { LoginService } from './login/shared/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DataProvider } from './providers/data.provider';
import { RegisterService } from './login/shared/register.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MyDashboardComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [
    LoginService,
    RegisterService,
    DataProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
