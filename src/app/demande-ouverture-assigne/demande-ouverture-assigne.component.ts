import { Component, OnInit } from "@angular/core";
import { DemandesOuverturesService } from "../demande-ouverture/demandes-ouvertures.service";
import { Client } from "../client/create-client/client";
import { Router } from "@angular/router";
//import { CLIENT_RENEG_LIMIT } from "tls";

@Component({
  selector: "app-demande-ouverture-assigne",
  templateUrl: "./demande-ouverture-assigne.component.html",
  styleUrls: ["./demande-ouverture-assigne.component.css"],
})
export class DemandeOuvertureAssigneComponent implements OnInit {
  listClientPotentiel: any;
  client: Client;
  listOfCheckedClients: Client[] = [];
  message: any;
  // listclientAccepte: any[] = [];
  constructor(
    private demandeService: DemandesOuverturesService,
    private router: Router
  ) {}

  ngOnInit() {
    const conseillerId = localStorage.getItem("idUserAccount");
    console.log(conseillerId);
    this.demandeService
      .getDemandeOuvertureConseiller(conseillerId)
      .subscribe((result) => {
        this.listClientPotentiel = result;
        console.log(this.listClientPotentiel);
      });
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/conseiller/demandesOuvertures"]);
  }

  accept(form) {
    console.log(this.listClientPotentiel);
    for (this.client of this.listClientPotentiel) {
      console.log(this.client.valid);
      if (this.client.valid) {
        //debugger;
        var tmpCli = new Client(
          this.client.idClient,
          this.client.idRequest,
          this.client.valid,
          parseInt(localStorage.getItem("idUserAccount"))
        );
        this.listOfCheckedClients.push(tmpCli);
      }
    }
    console.log("list -> ", this.listOfCheckedClients);
    this.demandeService
      .assigne(this.listOfCheckedClients)
      .subscribe((result) => {
        console.log(result);
        this.reloadComponent();
        //form.reset();
      });
  }
}
