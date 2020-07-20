import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "../conseiller.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Conseiller } from "../create-conseiller/conseiller";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-edit-conseiller",
  templateUrl: "./edit-conseiller.component.html",
  styleUrls: ["./edit-conseiller.component.css"],
})
export class EditConseillerComponent implements OnInit {
  form: FormGroup;
  conseiller: any;
  message: string;

  constructor(
    private conseillerService: ConseillerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.conseillerService
      .getConseillerById(this.route.snapshot.params.id)
      .subscribe((response) => (this.conseiller = response));
    console.log(this.conseiller + "######");
  }

  updateConseiller(form) {
    console.log(this.conseiller);
    this.conseillerService
      .updateConseiller(this.conseiller, this.conseiller.idUserAccount)
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
}
