import { Component, OnInit } from "@angular/core";
import { CreateConseillerService } from "./create-conseiller.service";
import { Conseiller } from "./conseiller";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-conseiller",
  templateUrl: "./create-conseiller.component.html",
  styleUrls: ["./create-conseiller.component.css"],
})
export class CreateConseillerComponent implements OnInit {
  //adresse: any;
  conseiller: any;
  message: string;

  constructor(
    private conseillerCreateService: CreateConseillerService,
    private router: Router
  ) {
    //this.adresse = new Address();
    this.conseiller = new Conseiller(
      null,
      "",
      "",
      "",
      "",
      "",
      // null,
      "",
      null,
      "",
      "",
      "",
      "",
      "",
      null,
      null
    );
  }

  ngOnInit() {}
  msg(e) {
    this.message = e;
    window.setTimeout(() => {
      this.message = null;
    }, 3000);
  }
  createConseiller(form) {
    console.log(this.conseiller);
    this.conseillerCreateService
      .createConseiller(this.conseiller)
      .subscribe((result) => {
        console.log(result);
        this.message = "Le conseiller a bien été enregistré";
        window.setTimeout(() => {
          this.message = null;
          form.reset();
          let link = ["/admin/conseillers"];
          this.router.navigate(link);
        }, 3000);
      });
  }

  /*   onSubmit(): void {
    console.log("Submit form !");
    let link = ["/admin/conseillers"];
    this.router.navigate(link);
  } */
}
