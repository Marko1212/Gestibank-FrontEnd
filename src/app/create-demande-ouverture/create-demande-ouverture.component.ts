import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DemandeOuvertureCompte } from "./demande-ouverture-compte";
import { DemandeOuvertureCompteService } from "./demande-ouverture-compte.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-demande-ouverture",
  templateUrl: "./create-demande-ouverture.component.html",
  styleUrls: ["./create-demande-ouverture.component.css"],
})
export class CreateDemandeOuvertureComponent implements OnInit {
  message: string;
  createCompte: DemandeOuvertureCompte;
  @ViewChild("idDocumentRef", { static: false }) idDocumentRef: ElementRef;
  @ViewChild("proofHomeRef", { static: false }) proofHomeRef: ElementRef;
  @ViewChild("proofSalaryRef", { static: false }) proofSalaryRef: ElementRef;

  resetFileUploader() {
    this.idDocumentRef.nativeElement.value = null;
    this.proofHomeRef.nativeElement.value = null;
    this.proofSalaryRef.nativeElement.value = null;
  }
  constructor(
    private demandeOuvertureCompteService: DemandeOuvertureCompteService,
    private router: Router
  ) {
    this.createCompte = new DemandeOuvertureCompte(
      null,
      "",
      "",
      "",
      "",
      null,
      "",
      "",
      "",
      null,
      "",
      "",
      "",
      "",
      "",
      null,
      null,
      null,
      null
    );
  }

  ngOnInit() {}

  resetForm(form) {
    form.reset();
    this.resetFileUploader();
  }

  returnHomePage() {
    let link = ["/"];
    this.router.navigate(link);
  }

  createDemandeOuvertureCompte(form) {
    console.log(this.createCompte);
    // upload of 3 files is mandatory to submit form!
    if (
      this.idDocumentRef.nativeElement.value &&
      this.proofHomeRef.nativeElement.value &&
      this.proofSalaryRef.nativeElement.value
    ) {
      this.demandeOuvertureCompteService
        .newDemandeOuvertureCompte(this.createCompte)
        .subscribe((response) => {
          this.message = "Votre demande a bien été envoyée!";
          window.setTimeout(() => {
            this.message = null;
            this.resetForm(form);
            this.returnHomePage();
          }, 3000);
        });
    }
  }
}
