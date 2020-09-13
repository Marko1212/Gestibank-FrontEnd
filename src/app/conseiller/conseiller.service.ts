import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ConseillerService {
  apiUrl = "http://localhost:8080/";
  //apiUrl = "http://192.168.1.80:8080/";
  constructor(private httpConseiller: HttpClient) {}

  getConseiller(filter = "") {
    return this.httpConseiller.get(
      this.apiUrl + "admin/getAllAgents?filter=" + filter
    );
  }

  getConseillerById(id) {
    return this.httpConseiller.get(
      this.apiUrl + "userAccount/getAccount/" + id
    );
  }

  createCompte(compte) {
    return this.httpConseiller.post(
      "http://localhost:8080/client/compte",
      compte
    );
  }

  findCompte(id: number) {
    return this.httpConseiller.get(
      "http://localhost:8080/client/" + id + "/compte"
    );
  }

  deleteConseiller(id) {
    return this.httpConseiller.delete(this.apiUrl + "admin/deleteAgent/" + id, {
      responseType: "text",
    });
  }

  updateConseiller(conseiller, idUserAccount) {
    console.log(conseiller);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpConseiller.put(
      this.apiUrl + "admin/updateAgent/" + idUserAccount,
      conseiller,
      { headers: httpHedears, responseType: "text" }
    );
  }

  //demandeOuvertureCompte(clientp: ClientPotentiel){
  //  return this.httpClient.post<DemandeOuverture>('http://localhost:8080/client/compte/demandeOuverture',clientp);
  //}

  modificationDecouvert(montant: number, id: number) {
    return this.httpConseiller.post(
      "http://localhost:8080/conseiller/compte/" +
        id +
        "/modificationDecouvert",
      montant
    );
  }
}
