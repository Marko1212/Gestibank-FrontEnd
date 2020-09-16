import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  apiUrl = "http://localhost:8080/";
  //apiUrl = "http://192.168.1.80:8080/";

  //da bi se 'gadjao' back end sa brauzera u mobilnom klijentu
  //ovde je potrebano staviti : apiUrl = "http://192.168.1.80:8080/"
  //tada ce biti moguce prikljucivati se na back end (Spring Boot aplikacija) - i sa brauzera u
  //laptopu i sa brauzera u mobilnom telefonu.
  //ukoliko stavim apiUrl = "http://localhost:8080/" , onda cu moci
  //da se povezujem na back end samo sa brauzera u laptopu (ne i iz brauzera u mobilnom telefonu)
  //192.168.1.80 ovde (iznad) je IP v4 adresa kompjutera na kome ranuje back end aplikacija
  //8080 je port na kome ranuje ta back end aplikacija

  //u brauzeru mobilnog telefona treba upisati url : http://192.168.1.80:4200/
  //time se 'gadja' sa mobilnog brauzera front-end, koji se izvrsava na laptopu (IP v4 adresa laptopa je :
  //192.168.1.80 , a port na kome radi front end aplikacija je : 4200 ). 

  //najzad, jos jedna bitna stvar : da bi mobilni telefon mogao da se prikljuci na front end angular aplikaciju
  //koja se izvrsava u laptopu, potrebno je na laptopu ranovati
  //tu angular aplikaciju sa koriscenjem sledece komande: ng serve --host 0.0.0.0
  //mobilni telefon treba da bude povezan na internet preko iste wi fi mreze kao i laptop

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
