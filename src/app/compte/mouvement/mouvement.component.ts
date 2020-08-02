import { Component, OnInit } from "@angular/core";
import { MouvementService } from "./mouvement.service";
import { ActivatedRoute } from "@angular/router";
import { CompteService } from "../compte.service";
import { LoginService } from "./../../login/login.service";

@Component({
  selector: "app-mouvement",
  templateUrl: "./mouvement.component.html",
  styleUrls: ["./mouvement.component.css"],
})
export class MouvementComponent implements OnInit {
  listTransaction: any;
  bankAccountId: number;

  constructor(
    private login: LoginService,
    private route: ActivatedRoute,
    private transactionService: MouvementService,
    private compte: CompteService
  ) {}

  ngOnInit() {
    this.bankAccountId = parseInt(this.route.snapshot.params.id);
    console.log(this.bankAccountId);
    this.transactionService
      .getTransactionByIdCompte(this.bankAccountId)
      .subscribe((compt) => {
        this.listTransaction = compt;
        console.log(this.listTransaction);
        this.transactionService.setTransactionByIdCompte(this.listTransaction);
      });
  }

  getSolde(): number {
    let solde = 0;
    for (let i = 0; i < this.listTransaction.length; i++) {
      if (
        this.listTransaction[i].bankAccountToId === this.bankAccountId &&
        this.listTransaction[i].bankAccountFromId !== this.bankAccountId
      )
        solde += this.listTransaction[i].amount;
      else if (
        this.listTransaction[i].bankAccountFromId === this.bankAccountId &&
        this.listTransaction[i].bankAccountToId !== this.bankAccountId
      )
        solde -= this.listTransaction[i].amount;
    }
    return solde;
  }

  printPage() {
    window.print();
  }
}
