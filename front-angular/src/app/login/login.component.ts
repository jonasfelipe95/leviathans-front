import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from '../providers/data.provider';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: any = {};
  userRegister: any = {};
  confirmPassword;
  spinner = false;

  constructor(
    private router: Router,
    private userService: UserService,
    public dataProvider: DataProvider
  ) { }

  ngOnInit() {
    this.dataProvider.loginTabActive = 'login';
    // tslint:disable-next-line:no-unused-expression
    localStorage.getItem('userId') && this.router.navigate(['/mydashboard']);
  }

  toMyDashboard() {
    this.router.navigate(['/mydashboard']);
  }

  tabLogin() {
    this.dataProvider.loginTabActive = 'login';
  }
  tabRegister() {
    this.dataProvider.loginTabActive = 'register';
  }
  login() {
    if (this.userLogin) {
      if (this.userLogin.nick && this.userLogin.password) {
        this.spinner = true;
        this.userService.login(this.userLogin).subscribe((user: any) => {
          if (user !== null) {
            this.dataProvider.userLoged = user;
            localStorage.setItem('userId', user.id);
            this.spinner = false;
            this.router.navigate(['/mydashboard']);
          } else {
            this.spinner = false;
            alert('Ops! Algo deu errado, confira seus dados e tente novamente!');
          }
        }, error => {
          console.log(error);
          this.spinner = false;
          alert('Ops! Algo deu errado, confira seus dados e tente novamente!');
        });
      }
    }
  }
  validatorRegisterForm() {
    let formValid = true;
    if (!this.userRegister.firstName) {
      formValid = false;
    }
    if (!this.userRegister.lastName) {
      formValid = false;
    }
    if (!this.userRegister.emailAdress) {
      formValid = false;
    }
    if (!this.userRegister.nick) {
      formValid = false;
    }
    if (!this.userRegister.password) {
      formValid = false;
    }
    if (!this.confirmPassword) {
      formValid = false;
    }
    if (this.userRegister.password !== this.confirmPassword) {
      formValid = false;
    }
    return formValid;
  }
  register() {
    if (this.userRegister) {
      if (this.validatorRegisterForm()) {
        this.spinner = true;
        console.log(this.userRegister);
        this.userService.register(this.userRegister).subscribe((user: any) => {
          if (user !== null) {
            this.spinner = false;
            localStorage.setItem('userId', user.id);
            this.router.navigate(['/mydashboard']);
          } else {
            this.spinner = false;
            alert('Ops! Algo deu errado, confira seus dados e tente novamente mais tarde!');
          }
        }, error => {
          console.log(error);
          this.spinner = false;
          alert('Ops! Algo deu errado, confira seus dados e tente novamente mais tarde!');

        });

      } else {
        console.log('formulário errado');
      }
    }
  }
}
