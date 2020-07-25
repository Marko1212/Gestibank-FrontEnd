import { Component, OnInit } from "@angular/core";
import { OperationService } from "./operation.service";
import { Operation } from "./operation";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-operation",
  templateUrl: "./operation.component.html",
  styleUrls: ["./operation.component.css"],
})
export class OperationComponent implements OnInit {
  operation: Operation;
  transactionTypes: any;
  idTransactionType: number;
  id: number;
  message: string;
  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.operation = new Operation(null, null, null, null, "", null, "");
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.operationService.getTransactionTypes().subscribe((response) => {
      this.transactionTypes = response;
      console.log(this.transactionTypes);
      console.log("#############");
    });
  }

  makeTransaction(form) {
    if (this.operation.transactionTypeId === 1) {
      this.operation.bankAccountToId = parseInt(this.route.snapshot.params.id);
    }
    this.operationService
      .makeTransaction(this.operation)
      .subscribe((result) => {
        console.log(result);
        this.message = "La transaction a bien été effectuée!";
        window.setTimeout(() => {
          let idUserAccount = localStorage.getItem("idUserAccount");
          this.message = "";
          form.reset();
          let link = ["client/" + idUserAccount + "/comptes"];
          this.router.navigate(link);
        }, 3000);
      });
  }

  onChangeTransactionType(value) {
    this.operation.transactionTypeId = parseInt(value);
    console.log(this.operation.transactionTypeId);
  }
}
