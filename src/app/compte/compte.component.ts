import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserService } from "../user.service";
import { User } from "../user";
import { CompteService } from "./compte.service";

@Component({
  selector: "app-compte",
  templateUrl: "./compte.component.html",
  styleUrls: ["./compte.component.css"],
})
export class CompteComponent implements OnInit {
  comptes: any;
  username: any;
  solde: any;
  constructor(
    private route: ActivatedRoute,
    private compteService: CompteService
  ) {
    this.username = localStorage.getItem("username");
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.compteService.getComptesByIdClient(params.id).subscribe((compt) => {
        this.comptes = JSON.parse(JSON.stringify(compt));
        console.log(this.comptes);
      });
    });
  }
  getComptes(id) {
    this.compteService.getComptesByIdClient(id);
  }
}
