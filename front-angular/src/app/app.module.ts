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
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DataProvider } from './providers/data.provider';
import { UserService } from './login/shared/user.service';
import { CharacterService } from './my-dashboard/shared/character.service';
import { FooterComponent } from './footer/footer.component';
import { RankingComponent } from './ranking/ranking.component';
import { LoaderComponent } from './loader/loader.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    MyDashboardComponent,
    FooterComponent,
    RankingComponent,
    LoaderComponent,
    CharacterDetailsComponent
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
    UserService,
    DataProvider,
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
