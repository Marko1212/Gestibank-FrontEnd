import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { DemandeOuvertureCompte } from "./demande-ouverture-compte";
import { format } from "util";

@Injectable({
  providedIn: "root",
})
export class DemandeOuvertureCompteService {
  message = "";
  apiUrl = "http://localhost:8080/";
  constructor(private httpDemandeOuvertureCompte: HttpClient) {}

  newDemandeOuvertureCompte(demande: DemandeOuvertureCompte) {
    console.log("Demande :  ", demande);
    var idDocument =
      demande.idDocument && demande.idDocument.length
        ? demande.idDocument[0]
        : null;
    var proofHome =
      demande.proofHome && demande.proofHome.length
        ? demande.proofHome[0]
        : null;
    var proofSalary =
      demande.proofSalary && demande.proofSalary.length
        ? demande.proofSalary[0]
        : null;

    let formData = new FormData();
    formData.append("idDocument", idDocument);
    formData.append("proofHome", proofHome);
    formData.append("proofSalary", proofSalary);
    formData.append("demande", JSON.stringify(demande));

    const req = new HttpRequest(
      "POST",
      `${this.apiUrl}userAccount/createClient`,
      formData,
      {
        reportProgress: true,
        responseType: "text",
      }
    );

    return this.httpDemandeOuvertureCompte.request(req);
    //const msg = { response: "Le compte a bien été créé" };
    /*const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    return this.httpDemandeOuvertureCompte.post(
      this.apiUrl + "userAccount/createClient",
      demande,
      { headers: httpHedears, responseType: "text" }
    );*/
    // return msg;
  }

  msg(e) {
    this.message = e;
    window.setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
