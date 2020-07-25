import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Operation } from "./operation";

@Injectable({
  providedIn: "root",
})
export class OperationService {
  operation: Operation;
  apiUrl = "http://localhost:8080/";
  constructor(private httOperation: HttpClient) {}

  makeTransaction(operationS) {
    console.log(operationS);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httOperation.post(
      this.apiUrl + "transaction/makeTransaction",
      operationS,
      { headers: httpHedears, responseType: "text" }
    );
  }

  setOperation(operationS) {
    this.operation = operationS;
  }

  getTransactionTypes() {
    return this.httOperation.get(
      this.apiUrl + "transaction/getTransactionTypes"
    );
  }
}
