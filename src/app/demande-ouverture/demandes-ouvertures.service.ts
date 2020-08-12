import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DemandesOuverturesService {
  apiUrl = "http://localhost:8080/";
  constructor(private httpDemandeOuverture: HttpClient) {}

  getDemandesOuvertures() {
    return this.httpDemandeOuverture.get(
      this.apiUrl + "/admin/getInvalidClients"
    );
  }
  affectation(listDemande, idConseiller) {
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");

    return this.httpDemandeOuverture.post(
      this.apiUrl + "admin/assignClient/" + idConseiller,

      { clients: listDemande },
      { headers: httpHedears, responseType: "text" }
    );
  }

  getDemandeOuvertureConseiller(id) {
    return this.httpDemandeOuverture.get(
      this.apiUrl + "agent/getUnresolvedRequests/" + id
    );
  }

  process(list) {
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");

    return this.httpDemandeOuverture.post(
      this.apiUrl + "agent/validation",
      { processed: list },
      { headers: httpHedears, responseType: "text" }
    );
  }
}
