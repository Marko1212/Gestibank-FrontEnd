import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { LoginService } from './login.service';
import { Login } from './login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: Login;
  userReturn: any;

  constructor(private auth: AuthServiceService, private loginService: LoginService, private route: Router) {
    this.userLogin = new Login('', '');
  }
  login() {
    this.auth.login(this.userLogin);  }
  logOut() {
    this.auth.logout();
  }
  ngOnInit() {

  }

}
