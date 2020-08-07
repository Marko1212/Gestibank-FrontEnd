import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";
import { Router } from "@angular/router";
import { RequetesClientsService } from "./requetesClients.service";

@Component({
  selector: "app-requeteClient",
  templateUrl: "./requeteClient.component.html",
  styleUrls: ["./requeteClient.component.css"],
})
export class RequeteClientComponent implements OnInit {
  requetesClients: any;
  requete: any;

  loggedInAgentId: any;
  requestsIdList: any[] = [];

  username: any;

  constructor(
    private clientService: ClientService,
    private validationRequeteService: RequetesClientsService,
    private router: Router
  ) {
    this.username = localStorage.getItem("username");
  }
  ngOnInit() {
    this.loggedInAgentId = parseInt(localStorage.getItem("idUserAccount"));
    this.clientService
      .getClientsRequests(this.loggedInAgentId, 1)
      .subscribe((requeteClient) => {
        this.requetesClients = JSON.parse(JSON.stringify(requeteClient)).body;
        //console.log(this.requetesClients);
      });
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["/conseiller/requetes"]);
  }
  accept(form) {
    //console.log(this.requetesClients);
    for (this.requete of this.requetesClients) {
      if (this.requete.requestStatus) {
        this.requestsIdList.push(this.requete.idRequest);
      }
    }
    let requestsIdListToValidate = {
      loggedInAgentId: this.loggedInAgentId,
      requestsIdList: this.requestsIdList,
    };
    console.log(requestsIdListToValidate);
    this.validationRequeteService
      .validateRequests(requestsIdListToValidate)
      .subscribe((result) => {
        console.log(result);
        this.reloadComponent();
      });
  }
}
