import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-changePassword",
  templateUrl: "./changePassword.component.html",
  styleUrls: ["./changePassword.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  changePassword: any;
  confirmPassword: any;
  username: any;
  message: any;
  messageWarning: any;

  constructor(private clientService: ClientService, private router: Router) {}
  ngOnInit() {
    this.message = null;
    this.messageWarning = null;
    this.confirmPassword = null;
    this.username = localStorage.getItem("username");
    this.changePassword = {
      oldPassword: "",
      newPassword: "",
      loggedInUserId: parseInt(localStorage.getItem("idUserAccount")),
    };

    /* this.agentId = localStorage.getItem("idUserAccount");
    this.clientService
      .getClientsRequests(this.agentId, 1)
      .subscribe((requeteClient) => {
        this.requetesClients = JSON.parse(JSON.stringify(requeteClient)).body;
        //console.log(this.requetesClients);
      }); */
  }

  modifyPassword(form) {
    console.log(this.changePassword);
    if (
      this.changePassword.oldPassword.toUpperCase() ===
      this.changePassword.newPassword.toUpperCase()
    ) {
      this.messageWarning =
        "New password should be different from current password! Please try again!";
      window.setTimeout(() => {
        this.messageWarning = null;
        form.reset();
      }, 3000);
    } else {
      this.clientService
        .changePassword(this.changePassword)
        .subscribe((response) => {
          this.message = "Your password has been changed!";
          window.setTimeout(() => {
            this.message = null;
            form.reset();
            let link = [
              "/client/" + this.changePassword.loggedInUserId + "/comptes",
            ];
            this.router.navigate(link);
          }, 3000);
        });
    }
  }
}
