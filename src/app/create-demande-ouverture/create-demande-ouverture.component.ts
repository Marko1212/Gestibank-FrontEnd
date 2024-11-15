import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DemandeOuvertureCompte } from "./demande-ouverture-compte";
import { DemandeOuvertureCompteService } from "./demande-ouverture-compte.service";
import { Router } from "@angular/router";
import { FileValidator } from "./file-input.validator";
import { FileValueAccessor } from "./file-control-value.accessor";

@Component({
  selector: "app-create-demande-ouverture",
  templateUrl: "./create-demande-ouverture.component.html",
  styleUrls: ["./create-demande-ouverture.component.css"],
})
export class CreateDemandeOuvertureComponent implements OnInit {
  message: string;
  messageError: string;
  createCompte: DemandeOuvertureCompte;

  @ViewChild("idCard", { static: true }) idDocumentRef: ElementRef;
  @ViewChild("proofResidence", { static: true }) proofHomeRef: ElementRef;
  @ViewChild("proofIncome", { static: true }) proofSalaryRef: ElementRef;

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
      "",
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

  returnHomePage(form) {
    let link = ["/"];
    this.router.navigate(link);
  }

  createDemandeOuvertureCompte(form) {
    //console.log(this.createCompte.homeNumber);
    //console.log("ID DOCUMENT FILE", this.createCompte.idDocument);
    // upload of 3 files is mandatory to submit form!
    /*     if (
      this.idDocumentRef.nativeElement.value &&
      this.proofHomeRef.nativeElement.value &&
      this.proofSalaryRef.nativeElement.value
    ) { */
    this.demandeOuvertureCompteService
      .newDemandeOuvertureCompte(this.createCompte)
      .subscribe(
        (data) => {
          this.messageError = "";
          console.log(data); //"Success"
          this.message = "Votre demande a bien été envoyée!";
          window.setTimeout(() => {
            this.message = "";
            this.returnHomePage(form);
          }, 3000);
        },
        (error) => {
          console.log("#############");
          console.log(error);
          /*  HttpErrorResponse {headers: HttpHeaders, status: 400, statusText: "OK", url: "http://localhost:8080/userAccount/createClient", ok: false, …}
error: "Your password is not valid! Valid password must have between 6 and 8 characters, must contain at least 1 uppercase letter, at least 2 digits, at least 1 special character, and should not contain username!"
headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
message: "Http failure response for http://localhost:8080/userAccount/createClient: 400 OK"
name: "HttpErrorResponse"
ok: false
status: 400
statusText: "OK"
url: "http://localhost:8080/userAccount/createClient"
__proto__: HttpResponseBase */
          this.messageError = error.error;
     //     window.setTimeout(() => {
      //      this.messageError = "";
       //     this.returnHomePage(form);
        //  }, 3000);
        }
      );
  }
}
/* } */
