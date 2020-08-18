import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthServiceService } from "../auth/auth-service.service";
import { LoginService } from "./login.service";
import { Login } from "./login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userLogin: Login;
  userReturn: any;
  message: string = "You are disconnected. (admin/admin)";

  constructor(
    private auth: AuthServiceService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.userLogin = new Login("", "");
  }
  ngOnInit() {}

  login() {
    this.message = "Connection attempt in progress...";
    this.auth.login(this.userLogin);
    this.setMessage();
  }
  logOut() {
    this.auth.logout();
    this.setMessage();
  }

  goToForgotPasswordPage() {
    let link = ["/forgotPassword"];
    this.router.navigate(link);
  }
  setMessage() {
    if (this.message === "You are connected.") {
      this.message = "You are disconnected. (admin/admin)";
    } else {
      this.message =
        this.auth.isLoggedIn === true
          ? "You are connected."
          : "Login and/or password are incorrect.";
    }
  }
}
