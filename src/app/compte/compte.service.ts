import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CompteService {
  apiUrl = "http://localhost:8080/";
  constructor(private httpCompte: HttpClient) {}

  getComptesByIdClient(id) {
    return this.httpCompte.get(
      this.apiUrl + "bankAccount/getBankAccounts/" + id
    );
  }

  getBankRules() {
    return this.httpCompte.get(this.apiUrl + "bankAccount/getBankRules");
  }

  getBalance(bankAccountId) {
    const req = new HttpRequest(
      "GET",
      `${this.apiUrl}transaction/getBalanceForBankAccountId?bankAccountId=${bankAccountId}`,
      {
        responseType: "text",
      }
    );

    return this.httpCompte.request(req);
  }

  getBankAccountTypes() {
    return this.httpCompte.get(this.apiUrl + "bankAccount/getBankAccountTypes");
  }

  modifyBankAccount(accountUpdated, agentID) {
    console.log(accountUpdated);
    console.log(agentID);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpCompte.put(
      this.apiUrl + "bankAccount/modifyBankAccount/" + agentID,
      accountUpdated,
      { headers: httpHedears, responseType: "text" }
    );
  }
}
