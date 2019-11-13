import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';
import { DataProvider } from '../providers/data.provider';
import { RegisterService } from './shared/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private router: Router,
    private loginService: LoginService,
    private registerService: RegisterService,
    private dataProvider: DataProvider
  ) { }

  userLogin: any = {};
  userRegister: any = {};
  confirmPassword = '';

  ngOnInit() {
    this.dataProvider.loginTabActive = 'login';
  }

  toMyDashboard() {
    this.router.navigate(['/mydashboard']);
  }

  tabLogin() {
    console.log('tab login');
    this.dataProvider.loginTabActive = 'login';
  }
  tabRegister() {
    console.log('tab register');
    this.dataProvider.loginTabActive = 'register';
  }
  login() {
    console.log(this.userLogin);
    if (this.userLogin) {
      if (this.userLogin.nick && this.userLogin.password) {
        this.loginService.login(this.userLogin).subscribe(response => {
          console.log(response);
        }, err => {
          console.log(err);
        });
      } else {
        console.log('Formulário incompleto');
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
    console.log(this.userRegister);
    if (this.userRegister) {
      if (this.validatorRegisterForm()) {
        this.registerService.register(this.userRegister).subscribe(response => {
          console.log(response);
        }, err => {
          console.log(err);
        });

      } else {
        console.log('formulário errado');
      }
    }
  }
}
