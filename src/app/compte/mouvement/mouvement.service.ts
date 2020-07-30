import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CompteService } from "../compte.service";

@Injectable({
  providedIn: "root",
})
export class MouvementService {
  transaction: any;
  apiUrl = "http://localhost:8080/";
  constructor(
    private httpTransaction: HttpClient,
    private compte: CompteService
  ) {}

  getTransactionByIdCompte(id) {
    //console.log("id" +id);
    return this.httpTransaction.get(this.apiUrl + "getTransactions/" + id);
  }
  setTransactionByIdCompte(transaction) {
    this.transaction = transaction;
  }
}
