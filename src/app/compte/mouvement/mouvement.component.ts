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
        this.listTransaction = JSON.parse(JSON.stringify(compt));
        console.log(this.listTransaction);
        this.transactionService.setTransactionByIdCompte(this.listTransaction);
      });
  }
}
