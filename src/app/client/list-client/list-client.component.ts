import { Component, OnInit } from "@angular/core";
import { ClientService } from "../client.service";
import { CompteService } from "src/app/compte/compte.service";
import { Client } from "../create-client/client";

@Component({
  selector: "app-list-client",
  templateUrl: "./list-client.component.html",
  styleUrls: ["./list-client.component.css"],
})
export class ListClientComponent implements OnInit {
  clientList: any;
  compteList: any[] = [];
  client: Client;
  constructor(
    private clientService: ClientService,
    private compteService: CompteService
  ) {
    //this.client = new Client();
  }
  ngOnInit() {
    this.clientService.getListClient().subscribe((list) => {
      console.log("list ", list);
      this.clientList = list;
      for (this.client of this.clientList) {
        this.compteService
          .getComptesByIdClient(this.client.idClient)
          .subscribe((response) => this.compteList.push(response));
      }
      console.log(this.compteList);
    });
  }
}
