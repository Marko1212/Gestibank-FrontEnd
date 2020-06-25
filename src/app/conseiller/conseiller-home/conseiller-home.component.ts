import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../login/login.service";

@Component({
  selector: "app-conseiller-home",
  templateUrl: "./conseiller-home.component.html",
  styleUrls: ["./conseiller-home.component.css"],
})
export class ConseillerHomeComponent implements OnInit {
  //constructor(private user: LoginService) {}
  constructor(private login: LoginService) {}
  ngOnInit() {}
}
