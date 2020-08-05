import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";

@Component({
  selector: "app-requeteClient",
  templateUrl: "./requeteClient.component.html",
  styleUrls: ["./requeteClient.component.css"],
})
export class RequeteClientComponent implements OnInit {
  requetesClients: any;
  agentId: any;
  username: any;

  constructor(private clientService: ClientService) {
    this.username = localStorage.getItem("username");
  }
  ngOnInit() {
    this.agentId = localStorage.getItem("idUserAccount");
    this.clientService
      .getClientsRequests(this.agentId, 1)
      .subscribe((requeteClient) => {
        this.requetesClients = JSON.parse(JSON.stringify(requeteClient)).body;
        //console.log(this.requetesClients);
      });
  }
}
