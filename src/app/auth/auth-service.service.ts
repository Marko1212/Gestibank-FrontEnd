import { Injectable } from "@angular/core";
//import { Login } from "../login/login";
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";
//import { stringify } from "querystring";
//import { CLIENT_RENEG_LIMIT } from "tls";
@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  //roleName: string;
  //user: any;
  isLoggedIn: boolean = false;
  constructor(private loginService: LoginService, private route: Router) {}

  login(userReturn) {
    this.loginService.login(userReturn).subscribe(async (user) => {
      console.log("#####");
      console.log(userReturn);
      this.loginService.setUsername(userReturn.username);
      userReturn = user;
      console.log("I am in auth-service service");
      console.log(userReturn);
      await this.loginService.setUser(userReturn);
      switch (userReturn.roleName) {
        case "admin":
          //this.roleName = "admin";
          this.isLoggedIn = true;
          this.route.navigateByUrl("/admin");
          break;
        case "agent":
          //this.roleName = "agent";
          this.isLoggedIn = true;
          this.route.navigateByUrl("/conseiller");
          break;
        case "client":
          //this.roleName = "client";
          this.isLoggedIn = true;
          this.route.navigateByUrl("/client");
          break;
        default:
          this.route.navigateByUrl("/login");
          break;
      }
    });
  }
  isAuthenticated() {
    if (localStorage.getItem("role")) {
      const role = localStorage.getItem("role");
      switch (role) {
        case "admin":
          return "admin";
          break;
        case "client":
          return "client";
        case "agent":
          return "agent";
          break;
        default:
          return "user";
          break;
      }
    }
    return "user";
  }

  logout() {
    //console.log("I am in logout!");
    localStorage.clear();
    localStorage.setItem("role", "user");
    //this.roleName = "user";
    //localStorage.setItem("user", '{"roleName": "user"}');
    //console.log(localStorage.getItem("user"));

    /* localStorage.removeItem("user"); */
  }
}
