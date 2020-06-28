import { Component, OnInit } from "@angular/core";
import { DemandesOuverturesService } from "../demande-ouverture/demandes-ouvertures.service";
import { Client } from "../client/create-client/client";

@Component({
  selector: "app-demande-ouverture-assigne",
  templateUrl: "./demande-ouverture-assigne.component.html",
  styleUrls: ["./demande-ouverture-assigne.component.css"],
})
export class DemandeOuvertureAssigneComponent implements OnInit {
  listClientPotentiel: any;
  client: Client;
  // listclientAccepte: any[] = [];
  constructor(private demandeService: DemandesOuverturesService) {}

  ngOnInit() {
    const conseillerId = localStorage.getItem("idUserAccount");
    console.log(conseillerId);
    this.demandeService
      .getDemandeOuvertureConseiller(conseillerId)
      .subscribe((result) => {
        this.listClientPotentiel = result;
        console.log(result);
      });
  }
  accept(form) {
    console.log(this.listClientPotentiel);
    for (this.client of this.listClientPotentiel) {
      if (this.client.valide) {
        debugger;
        this.demandeService.assigne(this.client).subscribe((result) => {
          console.log(result);
          form.reset();
        });
      }
    }
  }
}
