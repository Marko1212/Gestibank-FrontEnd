import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CompteService {
  compte: any;
  apiUrl = "http://localhost:8080/";
  constructor(private httpCompte: HttpClient) {}

  getComptesByIdClient(id) {
    return this.httpCompte.get(this.apiUrl + "client/" + id + "/compte");
  }
}
