import { Component, OnInit } from "@angular/core";
//import { DemandeOuvertureCompte } from "./demande-ouverture-compte";
//import { DemandeOuvertureCompteService } from "./demande-ouverture-compte.service";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgotPassword.component.html",
  styleUrls: ["./forgotPassword.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  message: any;
  messageError: any;
  eMailForPasswordReset: string;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  returnLoginPage(form) {
    let link = ["/login"];
    this.router.navigate(link);
  }

  returnHomePage(form) {
    let link = ["/"];
    this.router.navigate(link);
  }

  submitEmail(form) {
    let request = { email: this.eMailForPasswordReset };
    console.log(request);
    this.userService.forgotPassword(request).subscribe((response) => {
      console.log(response);
      if (!response.includes("password reset link has been sent to")) {
        this.messageError = response;
      } else {
        this.message = response;
      }
      window.setTimeout(() => {
        this.message = null;
        this.messageError = null;
        this.returnHomePage(form);
      }, 3000);
    });
  }
}
