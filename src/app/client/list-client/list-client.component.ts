import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";
import { CompteService } from "../../compte/compte.service";
import { Client } from "../create-client/client";

@Component({
  selector: "app-list-client",
  templateUrl: "./list-client.component.html",
  styleUrls: ["./list-client.component.css"],
})
export class ListClientComponent implements OnInit {
  clientList: any;
  message: string;
  //compteList: any[] = [];
  //client: Client;
  constructor(
    private clientService: ClientService //private compteService: CompteService
  ) {
    //this.client = new Client();
  }
  ngOnInit() {
    this.clientService
      .getListClient(localStorage.getItem("idUserAccount"))
      .subscribe((list) => {
        console.log("list ", list);
        this.clientList = list;
        /*       for (this.client of this.clientList) {
        this.compteService
          .getComptesByIdClient(this.client.idClient)
          .subscribe((response) => this.compteList.push(response));
      }
      console.log(this.compteList); */
      });
  }

  deactivate(compte) {
    let userID = localStorage.getItem("idUserAccount");
    this.clientService
      .deactivateBankAccount(compte.idBankAccount, userID)
      .subscribe((response) => {
        console.log(response);
        this.message = "Le compte a bien été désactivé!";
        window.setTimeout(() => {
          this.message = null;
        }, 3000);
        let index = this.clientList.indexOf(compte, 0);
        if (index > -1) {
          this.clientList.splice(index, 1);
        }
      });
  }
}
