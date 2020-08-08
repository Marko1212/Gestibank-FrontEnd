import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "../conseiller.service";
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from "@angular/router";
@Component({
  selector: "app-conseiller",
  templateUrl: "./conseiller.component.html",
  styleUrls: ["./conseiller.component.css"],
})
export class ConseillerComponent implements OnInit {
  listConseillers: any;
  message: string;
  filter: string;
  //user = "";
  loadingRouteConfig: boolean;
  constructor(
    private router: Router,
    private conseillerService: ConseillerService
  ) {}

  ngOnInit() {
    this.filter = "";
    //this.user = JSON.parse(localStorage.user);
    this.conseillerService.getConseiller().subscribe((conseillers) => {
      this.listConseillers = conseillers;
      console.log(conseillers);
    });
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  filterConseiller() {
    this.conseillerService
      .getConseiller(this.filter)
      .subscribe((conseillers) => {
        this.listConseillers = conseillers;
        console.log(conseillers);
      });
  }

  delete(conseiller) {
    this.conseillerService
      .deleteConseiller(conseiller.idUserAccount)
      .subscribe((response) => {
        console.log(response);
        this.message = "Le conseiller a bien été effacé";
        window.setTimeout(() => {
          this.message = null;
          var index = this.listConseillers.indexOf(conseiller, 0);
          if (index > -1) {
            this.listConseillers.splice(index, 1);
          }
        }, 3000);
      });
  }
}
