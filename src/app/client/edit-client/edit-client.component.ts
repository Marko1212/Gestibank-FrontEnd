import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompteService } from "../../compte/compte.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"],
})
export class EditClientComponent implements OnInit {
  form: FormGroup;
  listCompteTypes: any;
  bankRules: any;
  message: string;
  bankRuleID: number;
  bankAccountTypeID: number;

  constructor(
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);

    this.compteService.getBankAccountTypes().subscribe((response) => {
      this.listCompteTypes = response;
      console.log(JSON.stringify(this.listCompteTypes) + "########");
    });

    this.compteService.getBankRules().subscribe((response) => {
      this.bankRules = response;
      console.log(JSON.stringify(this.bankRules) + "##########");
    });
  }

  onChangeRule(value) {
    this.bankRuleID = parseInt(value);
  }

  onChangeType(value) {
    this.bankAccountTypeID = parseInt(value);
  }

  updateAccount(form) {
    let agentID = localStorage.getItem("idUserAccount");
    let bankAccountID = parseInt(this.route.snapshot.params.id);
    console.log(agentID);
    console.log(bankAccountID);
    let updatedAccount = {
      idBankAccount: bankAccountID,
      idBankAccountType: this.bankAccountTypeID,
      idBankRules: this.bankRuleID,
    };
    this.compteService
      .modifyBankAccount(updatedAccount, agentID)
      .subscribe((result) => {
        console.log(result);
        this.message = "Le compte a bien été mis à jour!";
        window.setTimeout(() => {
          this.message = null;
          form.reset();
          let link = ["/conseiller/clients"];
          this.router.navigate(link);
        }, 3000);
      });
  }
}
