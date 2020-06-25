import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Operation } from "./operation";

@Injectable({
  providedIn: "root",
})
export class OperationService {
  operation: Operation;
  apiUrl = "http://localhost:8080/";
  constructor(private httOperation: HttpClient) {}

  sendOperation(operationS, id) {
    return this.httOperation.post(
      this.apiUrl + "client/compte/" + id + "/transaction/debit",
      operationS
    );
  }
  setOperation(operationS) {
    this.operation = operationS;
  }
}
