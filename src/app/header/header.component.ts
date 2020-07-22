import { Component, OnInit, Input } from "@angular/core";
import { AuthServiceService } from "../auth/auth-service.service";
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";
import { ConseillerService } from "../conseiller/conseiller.service";
import { ClientService } from "../client/client.service";
import { Conseiller } from "../conseiller/create-conseiller/conseiller";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  conseiller: any;
  //user: any;
  constructor(
    private clientService: ClientService,
    private auth: AuthServiceService,
    private login: LoginService
  ) {}
  ngOnInit() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    /*     if (this.login.getRole() === "client") {
      this.clientService
        .getConseiller(this.login.getIdUserAccount())
        .subscribe((result) => {
          this.conseiller = result;
          console.log(result);
        });
      } */
    /* if (localStorage.user) {
      this.user = JSON.parse(localStorage.user);
      console.log("I am in header ngoninit!");
      console.log(this.user);
      /* if (this.user.roleName !== "user") {
        this.clientService.getConseiller(this.user.id).subscribe((result) => {
          this.conseiller = result;
          console.log(result);
        }); 
      } 
    } else {
      localStorage.setItem("user", '{"roleName": "user"}');
    } */
    /*  console.log("I am in ngoninit header!");
    localStorage.setItem("user", '{"roleName": "user"}');
    console.log(localStorage.user); */
  }

  logout() {
    this.auth.logout();
  }
}
