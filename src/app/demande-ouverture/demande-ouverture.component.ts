import { Component, OnInit, Input } from "@angular/core";
import { DemandesOuverturesService } from "./demandes-ouvertures.service";
import { ConseillerService } from "../conseiller/conseiller.service";
//import { Conseiller } from "../conseiller/create-conseiller/conseiller";
import { DemandeOuverture } from "./demande-ouverture";
import { Router } from "@angular/router";

@Component({
  selector: "app-demande-ouverture",
  templateUrl: "./demande-ouverture.component.html",
  styleUrls: ["./demande-ouverture.component.css"],
})
export class DemandeOuvertureComponent implements OnInit {
  listDemandeOuverture: any;
  listDemandeOuvertureAffecte: DemandeOuverture[] = [];
  listConseillers: any;
  conseillerId: number;
  demande: DemandeOuverture;

  constructor(
    private demandeOuvertureService: DemandesOuverturesService,
    private conseillerService: ConseillerService,
    private router: Router
  ) {
    this.demande = new DemandeOuverture(null, false, "", "", "", "", "");
  }

  ngOnInit() {
    this.demandeOuvertureService
      .getDemandesOuvertures()
      .subscribe((demandes) => {
        this.listDemandeOuverture = demandes;
        console.log(demandes);
      });
    this.conseillerService.getConseiller().subscribe((conseillers) => {
      this.listConseillers = conseillers;
      console.log(conseillers);
    });
  }
  onChange(value) {
    this.conseillerId = value;
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/admin/demandesOuvertures"]);
  }
  affectation(form) {
    console.log(this.listDemandeOuverture);
    for (this.demande of this.listDemandeOuverture) {
      if (this.demande.checked) {
        this.listDemandeOuvertureAffecte.push(this.demande);
        console.log(this.listDemandeOuvertureAffecte);
      }
    }
    this.demandeOuvertureService
      .affectation(this.listDemandeOuvertureAffecte, this.conseillerId)
      .subscribe((result) => {
        console.log(result);
        // form.reset();
        this.reloadComponent();
      });
  }
}
