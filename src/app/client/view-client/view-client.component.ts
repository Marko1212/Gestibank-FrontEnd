import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { CompteService } from "../../compte/compte.service";

@Component({
  selector: "app-view-client",
  templateUrl: "./view-client.component.html",
  styleUrls: ["./view-client.component.css"],
})
export class ViewClientComponent implements OnInit {
  client: any;
  balance: any;
  constructor(
    private clientService: ClientService,
    private compteService: CompteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    const userID = localStorage.getItem("idUserAccount");
    this.clientService.getClientById(id, userID).subscribe((response) => {
      console.log(response);
      this.client = response;
    });
    this.compteService.getBalance(id).subscribe((response) => {
      this.balance = JSON.parse(JSON.stringify(response)).body;
    });
  }
}
