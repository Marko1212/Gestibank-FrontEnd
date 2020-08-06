import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";

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

  constructor(private clientService: ClientService) {}
  ngOnInit() {
    this.message = null;
    this.messageWarning = null;
    this.confirmPassword = null;
    this.username = localStorage.getItem("username");
    this.changePassword = {
      oldPass: "",
      newPass: "",
      idUserAccount: parseInt(localStorage.getItem("idUserAccount")),
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
      this.changePassword.oldPass.toUpperCase() ===
      this.changePassword.newPass.toUpperCase()
    ) {
      this.messageWarning =
        "New password should be different from current password! Please try again!";
      window.setTimeout(() => {
        this.messageWarning = null;
        form.reset();
      }, 3000);
      // upload of 3 files is mandatory to submit form!
      /* if (
      this.idDocumentRef.nativeElement.value &&
      this.proofHomeRef.nativeElement.value &&
      this.proofSalaryRef.nativeElement.value
    ) {
      this.demandeOuvertureCompteService
        .newDemandeOuvertureCompte(this.createCompte)
        .subscribe((response) => {
          this.message = "Votre demande a bien été envoyée!";
          window.setTimeout(() => {
            this.message = null;
            this.resetForm(form);
            this.returnHomePage();
          }, 3000);
        });
    } */
    } else {
      // TO FINISH!!!
    }
  }
}
