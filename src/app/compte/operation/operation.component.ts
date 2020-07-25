import { Component, OnInit } from "@angular/core";
import { OperationService } from "./operation.service";
import { Operation } from "./operation";
import { ActivatedRoute } from "@angular/router";

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
  constructor(
    private operationService: OperationService,
    private route: ActivatedRoute
  ) {
    this.operation = new Operation(
      "",
      null,
      new Date(),
      null,
      "",
      null,
      "",
      null
    );
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

  createPayment() {
    this.operationService
      .sendOperation(this.operation, this.id)
      .subscribe((result) => console.log(result));
  }

  onChangeTransactionType(value) {
    this.idTransactionType = parseInt(value);
    console.log(this.idTransactionType);
  }
}
