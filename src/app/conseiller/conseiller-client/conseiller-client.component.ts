import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../client/client.service";

@Component({
  selector: "app-conseiller-client",
  templateUrl: "./conseiller-client.component.html",
  styleUrls: ["./conseiller-client.component.css"],
})
export class ConseillerClientComponent implements OnInit {
  conseiller: any;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    const idClient = localStorage.getItem("idUserAccount");
    this.clientService.getConseiller(idClient).subscribe((result) => {
      this.conseiller = result;
      console.log(result);
    });
  }
}
