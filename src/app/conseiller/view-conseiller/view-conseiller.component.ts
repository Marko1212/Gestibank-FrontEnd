import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "../conseiller.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-conseiller",
  templateUrl: "./view-conseiller.component.html",
  styleUrls: ["./view-conseiller.component.css"],
})
export class ViewConseillerComponent implements OnInit {
  conseiller: any;
  constructor(
    private conseillerService: ConseillerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.conseillerService
      .getConseillerById(this.route.snapshot.params.id)
      .subscribe((response) => {
        this.conseiller = response;
        console.log(this.conseiller);
        console.log("######");
      });
  }
}
