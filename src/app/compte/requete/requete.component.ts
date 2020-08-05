import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-requete",
  templateUrl: "./requete.component.html",
  styleUrls: ["./requete.component.css"],
})
export class RequeteComponent implements OnInit {
  titlesOfRequests: any;
  message: string;
  indexOfRequest: number;
  descriptionOfRequest: string;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clientService.getRequetes().subscribe((requete) => {
      this.titlesOfRequests = requete;
      console.log(this.titlesOfRequests);
    });
  }

  onChangeTitleOfRequest(value) {
    this.indexOfRequest = parseInt(value);
  }

  onChangeDescriptionOfRequest(value) {
    this.descriptionOfRequest = value;
  }

  submitRequestToAgent(form) {
    let clientID = parseInt(localStorage.getItem("idUserAccount"));
    let requestTitle = this.titlesOfRequests[this.indexOfRequest];
    let descriptionRequest = this.descriptionOfRequest;
    console.log(clientID);
    console.log(this.indexOfRequest);
    console.log(requestTitle);
    console.log(descriptionRequest);
    let requestToAgent = {
      loggedInUserId: clientID,
      description: descriptionRequest,
      title: requestTitle,
    };
    this.clientService
      .createCustomRequestForAgent(requestToAgent)
      .subscribe((result) => {
        console.log(result);
        this.message = JSON.parse(result).message;
        window.setTimeout(() => {
          this.message = null;
          form.reset();
          let link = ["client/" + clientID + "/comptes"];
          this.router.navigate(link);
        }, 3000);
      });
  }
}
