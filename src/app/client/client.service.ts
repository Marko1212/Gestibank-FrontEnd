import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  apiUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {}

  getConseiller(id) {
    return this.httpClient.get(this.apiUrl + "client/" + id + "/conseiller");
  }

  getListClient(id) {
    return this.httpClient.get(
      this.apiUrl + "bankAccount/getBankAccounts/" + id
    );
  }

  getClientById(id, userID) {
    return this.httpClient.get(
      this.apiUrl + "bankAccount/getBankAccount/" + id + "/" + userID
    );
  }

  deactivateBankAccount(id, userID) {
    return this.httpClient.delete(
      this.apiUrl + "bankAccount/deactivateBankAccount/" + id + "/" + userID,
      {
        responseType: "text",
      }
    );
  }

  getNotifications(idUserAccount) {
    return this.httpClient.get(
      this.apiUrl + "notifications/getNotifications/" + idUserAccount
    );
  }

  getRequetes() {
    return this.httpClient.get(
      this.apiUrl + "bankAccount/requestTitlesForClients"
    );
  }
  createCustomRequestForAgent(requestToAgent: {
    loggedInUserId: number;
    description: string;
    title: string;
  }) {
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpClient.post(
      this.apiUrl + "bankAccount/createCustomRequestForAgent",
      requestToAgent,
      {
        headers: httpHedears,
        responseType: "text",
      }
    );
  }

  getClientsRequests(agentId, requestTypeFlag) {
    const req = new HttpRequest(
      "GET",
      `${this.apiUrl}agent/getUnresolvedRequests/${agentId}?requestTypeFlag=${requestTypeFlag}`
    );

    return this.httpClient.request(req);
  }
}
