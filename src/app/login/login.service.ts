import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  apiUrl = "http://localhost:8080/";
  //user: any;
  //role = new Subject<string>();
  constructor(private httpClient: HttpClient) {}

  login(user) {
    const httpHedears = new HttpHeaders();
    //httpHedears.append("Access-Control-Allow-Origin", "*");
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    //httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    console.log("I am in login before submit!");
    console.log(user);
    return this.httpClient.post(this.apiUrl + "userAccount/login/", user, {
      headers: httpHedears,
    });
  }

  async setUser(user) {
    //localStorage.setItem("user", JSON.stringify(user));
    //TODO
    localStorage.setItem("idUserAccount", user.idUserAccount);
    localStorage.setItem("role", user.roleName);
    //console.log("I am in setUser loginservice " + JSON.stringify(user));
    //this.user = user;
  }

  setUsername(username) {
    localStorage.clear();
    localStorage.setItem("username", username);
  }
  getRole() {
    return localStorage.getItem("role");
  }
  getUsername() {
    return localStorage.getItem("username");
  }
  getIdUserAccount() {
    return localStorage.getItem("idUserAccount");
  }
}
