import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

//import { UserService } from "../user.service";
//import { User } from "../user";
import { CompteService } from "./compte.service";

@Component({
  selector: "app-compte",
  templateUrl: "./compte.component.html",
  styleUrls: ["./compte.component.css"],
})
export class CompteComponent implements OnInit {
  comptes: any;
  username: any;
  clientId: any;
  solde: any;

  constructor(
    private route: ActivatedRoute,
    private compteService: CompteService
  ) {
    this.username = localStorage.getItem("username");
  }

  ngOnInit() {
    this.clientId = this.route.snapshot.params.id;
    this.compteService
      .getComptesByIdClient(this.clientId)
      .subscribe((compt) => {
        this.comptes = compt;
        console.log(this.comptes);
        for (let compta of this.comptes) {
          console.log(compta.idBankAccount);
          this.compteService
            .getBalance(compta.idBankAccount)
            .subscribe((balance) => {
              compta.balance = JSON.parse(JSON.stringify(balance)).body;
              this.solde = this.convertString(compta.balance);
            });
        }
      });
  }
  getComptes(id) {
    this.compteService.getComptesByIdClient(id);
  }
  convertString(value) {
    return parseFloat(value).toFixed(2);
  }
}
