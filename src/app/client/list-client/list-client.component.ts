import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";
/* import { CompteService } from "../../compte/compte.service";
import { Client } from "../create-client/client"; */
import { Router } from "@angular/router";

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
    private clientService: ClientService,
    private router: Router //private compteService: CompteService
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

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/conseiller/clients"]);
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
          let index = this.clientList.indexOf(compte, 0);
          if (index > -1) {
            this.clientList.splice(index, 1);
          }
          this.reloadComponent(); //ova komanda je potrebna da bi odmah posle klika na deactivate saving account dugme za kreiranje stednog racuna ponovo postalo aktivno
        }, 3000);
      });
  }

  //Cekovna knjiza se kreira za odredjeni racun, current ili saving, i nema ogranicenja u broju tih knjizica.
  //Posle klika na dugme, klijent dobija mejl da mu je odobren rikvest za cekovnu knjizicu za racun sa brojem tim i tim i da ce mu
  //ista biti poslata postom na kucnu adresu.
  //Proveriti da li je bank Account valid prilikom kreiranja cekovne knjizice za racun.
  //Dugme za kreiranje cekovne knjizice treba da postoji za sve tipove racuna, i current i saving.
  createChequeBookForBankAccount(compte) {
    let userID = localStorage.getItem("idUserAccount");
    this.clientService
      .createChequeBookForBankAccount(compte.idBankAccount, userID)
      .subscribe(async (response) => {
        console.log(response);
        this.message = await JSON.parse(JSON.stringify(response)).message;
        window.setTimeout(() => {
          this.message = null;
          this.reloadComponent();
        }, 3000);
      });
  }

  //TODO
  //Saving account moze da bude samo jedan za klijenta, znaci, dugme za kreiranje ce da "posivi" posle klika na dugme za
  //kreiranje saving account racuna. Proveriti da li je klijent validan prilikom kreiranja tog racuna. Dugme treba da bude "sivo" (t.j.neaktivno) jedino ako je saving account
  //racun validan. Ukoliko agent deaktivira saving account (znaci account vise nije validan), dugme treba ponovo da postane aktivno.
  //Posle klika na dugme, klijent dobija mejl da mu je odobren rikvest i da mu je kreiran saving account racun.
  //Saving account racun (ako je validan!) treba da bude vidljiv u listi racuna, sa dugmicima: Show, Deactivate i Create Cheque Book for Bank Account.
  createSavingAccountForClient(compte) {
    let loggedInAgentId = parseInt(localStorage.getItem("idUserAccount"));
    let clientId = compte.userAccountId;
    //console.log(loggedInAgentId);
    //console.log(clientId);

    let requestForCreationOfSavingAccount = {
      loggedInAgentId: loggedInAgentId,
      clientId: clientId,
    };

    this.clientService
      .createSavingAccountForClient(requestForCreationOfSavingAccount)
      .subscribe((response) => {
        console.log(response);
        this.message = JSON.parse(JSON.stringify(response)).message;
        console.log(this.message);
        window.setTimeout(() => {
          this.message = null;
          this.reloadComponent();
        }, 3000);
      });
  }
}
