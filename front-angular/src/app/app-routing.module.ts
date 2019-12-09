import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { RankingComponent } from './ranking/ranking.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'mydashboard',
        component: MyDashboardComponent
      },
      {
        path: 'ranking',
        component: RankingComponent
      },
      {
        path: 'character/:id/details',
        component: CharacterDetailsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
