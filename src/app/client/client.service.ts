import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
  getClientById(id) {
    return this.httpClient.get(this.apiUrl + "afficherClient/" + id);
  }
}
