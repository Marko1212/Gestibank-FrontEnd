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
  clientPot: any;
  actions: any = ["processLater", "accept", "reject"];
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
        for (this.clientPot of this.listClientPotentiel) {
          this.clientPot.action = "";
        }
        console.log(this.listClientPotentiel);
      });
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/conseiller/demandesOuvertures"]);
  }

  process(form) {
    console.log(this.listClientPotentiel);
    for (let checkedPerson of this.listClientPotentiel) {
      if (checkedPerson.action === "accept") {
        checkedPerson.valid = true;
        let tmpCli = new Client(
          checkedPerson.idClient,
          checkedPerson.idRequest,
          checkedPerson.valid,
          parseInt(localStorage.getItem("idUserAccount"))
        );
        this.listOfCheckedClients.push(tmpCli);
      }
      if (checkedPerson.action === "reject") {
        checkedPerson.valid = false;
        let tmpCli = new Client(
          checkedPerson.idClient,
          checkedPerson.idRequest,
          checkedPerson.valid,
          parseInt(localStorage.getItem("idUserAccount"))
        );
        this.listOfCheckedClients.push(tmpCli);
      }
    }
    console.log("list -> ", this.listOfCheckedClients);
    this.demandeService
      .process(this.listOfCheckedClients)
      .subscribe((result) => {
        console.log(result);
        this.reloadComponent();
        //form.reset();
      });
  }
}
