import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from '../providers/data.provider';
import { UserService } from '../login/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private dataProvider: DataProvider,
    private userService: UserService,
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    localStorage.getItem('userId') && this.getUser(localStorage.getItem('userId'));
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
  getUserName() {
    return this.dataProvider.userLoged ? (this.dataProvider.userLoged.nick ? this.dataProvider.userLoged.nick : 'Error') : 'Error';
  }
  getUser(userId: string) {
    this.userService.getUserById(userId).subscribe((user: any) => {
      if (user !== null) {
        this.dataProvider.userLoged = user;
      } else {
        alert('Ops! Erro ao carregar dados do usuário!');
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }, error => {
      console.log(error);
      alert('Ops! Erro ao carregar dados do usuário!');
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
  toMyDashboard() {
    this.router.navigate(['/mydashboard']);
  }

}
